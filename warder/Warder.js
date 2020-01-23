"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Warder {
    constructor(_k) {
        this.observers = new Array();
        this.curValue = null;
        this._key = _k;
    }
    key() {
        return this._key;
    }
    value() {
        return this.curValue;
    }
    subscribe(ob) {
        this.observers.push(ob);
    }
    subscribeAction(ob) {
        this.observers.push(new WarderActionImpl(ob));
    }
    setValue(_d) {
        if (this.equals(this.curValue, _d))
            return;
        this.curValue = _d;
        this._notifyAll();
    }
    equals(org, _new) {
        return org == _new;
    }
    _notifyAll() {
        for (var i = 0; i < this.observers.length; i++) {
            var obs = this.observers[i];
            obs.onUpdate(this);
        }
    }
}
exports.Warder = Warder;
class WarderActionImpl {
    constructor(_a) {
        this.action = _a;
    }
    onUpdate(t) {
        this.action.call(null, t);
    }
}
//# sourceMappingURL=Warder.js.map