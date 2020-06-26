const Client = require('node-rest-client').Client;

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

    public async getData(): Promise<string> {

        return new Promise<string>((rev, rej) => {

            this.client.get("https://whattomine.com/coins.json", function (data, response) {
                // parsed response body as js object
                console.log(data);
                // raw response
                console.log(response);

                rev(data);
            });

        });
    }
}