function Config(cfg) {
    var self = this;
    self.data = {};

    injectField(cfg);

    self.append = function (_c) {
        for (const [key, value] of Object.entries(_c)) {
            if (self.data.hasOwnProperty(key)) continue;
            self.data[key] = value;
        }
    };


    function injectField(_c) {
        for (const [key, value] of Object.entries(_c)) {
            self.data[key] = value;
        }
    }



}

module.exports = Config;