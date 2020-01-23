"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseReactive_1 = require("./BaseReactive");
const RState_1 = require("./RState");
class RootReactive extends BaseReactive_1.BaseReactive {
    constructor(warders) {
        super(null, null);
        this.state = RState_1.RState.Idle;
        this.setRoot(this);
        this.wardersMap = this.genWarderMap(warders);
    }
    genWarderMap(warders) {
        var wdb = new Map();
        warders.forEach(element => {
            wdb[element.key()] = element;
        });
        return wdb;
    }
    map() {
        return this.wardersMap;
    }
    observe() {
        for (let value of this.wardersMap.values()) {
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
}
exports.RootReactive = RootReactive;
//# sourceMappingURL=RootReactive.js.map