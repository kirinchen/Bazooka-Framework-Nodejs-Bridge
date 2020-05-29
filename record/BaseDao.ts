import { InfluxDB, FluxTableMetaData, Point, HttpError, WriteApi } from '@influxdata/influxdb-client'
import { Config } from '../comm/config/Config';

export class BaseDao {

    client: InfluxDB;
    writeApi: WriteApi;

    public constructor() {
        this.client = new InfluxDB({ url: Config.provide().get("influxdata.url"), token: Config.provide().get("influxdata.token") });
        this.writeApi = this.client.getWriteApi(Config.provide().get("influxdata.org"), Config.provide().get("influxdata.bucket"));

        console.log("init BaseDao");
    }


    public insert(e: Entity) {
        console.log(`insert ${e}`);
        let dateTime = e.time.getTime();
        let timestamp = dateTime * 1000000; //Math.floor(dateTime / 1000);
        let point1 = new Point(e.measurement)
            .timestamp(timestamp + '')
            .tag('source', e.source);
        e.valueMap.forEach((v, k) => {
            point1.floatField(k, v);
        });
        e.tagMap.forEach((v, k) => {
            point1.tag(k, v);
        });
        
        this.writeApi.writePoint(point1);
        console.log(` ${point1}`);
    }

    public flush() {
        this.writeApi
            .close()
            .then(() => {
                console.log('FINISHED ... now try ./query.ts');
            })
            .catch(e => {
                console.error(e)
                if (e instanceof HttpError && e.statusCode === 401) {
                    console.log('Run ./onboarding.js to setup a new InfluxDB database.')
                }
                console.log('\nFinished ERROR')
            });
    }


}

export class Entity extends Object {
    measurement: string;
    time: Date;
    source: string;
    valueMap: ValueMap;
    tagMap: TagMap;



    public static defaultKeys(): Array<string> {
        return ['measurement', 'time', 'source'];
    }

}

export class ValueMap extends Map<string, number>{
    public put(k: string, v: number): ValueMap {
        this.set(k, v);
        return this;
    }

    public putAll(obj: object): ValueMap {
        Object.entries(obj).forEach(
            ([key, value]) => {
                if (typeof value === 'number' && !isNaN(value) ) {
                    this.set(key, value);
                }
            } 
        );
        return this;
    }

}

export class TagMap extends Map<string, string>{
    public put(k: string, v: string): TagMap {
        this.set(k, v);
        return this;
    }

    public putAll(obj: object): TagMap {
        Object.entries(obj).forEach(
            ([key, value]) => {
                if (typeof value === 'string') {
                    this.set(key, value);
                }
            }
        );
        return this;
    }

}