


export class VarQuery {
    public runFlowUid = '';
    public runBoxUid = '';
    public point = VarLv.not_specify;
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
    not_specify = 'not_specify', run_flow = 'run_flow', run_box = 'run_box'
}

// tslint:disable-next-line: max-classes-per-file
export class VarVal {

    public lv = VarLv.not_specify;
    public key = '';
    public val = '';
}

export enum DataType {
    string = 'string', number = 'number', Boolean = 'Boolean', NULL = 'NULL', object = 'object', array = 'array', NotSupport = 'NotSupport',
}

// tslint:disable-next-line: max-classes-per-file
export class ResultVal {
    public val: any;
    public type = DataType.NotSupport;
}