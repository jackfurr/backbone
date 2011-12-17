// Load the application once the DOM is ready, using `jQuery.ready`:
define (['collections/TodoList', 'views/App', 'models/Todo'], function (todoCollection, appView, todoModel) {
    'use strict';
    
    var module = {};
    
    module.init = function () {       
        var collection = todoCollection.create(), 
        	model = todoModel.create({ 'collection' : collection });  
                  
		collection.model = model;
        return appView.create({ 'collection' : collection });             
    };
      
    return module; 
});