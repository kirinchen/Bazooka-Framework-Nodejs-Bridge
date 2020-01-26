"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Warder_1 = require("./warder/Warder");
const BZKLauncher_1 = require("./run/BZKLauncher");
const Config_1 = require("./Config");
/*import http = require('http');
var port = process.env.port || 1337
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);*/
var warder = new Warder_1.Warder("Test");
/*warder.subscribe(d => {
    console.log("d:" + d);
});

warder.setValue(33);*/
let c = new Config_1.Config({
    a: "123"
});
BZKLauncher_1.BZKLauncher.getInstance(c)
    .add((rg) => rg.observe([warder])
    .where(_d => {
    return true;
})
    .subscribe(_d => {
    console.log("dobserve:" + _d);
}))
    .start();
/*rg.observe([warder])
    .where(_d => {
        return true;
    })
    .subscribe(_d => {
        console.log("dobserve:" + _d);
    })*/ 
//# sourceMappingURL=server.js.map