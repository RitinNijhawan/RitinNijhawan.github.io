jQuery(document).ready(function($) {
    var $pagination = $(".swiper-pagination"), $paginationDark = $(".swiper-pagination.dark");
    function loadCSS(__path) {
        $("<link>").appendTo("head").attr({
            type: "text/css",
            rel: "stylesheet",
            href: __path
        });
    }
    var swiperJS = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.7/swiper-bundle.min.js";
    function loadSwiper() {
        loadCSS("https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.7/swiper-bundle.css");
        var script = document.createElement("script");
        script.src = swiperJS;
        script.type = "text/javascript";
        script.setAttribute("defer", "");
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    $(window).one("scroll", function() {
        loadSwiper();
        $.getScript(swiperJS, function() {
            var swiper = new Swiper(".neoslider", {
                spaceBetween: 30,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            });
            $pagination.css({
                bottom: "20px",
                "text-align": "left"
            });
            $pagination.find("span").css({
                background: "transparent",
                border: "solid 1px #fff",
                opacity: 1
            });
            $paginationDark.find("span").css({
                border: "solid 1px #B6CCC2"
            });
        });
    });
});