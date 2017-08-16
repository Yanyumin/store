$(function(){

    var flag = false;
    $("#userTel").keyup(function(){
        var phone = $("#userTel").val();
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
                $(".telMsg").css("display","none").html();
            } 
    })
    $("#userPwd").keyup(function(){
        var password = $("#userPwd").val();
        var info = "";
        var patrn=/^(?=[`~!@#\$%\^&*\(\)\-_=\+\\\|\[\]\{\}:;\"\',.<>\/\?\d]*[a-zA-Z]+)(?=[a-zA-Z`~!@#\$%\^&*\(\)\-_=\+\\\|\[\]\{\}:;\"\',.<>\/\?]*\d+)[`~!@#\$%\^&*\(\)\-_=\+\\\|\[\]\{\}:;\"\',.<>\/\?\w]{10,16}$/;
        if(!patrn.exec(password)){
            console.log(typeof patrn.exec(password));
            info = "请输入10位以上的由数字、字母、符号组成的密码！"
            $(".pwdMsg").css("display","block").html(info);
            return false;
        }else{
            flag = true;
            $(".pwdMsg").css("display","none").html();
        }
    })
})