const withIs = require('class-is');
const Lambda = require('./Lambda');

class Reactive {

    map = null;
    next = null;
    before = null;
    action;

    constructor(_b, _w) {
        this.map = _w;
        this.before = _b;
        if (this.before != null) {
            if (!this.before instanceof Reactive) throw new Error(this.before +" is not Reactive");
            this.before.setNext(this);
        }
    }

    get map() {
        return this.map;
    }

    get next() {
        return this.next;
    }

    get before() {
        return this.before;
    }

    get hasNext() {
        return this.next != null;
    }

    get isRoot() {
        return this.before == null;
    }

    set setAction(_a) {
        if (!Lambda.isPerson(_a)) throw new Error(_a + " is not Lambda");
        this.action = _a;
    }

    set setNext(_r) {
        if (!Reactive.isPerson(_r)) throw new Error(_r + " is not Reactive");
        this.next = _r;
    }

    launch() {
        if (this.action != null) this.action.run();
        
    }

}

module.exports = withIs(Reactive, {
    className: 'Reactive',
    symbolName: '@net/surfm/bzk',
});