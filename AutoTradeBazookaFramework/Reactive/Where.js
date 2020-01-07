const withIs = require('class-is');
const Lambda = require('./Lambda');

class Where extends Lambda {

    run() {
        var b = this.action().call(null, this.reactive().map());
        if (!b) return;
        reactive().next().launch();
    }

}

module.exports = withIs(Where, {
    className: 'Where',
    symbolName: '@net/surfm/bzk',
});