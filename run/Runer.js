"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UntilsUtils_1 = require("../UntilsUtils");
class Runer {
    constructor(_task) {
        this.reactive = _task;
    }
    start() {
        UntilsUtils_1.UntilsUtils.openThread(() => {
            this.reactive.observe();
        });
    }
}
exports.Runer = Runer;
//# sourceMappingURL=Runer.js.map