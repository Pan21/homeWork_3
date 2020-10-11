function initListeners(){
    $("#nav nav a").click(function(e){
        var btnID = this.id;
        MODEL.getView(btnID);
    });
}

function initPages(){
    $.get('views/nav.html', function(nav){
        $("#nav").html(nav);
        console.log("working")
        initListeners();
    });

    $.get('views/pages/home.html', function(data){
        $("#content").html(data);
    });
}


$(document).ready(function(){
    initPages();
}); 