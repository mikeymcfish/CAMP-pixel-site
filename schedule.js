$(document).ready(function(){


$('.scrollTo').click( function() {
	var name = ($(this).data("scroll"));
	var scrollTo = $("[name="+name+"]");
    $('html, body').animate({
       scrollTop: scrollTo.offset().top
    }, 400);
});


});