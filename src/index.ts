import { Bridge } from './Bridge';
const b = Bridge.initInstance({
    host: '',
    uids: {
        runBoxUid: '',
        runFlowUid: '',
        uid: ''
    }
});

// tslint:disable-next-line: no-console
console.log(  b);