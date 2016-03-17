$(document).ready(function(){
	$(".topBarButton").each(function(){
		$(this).click(topBarButtonHandler);
	});

	window.onhashchange = function() {
		if (window.location.hash !== "#location" && window.location.hash !== "#cost")
		$(window).scrollTop(0);
	    window.location.reload()
	}
});

// on resize, make sure mobile menus are closed
$(window).resize(function() {
	if (window.innerWidth > 768){
		$(".submenu").each(function(){

			$(this).css("display", "");
			$(this).css("visibility", "");
			$(this).removeClass("open");
		});

		$("#phoneNumber").css("top", "");
		$("#promo.mobile").css("top", "");
		$("#topBar").css("height", "");
		$($(".submenu").parent()).css("color", "");
		$("#signupButton").css("top", "");
	}
});



function topBarButtonHandler(){
	/* mobile */
	if (window.innerWidth <= 768){
		$(".submenu").each(function(){
			$(this).css("display", "none");
			$($(this).parent()).css("color", "");
		});

		var submenu = $(this).find(".submenu");
		
		// if it's not open, open it
		if (!submenu.hasClass("open")){
			// close any other open submenus
			$(".submenu").each(function(){
				$(this).removeClass("open");
			});

			// then open this one
			submenu.css("visibility", "hidden");
			submenu.css("display", "block");
			var height = submenu.height();
			
			$("#phoneNumber").css("top", 130+height+"px");
			$("#promo.mobile").css("top", 43+height+"px");
			$("#topBar").css("height", 130+height+"px");
			$(submenu.parent()).css("color", "#ccc");
			$("#signupButton").css("position", "relative");
			$("#signupButton").css("top", height+6);
			submenu.css("visibility", "visible");


			submenu.addClass("open");
		}
		else{
			//if it already is open, close it
			submenu.css("visibility", "hidden");
			submenu.css("display", "block");
			var height = submenu.height();
			
			$("#phoneNumber").css("top", "");
			$("#promo.mobile").css("top", "");
			$("#topBar").css("height", "");
			$(submenu.parent()).css("color", "");
			$("#signupButton").css("top", "");
			submenu.css("display", "");

			submenu.removeClass("open");
		}
	}
	/*desktop */
	else{
		console.log("desktop");
		if ($(this).data("href") !== undefined){
			window.location.href = $(this).data("href");
		}		
	}
}
