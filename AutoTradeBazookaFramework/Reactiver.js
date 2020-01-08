const RootReactive = require('./Reactive/RootReactive');

module.exports = {
    observe: function (ws) {
        var rr = new RootReactive(ws);
        return rr;
    }
};