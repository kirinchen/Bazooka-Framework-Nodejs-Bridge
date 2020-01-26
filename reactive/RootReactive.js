"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseReactive_1 = require("./BaseReactive");
const RState_1 = require("./RState");
const ReactiveDataProvider_1 = require("../run/ReactiveDataProvider");
class RootReactive extends BaseReactive_1.BaseReactive {
    constructor(d, warders) {
        super(null, null);
        this.state = RState_1.RState.Idle;
        this._data = new ReactiveDataProvider_1.ReactiveDataProvider(d, warders);
        this.setRoot(this);
    }
    genWarderMap(warders) {
        var wdb = new Map();
        warders.forEach(element => {
            wdb[element.key()] = element;
        });
        return wdb;
    }
    observe() {
        for (let value of this._data.map().values()) {
            value.subscribe(this);
        }
    }
    onUpdate(_d) {
        console.log("this:" + this);
        this.launch();
    }
    setState(st) {
        this.state = st;
    }
    get data() { return this._data; }
}
exports.RootReactive = RootReactive;
//# sourceMappingURL=RootReactive.js.map