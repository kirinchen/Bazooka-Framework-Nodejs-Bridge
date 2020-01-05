const withIs = require('class-is');
const Lambda = require('./Lambda');

class Reactive {

    next = null;
    before = null;
    action;

    constructor(_b) {
        this.before = _b;
    }

    get hasNext() {
        return this.next != null;
    }

    set setAction(_a) {
        if (!Lambda.isPerson(_a)) throw new Error(_a + " is not Lambda");
        this.action = _a;
    }

    set setNext(_r) {
        if (!Reactive.isPerson(_r)) throw new Error(_r + " is not Reactive");
        this.next = _r;
    }

}

module.exports = withIs(Reactive, {
    className: 'Reactive',
    symbolName: '@net/surfm/bzk',
});