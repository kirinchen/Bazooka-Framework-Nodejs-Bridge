class Config {
    constructor(cfg) {
        this.data = new Map();
        for (const [key, value] of Object.entries(cfg)) {
            this.data[key] = value;
        }
    }
    get(path, _default) {
        var ps = path.split('.');
        var cd = this.data;
        for (var i = 0; i < ps.length; i++) {
            var p = ps[i];
            if (cd.has(p)) {
                cd = cd[p];
            }
            else {
                return _default;
            }
        }
        return cd;
    }
    size() {
        return this.data.size;
    }
}
//# sourceMappingURL=Config.js.map