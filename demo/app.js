const Bridge = require('bzk/dist/Bridge').Bridge;
const RpcObj = require('bzk/dist/dtos').RpcObj;
const Uids = require('bzk/dist/dtos').Uids;
const VarQuery = require('bzk/dist/dtos').VarQuery;
const VarQueryPoint = require('bzk/dist/dtos').VarQueryPoint;

let initJson = '{"uids":{"runFlowUid":"xxx","runBoxUid":"aaa","uid":"IUbDtxG9wY4GQ6eNXtyGNqtwhrfIU1hb"},"host":"http://127.0.0.1:8080"}';
let initO = JSON.parse(initJson);
let $ = Bridge.initInstance(initO);


async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function call(){
    await delay(3000);
    console.log('qqq');
    await delay(3000);
    console.log('$:' + $);
    await delay(3000);
}

call();
