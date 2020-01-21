
class BaseReactive extends Reactive {

    where(wf) {
        var whe = new Where(this, wf);
        this.setAction(whe);
        return new BaseReactive(this, this.root());
    }

    do(ac) {
        var d = new Do(this, ac);
        this.setAction(d);
        return new BaseReactive(this, this.root());
    }

    subscribe(cb) {
        this.do(cb);
        ReactiveUtils.shiftRoot(this).observe();
    }

    map(): Map<string, any> {
        return this.root().map();
    }


}