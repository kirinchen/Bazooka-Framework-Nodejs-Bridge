import { Warder } from "../warder/Warder";
import { BaseReactive } from "./BaseReactive";
import { RState } from "./RState";
import { WarderAction } from "../warder/WarderAction";
import { DataProvider } from "../run/Reactiver";

export class RootReactive extends BaseReactive implements WarderAction {
    _data: DataProvider;
    wardersMap: Map<string, Warder>;
    state: RState = RState.Idle;

    constructor(d: DataProvider, warders: Warder[]) {
        super(null, null);
        this._data = d;
        this.setRoot(this);
        this.wardersMap = this.genWarderMap(warders);
    }

    public genWarderMap(warders: Warder[]) {
        var wdb = new Map<string, any>();
        warders.forEach(element => {
            wdb[element.key()] = element;
        });
        return wdb;
    }

    public map(): Map<string, Warder> {
        return this.wardersMap;
    }

    public observe() {
        for (let value of this.wardersMap.values()) {
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

    get data(): DataProvider { return this._data; }


}