import { DataProvider } from "./DataProvider";
import { Warder } from "../warder/Warder";

export class ReactiveDataProvider implements DataProvider {

    baseData: DataProvider;
    wardersMap: Map<string, Warder>;

    constructor(bd: DataProvider, warders: Warder[]) {
        this.baseData = bd;
        this.wardersMap = this.genWarderMap(warders);
    }



    public genWarderMap(warders: Warder[]): Map<string, Warder> {
        var wdb = new Map<string, any>();
        warders.forEach(element => {
            wdb[element.key()] = element;
        });
        return wdb;
    }

    get(src: string, path: string): object {
        throw new Error("Method not implemented.");
    }

    public map(): Map<string, Warder> {
        return this.wardersMap;
    }

}