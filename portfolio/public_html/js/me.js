/* 
 author =Mojgan Ahmadi
 */


// script.js for .....

"use strict";

$(document).ready(function () {
    $(window).scroll(function () {
        var t = $("#skill");
        if (t.css("visibility") === "hidden") {
            t.css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 3000);
        }
    });
});


$("#aboutSkill").click(function () {
    var t = $("#skill");
    if (t.css("visibility") === "hidden") {
        t.css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 3000);
    }

});

$(".dreaming2").textillate({
    in: {
        effect: 'fadeInLeftBig'
    }
});
$(".dreaming3").textillate({
    initialDelay: 1500,
    in: {
        effect: 'fadeInLeftBig'

    }
});



$(".port-menu").each(function (index) {

    var pic = "../img/portfolio/photo_md_";
    var web = "../img/portfolio/web_md_";
    var brand = "../img/portfolio/brand_md_";
    var graph = "../img/portfolio/graph_md_";
    var illus = "../img/portfolio/illus_md_";
    var filename;
    var ext = ".png";
    $(window).resize(function () {
        if ($(window).width() < 767) {

            pic = "../img/portfolio/photo_sm_";
            web = "../img/portfolio/web_sm_";
            brand = "../img/portfolio/brand_sm_";
            graph = "../img/portfolio/graph_sm_";
            illus = "../img/portfolio/illus_sm_";
        }

    });
    if (isNaN(index)) {
        index = 0;
    }
    if (index === 0) {
        filename = pic;
    } else if (index === 1) {
        filename = web;

    } else if (index === 2) {
        filename = brand;

    } else if (index === 3) {
        filename = graph;
    } else {
        filename = illus;
    }

    $(this).on('click active', function (e) {
        e.preventDefault();
        for (var i = 0; i < 6; i++) {
            $(".port-display").eq(i).attr('src', filename + (i + 1) + ext);
        }
    });
});




$(function () {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='contactUs']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            name: "required",
            comment: "required",
            phone: {
                required: true,
                phoneUS: true
            },
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },

            // Specify validation error messages
            messages: {
                firstname: "Please enter your firstname",
                lastname: "Please enter your lastname",
                email: "Please enter a valid email address"
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function (form) {
                form.submit();
            }
        }
    });
});



