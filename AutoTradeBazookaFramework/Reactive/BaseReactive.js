const withIs = require('class-is');
const Reactive = require('./Reactive');
const Where = require('./Where');

class BaseReactive extends Reactive {

    where(wf) {
        var whe = new Where(this, wf);
        this.setAction(whe);
        return new BaseReactive(this);
    }

    subscribe() {

    }


}

module.exports = withIs(BaseReactive, {
    className: 'BaseReactive',
    symbolName: '@net/surfm/bzk',
});