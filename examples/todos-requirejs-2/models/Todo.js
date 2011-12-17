define(function () {     
    'use strict';
    
    var module = {}, Todo;
    
    // Todo Model
    // ----------

    // Our basic **Todo** model has `text`, `order`, and `done` attributes.
    Todo = Backbone.Model.extend({
        
        // Default attributes for a todo item.
        defaults: {
            done:  false
        },        
        
        // Toggle the `done` state of this todo item.
        toggle: function() {
            console.log('toggle');
            this.save({done: !this.get("done")});
        }

    });   
    
    module.create = function (properties) {
        return new Todo(properties);            
    };  
    
    return module;
});