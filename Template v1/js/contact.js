/**
 * Created by flo on 13.06.2014.
 */


    var sub = document.getElementById("submit");
    var first = document.getElementsByClassName("input-lg");

        sub.onclick = function() {

            $("input").each(function() {
                if(!$.trim(this.value).length) { 
                    $(".alert").removeClass('hide');
                } else
                    $(".alert").addClass('hide');
            });

    };

