const withIs = require('class-is');
const BaseReactive = require('./BaseReactive');
const Where = require('./Where');

class InitReactive extends BaseReactive {

    constructor(_w) {
        super(null, this.genWarderMap(_w));
    }

    genWarderMap(_w) {
        var wdb = {};
        _w.forEach(element => {
            wdb[element.key()] = element;
        });
        return wdb;
    }

    run() {
        var m = this.map();
        for (var key in m) {
            var w = m[key];
            w.subscribe(this.onUpdate);
        }
    }

    onUpdate(_d) {
        this.next().run();
    }


}

module.exports = withIs(InitReactive, {
    className: 'InitReactive',
    symbolName: '@net/surfm/bzk',
});