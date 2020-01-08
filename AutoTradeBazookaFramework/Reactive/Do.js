const withIs = require('class-is');
const Lambda = require('./Lambda');

class Do extends Lambda {

    run() {
        if (this.action()) this.action().call(null, this.reactive().map());
        var n = this.reactive().next();
        if (n == null) return;
        n.launch();
    }

}

module.exports = withIs(Do, {
    className: 'Do',
    symbolName: '@net/surfm/bzk',
});