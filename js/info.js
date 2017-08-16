$(function(){
	$(".tab li").click(function(){
		var $this = $(this);
		var index = $this.index();
		$this.addClass("active").siblings("li").removeClass("active");
		$(".tab-content>div").eq(index).("selected").siblings("div").removeClass("selected");
	})
})
