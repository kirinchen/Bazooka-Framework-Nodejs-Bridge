import { Warder } from "../warder/Warder";
import { BaseReactive } from "./BaseReactive";
import { RState } from "./RState";

export class RootReactive extends BaseReactive {

    wardersMap: Map<string, Warder>;
    state:RState  = RState.Idle;

    constructor(warders: Warder[]) {
        super(null, null);
        this.setRoot(this);
        this.wardersMap = this.genWarderMap(warders);
    }

    public genWarderMap(warders: Warder[] ) {
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
        for (const value of Object.values(this.wardersMap)) {
            value.subscribe(this.onUpdate);
        }
    }

    public onUpdate(_d) {
        console.log("onUpdate a:" + this);
        this.launch();
    }

    public setState(st) {
        this.state = st;
    }


}