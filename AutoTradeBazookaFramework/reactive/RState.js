function RState(_name) {
    var self = this;
    self.name = _name;
}

class Single {

    static instance;
    _Idle;
    _Observing;
    _Observed;
    _Interrupted;


    constructor() {
        this._Idle = new RState('Idle');
        this._Observing = new RState('Observing');
        this._Observed = new RState('Observed');
        this._Interrupted = new RState('Interrupted');
    }

    get Idle() { return _Idle; }
    get Observing() { return this._Observing; }
    get Observed() { return this._Observed; }
    get Interrupted() { return this._Interrupted; }

    validate(o) {
        if (o == this._Idle) return ;
        if (o == this._Interrupted) return ;
        if (o == this._Observed) return ;
        if (o == this._Observing) return;
        throw new Error(o +" is Not RState ");

    }

    static getInstance() {
        if (!this.instance) this.instance = new Single();
        return this.instance;
    }

}

module.exports = {
    EIdle: Single.getInstance().Idle,
    EObserving: Single.getInstance().Observing,
    EObserved: Single.getInstance().Observed,
    EInterrupted: Single.getInstance().Interrupted,
    validate: Single.getInstance().validate
};