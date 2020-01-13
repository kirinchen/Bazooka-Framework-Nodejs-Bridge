const withIs = require('class-is');
const Lambda = require('./Lambda');

class DoByToken extends Lambda {

    run() {

        var token = {

        };

        if (this.action()) this.action().call(null, this.reactive().map());
        var n = this.reactive().next();
        if (n == null) return;
        n.launch();
    }

}

module.exports = withIs(DoByToken, {
    className: 'DoByToken',
    symbolName: '@net/surfm/bzk',
});