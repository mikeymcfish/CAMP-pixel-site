$(document).ready(function(){
	topics = [];

	var topicCount = $(".template").length;
	for (var i = 0; i < topicCount; i++){
		topics[i] = $($(".template")[i]).attr("id");
	}
	console.log(topics);

	var hash = window.location.hash;
	if (window.location.hash !== ""){
		var topic = hash.substr(1);
		var currentIndex = topics.indexOf(topic);
 		if (currentIndex !== -1){
	 		$(".template").each(function(){
	 			$(this).css("display", "none");
	 		});
			$("#"+topics[currentIndex]).css("display", "block");
		}
	}
	else{
		console.log("yep")
		$(".template").each(function(){
			console.log(this)
	 		$(this).css("display", "none");
 		});
 		console.log(topics[0]);
		$("#"+topics[0]).css("display", "block");
	}
	
 	gotoTopic = function(topic){
 		console.log("well");
 	// 	var currentIndex = topics.indexOf(topic);
 	// 	if (currentIndex !== -1){
	 // 		$(".template").each(function(){
	 // 			$(this).css("display", "none");
	 // 		});
	 // 		var newIndex = ((currentIndex+topicCount)-1)%(topicCount);
		// 	$("#"+topics[newIndex]).css("display", "block");
		// }
		// console.log("success");
		window.location.href = "package.html#"+topic;
		window.scrollTo(0, 0);
		location.reload();
	}
});


