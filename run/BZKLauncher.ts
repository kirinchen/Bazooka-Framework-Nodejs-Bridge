import { Config } from "../comm/config/Config";
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
    _beforeInit: {
        (): Promise<any>;
    };

    constructor() {
        let bdp: BaseDataProvider = new BaseDataProvider();
        this.reactiveGener = new ReactiveGener(bdp);
    }

    public beforeInit(a: {
        (): Promise<any>;
    }) {
        this._beforeInit = a;
        return this;
    }

    public add(f: FuncT1<ReactiveGener, BaseReactive>): BZKLauncher {
        let br = f(this.reactiveGener);
        let rr: Runer = new Runer(br);
        this.runners.push(rr);
        return this;
    }

    public async  start() {
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
        if (this._beforeInit) await this._beforeInit();
        this.startRunners();
    }

    private startRunners(): void {
        this.runners.forEach(r => r.start());
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new BZKLauncher();
        }
        return this.instance;
    }






}

