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
    static openThread(t) {
        setTimeout(function () {
            t();
        }, 0);
    }
}
exports.UntilsUtils = UntilsUtils;
//# sourceMappingURL=UntilsUtils.js.map