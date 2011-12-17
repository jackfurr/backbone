// Load the application once the DOM is ready, using `jQuery.ready`:
define (['collections/TodoList', 'views/App'], function (todoCollection, appView) {
    'use strict';
    
    var module = {};
    
    module.init = function () {       
        var collection = todoCollection.create();            

        return appView.create({ 'collection' : collection });             
    };
      
    return module; 
});