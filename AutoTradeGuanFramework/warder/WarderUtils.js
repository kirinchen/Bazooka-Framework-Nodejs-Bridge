const ObservableWarder = require('./ObservableWarder');
const Observable = require('rxjs').Observable;

module.exports = {

    create: function (Type) {
        var wObj = new Type();
        var ob = Observable.create(function (observer) {

        });

    }


};