import { ActionT1 } from "../comm/delegate/ActionT1";
import { RunTool } from "./RunTool";
import { BZKLauncher } from "./BZKLauncher";
import { UntilsUtils } from "../UntilsUtils";

export class Runer {
    id: string;
    task: ActionT1<RunTool>;
    tool: RunTool;



    constructor(_id: string, _task: ActionT1<RunTool>) {
        this.id = _id;
        this.task = _task;
    }

    init(l: BZKLauncher): void {
        this.tool = new RunTool(l);
    }

    start(): void {
        UntilsUtils.openThread(() => {
            this.task(this.tool);
        });
    }

    public static gen(_id: string, _task: ActionT1<RunTool>) {
        return new Runer(_id, _task);
    }

}