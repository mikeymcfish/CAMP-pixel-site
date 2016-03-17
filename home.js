$(document).ready(function(){

var frontPicsList = ["images/home_page_1.jpg", 
					 "images/home_page_2.jpg",
					 "images/home_page_3.jpg",
					 "images/home_page_4.jpg",
					 "images/home_page_5.jpg",
					 "images/home_page_6.jpg",
					 "images/home_page_7.jpg"];

var randomPic = frontPicsList[Math.round(Math.random() * (frontPicsList.length-1))];
console.log(randomPic)
$("#mainSection").css("background", "url("+randomPic+")");
$("#mainSection").css("background-size", "cover");
$("#mainSection").css("background-position", "center");

});

