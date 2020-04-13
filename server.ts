import { Warder } from "./warder/Warder";
import { ReactiveGener } from "./run/ReactiveGener";
import { BZKLauncher } from "./run/BZKLauncher";
import { Config, CofGet } from "./comm/config/Config";
import { Runer } from "./run/Runer";
import { UntilsUtils } from "./UntilsUtils";


/*import http = require('http');
var port = process.env.port || 1337
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);*/


var warder = new Warder("Test");

/*warder.subscribe(d => {
    console.log("d:" + d);
});

warder.setValue(33);*/

let c = new Config({
    a: "123"
});



BZKLauncher.getInstance(c)
    .add((rg: ReactiveGener) => rg.observe([warder])
        .where(_d => {
            return true;
        })
        .subscribe(_d => {
            console.log("dobserve:" + _d);
        })
    )
    .start();

UntilsUtils.openThread(async () => {
    await UntilsUtils.waitSeconds(300, "99");
    warder.setValue(99);
});


let conGet: CofGet = new CofGet("test.test","vvvv");

let v = c.get(conGet);
