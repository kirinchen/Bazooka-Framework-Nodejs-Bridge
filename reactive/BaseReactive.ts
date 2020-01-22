import { Reactive } from "./Reactive";
import { Where } from "./Where";
import { Do } from "./Do";
import { ReactiveUtils } from "./ReactiveUtils";

export class BaseReactive extends Reactive {

    constructor(_b: Reactive, _r: Reactive) {
        super(_b,_r);
    }

    where(wf) {
        var whe = new Where(this, wf);
        this.setAction(whe);
        return new BaseReactive(this, this.getRoot());
    }

    do(ac) {
        var d = new Do(this, ac);
        this.setAction(d);
        return new BaseReactive(this, this.getRoot());
    }

    subscribe(cb) {
        this.do(cb);
        ReactiveUtils.shiftRoot(this).observe();
    }

    map(): Map<string, any> {
        return this.getRoot().map();
    }


}