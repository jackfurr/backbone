define (['collections/todos', 'views/app', 'models/todo'], function (coll, appView, mod) {
    'use strict';
    
    var module = {};
    
    module.init = function () {       
        var collection = coll.create(), 
            model = mod.create({ 'collection' : collection });  
                  
        collection.model = model;
        return appView.create({ 'collection' : collection });             
    };
      
    return module; 
});