"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Warder_1 = require("./warder/Warder");
const Reactiver_1 = require("./Reactiver");
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
Reactiver_1.Reactiver.observe([warder])
    .where(_d => {
    return true;
})
    .subscribe(_d => {
    console.log("dobserve:" + _d);
});
warder.setValue(99);
//# sourceMappingURL=server.js.map