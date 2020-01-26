"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Warder_1 = require("./warder/Warder");
const BZKLauncher_1 = require("./run/BZKLauncher");
const Config_1 = require("./Config");
const UntilsUtils_1 = require("./UntilsUtils");
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
UntilsUtils_1.UntilsUtils.openThread(() => __awaiter(void 0, void 0, void 0, function* () {
    yield UntilsUtils_1.UntilsUtils.waitSeconds(300, "99");
    warder.setValue(99);
}));
/*rg.observe([warder])
    .where(_d => {
        return true;
    })
    .subscribe(_d => {
        console.log("dobserve:" + _d);
    })*/ 
//# sourceMappingURL=server.js.map