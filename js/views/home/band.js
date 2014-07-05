/*jslint nomen:true */
/*global define, window, document, config */

// /views/home/band.js

define([

    'jquery',
    'underscore',
    'backbone',
    'mobiledetection',
    'parallax',
    'localscroll'

], function ($, _, Backbone, isMobile, Parallax, ScrollTo) {

    'use strict';

    return Backbone.View.extend({

        el: '#panel_2',

        /**
        * @function
        */
        render: function () {

            this.setElement($('#panel_2:last'));

            var $bubble = this.$el.find('.panel02_bubble'),
                pageBottom = 4000;

            // Parallax
            if (!isMobile.any()) {

                this.$el.parallax("bottom", 0.5);

                $('body').bind('user_scroll', function (event, position) {

                    // Toggle on screen 2 on the phone
                    if (position.top < 2333) {
                        $('.screen2').stop().animate({
                            left: 0,
                            opacity: 1
                        });

                    // Slide out screen 2
                    } else {
                        $('.screen2').stop().animate({
                            left: -160,
                            opacity: 0
                        });
                    }

                    if (position.top < 2986 && position.bottom > 2050) {

                        $bubble.css({
                            'margin-top': ((position.bottom - pageBottom + 200) * 1.2) + 1300
                        });
                    }

                });

            }

        }

    });

});