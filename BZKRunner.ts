import { Config } from "./Config";
const daemon = require('daemon');

interface OnRun {
    (): void;
}

class Runer {
    id: string;
    task: OnRun;

    constructor(_id: string, _task: OnRun) {
        this.id = _id;
        this.task = _task;
    }

}

export class BZKRunner {

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
        
        daemon.start();
    }
    


    


}

