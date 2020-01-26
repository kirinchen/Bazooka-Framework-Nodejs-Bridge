"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataProvider_1 = require("./DataProvider");
var Src;
(function (Src) {
    Src[Src["warder"] = 0] = "warder";
})(Src = exports.Src || (exports.Src = {}));
class ReactiveDataProvider extends DataProvider_1.DataProvider {
    constructor(bd, warders) {
        super();
        this.baseData = bd;
        this.wardersMap = this.genWarderMap(warders);
    }
    genWarderMap(warders) {
        var wdb = new Map();
        warders.forEach(element => {
            wdb.set(element.key(), element);
        });
        return wdb;
    }
    opt(src, path, _default) {
        let ans = this.baseData.opt(src, path, _default);
        if (ans)
            return ans;
        if (Src.warder.toString() == src)
            return this.wardersMap.get(path);
        return null;
    }
    getWarder(key) {
        let w = this.get(Src.warder.toString(), key);
        return w;
    }
    map() {
        return this.wardersMap;
    }
}
exports.ReactiveDataProvider = ReactiveDataProvider;
//# sourceMappingURL=ReactiveDataProvider.js.map