$(document).ready(function(){
	topics = [];

	var topicCount = $(".topicTemplate").length;
	for (var i = 0; i < topicCount; i++){
		topics[i] = $($(".topicTemplate")[i]).attr("id");
	}

	var hash = window.location.hash;
	console.log(hash);
	if (window.location.hash !== ""){
		var topic = hash.substr(1);
		var currentIndex = topics.indexOf(topic);
 		if (currentIndex !== -1){
	 		$(".topicTemplate").each(function(){
	 			$(this).css("display", "none");
	 		});
			$("#"+topics[currentIndex]).css("display", "block");
		}
	}
	
 	prevTopic = function(topic){
 		var currentIndex = topics.indexOf(topic);
 		if (currentIndex !== -1){
	 		$(".topicTemplate").each(function(){
	 			$(this).css("display", "none");
	 		});
	 		var newIndex = ((currentIndex+topicCount)-1)%(topicCount);
			$("#"+topics[newIndex]).css("display", "block");
		}
	}

	nextTopic = function(topic){
 		var currentIndex = topics.indexOf(topic);
 		if (currentIndex !== -1){
	 		$(".topicTemplate").each(function(){
	 			$(this).css("display", "none");
	 		});
	 		var newIndex = (currentIndex+1)%(topicCount);
			$("#"+topics[newIndex]).css("display", "block");
		}
	}
});

