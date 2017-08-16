$(function(){
    // 获取地址
    function init() {
		$.ajax({
			type: "POST",
			dataType: "json",
			url: "http://192.168.10.81:8080/mygrowthdoc/getUniversity",
			data: {
				// "universities":[]
			},
			success: function (data) {
					// console.log($('#school'));
				for( var i=0; i<data.universities.length; i++){

					console.log(data.universities[i]);
					$('#school').append("<li>" + data.universities[i] + "</li>");
				}
			},
			error: function(){}
		});
	}
	init();

	var school;
	$('#ipt').focus(function () {
		if( $("#dormitory").css("display", "none")){
			
			$('#school').css("display", "block");
		}else {
			$('#school').css("display", "none");
		}
	});	

	$('#school').on("click", "li", function () {
		console.log("学校：" + $(this).text());
		$('#ipt').val($(this).text());

		$('#dormitory').empty();
		$('#dormitory').append("<li class='disabled'>请选择宿舍楼</li>");
		school = $('#ipt').val();
		$('#dormitory').css("display", "block");
		$('#school').css("display", "none");
		// console.log(school);

		$.ajax({
			type: "POST",
			dataType: "json",
			url: "http://192.168.10.81:8080/mygrowthdoc/getUniversity",
			data: {
				param: school
			},
			success: function (data) {
				for( var i=0; i<data.number.length; i++){
					$('#dormitory').append("<li >" + data.number[i] + "</li>");
				}
			},
			error: function(){}
		});
		
	});

	$('#dormitory').on("click", "li", function () {
		var num = $(this).text();
		console.log("school: " + school + " 选中的楼号：" + num);
		$('#ipt').val(school + num);
		// $('#school').val($('#school').val() + num);
		// $('#school').val(school + num);
		$('#dormitory').css("display", "none");
    });
    

    //约团首选
    // $.ajax({
    //     type:"post",
    //     datatype:"json",
    //     // url:"http://192.168.10.81:8080/mygrowthdoc/getYuetuanshouxuan",
    //     success: function(data){
    //         var jsData = JSON.parse(data);
    //             var data = jsData.img;
    //             console.log(data);
    //             var html = "";
    //             for(var i in data){
    //                 html += '<div class="hot-product">'+
    //                             '<img src="'+data[i].imgUrl+'"/>'+
    //                             '<div class="product-left">'+
    //                             '<span class="must">'+data[i].bigTitle+'</span>'+
    //                             '<span class="name">'+data[i].middleTitle+'</span>'+
    //                             '</div>'+
    //                         '</div>';
    //             }
    //                     var firstContent = $(".first-content");
    //                     firstContent.html(html);
    //     }
    // })



        function yuetuan(){
            var dataI = {
                "img": [
                    { "imgUrl": "img/news/one.png","bigTitle":"菲律宾香蕉片","middleTitle":"宿舍神器"},
                    { "imgUrl": "img/news/two.png","bigTitle":"菲律宾香蕉片","middleTitle":"宿舍神器"},
                    { "imgUrl": "img/news/three.png","bigTitle":"菲律宾香蕉片","middleTitle":"宿舍神器"},
                    { "imgUrl": "img/news/four.png","bigTitle":"菲律宾香蕉片","middleTitle":"宿舍神器"}
                    ],
                };
                var data = dataI.img;
                console.log(data);
                var html = "";
                for(var i in data){
                    html += '<div class="hot-product">'+
                                '<img src="'+data[i].imgUrl+'"/>'+
                                '<div class="product-left">'+
                                '<span class="must">'+data[i].bigTitle+'</span>'+
                                '<span class="name">'+data[i].middleTitle+'</span>'+
                                '</div>'+
                            '</div>';
                }
                var firstContent = $(".first-content");
                firstContent.html(html);
        }
            yuetuan();
        


    // $.ajax({
    //     type: "get",
    //     datatype: "json",
    //     url: "http://192.168.10.81:8080/mygrowthdoc/getGoods",
    //     success: function(data){
    //         var jsData = JSON.parse(data);
    //         var data = jsData.good;
    //         var html = "";
    //         for( var i in data){
    //             html += '<li class="similar-goods">'+
    //                     '<a href="#">'+
    //                     '<div class="similar-product">'+
    //                     '<div class="similar-posre">'+
    //                     '<img src="'+data[i].imgUrl+'" alt="">'+
    //                     '</div>'+
    //                     '<span class="product-text">'+data[i].goodName+'</span>'+
    //                     '<p class="product-info">'+
    //                     '<span class="product-price">'+data[i].goodPrice+'</span>'+
    //                     '<p class="command">'+
    //                     '<b>'+data[i].goodCommentCount+'</b> &nbsp;好评'+
    //                     '<i>'+data[i].goodPositiveRating+'</i>'+
    //                     '<b class="gocar"><img src="image/liebiaolan-gouwuche@2x.png" alt=""></b>'+
    //                     '</p>'+
    //                     '</p>'+
    //                     '</div>'+
    //                     '</a>'+
    //                     '</li>';
    //         }
    //                 var product = $(".ym-product ul");
    //                 product.html(html);
    //     }
    // })

    function product(){
        var data = {
            "good" : [
                {"imgUrl":"img/goods/good1.png","goodName":"新鲜草莓干","goodPrice":"16.88","goodCommentCount":"5条评论","goodPositiveRating":"100%"},
                {"imgUrl":"img/goods/good1.png","goodName":"新鲜草莓干","goodPrice":"16.88","goodCommentCount":"5条评论","goodPositiveRating":"100%"},
                {"imgUrl":"img/goods/good1.png","goodName":"新鲜草莓干","goodPrice":"16.88","goodCommentCount":"5条评论","goodPositiveRating":"100%"},
                {"imgUrl":"img/goods/good1.png","goodName":"新鲜草莓干","goodPrice":"16.88","goodCommentCount":"5条评论","goodPositiveRating":"100%"},
                {"imgUrl":"img/goods/good1.png","goodName":"新鲜草莓干","goodPrice":"16.88","goodCommentCount":"5条评论","goodPositiveRating":"100%"},
                {"imgUrl":"img/goods/good1.png","goodName":"新鲜草莓干","goodPrice":"16.88","goodCommentCount":"5条评论","goodPositiveRating":"100%"},
                {"imgUrl":"img/goods/good1.png","goodName":"新鲜草莓干","goodPrice":"16.88","goodCommentCount":"5条评论","goodPositiveRating":"100%"},
                {"imgUrl":"img/goods/good1.png","goodName":"新鲜草莓干","goodPrice":"16.88","goodCommentCount":"5条评论","goodPositiveRating":"100%"},
                {"imgUrl":"img/goods/good1.png","goodName":"新鲜草莓干","goodPrice":"16.88","goodCommentCount":"5条评论","goodPositiveRating":"100%"},
                {"imgUrl":"img/goods/good1.png","goodName":"新鲜草莓干","goodPrice":"16.88","goodCommentCount":"5条评论","goodPositiveRating":"100%"},
                {"imgUrl":"img/goods/good1.png","goodName":"新鲜草莓干","goodPrice":"16.88","goodCommentCount":"5条评论","goodPositiveRating":"100%"}
            ]
        };
            var data = data.good;
            var html = "";
            for( var i in data){
                html += '<li class="similar-goods">'+
                        '<a href="#">'+
                        '<div class="similar-product">'+
                        '<div class="similar-posre">'+
                        '<img src="'+data[i].imgUrl+'" alt="">'+
                        '</div>'+
                        '<span class="product-text">'+data[i].goodName+'</span>'+
                        '<p class="product-info">'+
                        '<span class="product-price">'+data[i].goodPrice+'</span>'+
                        '<p class="command">'+
                        '<b>'+data[i].goodCommentCount+'</b> &nbsp;好评'+
                        '<i>'+data[i].goodPositiveRating+'</i>'+
                        '<b class="gocar"><img src="image/liebiaolan-gouwuche@2x.png" alt=""></b>'+
                        '</p>'+
                        '</p>'+
                        '</div>'+
                        '</a>'+
                        '</li>';
            }
                    var product = $(".ym-product ul");
                    product.html(html);
    };
        product();


    // $.ajax({
    //     type: "get",
    //     datatype: "json",
    //     url: "http://192.168.10.81:8080/mygrowthdoc/getHotTodayGoods",
    //     success:function(data){
    //         var jsData = JSON.parse(data);
    //         var data = jsData.good;
    //         var html = "";
    //         for(var i in data){
    //             console.log(data[i]);
    //             html+= '<div class="pro-all">'+
    //                     '<a href="#" class="pro1">'+
    //                     '<img src="'+ data[i].imgUrl+'" width="70%" alt="">'+
    //                     '<span>'+data[i].goodName+'</span>'+
    //                     '</a>'+
    //                     '</div>';
    //         }
    //     }

    // })
})
