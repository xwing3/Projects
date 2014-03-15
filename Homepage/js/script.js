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