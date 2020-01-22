"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lambda_1 = require("./Lambda");
class Where extends Lambda_1.Lambda {
    run() {
        var b = this.action().call(null, this.reactive().map());
        if (!b)
            return;
        this.reactive().getNext().launch();
    }
}
exports.Where = Where;
//# sourceMappingURL=Where.js.map