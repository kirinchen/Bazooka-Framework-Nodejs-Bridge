"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lambda {
    constructor(_r, _a) {
        this._reactive = _r;
        this._action = _a;
        if (!this.run)
            throw new Error("run not define");
    }
    reactive() {
        return this._reactive;
    }
    action() {
        return this._action;
    }
}
exports.Lambda = Lambda;
//# sourceMappingURL=Lambda.js.map