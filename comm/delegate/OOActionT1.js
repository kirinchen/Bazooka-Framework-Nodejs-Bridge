"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OOActionT1 {
    constructor(_b, _a) {
        this.body = _b;
        this.action = _a;
    }
    call(p) {
        this.action.call(this.body, p);
    }
    static gen(_b, _a) {
        return new OOActionT1(_b, _a);
    }
}
exports.OOActionT1 = OOActionT1;
//# sourceMappingURL=OOActionT1.js.map