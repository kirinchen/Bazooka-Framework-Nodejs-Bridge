const withIs = require('class-is');
const Lambda = require('./Lambda');

class Subscribe extends Lambda {

    run() {

    }

}

module.exports = withIs(Subscribe, {
    className: 'Subscribe',
    symbolName: '@net/surfm/bzk',
});