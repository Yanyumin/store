(function (doc, win) {
var docEl = doc.documentElement,
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
recalc = function () {
var clientWidth = docEl.clientWidth;
if (!clientWidth) return;
if(clientWidth>=640){
docEl.style.fontSize = '100px';
}else{
docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
}
};


if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


//首页轮播图

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });


//tab栏切换

$(function(){
		     $('#tabs a').click(function(e) {
		          e.preventDefault();                
		          $('#tabs li').removeClass("current").removeClass("hoverItem");
		          $(this).parent().addClass("current");
		          $("#content div").removeClass("show");
		          $('#' + $(this).attr('title')).addClass('show');
		      });
		
		     $('#tabs a').hover(function(){
		        if(!$(this).parent().hasClass("current")){
		          $(this).parent().addClass("hoverItem");
		        }
		     },function(){
		        $(this).parent().removeClass("hoverItem");
		     });
	  	});

