// window.onload = function(){
//     deleteBox();
// }
// function deleteBox(){
//     var maskBox = document.querySelector(".mask");
//     var clear = document.querySelector(".clear");
//     var clearBox = maskBox.querySelector(".clearBox");
//     var deleteBox = null;
//     clear.tap(maskBox,function(){
        
//     })
// }
$(function(){
    $(".clear").click(function(){
        $(".mask").show();
        $(".clearBox").addClass("animated bounceInDown");
    });
    $(".cancel").click(function(){
        $(".mask").hide();
    });

    $(".tel").click(function(){
        $(".mask-tel").show();
        $(".clearBox").addClass("animated bounceInDown");
    });
    $(".cancel").click(function(){
        $(".mask-tel").hide();
    });

    
         console.log($(".exit"));
     $(".exit").tap(function(){
        $(".mask-exit").show();
        $(".clearBox").addClass("animated bounceInDown");
    });
    $(".cancel").click(function(){
        $(".mask-exit").hide();
    });
})