import { Warder } from "../warder/Warder";
import { RootReactive } from "../reactive/RootReactive";
import { BaseDataProvider } from "./DataProvider";





export class ReactiveGener  {

    baseData: BaseDataProvider;

    constructor(bdp: BaseDataProvider) {
        this.baseData = bdp;
    }


    observe(ws: Warder[]): RootReactive {
        let rr = new RootReactive(this.baseData, ws);
        return rr;
    } 

}