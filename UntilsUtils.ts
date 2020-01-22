export class UntilsUtils {
    public static waitSeconds(sc: number, args: any) {
        const p = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(args);
            }, sc);
        });
        return p;
    }
}