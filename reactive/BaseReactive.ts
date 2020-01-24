import { Reactive } from "./Reactive";
import { Where } from "./Where";
import { Do } from "./Do";
import { ReactiveUtils } from "./ReactiveUtils";

export class BaseReactive extends Reactive {

    ended: boolean = false;

    constructor(_b: Reactive, _r: Reactive) {
        super(_b,_r);
    }

    public where(wf) {
        var whe = new Where(this, wf);
        this.setAction(whe);
        return new BaseReactive(this, this.getRoot());
    }

    public do(ac) {
        var d = new Do(this, ac);
        this.setAction(d);
        return new BaseReactive(this, this.getRoot());
    }

    public subscribe(cb): BaseReactive {
        this.do(cb);
        this.ended = true;
        //ReactiveUtils.shiftRoot(this).observe();
        return this;
    }

    observe() {
        if (!this.ended) throw new Error("Not subscribe!!");
        ReactiveUtils.shiftRoot(this).observe();
    }

    

    map(): Map<string, any> {
        return this.getRoot().map();
    }


}