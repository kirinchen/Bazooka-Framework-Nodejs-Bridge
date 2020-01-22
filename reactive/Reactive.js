"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reactive {
    constructor(_b, _r) {
        this.action = null;
        this.root = _r;
        this.before = _b;
        if (this.before != null) {
            this.before.setNext(this);
        }
    }
    getNext() {
        return this.next;
    }
    getBefore() {
        return this.before;
    }
    hasNext() {
        return this.next != null;
    }
    setRoot(_r) {
        this.root = _r;
    }
    getRoot() {
        return this.root;
    }
    isRoot() {
        return this.before == null;
    }
    setAction(_a) {
        this.action = _a;
    }
    setNext(_r) {
        this.next = _r;
    }
    launch() {
        if (this.action != null)
            this.action.run();
    }
}
exports.Reactive = Reactive;
//# sourceMappingURL=Reactive.js.map