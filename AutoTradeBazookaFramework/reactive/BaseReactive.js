const withIs = require('class-is');
const Reactive = require('./Reactive');
const Where = require('./Where');
const Do = require('./Do');
const ReactiveUtils = require('./ReactiveUtils');

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
        ReactiveUtils.shiftRoot(this).launch();
    }

    map() {
        return this.root().map();
    }


}

module.exports = withIs(BaseReactive, {
    className: 'BaseReactive',
    symbolName: '@net/surfm/bzk',
});