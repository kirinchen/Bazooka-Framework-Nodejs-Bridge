
export enum VarQueryPoint {
    not_specify, flow, box
}

export class VarQuery {
    public runFlowUid = '';
    public runBoxUid = '';
    public point = VarQueryPoint.not_specify;
    public key = '';
}

// tslint:disable-next-line: max-classes-per-file
export class Uids {
    public runFlowUid = '';
    public runBoxUid = '';
    public uid = '';
}

// tslint:disable-next-line: max-classes-per-file
export class RpcObj {
    public uids = new Uids();
    public host: string = "http://127.0.0.1:8080/";
}

export enum VarLv {
    BOX, Flow,
}

// tslint:disable-next-line: max-classes-per-file
export class VarVal {

    public lv = VarLv.BOX;
    public key = '';
    public val = '';
}

export enum DataType {
    string, number, Boolean, NULL, object, array, NotSupport,
}

// tslint:disable-next-line: max-classes-per-file
export class ResultVal {
    public val: any;
    public type = DataType.NotSupport;
}