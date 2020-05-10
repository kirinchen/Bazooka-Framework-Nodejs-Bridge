export class PropertiesCofigLoad {
    public static async load(path): Promise<Config> {

        return new Promise<Config>((rev, rej) => {
            var properties = require("properties");
            properties.parse(path, { path: true }, function (error, obj) {
                if (error) return rej(error);

                console.log(obj);
                //{ a: 1, b: 2 }
                Config.init(obj);
                console.log(Config.provide());
                rev(Config.provide());
            });
        });


    }
}

export class Config {

    private static instance: Config;

    public data: object = {};

    private constructor(cfg) {
        this.apd(cfg);
    }

    public apd(cfg) {
        for (const [key, value] of Object.entries(cfg)) {
            this.put(key, value);
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

    put(key: string, v: any) {
        let ps = key.split('.');
        let cd: object = this.data;
        for (var i = 0; i < (ps.length-1); i++) {
            let p = ps[i];
            if (cd.hasOwnProperty(p)) {
                cd = cd[p] as object;
            } else {
                cd[p] = {};
                cd = cd[p];
            }
        }
        cd[ps[ps.length - 1]] = v;
    }

    public size(): number {
        return Object.keys(this.data).length;
    }

    public static init(cfg): void {
        this.instance = new Config(cfg);
    }

    public static appendEx(cfg): void {
        this.instance.apd(cfg);
    }

    public static provide(): Config {
        if (!this.instance) throw new Error("instance IS NULL");
        return this.instance;
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