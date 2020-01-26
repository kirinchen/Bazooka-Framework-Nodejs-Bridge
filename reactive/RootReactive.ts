import { Warder } from "../warder/Warder";
import { BaseReactive } from "./BaseReactive";
import { RState } from "./RState";
import { WarderAction } from "../warder/WarderAction";
import { DataProvider } from "../run/DataProvider";
import { ReactiveDataProvider } from "../run/ReactiveDataProvider";


export class RootReactive extends BaseReactive implements WarderAction {
    _data: ReactiveDataProvider;
    state: RState = RState.Idle;

    constructor(d: DataProvider, warders: Warder[]) {
        super(null, null);
        this._data = new ReactiveDataProvider(d, warders);
        this.setRoot(this);
    }

    public genWarderMap(warders: Warder[]) {
        var wdb = new Map<string, any>();
        warders.forEach(element => {
            wdb[element.key()] = element;
        });
        return wdb;
    }


    public observe() {
        for (let value of this._data.map().values()) {
            value.subscribe(this);
        }
    }

    public onUpdate(_d) {
        console.log("this:" + this);
        this.launch();
    }

    public setState(st) {
        this.state = st;
    }

    get data(): ReactiveDataProvider { return this._data; }


}