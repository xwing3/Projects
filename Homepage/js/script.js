
/*
Copyright (c) 2014 Florian Madar

License under the MIT license
https://github.com/xwing3/Projects/blob/master/LICENSE.md
*/




// page loading funtions

$(document).ready(function(){
	$("#load").load("body/home.html")
});


$(document).on("click", "#frame_load1", function(){
	$("#load").load("body/home.html")
});

$(document).ready(function() {
$("#frame_load").click(function(){
	$("#load").load("body/stuff.html");
	});
});


//footer social media styling

$(document).ready(function(){
	$("#img1").mouseover(function(){
		$(this).fadeTo("fast",1);
	})
	$("#img1").mouseout(function() {
		$(this).fadeTo("fast",0.5)
	})
})

$(document).ready(function(){
	$("#img2").mouseover(function(){
		$(this).fadeTo("fast",1);
	})
	$("#img2").mouseout(function() {
		$(this).fadeTo("fast",0.5)
	})
})

$(document).ready(function(){
	$("#img3").mouseover(function(){
		$(this).fadeTo("fast",1);
	})
	$("#img3").mouseout(function() {
		$(this).fadeTo("fast",0.5)
	})
})