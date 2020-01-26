"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataProvider {
    get(src, path) {
        return this.opt(src, path, null);
    }
}
exports.DataProvider = DataProvider;
var BaseSrc;
(function (BaseSrc) {
    BaseSrc[BaseSrc["config"] = 0] = "config";
})(BaseSrc || (BaseSrc = {}));
class BaseDataProvider extends DataProvider {
    constructor(c) {
        super();
        this._config = c;
    }
    opt(src, path, _default) {
        if (BaseSrc.config.toString() == src)
            return this._config.get(path, _default);
        return null;
    }
    get config() { return this._config; }
}
exports.BaseDataProvider = BaseDataProvider;
//# sourceMappingURL=DataProvider.js.map