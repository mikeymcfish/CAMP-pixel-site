$(document).ready(function(){
	


	$(".sliderAge").each(function(){
		$(this).css("color", "#e3b49e");
	});

	var hash = window.location.hash;
	if (window.location.hash !== ""){
		var age = hash.substr(1);
 		if (age >= 0 && age <= 5){
 			$("#slider"+(parseInt(age)+1)).css("color", "#000000");
	 		$(".ageTemplate").each(function(index, obj){
	 		$("#fullSlider").css("top", "-35px");
			$("#agesHeaderText").css("display", "none");
	 			if (index == age){
	 				$(this).css("display", "block");
	 			}
	 			else{
		 			$(this).css("display", "none");
		 		}

	 		});
	 	}
		else{
			$("#fullSlider").css("top", "-15px");
			$("#agesHeaderText").css("display", "block");
			$(".ageTemplate").each(function(index, obj){
		 			$(this).css("display", "none");
	 		});
		}
	}
	else{
		$("#fullSlider").css("top", "-15px");
			$("#agesHeaderText").css("display", "block");
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


