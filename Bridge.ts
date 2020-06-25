const Client = require('node-rest-client').Client;

export enum VarQueryPoint {
    flow, box
}

export interface VarQuery {
    runFlowUid: string;
    runBoxUid: string;
	  point;

}

export class Bridge {

    client = new Client();
    host: string = "http://127.0.0.1:8080/";
    flowRunUid: string;



    public init(h: string, frid: string) {
        this.host = h;
        this.flowRunUid = frid;
    }

    public async getVar(key: string) {

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