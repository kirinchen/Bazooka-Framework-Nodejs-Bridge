const assert = require('chai').assert;
const Config = require('../Config');


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
        assert.equal(config.get('x',123), 123);

    });



}

);