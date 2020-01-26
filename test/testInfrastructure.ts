const assert = require('chai').assert;
import { Config } from "../Config";
import { Warder } from '../warder/Warder'
import { ReactiveGener } from "../run/ReactiveGener";
import { UntilsUtils } from "../UntilsUtils";
import { BaseDataProvider, DataProvider } from "../run/DataProvider";
import { FuncT1 } from "../comm/delegate/FuncT1";
import { ActionT1 } from "../comm/delegate/ActionT1";
import { Src, ReactiveDataProvider } from "../run/ReactiveDataProvider";


let c = new Config({
    a: "123"
});
let bd = new BaseDataProvider(c);

describe(" test app", function () {

    it("check Config", function () {
        var config = new Config({
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

    it("base run", async function () {
        var warder = new Warder("Test");
        let r = new ReactiveGener(bd);
        r.observe([warder])
            .where(_d => {
                return true;
            })
            .subscribe((_d: ReactiveDataProvider ) => {
                console.log("ddddd:" + JSON.stringify(_d));
                let o = _d.getWarder("Test");
                let v = o.value();
                console.log("v:" + v);
                assert.equal(o.value(), 33);
            }).observe();

        await UntilsUtils.waitSeconds(100, "");
        warder.setValue(33);
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

   it("run Async ", async function () {

       let a = await UntilsUtils.waitSeconds(1000, "QQ");
        console.log("a:" + a);

   }); 



}

);