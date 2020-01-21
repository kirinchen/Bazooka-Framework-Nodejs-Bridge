abstract class Lambda {
    _reactive: Reactive;
    _action: any;

    constructor(_r: Reactive, _a: any) {
        this._reactive = _r;
        this._action = _a;
        if (!this.run) throw new Error("run not define");
    }

    reactive() {
        return this._reactive;
    }

    action() {
        return this._action;
    }

    abstract run();

}