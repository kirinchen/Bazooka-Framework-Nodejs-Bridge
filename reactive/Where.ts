import { Lambda } from "./Lambda";
export class Where extends Lambda {

    run() {
        var b = this.action().call(null, this.reactive().map());
        if (!b) return;
        this.reactive().getNext().launch();
    }

}