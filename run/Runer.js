"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RunTool_1 = require("./RunTool");
const UntilsUtils_1 = require("../UntilsUtils");
class Runer {
    constructor(_id, _task) {
        this.id = _id;
        this.task = _task;
    }
    init(l) {
        this.tool = new RunTool_1.RunTool(l);
    }
    start() {
        UntilsUtils_1.UntilsUtils.openThread(() => {
            this.task(this.tool);
        });
    }
    static gen(_id, _task) {
        return new Runer(_id, _task);
    }
}
exports.Runer = Runer;
//# sourceMappingURL=Runer.js.map