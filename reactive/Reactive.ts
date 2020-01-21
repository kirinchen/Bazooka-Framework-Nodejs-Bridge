abstract class Reactive {
    _root: Reactive;
    _next: Reactive;
    _before: Reactive;
    _action: Lambda;

    constructor(_b: Reactive, _r: Reactive) {
        this._root = _r;
        this._before = _b;

        if (this._before != null) {
            this._before.setNext(this);
        }
    }

    abstract map(): Map<string, Warder>;

    next() {
        return this._next;
    }

    before() {
        return this._before;
    }

    hasNext() {
        return this._next != null;
    }

    setRoot(_r) {
        this._root = _r;
    }

    root() {
        return this._root;
    }

    isRoot() {
        return this._before == null;
    }

    setAction(_a:Lambda ) {
        this._action = _a;
    }

    setNext(_r: Reactive) {
        this._next = _r;
    }

    launch() {
        if (this._action != null) this._action.run();
    }

}