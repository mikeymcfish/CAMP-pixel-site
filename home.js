$(document).ready(function(){

var frontPicsList = ["images/front_1.jpg", 
					 "images/front_2.jpg",
					 "images/front_5.jpg",
					 "images/front_6.jpg",
					 "images/front_7.jpg"];

var randomPic = frontPicsList[Math.round(Math.random() * (frontPicsList.length-1))];
console.log(randomPic)
$("#mainSection").css("background", "url("+randomPic+")");
$("#mainSection").css("background-size", "cover");
$("#mainSection").css("background-position", "center");

});

