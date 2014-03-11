$(document).ready(function() {
	$("#frame1").attr("src","body/home.html");
});	


$(document).ready(function() {
$("#frame_load").click(function(){
	$("#frame1").attr("src","body/stuff.html");
});
});

$(document).ready(function() {
$("#back_home").click(function(){
	$("#frame1").attr("src","body/home.html");
});	
});

$(document).ready(function() {
$("#github").click(function(){
	$("#frame1").attr("src","body/other.html");
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