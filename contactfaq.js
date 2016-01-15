$(document).ready(function(){


var searchTerms = {};

function prepFaqSearch(){
	$(".FAQQuestion").each(function(i, obj){
		console.log(i);
		if ($(obj).data("keywords") !== undefined){
			var anyKeywords = $(obj).data("keywords");
			var keywords = anyKeywords.toLowerCase();
			var keywordsList = keywords.split(",");
			for (index in keywordsList){
				if (searchTerms.hasOwnProperty(keywordsList[index])){
					var exisitingList = searchTerms[keywordsList[index]];
					exisitingList.push(i);
					searchTerms[keywordsList[index]] = exisitingList;
				}
				else{
					searchTerms[keywordsList[index]] = [i];
				}
			}
		}
	});
	console.log(searchTerms);
}


$('.scrollTo').click( function() {
	showQuestions(""); // show all questions
	var name = ($(this).data("scroll"));
	var scrollTo = $("[name="+name+"]");
    $('html, body').animate({
       scrollTop: scrollTo.offset().top
    }, 400);
});

$('#searchBarButton').click( function() {
	var searchBar = $("[name=searchBar]");
    var searchTerm = searchBar.val();
	var formattedSearchTerm = searchTerm.toLowerCase();
    showQuestions(searchTerm);
});

function showQuestions(searchTerm){
	$("#noResultsMessage").css("display", "none");
	var noResults = true;
	if (searchTerm == ""){
		// show labels
		$(".FAQSubsection").css("margin", "50px 0px")
		$(".FAQSubsectionLabel").each(function(i, obj){
			$(obj).css("display", "block");
		});
		$(".scrollToTop").each(function(i, obj){
			$(obj).css("display", "inline-block");
		});
		// show all the questsion
		$(".FAQQuestion").each(function(i, obj){
			$(obj).css("max-height", "500px");
			$(obj).css("margin-bottom", "25px");
		})
	}
	else{
		// hide labels
		$(".FAQSubsection").css("margin", "0px")
		$(".FAQSubsectionLabel").each(function(i, obj){
			$(obj).css("display", "none");
		});
		$(".scrollToTop").each(function(i, obj){
			$(obj).css("display", "none");
		});
		// hide questions
		$(".FAQQuestion").each(function(i, obj){
			$(obj).css("max-height", "0px");
			$(obj).css("margin-bottom", "0px");
		});
		var searchList = searchTerm.split(" ");
		for (term in searchList){
			var questions = searchTerms[searchList[term]];
			if (questions != undefined){
				for (index in questions){
					var show = $($(".FAQQuestion")[questions[index]]);
					show.css("max-height", "500px");
					show.css("margin-bottom", "25px");
				}
				noResults = false;
			}
		}
		if (noResults){
			$("#noResultsMessage").css("display", "block");
			// show labels
			$(".FAQSubsection").css("margin", "50px 0px")
			$(".FAQSubsectionLabel").each(function(i, obj){
				$(obj).css("display", "block");
			});
			$(".scrollToTop").each(function(i, obj){
				$(obj).css("display", "inline-block");
			});
			// show all the questsion
			$(".FAQQuestion").each(function(i, obj){
				$(obj).css("max-height", "500px");
				$(obj).css("margin-bottom", "25px");
			})
		}
	}
}
	
prepFaqSearch();

});