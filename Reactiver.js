"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RootReactive_1 = require("./reactive/RootReactive");
class Reactiver {
    static observe(ws) {
        let rr = new RootReactive_1.RootReactive(ws);
        return rr;
    }
}
exports.Reactiver = Reactiver;
//# sourceMappingURL=Reactiver.js.map