import { UntilsUtils } from "./UntilsUtils";
import { Bridge } from "./Bridge";






UntilsUtils.openThread(async () => {
    let bd = new Bridge();
    let ans = await bd.getData();
    console.log(JSON.stringify(ans,null,4));
    await UntilsUtils.waitSeconds(9999, "99");
});


