import { ActionT1 } from "../comm/delegate/ActionT1";
import { RunTool } from "./RunTool";
import { BZKLauncher } from "./BZKLauncher";
import { UntilsUtils } from "../UntilsUtils";
import { RootReactive } from "../reactive/RootReactive";
import { BaseReactive } from "../reactive/BaseReactive";

export class Runer {
    reactive: BaseReactive;
    tool: RunTool;



    constructor(_task: BaseReactive) {
        this.reactive = _task;
    }


    start(): void {
        UntilsUtils.openThread(() => {
            this.reactive.observe();
        });
    }


}