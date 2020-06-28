const Client = require('node-rest-client').Client;

const TAG: string = "<BZK_VAR>";

export enum VarQueryPoint {
    not_specify ,  flow, box
}

export class VarQuery {
    public runFlowUid: string;
    public runBoxUid: string;
    public point: VarQueryPoint;
    public key: string;
}

export class Uids {
    public runFlowUid: string;
    public runBoxUid: string;
    public uid: string;
}

export class RpcObj {
    public uids: Uids;
    public host: string = "http://127.0.0.1:8080/";
}

export enum VarLv {
    BOX, Flow,
}

export class VarVal {

    public lv: VarLv;
    public key: string;
    public val: string;
}

export class Bridge {

    client = new Client();

    rpcObj: RpcObj;



    public init(ro: RpcObj) {
        this.rpcObj = ro;
    }

    public async getVar(key: string): Promise<string> {
        return new Promise((rev, rej) => {
            let qd: VarQuery = {
                runFlowUid: this.rpcObj.uids.runFlowUid,
                runBoxUid: this.rpcObj.uids.runBoxUid,
                point: VarQueryPoint.box,
                key: key
            };
            // set content-type header and data as json in args parameter
            var args = {
                data: qd,
                headers: { "Content-Type": "application/json" }
            };
            this.client.post(this.rpcObj.host + "/bridge/var"
                , args, function (data, response) {
                // parsed response body as js object
                console.log(data);
                // raw response
                console.log(response);
            });
        });
    }

    public markVar(vv: VarVal) {
        console.log(TAG + JSON.stringify(vv)+TAG);
    }


}