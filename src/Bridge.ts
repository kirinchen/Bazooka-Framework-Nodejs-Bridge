import * as rm from 'typed-rest-client/RestClient';
import { RpcObj, VarVal, ResultVal, VarQuery, VarLv } from './dtos';

const TAG: string = "<BZK_VAR>";
const PRFIX_BOX = "@";
const PRFIX_FLOW = "~";

export class Bridge {

    private static instance: Bridge;
    private rest = new rm.RestClient('typed-rest-client');
    private rpcObj = new RpcObj();
    private setRecords = new Array<QKey>();

    private constructor(ro: RpcObj) {
        this.rpcObj = ro;
    }


    public get(key: string): any {
        const k = Bridge.qKey(key);
        return this.getByQkey(k);
    }

    private getByQkey(k: QKey): any {
        const fo = k.getVal(this.rpcObj.flowVars);
        const bo = k.getVal(this.rpcObj.boxVars);
        if (k.lv === VarLv.run_box) return bo;
        if (k.lv === VarLv.run_flow) return fo;
        if (bo) return bo;
        return fo;
    }

    public set(key: string, v: any): void {
        const k = Bridge.qKey(key);
        if (k.lv === VarLv.not_specify || k.lv === VarLv.run_box) k.setVal(this.rpcObj.boxVars, v);
        if (k.lv === VarLv.run_flow) k.setVal(this.rpcObj.flowVars, v);
        const ek = this.setRecords.filter(r => r.lv === k.lv && r.key === k.key);
        if (ek && ek.length > 0) return;
        this.setRecords.push(k);
    }

    public async fetch(key: string): Promise<ResultVal | null> {
        const qd: VarQuery = {
            runFlowUid: this.rpcObj.uids.runFlowUid,
            runBoxUid: this.rpcObj.uids.runBoxUid,
            point: VarLv.not_specify,
            key
        };
        const url = this.rpcObj.host + "/bridge/var/"
        const resu = await this.rest.create<ResultVal>(url, qd);
        return resu.result;
    }

    public ouputSets(): void {
        for (const rk of this.setRecords) {
            const vv: VarVal = {
                key: rk.key,
                lv: rk.lv,
                val: this.getByQkey(rk)
            };
            this.markVar(vv);
        }
    }

    public markVar(vv: VarVal) {
        // tslint:disable-next-line: no-console
        const pl = '${' + JSON.stringify(vv) + '}';
        console.log(pl);
    }



    public static getInstance(): Bridge {
        return Bridge.instance;
    }

    public static initInstance(ro: RpcObj): Bridge {
        Bridge.instance = new Bridge(ro);
        return Bridge.instance;
    }

    public static qKey(str: string): QKey {
        if (str.startsWith(PRFIX_BOX)) return new QKey(VarLv.run_box, str.replace(PRFIX_BOX, ''));
        if (str.startsWith(PRFIX_FLOW)) return new QKey(VarLv.run_flow, str.replace(PRFIX_FLOW, ''));
        return new QKey(VarLv.not_specify, str);
    }




}

// tslint:disable-next-line: max-classes-per-file
export class QKey {
    public lv = VarLv.not_specify;
    public key = '';

    constructor(l: VarLv, k: string) {
        this.lv = l;
        this.key = k;
    }

    public rollKeys(): string[] {
        return this.key.split('.');
    }

    public getVal(o: any): any {

        let m = o;
        for (const k of this.rollKeys()) {
            if (!m[k]) return null;
            m = m[k];
        }
        return m;
    }

    public setVal(o: any, v: any): void {
        const ps = this.rollKeys();
        let jm = o;
        let i = 0;
        while (i < ps.length - 1) {
            if (!jm[ps[i]]) {
                jm[ps[i]] = {};
            }
            jm = jm[ps[i]];

            i++;
        }
        jm[ps[i]] = v;
    }

}