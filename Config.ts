class Config {
    data: Map<string, any> = new Map<string, any>();

    constructor(cfg) {
        for (const [key, value] of Object.entries(cfg)) {
            this.data[key] = value;
        }
    }

    get(path: string, _default: any): any {
        var ps = path.split('.');
        var cd = this.data;
        for (var i = 0; i < ps.length; i++) {
            var p = ps[i];
            if (cd.has(p)) {
                cd = cd[p];
            } else {
                return _default;
            }
        }
        return cd;
    }

    size(): number {
        return this.data.size;
    }



}