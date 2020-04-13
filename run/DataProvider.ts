import { Config } from "../comm/config/Config";

export abstract class  DataProvider {

    public abstract opt(src: string, path: string, _default: any ): object;


    public get(src: string, path: string): object {
        return this.opt(src, path, null);
    }

}


enum BaseSrc {
    config

}

export class BaseDataProvider extends DataProvider {

    _config: Config;

    constructor(c: Config) {
        super();
        this._config = c;
    }

    opt(src: string, path: string, _default: any ): object {
        if (BaseSrc.config.toString() == src) return this._config.get(path, _default);
        return null;
    }

    get config(): Config { return this._config; }


}