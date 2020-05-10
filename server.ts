import { Warder } from "./warder/Warder";
import { ReactiveGener } from "./run/ReactiveGener";
import { BZKLauncher } from "./run/BZKLauncher";
import { Config, CofGet, PropertiesCofigLoad } from "./comm/config/Config";
import { Runer } from "./run/Runer";
import { UntilsUtils } from "./UntilsUtils";
import { BaseDao, Entity, ValueMap } from "./record/BaseDao";




var warder = new Warder("Test");

/*warder.subscribe(d => {
    console.log("d:" + d);
});

warder.setValue(33);*/




BZKLauncher.getInstance()
    .beforeInit(async () => {
        await PropertiesCofigLoad.load("./myconfig/bzk.properties");
        Config.appendEx({
            a: "123"
        });


        let bd = new BaseDao();
        for (let i = 0; i < 30; i++) {
            let et: Entity = {
                measurement: 'test',
                source: 'testS',
                time: new Date(),
                valueMap: new ValueMap().put("va", i).put("kv",i*2)
            };
            bd.insert(et);
            await UntilsUtils.waitSeconds(100,"");
        }
        bd.flush();






    })
    .add((rg: ReactiveGener) => rg.observe([warder])
        .where(_d => {
            return true;
        })
        .subscribe(_d => {
            console.log("dobserve:" + _d);
        })
    )
    .start();

UntilsUtils.openThread(async () => {
    await UntilsUtils.waitSeconds(300, "99");
    warder.setValue(99);
});


