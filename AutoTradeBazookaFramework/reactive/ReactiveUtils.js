const Reactive = require('./Reactive');

module.exports = {

    shiftRoot: function (_re) {
        if (!_re instanceof Reactive) throw new Error(_re +" is not Reactive");
        var re = _re;
        while (!re.isRoot()) {
            re = re.before();
        }
        return re;
    }

};