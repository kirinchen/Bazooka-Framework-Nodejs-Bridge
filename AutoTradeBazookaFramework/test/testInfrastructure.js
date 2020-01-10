const assert = require('chai').assert;
const Config = require('../Config');


describe(" test app", function () {

    it("check Config", function () {
        var config = new Config({
            a: "af",
            b: "bf"
        });
        config.append({
            b: "bn",
            c: "cn"
        });
        assert.isTrue(Object.keys(config.data).length == 3);
        assert.equal(config.data.a, "af");
        assert.equal(config.data.b, "bf");
        assert.equal(config.data.c, "cn");

    });



}

);