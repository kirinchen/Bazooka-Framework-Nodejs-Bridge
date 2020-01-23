"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OOAction {
    constructor(_b, _a) {
        this.body = _b;
        this.action = _a;
    }
    call() {
        this.action.call(this.body);
    }
    static gen(_b, _a) {
        return new OOAction(_b, _a);
    }
}
exports.OOAction = OOAction;
//# sourceMappingURL=OOAction.js.map