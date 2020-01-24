"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RootReactive_1 = require("../reactive/RootReactive");
class Reactiver {
    constructor(c) {
        this.config = c;
    }
    getConfig() {
        return this.config;
    }
    observe(ws) {
        let rr = new RootReactive_1.RootReactive(this, ws);
        return rr;
    }
}
exports.Reactiver = Reactiver;
//# sourceMappingURL=Reactiver.js.map