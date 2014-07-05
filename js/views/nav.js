var moontoast = moontoast || {};
moontoast.nav = moontoast.nav || {};


// setup functions

moontoast.nav.column_hover = function(hero) {
    $('.column').hover(function() {
        $(this).addClass('hover');

        var goto_slide = $(this).attr('data-goto-slide');
        if(goto_slide) {
            hero.goto_slide(goto_slide - 1);
            hero.stop();
        }

    }, function() {
        $(this).removeClass('hover');
        hero.start();
    });

    $('.column').mousemove(function() {
        var goto_slide = $(this).attr('data-goto-slide');
        if(goto_slide) {
            hero.goto_slide(goto_slide - 1);
            hero.stop();
        }
    });
};

moontoast.nav.navigation = function(nav_selector, speed) {
    $(nav_selector).hover(function() {
        $(this).addClass('hover');

        $(this).find('.subnav').slideDown(speed);
    }, function() {
        var nav = $(this);
        nav.find('.subnav').stop(true, false).slideUp(speed, function() {
            nav.removeClass('hover');
        });
    });
};

$(document).ready(function() {
    moontoast.nav.navigation('.header .nav > li', 100);
});