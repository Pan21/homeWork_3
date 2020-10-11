var MODEL = (function(){


    var _getView = function(viewName){
        $.get(`views/pages/${viewName}.html`, function(data){
            $("#content").html(data);
        });

        
    };


    return {
        getView: _getView,
    }
})();