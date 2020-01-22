"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UntilsUtils {
    static waitSeconds(sc, args) {
        const p = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(args);
            }, sc);
        });
        return p;
    }
}
exports.UntilsUtils = UntilsUtils;
//# sourceMappingURL=UntilsUtils.js.map