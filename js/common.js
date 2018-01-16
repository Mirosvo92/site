$(document).ready(function() {

	
	$("#portfolio_grid").mixItUp();
	
	//active portfolio
	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	//animation

	$(".top_text h1").animated("fadeInDown", "fadeInUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

	$(".section_header").animated("fadeInUp", "fadeOutDown");
	
	// popup
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});
	
$(".portfolio_item").each(function(i){
		$(this).find("a[class*='popup_content']").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});;

	//height will be 100%
	function heightDetect(){

	$(".main_head").css("height",$(window).height());

	};

	heightDetect();


	//when we change size window
	$(window).resize(function(){

		heightDetect();


	});


	//when hover on element li
	$(".top_nmu li a").hover(function(){

		
		$(this).addClass("bg_an");

	},function(){


		$(this).removeClass("bg_an");
	});

	//toggle_mnu
	
	$(".top_nmu ul a").click(function() {
		$(".top_nmu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function(){

		if ($(".top_nmu").is(":visible")) {
			$(".top_nmu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		}
		else{
		$(".top_nmu").fadeIn(600);
		$(".top_nmu li a").addClass("fadeInUp animated");
		}
	});

    

	//hidden_work
	
	
	$(".all_info").click(function(){

		if ($(".hidden_work").is(":visible")) {
			$(".hidden_work").slideUp(600);
			$(".change_text").text("Просмотреть всю информацию");
			$(".all_info > i").hide().css("opacity","1").show(400);
			
		}
		else{
		$(".hidden_work").slideDown(600);
		$(".change_text").text("Скрыть информацию");
		$(".all_info > i").hide(400).css("opacity","0");
	
	
		}
	});


	$("#commentForm").validate();

	$(".top_nmu ul a").mPageScroll2id();
	
});//ready


//reloder
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

