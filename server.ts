import { Warder } from "./warder/Warder";
import { Reactiver } from "./run/Reactiver";
import { BZKLauncher } from "./run/BZKLauncher";
import { Config } from "./Config";
import { UntilsUtils } from "./UntilsUtils";
import { Runer } from "./run/Runer";
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
    a:"123"
});



BZKLauncher.getInstance(c)
    .add(new Runer("test", rt => {

        Reactiver.observe([warder])
            .where(_d => {
                return true;
            })
            .subscribe(_d => {
                console.log("dobserve:" + _d);
            });

        warder.setValue(99);

    }))
    .start();

