import { Warder } from "../warder/Warder";
import { RootReactive } from "../reactive/RootReactive";
import { Config } from "../Config";

export interface DataProvider {
    getConfig(): Config;
}

export class Reactiver implements DataProvider {

    config: Config;

    constructor(c: Config) {
        this.config = c;
    }

    getConfig(): Config {
        return this.config;
    }

    observe(ws: Warder[]): RootReactive {
        let rr = new RootReactive(this, ws);
        return rr;
    } 

}