"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const daemon = require('daemon');
class Runer {
    constructor(_id, _task) {
        this.id = _id;
        this.task = _task;
    }
}
class BZKRunner {
    constructor(_c) {
        this.runners = new Array();
        this.config = _c;
    }
    add(t) {
        this.runners.push(t);
        return this;
    }
    start() {
        daemon.start();
    }
    static getInstance(_c) {
        if (!this.instance) {
            this.instance = new BZKRunner(_c);
        }
        return this.instance;
    }
}
exports.BZKRunner = BZKRunner;
BZKRunner.instance = null;
//# sourceMappingURL=BZKRunner.js.map