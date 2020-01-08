const RootReactive = require('./reactive/RootReactive');

module.exports = {
    observe: function (ws) {
        var rr = new RootReactive(ws);
        return rr;
    }
};