/**
 * Created by flo on 13.06.2014.
 */


    var sub = document.getElementById("submit");
    var first = document.getElementById("name_f");
    var last = document.getElementById("name_l");
    var email = document.getElementById("exampleInputEmail1");
    var mess = document.getElementById("subject");

        sub.onclick = function() {

            if (first.value == "" || first.value == null) {

                $(".alert").removeClass("hide");


        } else {
                $(".alert").addClass("hide");
                alert("thank you for giving us your first name");
        }
            if (last.value == "" || last.value == null) {

            } else {
                alert("thank you for giving us your last name");
            }

            if (email.value == "" || email.value == null) {

            } else {
                alert("thank you for giving us your email");
            }

            if (mess.value == "" || mess.value == null) {

            } else {
                alert("thank you typing you message");
            }

    };

