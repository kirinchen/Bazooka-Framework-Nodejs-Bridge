import { Warder } from "./warder/Warder";
import { RootReactive } from "./reactive/RootReactive";


export class Reactiver {

    static observe(ws: Warder[]): RootReactive {
        let rr = new RootReactive(ws);
        return rr;
    } 

}