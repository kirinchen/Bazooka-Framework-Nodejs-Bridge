"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QKey = exports.Bridge = void 0;
var rm = require("typed-rest-client/RestClient");
var dtos_1 = require("./dtos");
var TAG = "<BZK_VAR>";
var PRFIX_BOX = "@";
var PRFIX_FLOW = "~";
var Bridge = /** @class */ (function () {
    function Bridge(ro) {
        this.rest = new rm.RestClient('typed-rest-client');
        this.rpcObj = new dtos_1.RpcObj();
        this.setRecords = new Array();
        this.rpcObj = ro;
    }
    Bridge.prototype.get = function (key) {
        var k = Bridge.qKey(key);
        return this.getByQkey(k);
    };
    Bridge.prototype.getByQkey = function (k) {
        var fo = k.getVal(this.rpcObj.flowVars);
        var bo = k.getVal(this.rpcObj.boxVars);
        if (k.lv === dtos_1.VarLv.run_box)
            return bo;
        if (k.lv === dtos_1.VarLv.run_flow)
            return fo;
        if (bo)
            return bo;
        return fo;
    };
    Bridge.prototype.set = function (key, v) {
        var k = Bridge.qKey(key);
        if (k.lv === dtos_1.VarLv.not_specify || k.lv === dtos_1.VarLv.run_box)
            k.setVal(this.rpcObj.boxVars, v);
        if (k.lv === dtos_1.VarLv.run_flow)
            k.setVal(this.rpcObj.flowVars, v);
        var ek = this.setRecords.filter(function (r) { return r.lv === k.lv && r.key === k.key; });
        if (ek && ek.length > 0)
            return;
        this.setRecords.push(k);
    };
    Bridge.prototype.fetch = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var qd, url, resu;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qd = {
                            runFlowUid: this.rpcObj.uids.runFlowUid,
                            runBoxUid: this.rpcObj.uids.runBoxUid,
                            point: dtos_1.VarLv.not_specify,
                            key: key
                        };
                        url = this.rpcObj.host + "/bridge/var/";
                        return [4 /*yield*/, this.rest.create(url, qd)];
                    case 1:
                        resu = _a.sent();
                        return [2 /*return*/, resu.result];
                }
            });
        });
    };
    Bridge.prototype.ouputSets = function () {
        for (var _i = 0, _a = this.setRecords; _i < _a.length; _i++) {
            var rk = _a[_i];
            var vv = {
                key: rk.key,
                lv: rk.lv,
                val: this.getByQkey(rk)
            };
            this.markVar(vv);
        }
    };
    Bridge.prototype.markVar = function (vv) {
        // tslint:disable-next-line: no-console
        var pl = '${' + JSON.stringify(vv) + '}';
        console.log(pl);
    };
    Bridge.getInstance = function () {
        return Bridge.instance;
    };
    Bridge.initInstance = function (ro) {
        Bridge.instance = new Bridge(ro);
        return Bridge.instance;
    };
    Bridge.qKey = function (str) {
        if (str.startsWith(PRFIX_BOX))
            return new QKey(dtos_1.VarLv.run_box, str.replace(PRFIX_BOX, ''));
        if (str.startsWith(PRFIX_FLOW))
            return new QKey(dtos_1.VarLv.run_flow, str.replace(PRFIX_FLOW, ''));
        return new QKey(dtos_1.VarLv.not_specify, str);
    };
    return Bridge;
}());
exports.Bridge = Bridge;
// tslint:disable-next-line: max-classes-per-file
var QKey = /** @class */ (function () {
    function QKey(l, k) {
        this.lv = dtos_1.VarLv.not_specify;
        this.key = '';
        this.lv = l;
        this.key = k;
    }
    QKey.prototype.rollKeys = function () {
        return this.key.split('.');
    };
    QKey.prototype.getVal = function (o) {
        var m = o;
        for (var _i = 0, _a = this.rollKeys(); _i < _a.length; _i++) {
            var k = _a[_i];
            if (!m[k])
                return null;
            m = m[k];
        }
        return m;
    };
    QKey.prototype.setVal = function (o, v) {
        var ps = this.rollKeys();
        var jm = o;
        var i = 0;
        while (i < ps.length - 1) {
            if (!jm[ps[i]]) {
                jm[ps[i]] = {};
            }
            jm = jm[ps[i]];
            i++;
        }
        jm[ps[i]] = v;
    };
    return QKey;
}());
exports.QKey = QKey;
//# sourceMappingURL=Bridge.js.map