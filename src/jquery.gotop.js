/*!
 * jQuery goTop v1.0.2 (https://github.com/scottdorman/jquery-gotop)
 * Copyright 2015 Scott Dorman (@sdorman)
 * Licensed under MIT (https://github.com/scottdorman/jquery-gotop/blob/master/LICENSE)
 * Adapted from goUp originally developed by Roger Vila (@_rogervila)
 */
(function ($) {
    $.fn.goTop = function (options) {

        $.fn.goTop.defaults = {
            appear: 200,
            scrolltime: 800,
            src: "glyphicon glyphicon-chevron-up",
            width: 45,
            place: "bottom-right",
            fadein: 500,
            fadeout: 500,
            opacity: 0.5,
            marginX: 2,
            marginY: 2
        };

        var opts = $.extend({}, $.fn.goTop.defaults, options);
        
        return this.each(function () {
            var g = $(this);
            g.html("<a id='goTopAnchor'><span id='goTopSpan' /></a>");

            var ga = $('#goTop a');
            var gs = $('#goTop a span');

            //width
            g.css({
                "position": "fixed",
                "display": "block",
                "width": "'" + opts.width + "px'",
                "z-index": "9"
            });

            //opacity
            ga.css("opacity", opts.opacity);
            gs.addClass(opts.src);
            gs.css("font-size", opts.width);
            gs.hide();

            //appear, fadein, fadeout
            $(function () {
                $(window).scroll(function () {
                    if ($(this).scrollTop() > opts.appear) {
                        gs.fadeIn(opts.fadein);
                    }
                    else {
                        gs.fadeOut(opts.fadeout);
                    }
                });

                //hover effect
                $(ga).hover(function () {
                    $(this).css("opacity", "1.0");
                    $(this).css("cursor", "pointer");
                    }, function () {
                    $(this).css("opacity", opts.opacity);
                });

                //scrolltime
                $(ga).click(function () {
                    $('body,html').animate({
                        scrollTop: 0
                    }, opts.scrolltime);
                    return false;
                });
            });
            
            //place, marginX, marginY: 
            if (opts.place === "top-right") {
                g.css({
                    "top": opts.marginY + "%",
                    "right": opts.marginX + "%"
                });
            }
            else if (opts.place === "top-left") {
                g.css({
                    "top": opts.marginY + "%",
                    "left": opts.marginX + "%"
                });
            }
            else if (opts.place === "bottom-right") {
                g.css({
                    "bottom": opts.marginY + "%",
                    "right": opts.marginX + "%"
                });
            }
            else if (opts.place === "bottom-left") {
                g.css({
                    "bottom": opts.marginY + "%",
                    "left": opts.marginX + "%"
                });
            }
            else {
                g.css({
                    "bottom": opts.marginY + "%",
                    "right": opts.marginX + "%"
                });
            }
        });
    };
})(jQuery);
