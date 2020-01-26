import { Lambda } from "./Lambda";
import { ReactiveUtils } from "./ReactiveUtils";

export class Do extends Lambda {

    run() {
        if (this.action()) this.action().call(null, this.reactive().getRoot().data);
        ReactiveUtils.next(this.reactive());
    }

}