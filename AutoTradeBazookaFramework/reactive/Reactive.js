const withIs = require('class-is');
const Lambda = require('./Lambda');
const RootReactive = require('./RootReactive');

class Reactive {

    _root = null;
    _next = null;
    _before = null;
    _action;

    constructor(_b, _r) {
        this._root = _r;
        this._before = _b;
        if (!this.map) throw new Error(this.className+" map not define");
        if (this._before != null) {
            if (!this._before instanceof Reactive) throw new Error(this._before +" is not Reactive");
            this._before.setNext(this);
        }
    }

     next() {
        return this._next;
    }

     before() {
        return this._before;
    }

     hasNext() {
        return this._next != null;
    }

    setRoot(_r) {
        this._root = _r;
    }

    root() {
        return this._root;
    }

     isRoot() {
        return this._before == null;
    }

    setAction(_a) {
        if (!_a instanceof Lambda) throw new Error(_a + " is not Lambda");
        this._action = _a;
    }

    setNext(_r) {
        if (!_r instanceof Reactive) throw new Error(_r + " is not Reactive");
        this._next = _r;
    }

    launch() {
        if (this._action != null) this._action.run();
    }

}

module.exports = withIs(Reactive, {
    className: 'Reactive',
    symbolName: '@net/surfm/bzk',
});