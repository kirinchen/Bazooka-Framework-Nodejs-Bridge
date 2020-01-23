import { Warder } from "./warder/Warder";
import { Reactiver } from "./run/Reactiver";
import { BZKRunner } from "./run/BZKRunner";
import { Config } from "./Config";
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

Reactiver.observe([warder])
    .where(_d => {
        return true;
    })
    .subscribe(_d => {
        console.log("dobserve:" + _d);
    });

warder.setValue(99);



BZKRunner.getInstance(c).start();

