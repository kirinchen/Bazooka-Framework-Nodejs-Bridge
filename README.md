# AutoTrade Bazooka Framework

# Introduction

* Investors can just focus Order strategy
> * Monitoring value & Value threshold
> * Order Logic

* Exchange Or stock brokerage Can provide simple and consistent API 
> * This part can be a third party
> * Does not change the Spec of the original API, Just impl this framework some classes

* Integrate trading strategies and APIs to make it more scalable and consistent. 
> * DRY for any auto trade or trade almost code.
> * can Cross use different API


# Usage

## Investors Baisc Usage

1. ``` npm i bzk ```

2. Follow this

```javascript
const Reactiver = require('bzk').Reactiver;
const BTCWarder = /* BTCWarder it`s extends require('./warder/Warder'); Thirst Party*/
const OilWarder = /* OilWarder it`s extends require('./warder/Warder'); Thirst Party */
const oilAPI = /* ; */

var btcWarder = new BTCWarder({Some Cofig});
var oilWarder = new OilWarder({Some Cofig});


Reactiver.observe([btcWarder,oilWarder])  // 監控變數
    .where(_d => {  //設定條件門檻
        return _d.btcWarder.value() > 9000 && _d.oilWarder.value() < 30;
    })
    .subscribe(_d => {  // 下單邏輯
      oilAPI.order({Some Cofig});
    });


```



## Third party API developer

### main js (index.is) spec

```javascript
module.export={
  name : 'unique name',
  warders : {
    catalogue:[
    {
      name: 'method1',
      args:[],
      ref: module.export.method1
    }
    ] ,
    method1:(arts1...)=> //TODO
  }
}
```


# Setup / Modify this Porject
1. Install Nodejs and npm 
2. Go to [Root]/AutoTradeBazookaFramework/ 
3. type cmd : ``npm install``
4. try is it working : ``node server.js``
then show this :
```
d:[object Warder]
d:[object Object]
```

