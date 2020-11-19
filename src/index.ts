import { Bridge } from './Bridge';
const b = Bridge.initInstance({
    host: '',
    uids: {
        runBoxUid: '',
        runFlowUid: '',
        uid: ''
    },
    boxVars:{
        v1:123,
        v2:23,
        v0:{
            a:'q',
            b:'c'
        }
    },
    flowVars:{
        v1:1234,
        v2:234,
        v3:'v3'
    }
});

// tslint:disable-next-line: no-console
console.log(  b);
b.set('@v0.c','TEST');
console.log(  b.get('@v0.c')+' !!!');
b.set('@v0.a',234);
b.set('@v0.a',true);
b.set('~v0.d','new!');
b.set('ii.d','new!23');
b.ouputSets();
console.log(  'END');