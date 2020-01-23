"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    start(a) {
        a();
        var readline = require('readline');
        var rl = readline.createInterface(process.stdin, process.stdout);
        rl.setPrompt('guess> ');
        rl.prompt();
        rl.on('line', function (line) {
            if (line === "right")
                rl.close();
            rl.prompt();
        }).on('close', function () {
            process.exit(0);
        });
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