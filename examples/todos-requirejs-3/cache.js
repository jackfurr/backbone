// Cache Primer
// ----------

define(['text!app.cache'], function (appCache) {     
    'use strict';
    
    var getFiles = function () {
        var lines = appCache.split('\n'), files = [];        
        _.each(lines, function(line){ if (line.indexOf('CACHE') === -1) files.push(line) });         
        return files;                               
    };
        
    var module = {};  
    module.prime = function (xhr) { 
        if (window.applicationCache) { // if app cache has changed then reload page
            window.addEventListener('load', function (e) {
                window.applicationCache.addEventListener('updateready', function (e) {
                    window.location.reload();
                }, false);
            }, false);                        
        } else if (xhr) { // prime cache via XHR; possibly delay so that application can load before cache priming occurs
            _.each(getFiles(), function(file){ $.ajax({ url : file, dataType : 'html' }); });  // if dataType !html then $ processes scripts              
        }                                              
    };  
    
    return module;
});