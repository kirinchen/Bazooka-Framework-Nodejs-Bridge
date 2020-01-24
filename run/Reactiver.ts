import { Warder } from "../warder/Warder";
import { RootReactive } from "../reactive/RootReactive";
import { Config } from "../Config";

export interface DataProvider {

    get(src: string, path: string): object;

}

enum BaseSrc {
    config



}

export class BaseDataProvider implements DataProvider {

    _config: Config;

    constructor(c: Config) {
        this._config = c;
    }

    get(src: string, path: string, _default: any = null): object {
        if (BaseSrc.config.toString() == src) return this._config.get(path, _default);
        return null;
    }

    get config(): Config { return this._config; } 


}

export class Reactiver  {

    baseData: BaseDataProvider;

    constructor(bdp: BaseDataProvider) {
        this.baseData = bdp;
    }


    observe(ws: Warder[]): RootReactive {
        let rr = new RootReactive(this, ws);
        return rr;
    } 

}