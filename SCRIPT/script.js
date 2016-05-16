$(document).ready(function(){

//parallax effect

$(window).scroll(function(){
    var count = $(this).scrollTop();
    
    $(".hello-text").css({
        'transform' : 'translate(0px, '+ count/2 +'%)'
    });
    
});

$(".button-box").hover(function () {
            $(this).parent().children().css("opacity", "1");
            //$(this).parent().children().css("display", "block");
            //$(this).parent().children().fadeIn(300);
        },
        function(){
            //$(".button-data").fadeOut(500);
            //$(".corner").fadeOut(500);
        
            $(".button-data").css("opacity", "0");
            $(".corner").css("opacity", "0");
    
            /*$(".button-data").css("display", "none");
            $(".corner").css("display", "none");*/
        }
    );
    
/*smooth scrolling*/

    $('a[href^="#aboutme"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 750, 'swing', function () {
            window.location.hash = target;
        });
    });
    
    $('a[href^="#java"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 750, 'swing', function () {
            window.location.hash = target;
        });
    });
    
    $('a[href^="#freelancing"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 750, 'swing', function () {
            window.location.hash = target;
        });
    });
    
    $('a[href^="#contact"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 750, 'swing', function () {
            window.location.hash = target;
        });
    });
    
});