"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultVal = exports.DataType = exports.VarVal = exports.VarLv = exports.RpcObj = exports.Uids = exports.VarQuery = exports.VarQueryPoint = void 0;
var VarQueryPoint;
(function (VarQueryPoint) {
    VarQueryPoint[VarQueryPoint["not_specify"] = 0] = "not_specify";
    VarQueryPoint[VarQueryPoint["flow"] = 1] = "flow";
    VarQueryPoint[VarQueryPoint["box"] = 2] = "box";
})(VarQueryPoint = exports.VarQueryPoint || (exports.VarQueryPoint = {}));
var VarQuery = /** @class */ (function () {
    function VarQuery() {
        this.runFlowUid = '';
        this.runBoxUid = '';
        this.point = VarQueryPoint.not_specify;
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
    }
    return RpcObj;
}());
exports.RpcObj = RpcObj;
var VarLv;
(function (VarLv) {
    VarLv[VarLv["BOX"] = 0] = "BOX";
    VarLv[VarLv["Flow"] = 1] = "Flow";
})(VarLv = exports.VarLv || (exports.VarLv = {}));
// tslint:disable-next-line: max-classes-per-file
var VarVal = /** @class */ (function () {
    function VarVal() {
        this.lv = VarLv.BOX;
        this.key = '';
        this.val = '';
    }
    return VarVal;
}());
exports.VarVal = VarVal;
var DataType;
(function (DataType) {
    DataType[DataType["string"] = 0] = "string";
    DataType[DataType["number"] = 1] = "number";
    DataType[DataType["Boolean"] = 2] = "Boolean";
    DataType[DataType["NULL"] = 3] = "NULL";
    DataType[DataType["object"] = 4] = "object";
    DataType[DataType["array"] = 5] = "array";
    DataType[DataType["NotSupport"] = 6] = "NotSupport";
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