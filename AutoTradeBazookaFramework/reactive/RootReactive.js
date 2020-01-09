const withIs = require('class-is');
const Warder = require('../warder/Warder');
const BaseReactive = require('./BaseReactive');

class RootReactive extends BaseReactive {

    wardersMap;

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


}

module.exports = withIs(RootReactive, {
    className: 'RootReactive',
    symbolName: '@net/surfm/bzk',
});