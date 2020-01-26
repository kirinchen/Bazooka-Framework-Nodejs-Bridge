import { Reactive } from "./Reactive";
import { RootReactive } from "./RootReactive";
import { RState } from "./RState";
export class ReactiveUtils {
    static shiftRoot(_re: Reactive): RootReactive {
        var re = _re;
        while (!re.isRoot()) {
            re = re.getBefore();
        }
        console.log("re.action" + re.action);
        var ans = re as RootReactive;
        return ans;
    }

    static next(_re: Reactive) {
        var n = _re.getNext();
        if (n == null) {
            ReactiveUtils.shiftRoot(_re).setState(RState.Observing);
            return;
        }
        n.launch();
    } 
}
