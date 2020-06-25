const Client = require('node-rest-client').Client;


export class Bridge {

    client = new Client();


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