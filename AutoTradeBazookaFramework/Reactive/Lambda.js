const withIs = require('class-is');
const Reactive = require('./Reactive');

class Lambda {

    _reactive;
    _action;

    constructor(_r, _a) {
        this._reactive = _r;
        this._action = _a;
        if (!this.run) throw new Error("run not define");
    }

    reactive() {
        return this._reactive;
    }

    action() {
        return this._action;
    }
}

module.exports = withIs(Lambda, {
    className: 'Lambda',
    symbolName: '@net/surfm/bzk',
});