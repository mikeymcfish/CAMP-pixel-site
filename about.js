$(document).ready(function(){


$('.factHeader').click( function() {
	var title = ($(this).data("title"));
	var description = ($(this).data("description"));
	var picture = ($(this).data("picture"));
	$("#extensionTitle").html(title);
	$("#extensionText").html(description);
	$("#factsExtension").css("background-image", "url("+picture+")");
	$(".factSelected").each(function(i, obj){
		$(obj).removeClass("factSelected");
	});
	$(this).addClass("factSelected");
	openExtension();
});

$('#closeExtensionButton').click(closeExtension);

function openExtension(){
	$(".factBlurb").each(function(i, obj){
		console.log(obj);
		$(obj).css("max-height", "0px");
		if (i == $(".factBlurb").length-1){
			$("#factsExtension").css("max-height", "1000px");
		}
	});
}

function closeExtension(){
	$("#factsExtension").css("max-height", "0px");
	$(".factSelected").each(function(i, obj){
		$(obj).removeClass("factSelected");
	});
	$(".factBlurb").each(function(i, obj){
		console.log(obj);
		$(obj).css("max-height", "200px");
		
		
	});
}




});