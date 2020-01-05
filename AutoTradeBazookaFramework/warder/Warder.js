const withIs = require('class-is');
const Value = require('../comm/Value');

class Warder extends Value {

    observers = [];
    curValue = null;
    key;


    constructor(_k) {
        super();
        this.key = _k;
    }

    get key() {
        return this.key;
    }

    value() {
        return this.curValue;
    }

    subscribe(ob) {
        this.observers.push(ob);
    }

    setValue(_d) {
        if (this.equals(this.curValue, _d)) return;
        this.curValue = _d;
        this._notifyAll();
    }

    equals(org, _new) {
        return org == _new;
    }

    _notifyAll() {
        for (var i = 0; i < this.observers.length; i++) {
            var obs = this.observers[i];
            obs.call(null, this);
        }
    }

}


module.exports = withIs(Warder, {
    className: 'Warder',
    symbolName: '@net/surfm/bzk',
});