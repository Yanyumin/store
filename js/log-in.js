$(function(){

    $("#userTel").keyup(function(){
        var phone = $("#userTel").val();
        var flag = false;
        var message = "";
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if(phone == ''){
                message = "手机号码不能为空！";
                $(".telMsg").css("display","block").html(message);
                return false;
            }else if(phone.length !=11){
                message = "请输入有效的手机号码！";
                $(".telMsg").css("display","block").html(message);
                return false;
            }else if(!myreg.test(phone)){
                message = "请输入有效的手机号码！";
                $(".telMsg").css("display","block").html(message);
                return false;
            }else{
                flag = true;
                $(".telMsg").css("display","none").html("");
            } 
    })
})