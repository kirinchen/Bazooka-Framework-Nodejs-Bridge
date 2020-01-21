
class RootReactive extends BaseReactive {

    wardersMap: Map<string, Warder>;
    state:RState  = RState.Idle;

    constructor(warders) {
        super(null, null);
        this.setRoot(this);
        this.wardersMap = this.genWarderMap(warders);
    }

    genWarderMap(warders: Warder[] ) {
        var wdb = new Map<string, any>();
        warders.forEach(element => {
            wdb[element.key()] = element;
        });
        return wdb;
    }

    map(): Map<string, Warder> {
        return this.wardersMap;
    }

    observe() {
        for (const value of Object.values(this.wardersMap)) {
            value.subscribe(this._onUpdate);
        }
    }

    _onUpdate(_d) {
        this.launch();
    }

    setState(st) {
        this.state = st;
    }


}