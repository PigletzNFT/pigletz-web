/*--------------------------------------------------------------
## jQuery
--------------------------------------------------------------*/
jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, { passive: false });
    },
};
jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchmove", handle, { passive: false });
    },
};

jQuery(function ($) {
    // Main Navigation Active link
    var path = window.location.href;
    $(".main-nav ul li a").each(function () {
        var link = $.trim($(this).text().toLowerCase());
        if (this.href === path || path.indexOf(link) > -1) {
            $(this).parent().addClass("active");
        }
    });

    $("nav.spin-nav a").click(function(){
        var $href = $(this).attr('href');
        var $anchor = $('#'+$href).offset();
        window.scrollTo({
          top: $anchor.top,
          left: $anchor.left,
          behavior: 'smooth'
        });
        return false;
    });

    if (path.indexOf("product") > -1) {
        $(".main-nav ul li a:contains('My Pigletz')").parent().addClass("active");
    }

    // If link contains only '#' prevent click
    $("a[href='#']").on("click", function (e) {
        e.preventDefault();
    });

    // Piglietz sliders
    $(".slider-1").slick({
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        speed: 200,
        autoplaySpeed: 900,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".slider-2").slick({
        vertical: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        speed: 200,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".slider-3").slick({
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        speed: 200,
        autoplaySpeed: 1100,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".section-intro .section__images").slick({
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 800,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
        fade: true,
        cssEase: "linear",
    });

    $("#video-box").on("show.bs.modal", function () {
        if (!$("#video-box .modal-body iframe").length) {
            $("#video-box .modal-body").html(
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/kzdDbAKmmow" title="Pigletz NFT - How it Works" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            );
        }
    });

    // Stop video after closing modal
    $("#video-box").on("hidden.bs.modal", function () {
        var video = $("#video-box iframe").attr("src");
        $("#video-box iframe").attr("src", "");
        $("#video-box iframe").attr("src", video);
    });
});
