/*--------------------------------------------------------------
## jQuery mobile menu
--------------------------------------------------------------*/
jQuery(function ($) {
    // Mobile navigation
    $(".nav-burger").on("click", function () {
        $("body").toggleClass("nav-opened");
        $(this).toggleClass("active");
        $(".main-nav ul li.inactive a").removeClass("clicked");
    });

    if ($(window).width() < 992) {
        $(".main-nav ul li.inactive a").on("click", function () {
            $(this).addClass("clicked");
            $(this).parent().siblings().find("a").removeClass("clicked");
        });

        $(".main-nav ul li a").on("click", function () {
            $("body").removeClass("nav-opened");
            $(".nav-burger").removeClass("active");
        });
    }
});
