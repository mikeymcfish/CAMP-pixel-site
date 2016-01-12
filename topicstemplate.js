$(document).ready(function(){
	topics = {};
	var topicCount = $(".topicTemplate").length;

	for (var i = 0; i < topicCount; i++){
		topics[$($(".topicTemplate")[i]).attr("id")] = i;
	}

 	console.log(topics);
	
 	prevTopic = function(topic){
 		var currentIndex = topics[topic];
 		$(".topicTemplate").each(function(){
 			$(this).css("display", "none");
 		});
 		var newIndex = (currentIndex-1)%topicCount;
 		console.log("#"+topics[newIndex])
		$("#"+topics[newIndex]).css("display", "block");
	}

	nextTopic = function(){
 		$(".topicTemplate").each(function(){
 			$(this).css("display", "none");
 		});
		$(topics[(id+1)%topics.length]).css("display", "block");
	}
});

