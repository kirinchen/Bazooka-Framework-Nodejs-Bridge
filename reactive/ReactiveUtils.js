"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RState_1 = require("./RState");
class ReactiveUtils {
    static shiftRoot(_re) {
        var re = _re;
        while (!re.isRoot()) {
            re = re.getBefore();
        }
        console.log("re.action" + re.action);
        var ans = re;
        return ans;
    }
    static next(_re) {
        var n = _re.getNext();
        if (n == null) {
            ReactiveUtils.shiftRoot(_re).setState(RState_1.RState.Observing);
            return;
        }
        n.launch();
    }
}
exports.ReactiveUtils = ReactiveUtils;
//# sourceMappingURL=ReactiveUtils.js.map