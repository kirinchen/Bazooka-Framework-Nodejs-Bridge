"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Src;
(function (Src) {
    Src[Src["warder"] = 0] = "warder";
})(Src = exports.Src || (exports.Src = {}));
class ReactiveDataProvider {
    constructor(bd, warders) {
        this.baseData = bd;
        this.wardersMap = this.genWarderMap(warders);
    }
    genWarderMap(warders) {
        var wdb = new Map();
        warders.forEach(element => {
            wdb[element.key()] = element;
        });
        return wdb;
    }
    get(src, path, _default) {
        let ans = this.baseData.get(src, path, _default);
        if (ans)
            return ans;
        if (Src.warder.toString() == src)
            return this.wardersMap.get(path);
        return null;
    }
    map() {
        return this.wardersMap;
    }
}
exports.ReactiveDataProvider = ReactiveDataProvider;
//# sourceMappingURL=ReactiveDataProvider.js.map