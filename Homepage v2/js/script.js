
/*
Copyright (c) 2014 Florian Madar

Licensed under the MIT license
https://github.com/xwing3/Projects/blob/master/LICENSE.md
*/


// page loading funtions

$(document).ready(function(){
	$("#first").load("body/home.html")
});


$(document).on("click", "#home", function(){
	$("#first").load("body/home.html")
	$("#first").css("background-color", "#eee");
});

$(document).ready(function() {
$("#stuff").click(function(){
	$("#first").load("body/stuff.html");
	$("#first").css("background-color", "white");
	});
});

// adding .active to navbar 

$(document).on("click", "#stuff", function(){
	$(this).addClass("active");
	$("#home").removeClass("active");
});

$(document).on("click", "#home", function(){
	$(this).addClass("active");
	$("#stuff").removeClass("active");
}); 




