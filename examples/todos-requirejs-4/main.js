(function () {
    'use strict';    
    
    var bootstrap;

    bootstrap = require({ context : 'bootstrap' });
    bootstrap(['order!mvc', 'order!app'], function (a, app) {
        app.init();                
    });  
}());