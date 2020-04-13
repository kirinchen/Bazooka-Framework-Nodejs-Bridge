export class Config {
    public data: object = {};

    constructor(cfg) {
        for (const [key, value] of Object.entries(cfg)) {
            this.data[key] = value;
        }
    }

    public get(cg: CofGet): any;
    public get(cg: string): any;
    public get(path: string, _default: any): any;
    public get(args1: string | CofGet, args2?: any ): any {
        let _default: any;
        let path: string;
        if (typeof args1 === 'string' ) {
            path = args1;
        }
        if (args1 instanceof CofGet) {
            path = args1.path;
            _default = args1.default;
        } else if (args2) {
            _default = args2;
        }
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

export class CofGet {
    path: string;
    default: any;

    public constructor(p: string, d: any) {
        this.path = p;
        this.default = d;
    }

}