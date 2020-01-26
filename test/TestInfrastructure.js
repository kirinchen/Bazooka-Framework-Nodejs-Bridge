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
const assert = require('chai').assert;
const Config_1 = require("../Config");
const Warder_1 = require("../warder/Warder");
const ReactiveGener_1 = require("../run/ReactiveGener");
const UntilsUtils_1 = require("../UntilsUtils");
const DataProvider_1 = require("../run/DataProvider");
let c = new Config_1.Config({
    a: "123"
});
let bd = new DataProvider_1.BaseDataProvider(c);
describe(" test app", function () {
    it("check Config", function () {
        var config = new Config_1.Config({
            a: "af",
            b: "bf",
            c: "cn"
        });
        console.log(config.size() + ":" + config.get('a'));
        assert.isTrue(config.size() == 3);
        assert.equal(config.get('a'), "af");
        assert.equal(config.get('b'), "bf");
        assert.equal(config.get('c'), "cn");
        assert.equal(config.get('x', 123), 123);
    });
    it("base run", function () {
        return __awaiter(this, void 0, void 0, function* () {
            var warder = new Warder_1.Warder("Test");
            let r = new ReactiveGener_1.ReactiveGener(bd);
            r.observe([warder])
                .where(_d => {
                return true;
            })
                .subscribe((_d) => {
                console.log("ddddd:" + JSON.stringify(_d));
                let o = _d.getWarder("Test");
                let v = o.value();
                console.log("v:" + v);
                assert.equal(o.value(), 33);
            }).observe();
            yield UntilsUtils_1.UntilsUtils.waitSeconds(100, "");
            warder.setValue(33);
        });
    });
    /*it("run Async Do", async function () {
         var warder = new Warder("Test");
         warder.subscribeAction(d => {
             console.log("d:" + d);
         });
         warder.setValue(33);
         let r = new ReactiveGener(bd);
         r.observe([warder])
             .where(_d => {
                 return true;
             })
             .do(async _d => {
                 console.log("Do d:" + JSON.stringify(_d));
                 await UntilsUtils.waitSeconds(500, "QQ");
                 console.log("End Do d:" + JSON.stringify(_d));
             })
             .subscribe(_d => {
                 console.log("d:" + JSON.stringify(_d));
                 assert.equal(_d.Test.value(), 33);
             }).observe();
         let a = await UntilsUtils.waitSeconds(1000, "QQ");
     });*/
    it("run Async ", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let a = yield UntilsUtils_1.UntilsUtils.waitSeconds(1000, "QQ");
            console.log("a:" + a);
        });
    });
});
//# sourceMappingURL=testInfrastructure.js.map