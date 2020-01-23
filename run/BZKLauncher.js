"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BZKLauncher {
    constructor(_c) {
        this.console = null;
        this.runners = new Array();
        this.config = _c;
    }
    add(t) {
        t.init(this);
        this.runners.push(t);
        return this;
    }
    start() {
        var readline = require('readline');
        this.console = readline.createInterface(process.stdin, process.stdout);
        this.console.setPrompt('guess> ');
        this.console.prompt();
        this.console.on('line', function (line) {
            if (line === "right")
                this.close();
            this.rl.prompt();
        }).on('close', function () {
            process.exit(0);
        });
        this.startRunners();
    }
    startRunners() {
        this.runners.forEach(r => r.start());
    }
    static getInstance(_c) {
        if (!this.instance) {
            this.instance = new BZKLauncher(_c);
        }
        return this.instance;
    }
}
exports.BZKLauncher = BZKLauncher;
BZKLauncher.instance = null;
//# sourceMappingURL=BZKLauncher.js.map