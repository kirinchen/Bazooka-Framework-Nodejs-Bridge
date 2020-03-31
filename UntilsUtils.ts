import { Action } from "./comm/delegate/Action";

export class UntilsUtils {
    public static waitSeconds(sc: number, args: any): Promise<any> {
        const p = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(args);
            }, sc);
        });
        return p;
    }

    public static openThread(t: Action): void {
        setTimeout( ()=> {
            t();
        }, 0);
    }
}