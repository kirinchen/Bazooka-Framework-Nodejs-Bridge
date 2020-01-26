"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseSrc;
(function (BaseSrc) {
    BaseSrc[BaseSrc["config"] = 0] = "config";
})(BaseSrc || (BaseSrc = {}));
class BaseDataProvider {
    constructor(c) {
        this._config = c;
    }
    get(src, path, _default) {
        if (BaseSrc.config.toString() == src)
            return this._config.get(path, _default);
        return null;
    }
    get config() { return this._config; }
}
exports.BaseDataProvider = BaseDataProvider;
//# sourceMappingURL=DataProvider.js.map