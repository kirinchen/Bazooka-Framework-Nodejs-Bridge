import { ActionT1 } from "./ActionT1";

export class OOActionT1<T> {
    body: Object;
    action: ActionT1<T>;

    constructor(_b: Object, _a: ActionT1<T>) {
        this.body = _b;
        this.action = _a;
    }

    public call(p:T): void {
        this.action.call(this.body,p);
    }


    public static gen<T>(_b: Object, _a: ActionT1<T>): OOActionT1<T> {
        return new OOActionT1(_b,_a);
    }

}