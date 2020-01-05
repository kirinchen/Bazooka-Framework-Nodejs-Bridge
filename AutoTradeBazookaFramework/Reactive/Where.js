const withIs = require('class-is');
const Lambda = require('./Lambda');

class Where extends Lambda {

    run() {
        
    }

}

module.exports = withIs(Where, {
    className: 'Where',
    symbolName: '@net/surfm/bzk',
});