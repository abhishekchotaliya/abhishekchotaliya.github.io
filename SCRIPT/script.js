$(document).ready(function () {

    
    $(".behance-button").hover(function () {
        $("#behance").css("background-image", "url(IMG/behance_hover.png)");
        $(".behancetext").css("color", "white");
    }, function () {
        $("#behance").css("background-image", "url(IMG/behance.png)");
        $(".behancetext").css("color", "#466585");
    });

    $(".download-button").hover(function () {
        $("#download-icon").css("background-image", "url(IMG/downloadicon_hover.png)");
        $(".resumetext").css("color", "#31b4f1");
    }, function () {
        $("#download-icon").css("background-image", "url(IMG/downloadicon.png)");
        $(".resumetext").css("color", "white");
    });

    $(".email-button").hover(function () {
        $("#email-icon").css("background-image", "url(IMG/mailicon_hover.png)");
        $(".emailtext").css("color", "#ed5849");
    }, function () {
        $("#email-icon").css("background-image", "url(IMG/mailicon.png)");
        $(".emailtext").css("color", "white");
    });
    
    $(".facebook").hover(function () {
        $(".twitter, .in, .skype, .gplus").css("opacity", "0.25");
        $(".social-media-container").css("background-color", "#3b5998");
    }, function () {
        $(".twitter, .in, .skype, .gplus").css("opacity", "1");
        $(".social-media-container").css("background-color", "#466585");
    });    

    $(".twitter").hover(function () {
        $(".facebook, .in, .skype, .gplus").css("opacity", "0.25");
        $(".social-media-container").css("background-color", "#55acee");
    }, function () {
        $(".facebook, .in, .skype, .gplus").css("opacity", "1");
        $(".social-media-container").css("background-color", "#466585");
    });

    $(".in").hover(function () {
        $(".facebook, .twitter, .skype, .gplus").css("opacity", "0.25");
        $(".social-media-container").css("background-color", "#222");
    }, function () {
        $(".facebook, .twitter, .skype, .gplus").css("opacity", "1");
        $(".social-media-container").css("background-color", "#466585");
    });

    $(".skype").hover(function () {
        $(".facebook, .in, .twitter, .gplus").css("opacity", "0.25");
        $(".social-media-container").css("background-color", "#2d9ae0");
    }, function () {
        $(".facebook, .in, .twitter, .gplus").css("opacity", "1");
        $(".social-media-container").css("background-color", "#466585");
    });

    $(".gplus").hover(function () {
        $(".facebook, .in, .twitter, .skype").css("opacity", "0.25");
        $(".social-media-container").css("background-color", "#d34836");
    }, function () {
        $(".facebook, .in, .twitter, .skype").css("opacity", "1");
        $(".social-media-container").css("background-color", "#466585");
    });

    /*smooth scrolling*/

    $('a[href^="#about-me"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1500, 'swing', function () {
            window.location.hash = target;
        });
    });


    $('a[href^="#top"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1500, 'swing', function () {
            window.location.hash = target;
        });
    });


});


$(window).load(function () {

    $("#preloader").fadeOut();
    $(".forest_preloader").delay(100).fadeOut();
    $("body").removeClass("preloaderactive");
});