$(document).ready(function(){
	


	$(".sliderAge").each(function(){
		$(this).css("color", "#999999");
	});

	var hash = window.location.hash;
	if (window.location.hash !== ""){
		var age = hash.substr(1);
 		if (age >= 0 && age <= 5){
 			$("#slider"+(parseInt(age)+1)).css("color", "#000000");
	 		$(".ageTemplate").each(function(index, obj){
	 			if (index == age){
	 				$(this).css("display", "block");
	 			}
	 			else{
		 			$(this).css("display", "none");
		 		}
	 		});
	 	}
		else{
			$(".ageTemplate").each(function(index, obj){
		 			$(this).css("display", "none");
	 		});
		}
	}
	else{
		$(".ageTemplate").each(function(index, obj){
		 			$(this).css("display", "none");
	 	});
	}


	var hash = window.location.hash;
	if (window.location.hash !== ""){
		var age = hash.substr(1);
		if (age < 6){
			$('#sl1').slider('setValue', age);
		}
	}


	// slider event
	$('#sl1').slider()
	  .on('slideStop', function(ev){
	  	// change lower section here
	  	var ageValue = $('#sl1').slider('getValue');
	    console.log(ev.value);
	    window.location.href = "ages.html#"+ev.value;
		location.reload();
	});
        

   

	
 	
});


