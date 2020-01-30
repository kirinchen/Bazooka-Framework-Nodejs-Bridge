import { UntilsUtils } from "../UntilsUtils";
import { BaseReactive } from "../reactive/BaseReactive";

export class Runer {
    reactive: BaseReactive;



    constructor(_task: BaseReactive) {
        this.reactive = _task;
    }


    start(): void {
        UntilsUtils.openThread(() => {
            this.reactive.observe();
        });
    }


}