const withIs = require('class-is');
const Warder = require('../warder/Warder');
const BaseReactive = require('./BaseReactive');
const RState = require('./RState');

class RootReactive extends BaseReactive {

    wardersMap;
    state = RState.Idle;

    constructor(warders) {
        super(null, null);
        this.setRoot(this);
        this.wardersMap = this.genWarderMap(warders);
    }

    genWarderMap(warders) {
        var wdb = {};
        warders.forEach(element => {
            if (!element instanceof Warder) throw new Error(element + " is not Warder");
            wdb[element.key()] = element;
        });
        return wdb;
    }

    map() {
        return this.wardersMap;
    }

    observe() {
        for (const value of Object.values(this.wardersMap)) {
            value.subscribe(this._onUpdate);
        }
    }

    _onUpdate(_d) {
        this.launch();
    }

    setState(st) {
        RState.validate(st);
        this.state = st;
    }


}

module.exports = withIs(RootReactive, {
    className: 'RootReactive',
    symbolName: '@net/surfm/bzk',
});