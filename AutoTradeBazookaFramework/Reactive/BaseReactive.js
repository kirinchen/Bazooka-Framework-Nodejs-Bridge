const withIs = require('class-is');
const Reactive = require('./Reactive');
const Where = require('./Where');
const ReactiveUtils = require('./ReactiveUtils');

class BaseReactive extends Reactive {

    where(wf) {
        var whe = new Where(this, wf);
        this.setAction(whe);
        return new BaseReactive(this, this.map());
    }

    do(ac) {
        var d = new Do(this, ac);
        this.setAction(d);
        return new BaseReactive(this, this.map());
    }

    subscribe(cb) {
        this.do(cb);
        ReactiveUtils.shiftRoot(this).lanch();
    }


}

module.exports = withIs(BaseReactive, {
    className: 'BaseReactive',
    symbolName: '@net/surfm/bzk',
});