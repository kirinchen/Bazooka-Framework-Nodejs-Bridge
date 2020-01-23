import { Value } from "../comm/Value";
import { WarderAction } from "./WarderAction";
import { Action } from "../comm/delegate/Action";
import { ActionT1 } from "../comm/delegate/ActionT1";

export  class Warder implements Value {

    observers: Array<WarderAction> = new Array<WarderAction>();
    curValue = null;
    _key;


    constructor(_k) {
        this._key = _k;
    }

    key() {
        return this._key;
    }

    value() {
        return this.curValue;
    }

    subscribe(ob: WarderAction) {
        this.observers.push(ob);
    }

    subscribeAction(ob: ActionT1<Warder>) {
        this.observers.push(new WarderActionImpl(ob));
    }

    setValue(_d) {
        if (this.equals(this.curValue, _d)) return;
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

class WarderActionImpl implements WarderAction {

    action: ActionT1<Warder>;

    constructor(_a: ActionT1<Warder>) {
        this.action = _a;
    }

    onUpdate(t: Warder): void {
        this.action.call(null,t);
    }

}