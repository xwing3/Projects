/**
 * Created by Florin on 5/25/2014.
 */
// Ads and removes .selected to the bootstrap navbar
$(document).ready(function(){
    $('#menu > li').click(function(){
        $('#menu > li').removeClass('selected'); // remove selected from any other item first
        $(this).addClass('selected'); //add selected to the one just clicked
    });
});
// Jumbotron content loading functions

$(document).ready(function(){
   $(".jumbotron").load("body/home.html");
});

$(document).ready(function(){
    $("#home").click(function(){
        $(".jumbotron").load("body/home.html");
    });
});

$(document).ready(function(){
    $("#services").click(function(){
        $(".jumbotron").load("body/services.html");
    });
});

$(document).ready(function(){
    $("#contact").click(function(){
        $(".jumbotron").load("body/contact.html");
    });
});


