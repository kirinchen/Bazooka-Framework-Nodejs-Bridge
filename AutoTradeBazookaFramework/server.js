'use strict';
const Reactiver = require('./Reactiver');
const Warder = require('./warder/Warder');

var warder = new Warder("Test");

warder.subscribe(d => {
    console.log("d:" + d);
});

warder.setValue(33);


Reactiver.observe([warder])
    .where(_d => {
        return true;
    })
    .subscribe(_d => {
    console.log("d:" + _d);
});