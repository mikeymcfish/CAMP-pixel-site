$(document).ready(function(){
	$('.topic').click( function() {
		var idString = $(this).attr("id");
		var id = idString.slice(5);
		$(".topicsInformation").each(function(index, obj){
			$(obj).removeClass("open");
		})

		var descriptionToShow = $("#topicDescription"+id);

		console.log(descriptionToShow);
		descriptionToShow.addClass("open");
	});
});