import * as rm from 'typed-rest-client/RestClient';
import { RpcObj, VarVal, ResultVal, VarQuery, VarQueryPoint } from './dtos';

const TAG: string = "<BZK_VAR>";

export class Bridge {

    private static instance: Bridge;
    private rest = new rm.RestClient('typed-rest-client');
    private rpcObj = new RpcObj();

    private constructor(ro: RpcObj) {
        this.rpcObj = ro;
    }



    public async getVar(key: string): Promise<ResultVal | null> {
        const qd: VarQuery = {
            runFlowUid: this.rpcObj.uids.runFlowUid,
            runBoxUid: this.rpcObj.uids.runBoxUid,
            point: VarQueryPoint.box,
            key
        };
        const url = this.rpcObj.host + "/bridge/var"
        const resu = await this.rest.create<ResultVal>(url, qd);
        return resu.result;

    }

    public markVar(vv: VarVal) {
        // tslint:disable-next-line: no-console
        console.log(TAG + JSON.stringify(vv) + TAG);
    }



    public static getInstance(): Bridge {
        return Bridge.instance;
    }

    public static initInstance(ro: RpcObj): Bridge {
        Bridge.instance = new Bridge(ro);
        return Bridge.instance;
    }


}