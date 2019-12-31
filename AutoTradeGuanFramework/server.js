'use strict';

const Warder = require('./warder/Warder');

var warder = new Warder();

warder.subscribe(d => {
    console.log("d:"+d);
});

warder.setValue(33);