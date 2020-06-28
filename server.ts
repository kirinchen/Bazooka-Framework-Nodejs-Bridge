import { UntilsUtils } from "./UntilsUtils";
import { Bridge, VarLv } from "./Bridge";






UntilsUtils.openThread(async () => {
    let bd = new Bridge();
    bd.markVar({
        key: "qqq",
        lv: VarLv.BOX,
        val:"zzzz"
    });
    await UntilsUtils.waitSeconds(9999, "99");
});


