const Warder = require('./Warder');

function WarderReactiver() {
    var self = this;
    self.warders = [];
    var wheres = [];
    var subscribeAction = function (wds) { };

    self.observe = function (wds) {
        for (var i = 0; i < wds.length; i++) {
            var wd = wds[i];
            wd.subscribe(onUpdate);
        }
        return this;
    };

    self.where = function (wf) {
        wheres.push(wf);
        return self;
    };

    self.subscribe = function (sb) {
        subscribeAction = sb;
    };

    function genWarderMap() {
        var wdb = {};
        self.warders.forEach(element => {
            wdb[element.key()] = element;
        });
        return wdb;
    }

    function isWhere(wdb) {
        for (var i = 0; i < self.wheres.length; i++) {
            var wf = self.wheres[i];
            if (!wf(wdb)) return false;
        }

        return true;

    };

    function onUpdate(_d) {
        var wdb = genWarderMap();
        if (!isWhere(wdb)) return;
        subscribeAction(wdb);
    }


}

module.exports = WarderReactiver;