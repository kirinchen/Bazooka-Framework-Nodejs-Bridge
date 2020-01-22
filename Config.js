"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor(cfg) {
        this.data = {};
        for (const [key, value] of Object.entries(cfg)) {
            this.data[key] = value;
        }
    }
    get(path, _default = null) {
        var ps = path.split('.');
        var cd = this.data;
        for (var i = 0; i < ps.length; i++) {
            var p = ps[i];
            if (cd.hasOwnProperty(p)) {
                cd = cd[p];
            }
            else {
                return _default;
            }
        }
        return cd;
    }
    size() {
        return Object.keys(this.data).length;
    }
}
exports.Config = Config;
//# sourceMappingURL=Config.js.map