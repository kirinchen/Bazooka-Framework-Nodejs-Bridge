const withIs = require('class-is');
const Lambda = require('./Lambda');
const ReactiveUtils = require('./ReactiveUtils');

class Do extends Lambda {

    run() {
        if (this.action()) this.action().call(null, this.reactive().map());
        ReactiveUtils.next(this.reactive());
    }

}

module.exports = withIs(Do, {
    className: 'Do',
    symbolName: '@net/surfm/bzk',
});