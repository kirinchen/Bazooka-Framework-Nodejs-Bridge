"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RootReactive_1 = require("../reactive/RootReactive");
class ReactiveGener {
    constructor(bdp) {
        this.baseData = bdp;
    }
    observe(ws) {
        let rr = new RootReactive_1.RootReactive(this.baseData, ws);
        return rr;
    }
}
exports.ReactiveGener = ReactiveGener;
//# sourceMappingURL=ReactiveGener.js.map