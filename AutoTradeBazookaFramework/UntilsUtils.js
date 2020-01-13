module.exports = {

    waitSeconds: function (sc, args) {
        const p = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(args);
            }, sc);
        });
        return p;
    }

}