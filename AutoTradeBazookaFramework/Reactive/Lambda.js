const withIs = require('class-is');
const Reactive = require('./Reactive');

class Lambda {

    reactive;
    action;

    constructor(_r,_a) {
        this.reactive = _r;
        if (!Reactive.isPerson(this.reactive)) throw new Error(this.reactive + " is not Reactive");
        this.action = _a;
        if (!this.run) throw new Error("run not define");
    }

    get reactive() {
        return this.reactive;
    }

    get action() {
        return this.action;
    }
}

module.exports = withIs(Lambda, {
    className: 'Lambda',
    symbolName: '@net/surfm/bzk',
});