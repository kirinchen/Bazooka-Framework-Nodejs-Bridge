"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Reactive_1 = require("./Reactive");
const Where_1 = require("./Where");
const Do_1 = require("./Do");
const ReactiveUtils_1 = require("./ReactiveUtils");
class BaseReactive extends Reactive_1.Reactive {
    constructor(_b, _r) {
        super(_b, _r);
    }
    where(wf) {
        var whe = new Where_1.Where(this, wf);
        this.setAction(whe);
        return new BaseReactive(this, this.getRoot());
    }
    do(ac) {
        var d = new Do_1.Do(this, ac);
        this.setAction(d);
        return new BaseReactive(this, this.getRoot());
    }
    subscribe(cb) {
        this.do(cb);
        ReactiveUtils_1.ReactiveUtils.shiftRoot(this).observe();
    }
    map() {
        return this.getRoot().map();
    }
}
exports.BaseReactive = BaseReactive;
//# sourceMappingURL=BaseReactive.js.map