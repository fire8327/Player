/*jshint esnext: true */
$(".param").each(function (index, el){
    $(el).click(function() {        
        $("#modal").addClass("z-50");
        $("#overlay").addClass("z-40");
        setTimeout(function(){
            $("#modal").removeClass("opacity-0");
            $("#overlay").removeClass("opacity-0");
        }, 200);    
    });
});

$("#close").click(function() {
    $("#modal").addClass("opacity-0");
    $("#overlay").addClass("opacity-0");
    setTimeout(function(){
        $("#modal").removeClass("z-50");
        $("#overlay").removeClass("z-40");
    }, 300);    
});

$("#overlay").click(function() {
    $("#modal").addClass("opacity-0");
    $("#overlay").addClass("opacity-0");
    setTimeout(function(){
        $("#modal").removeClass("z-50");
        $("#overlay").removeClass("z-40");
    }, 300); 
});

/* admin */
$("#adm").click(function() {
    $("#block1").toggleClass("hidden");
    $("#block3").toggleClass("hidden");
    $("#block4").toggleClass("hidden");
});