const Reactive = require('./Reactive');
const RState = require('./RState');

module.exports = {

    shiftRoot: function (_re) {
        if (!_re instanceof Reactive) throw new Error(_re +" is not Reactive");
        var re = _re;
        while (!re.isRoot()) {
            re = re.before();
        }
        return re;
    },
    next: function (_re) {
        var n = _re.next();
        if (n == null) {
            exports.shiftRoot(_re).setState(RState.EObserving);
            return;
        }
        n.launch();
    }


};