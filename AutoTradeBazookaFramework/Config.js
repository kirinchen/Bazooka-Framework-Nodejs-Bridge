function Config(cfg) {
    var self = this;
    var data = {};

    injectField(cfg);

    self.get = function (path,_default) {
        var ps = path.split('.');
        var cd = data;
        for (var i = 0; i < ps.length; i++) {
            var p = ps[i];
            if (cd.hasOwnProperty(p)) {
                cd = cd[p];
            } else {
                return _default;
            }
        }
        return cd;
    };

    self.size = function () {
        return Object.keys(data).length;
    };


    function injectField(_c) {
        for (const [key, value] of Object.entries(_c)) {
            data[key] = value;
        }
    }



}

module.exports = Config;