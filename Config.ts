export class Config {
    public data: object = {};

    constructor(cfg) {
        for (const [key, value] of Object.entries(cfg)) {
            this.data[key] = value;
        }
    }

    public get(path: string, _default: any = null): any {
        let ps = path.split('.');
        let cd = this.data;
        for (var i = 0; i < ps.length; i++) {
            let p = ps[i];
            if (cd.hasOwnProperty(p)) {
                cd = cd[p];
            } else {
                return _default;
            }
        }
        return cd;
    }

    public size(): number {
        return Object.keys(this.data).length;
    }



}