"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Warder {
    constructor(_k) {
        this.observers = [];
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
            obs.call(obs, this);
        }
    }
}
exports.Warder = Warder;
//# sourceMappingURL=Warder.js.map