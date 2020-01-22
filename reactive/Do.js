"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lambda_1 = require("./Lambda");
const ReactiveUtils_1 = require("./ReactiveUtils");
class Do extends Lambda_1.Lambda {
    run() {
        if (this.action())
            this.action().call(null, this.reactive().map());
        ReactiveUtils_1.ReactiveUtils.next(this.reactive());
    }
}
exports.Do = Do;
//# sourceMappingURL=Do.js.map