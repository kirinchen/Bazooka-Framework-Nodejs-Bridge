"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultVal = exports.DataType = exports.VarVal = exports.VarLv = exports.RpcObj = exports.Uids = exports.VarQuery = void 0;
var VarQuery = /** @class */ (function () {
    function VarQuery() {
        this.runFlowUid = '';
        this.runBoxUid = '';
        this.point = VarLv.not_specify;
        this.key = '';
    }
    return VarQuery;
}());
exports.VarQuery = VarQuery;
// tslint:disable-next-line: max-classes-per-file
var Uids = /** @class */ (function () {
    function Uids() {
        this.runFlowUid = '';
        this.runBoxUid = '';
        this.uid = '';
    }
    return Uids;
}());
exports.Uids = Uids;
// tslint:disable-next-line: max-classes-per-file
var RpcObj = /** @class */ (function () {
    function RpcObj() {
        this.uids = new Uids();
        this.host = "http://127.0.0.1:8080/";
        this.boxVars = {};
        this.flowVars = {};
    }
    return RpcObj;
}());
exports.RpcObj = RpcObj;
var VarLv;
(function (VarLv) {
    VarLv["not_specify"] = "not_specify";
    VarLv["run_flow"] = "run_flow";
    VarLv["run_box"] = "run_box";
})(VarLv = exports.VarLv || (exports.VarLv = {}));
// tslint:disable-next-line: max-classes-per-file
var VarVal = /** @class */ (function () {
    function VarVal() {
        this.lv = VarLv.not_specify;
        this.key = '';
        this.val = '';
    }
    return VarVal;
}());
exports.VarVal = VarVal;
var DataType;
(function (DataType) {
    DataType["string"] = "string";
    DataType["number"] = "number";
    DataType["Boolean"] = "Boolean";
    DataType["NULL"] = "NULL";
    DataType["object"] = "object";
    DataType["array"] = "array";
    DataType["NotSupport"] = "NotSupport";
})(DataType = exports.DataType || (exports.DataType = {}));
// tslint:disable-next-line: max-classes-per-file
var ResultVal = /** @class */ (function () {
    function ResultVal() {
        this.type = DataType.NotSupport;
    }
    return ResultVal;
}());
exports.ResultVal = ResultVal;
//# sourceMappingURL=dtos.js.map