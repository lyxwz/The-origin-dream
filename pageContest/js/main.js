$(function(){
	alert("dfsd");
	$(".recall_js_text1").fadeOut();
	$("#recall_js_text").mouseover(function(){
		$(".recall_js_text1").fadeIn(1000);
		$(".recall_js_text2").animate({left:'250px',fontSize:'1.2em',marginTop:'20px'},2000);
		$(".recall_js_text3").animate({left:'850px',fontSize:'1.2em', },5000);
	});
});