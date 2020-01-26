import { DataProvider } from "./DataProvider";
import { Warder } from "../warder/Warder";

export enum Src {
    warder
}

export class ReactiveDataProvider extends DataProvider {

    baseData: DataProvider;
    wardersMap: Map<string, Warder>;

    constructor(bd: DataProvider, warders: Warder[]) {
        super();
        this.baseData = bd;
        this.wardersMap = this.genWarderMap(warders);
    }



    public genWarderMap(warders: Warder[]): Map<string, Warder> {
        var wdb = new Map<string, any>();
        warders.forEach(element => {
            wdb.set(element.key() , element);
        });
        return wdb;
    }

    opt(src: string, path: string, _default: any): object {
        let ans = this.baseData.opt(src, path, _default);
        if (ans) return ans;
        if (Src.warder.toString() == src  ) return this.wardersMap.get(path);
        return null;
    }

    getWarder(key: string): Warder {
        let w = this.get(Src.warder.toString(), key) ;
        return w as Warder;
    }

    public map(): Map<string, Warder> {
        return this.wardersMap;
    }

}