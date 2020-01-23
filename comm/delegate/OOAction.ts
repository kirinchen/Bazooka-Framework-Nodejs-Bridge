import { Action } from "./Action";

export class OOAction {
    body: Object;
    action: Action;

    constructor(_b: Object, _a: Action) {
        this.body = _b;
        this.action = _a;
    }

    public call(): void {
        this.action.call(this.body);
    }


    public static gen(_b: Object, _a: Action): OOAction {
        return new OOAction(_b,_a);
    }

}