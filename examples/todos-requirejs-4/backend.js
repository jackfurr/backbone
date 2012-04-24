;(function () {
    var todoCount = localStorage.getItem('todos-badge-count-cache');
    
    if (todoCount)
        pokki.setIconBadge(todoCount);
})();
