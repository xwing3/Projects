/**
 * Created by flo on 13.06.2014.
 */


    var sub = document.getElementById("submit");
    var first = document.getElementById("name_f");
    var first2 = document.getElementById("name_l");
    var first3 = document.getElementById("yourEmail");
    var first4 = document.getElementById("subject");
    var first5 = document.getElementById("message");

      function validate() {
            if(!$.trim(first.value).length) {
                     $(".alert").removeClass("hide");
                        return false;
                        } else {
                            $(".alert").addClass("hide");
                     }
          if(!$.trim(first2.value).length) {
              $(".alert").removeClass("hide");
                return false;
          } else {
              $(".alert").addClass("hide");

          }
          if(!$.trim(first3.value).length) {
              $(".alert").removeClass("hide");
              return false;
          } else {
              $(".alert").addClass("hide");

          }
          if(!$.trim(first4.value).length) {
              $(".alert").removeClass("hide");
              return false;
          } else {
              $(".alert").addClass("hide");

          }
          if(!$.trim(first5.value).length) {
              $(".alert").removeClass("hide");
              return false;
          } else {
              $(".alert").addClass("hide");

          }
       }


    $(sub).click(function () {
        validate();

    });




