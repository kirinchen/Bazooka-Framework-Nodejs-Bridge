import { Warder } from "../warder/Warder";
import { Lambda } from "../reactive/Lambda";

export abstract  class Reactive {
    public root: Reactive;
    public next: Reactive;
    public before: Reactive;
    public action: Lambda = null;

    constructor(_b: Reactive, _r: Reactive) {
        this.root = _r;
        this.before = _b;

        if (this.before != null) {
            this.before.setNext(this);
        }

    }

    public abstract map(): Map<string, Warder>;

    public getNext() {
        return this.next;
    }

    getBefore() {
        return this.before;
    }

    public hasNext() {
        return this.next != null;
    }

    public setRoot(_r) {
        this.root = _r;
    }

    public getRoot() {
        return this.root;
    }

    public isRoot() {
        return this.before == null;
    }

    public setAction(_a:Lambda ) {
        this.action = _a;
    }

    public setNext(_r: Reactive) {
        this.next = _r;
    }

    public launch() {
        if (this.action != null) this.action.run();
    }

}