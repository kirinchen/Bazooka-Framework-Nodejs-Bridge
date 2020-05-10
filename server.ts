import { Warder } from "./warder/Warder";
import { ReactiveGener } from "./run/ReactiveGener";
import { BZKLauncher } from "./run/BZKLauncher";
import { Config, CofGet, PropertiesCofigLoad } from "./comm/config/Config";
import { Runer } from "./run/Runer";
import { UntilsUtils } from "./UntilsUtils";




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


