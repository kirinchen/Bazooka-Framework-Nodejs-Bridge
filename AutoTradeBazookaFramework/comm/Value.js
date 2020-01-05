const withIs = require('class-is');

class Value {

    constructor() {
        if (!this.value) throw new Error("value not define");
    }

}


module.exports = withIs(Value, {
    className: 'Value',
    symbolName: '@net/surfm/guan',
});