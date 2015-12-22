$(document).ready(function(){


var searchTerms = {};

function prepFaqSearch(){
	$(".FAQQuestion").each(function(i, obj){
		var keywords = $(obj).data("keywords");
		if (keywords !== undefined){
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
	if (searchTerm == ""){
		// show the headers
		$(".FAQSubsectionLabel").each(function(i, obj){
			$(obj).css("max-height", "200px");
		})
		// show all the questsion
		$(".FAQQuestion").each(function(i, obj){
			$(obj).css("max-height", "500px");
		})

	}
	else{
		$(".FAQSubsectionLabel").each(function(i, obj){
			$(obj).css("max-height", "0px");
		})
		// show only those with search term, if there is no match, say so but show all answers
		// if showing search term results, remove the headers
	}
}
	
prepFaqSearch();

});