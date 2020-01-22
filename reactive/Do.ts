import { Lambda } from "./Lambda";
import { ReactiveUtils } from "./ReactiveUtils";

export class Do extends Lambda {

    run() {
        if (this.action()) this.action().call(null, this.reactive().map());
        ReactiveUtils.next(this.reactive());
    }

}