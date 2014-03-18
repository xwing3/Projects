
/*
Copyright (c) 2014 Florian Madar

Licensed under the MIT license
https://github.com/xwing3/Projects/blob/master/LICENSE.md
*/




// page loading funtions

$(document).ready(function(){
	$(".jumbotron").load("body/home.html")
});


$(document).on("click", "#frame_load1", function(){
	$(".jumbotron").load("body/home.html")
});

$(document).ready(function() {
$("#frame_load").click(function(){
	$(".jumbotron").load("body/stuff.html");
	});
});

// adding .active to navbar 

$(document).on("click", "#frame_load", function(){
	$(this).addClass("active");
	$("#frame_load1").removeClass("active");
});

$(document).on("click", "#frame_load1", function(){
	$(this).addClass("active");
	$("#frame_load").removeClass("active");
});