const withIs = require('class-is');
const Lambda = require('./Lambda');

class Do extends Lambda {

    run() {
        this.action().call(null, reactive().map());
        var n = reactive().next();
        if (n == null) return;
        n.launch();
    }

}

module.exports = withIs(Do, {
    className: 'Do',
    symbolName: '@net/surfm/bzk',
});