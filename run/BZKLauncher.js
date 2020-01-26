"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Runer_1 = require("./Runer");
const ReactiveGener_1 = require("./ReactiveGener");
const DataProvider_1 = require("./DataProvider");
class BZKLauncher {
    constructor(_c) {
        this.console = null;
        this.runners = new Array();
        let bdp = new DataProvider_1.BaseDataProvider(_c);
        this.reactiveGener = new ReactiveGener_1.ReactiveGener(bdp);
    }
    add(f) {
        let br = f(this.reactiveGener);
        let rr = new Runer_1.Runer(br);
        this.runners.push(rr);
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