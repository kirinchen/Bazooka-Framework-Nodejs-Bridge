import { Config } from "../Config";
import { Runer } from "./Runer";
import { FuncT1 } from "../comm/delegate/FuncT1";
import { ReactiveGener } from "./ReactiveGener";
import { RootReactive } from "../reactive/RootReactive";
import { BaseDataProvider } from "./DataProvider";
import { BaseReactive } from "../reactive/BaseReactive";



export class BZKLauncher {

    private static instance: BZKLauncher = null;
    console = null;
    runners: Array<Runer> = new Array<Runer>();
    reactiveGener: ReactiveGener;

    constructor(_c: Config) {
        let bdp: BaseDataProvider = new BaseDataProvider(_c);
        this.reactiveGener = new ReactiveGener(bdp);
    }

    public add(f: FuncT1<ReactiveGener, BaseReactive>): BZKLauncher {
        let br = f(this.reactiveGener);
        let rr: Runer = new Runer(br);
        this.runners.push(rr);
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

