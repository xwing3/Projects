
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
});

$(document).ready(function() {
$("#stuff").click(function(){
	$("#first").load("body/stuff.html .jumbo1");

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


///adds new jumbotron

$(document).on("click", "#stuff", function(){
	$("#second").show(0);
	$("#second").addClass("jumbotron");
	$("#second").load("body/stuff.html .jumbo2")
});


$(document).on("click", "#home", function(){
	$("#second").removeClass("jumbotron");
	$("#second").hide(0,"body/stuff.html .jumbo2");
	
});


