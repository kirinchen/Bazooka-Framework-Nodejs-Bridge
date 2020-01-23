import { Config } from "../Config";
import { Runer } from "./Runer";



export class BZKLauncher {

    private static instance: BZKLauncher = null;
    console = null;
    runners: Array<Runer> = new Array<Runer>();
    config: Config;

    constructor(_c: Config) {
        this.config = _c;
    }

    public add(t: Runer): BZKLauncher {
        t.init(this);
        this.runners.push(t);
        return this;
    }

    public  start(): void {
        var readline = require('readline');
        this.console = readline.createInterface(process.stdin, process.stdout);
        this.console.setPrompt('guess> ');
        this.console.prompt();
        this.console.on('line', function (line) {
            if (line === "right") this.close();
            this.rl.prompt();
        }).on('close', function () {
            process.exit(0);
        });

        this.startRunners();
    }

    private startRunners(): void {
        this.runners.forEach(r => r.start());
    }

    public static getInstance(_c: Config) {
        if (!this.instance) {
            this.instance = new BZKLauncher(_c);
        }
        return this.instance;
    }
    


    


}

