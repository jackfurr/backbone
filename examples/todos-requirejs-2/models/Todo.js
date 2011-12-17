define(function () {     
    'use strict';
    
    var module = {};
  
    module.create = function (params) {
	    // Todo Model
	    // ----------
	
	    // Our basic **Todo** model has `text`, `order`, and `done` attributes.
	    var Todo = Backbone.Model.extend({
	        
	        // Default attributes for a todo item.
	        defaults: function() {
		    	return {
		        	done:  false,
		        	order: params.collection.nextOrder()
		    	};
	        },
	        
	        // Toggle the `done` state of this todo item.
	        toggle: function() {
	            console.log('toggle');
	            this.save({done: !this.get("done")});
	        }

    	});         
                      
        return Todo;            
    };  
    
    return module;
});