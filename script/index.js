"use strict";
//스크롤 영역나눔
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

let $html = $("html");
 
let page = 1;
 
let lastPage = $(".content").length;
 
$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});

$(() => {
	//팝업 띄우고 닫기
	$(".about .link").on("click", (() => {
		$(".about_popup").removeClass("d-none");
	}));
	$(".about_popup button").on("click", (() => {
		$(".about_popup").addClass("d-none");
	}));

	$(".web_redesign .links li:last-child").on("click", (() => {
		$(".redesign_popup").removeClass("d-none");
	}));
	$(".redesign_popup button").on("click", (() => {
		$(".redesign_popup").addClass("d-none");
	}));

})
