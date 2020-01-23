import { Config } from "../Config";
import { Action } from "../comm/delegate/Action";



class Runer {
    id: string;
    task: Action;

    constructor(_id: string, _task: Action) {
        this.id = _id;
        this.task = _task;
    }

}

export class BZKRunner {

    private static instance: BZKRunner = null;

    runners: Array<Runer> = new Array<Runer>();
    config: Config;

    constructor(_c: Config) {
        this.config = _c;
    }

    public add(t: Runer): BZKRunner {
        this.runners.push(t);
        return this;
    }

    public start(): void {
        require('daemon')({
            cwd: parseInt(process.versions.node) < 8 ? process.cwd : process.cwd(),
            env: process.env,
            stdio: ['pipe', process.stdout, process.stderr]
        });
    }

    public static getInstance(_c: Config) {
        if (!this.instance) {
            this.instance = new BZKRunner(_c);
        }
        return this.instance;
    }
    


    


}

