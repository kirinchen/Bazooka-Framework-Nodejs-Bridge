import { DataProvider } from "./DataProvider";
import { Warder } from "../warder/Warder";

export enum Src {
    warder
}

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

    get(src: string, path: string, _default: any): object {
        let ans = this.baseData.get(src, path, _default);
        if (ans) return ans;
        if (Src.warder.toString() == src) return this.wardersMap.get(path);
        return null;

    }

    public map(): Map<string, Warder> {
        return this.wardersMap;
    }

}