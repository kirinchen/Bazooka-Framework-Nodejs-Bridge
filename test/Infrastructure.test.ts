
import { BaseDataProvider } from "../run/DataProvider";
import { Config, CofGet } from "../comm/config/Config";

Config.init({
    a: "123"
});
let bd = new BaseDataProvider();

test('Config Get', () => {

    Config.appendEx({
        a: "af",
        b: "bf",
        c: "cn"
    });
    let config = Config.provide();

    console.log(config.size() + ":" + config.get('a')+"!!!!");
    expect(config.size() ).toBe(3);
    expect(config.get('a')).toBe("af");
    expect(config.get('b')).toBe("bf");
    expect(config.get('c')).toBe("cn");
    expect(config.get('x', 123)).toBe(123);
    expect(config.get('xx1', 'xxxx')).toBe('xxxx');


});

let conGet: CofGet = new CofGet("test.test","vvvv");

test('Config conGet', () => {
    let config = Config.provide();
    let v = config.get(conGet);
    expect(v).toBe("vvvv");

});