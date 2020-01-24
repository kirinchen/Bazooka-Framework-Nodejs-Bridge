const assert = require('chai').assert;
import { Config } from "../Config";
import { Warder } from '../warder/Warder'
import { Reactiver } from "../run/Reactiver";
import { UntilsUtils } from "../UntilsUtils";


let c = new Config({
    a: "123"
});

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

    it("base run", function () {
        var warder = new Warder("Test");
        warder.subscribeAction(d => {
            console.log("d:" + d);
        });
        warder.setValue(33);
        let r = new Reactiver(c);
        r.observe([warder])
            .where(_d => {
                return true;
            })
            .subscribe(_d => {
                console.log("d:" + JSON.stringify(_d));
                assert.equal(_d.Test.value(), 33);
            }).observe();
    });

    it("run Async Do", async function () {
        var warder = new Warder("Test");
        warder.subscribeAction(d => {
            console.log("d:" + d);
        });
        warder.setValue(33);
        let r = new Reactiver(c);
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
    });

   it("run Async ", async function () {

       let a = await UntilsUtils.waitSeconds(1000, "QQ");
        console.log("a:" + a);

   }); /**/



}

);