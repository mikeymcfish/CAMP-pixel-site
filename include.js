/*** START REF LINK CODE ***/
var getUrlParameter = function getUrlParameter(sParam) {
	    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;

	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            return sParameterName[1] === undefined ? true : sParameterName[1];
	        }
	    }
	};

	$(document).ready(function() {
		//get the ref URL variable, and append this variable to all the links in the page. aww yeeee

		var ref = getUrlParameter("ref");
		if (ref && ref.length > 0){
			//alert("ref detected");
			console.log("ref detected");
			$("a").each(function() {
				var href = $(this).attr("href");
				href += "?ref=" + ref
				$(this).attr("href", href);
			})
		}
		else {
			console.log("no ref");
		}

	});

/*** END REF LINK CODE ***/