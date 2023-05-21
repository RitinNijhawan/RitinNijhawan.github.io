jQuery(document).ready(function($) {
    var _directory_uri = directory_uri["stylesheet_directory_uri"] + "/", videoPopup = $(".neovideopopup");
    $.fn.disableScroll = function() {
        window.oldScrollPos = $(window).scrollTop();
        $(window).on("scroll.scrolldisabler", function(event) {
            $(window).scrollTop(window.oldScrollPos);
            event.preventDefault();
        });
    };
    $.fn.enableScroll = function() {
        $(window).off("scroll.scrolldisabler");
    };
    $.fn.extend({
        addSVGClass: function(cls) {
            return this.each(function() {
                var classList = $(this).attr("class");
                if (classList) {
                    var classListArr = classList.split(" ");
                    if (classListArr.indexOf(cls) === -1) {
                        classListArr.push(cls);
                        classList = classListArr.join(" ").trim();
                        $(this).attr("class", classList);
                    }
                } else {
                    $(this).attr("class", cls);
                }
            });
        },
        removeSVGClass: function(cls) {
            return this.each(function() {
                var classList = $(this).attr("class");
                if (classList) {
                    var classListArr = classList.split(" ");
                    if (classListArr.indexOf(cls) !== -1) {
                        delete classListArr[classListArr.indexOf(cls)];
                        classList = classListArr.join(" ").trim();
                        $(this).attr("class", classList);
                    }
                }
            });
        },
        hasSVGClass: function(cls) {
            var el = this[0];
            var classList = $(el).attr("class");
            if (classList) {
                var classListArr = classList.split(" ");
                if (classListArr.indexOf(cls) !== -1) {
                    return true;
                } else {
                    return false;
                }
            }
            return false;
        }
    });
    $(document).on("click", ".neoavclick", function(e) {
        $(this).magnificPopup({
            closeOnContentClick: false,
            closeBtnInside: false,
            midClick: true,
            preloader: true,
            closeOnBgClick: false,
            showCloseBtn: true,
            callbacks: {
                elementParse: function(item) {
                    postData = {
                        postBuilding: $(item.el[0]).attr("data-building")
                    };
                    var mp = $.magnificPopup.instance;
                    mp.st.ajax.settings.data = postData;
                },
                parseAjax: function(mfpResponse) {},
                ajaxContentAdded: function() {
                    $(".mfpclose").on("click", function() {
                        $.magnificPopup.close();
                        return false;
                    });
                },
                beforeOpen: function() {
                    $("body").css("overflow", "hidden");
                    var $triggerEl = $(this.st.el), newClass = $triggerEl.data("modal-class");
                    if (newClass) {
                        this.st.mainClass = this.st.mainClass + " " + newClass;
                    }
                },
                beforeClose: function() {
                    $("body").css("overflow", "auto");
                },
                open: function() {
                    $("body").addClass("noscroll");
                },
                close: function() {
                    $("body").removeClass("noscroll");
                }
            },
            type: "ajax",
            ajax: {
                settings: {
                    url: _directory_uri + "_scripts/php/plans.php",
                    type: "POST"
                }
            }
        }).magnificPopup("open");
        e.preventDefault();
        return false;
    });
    $(document).on("click", ".neolevel", function(e) {
        const a = $(this), building = a.data("building"), group = a.data("group"), src = a.data("src");
        $("." + group).removeClass("active");
        a.addClass("active");
        $("#" + building).attr("src", src);
        e.preventDefault();
        return false;
    });
});