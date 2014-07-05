/*jslint nomen:true */
/*global define, window, document, config */

// /views/home/analytics.js

define([

    'jquery',
    'jqueryui',
    'underscore',
    'backbone',
    'jqmobile',
    'mobiledetection',
    'parallax',
    'localscroll'

], function ($, jQueryUI, _, Backbone, jqmobile, isMobile, Parallax, ScrollTo) {

    'use strict';

    return Backbone.View.extend({

        el: '#panel_1',

        /**
        * @function
        */
        render: function () {

            var view = this,
                animRest = 2100;

            this.setElement($('#panel_1:last'));

            $('body').bind('user_scroll', function (event, position) {

                if (!isMobile.any() && position.bottom < 2900 && position.bottom > 2074) {

                    view.$el.find('.analytics_piece_1').css('marginTop', ((position.bottom - animRest) * 1.2));
                    view.$el.find('.analytics_piece_2').css('marginTop', ((position.bottom - animRest) * 1.6));
                    view.$el.find('.analytics_piece_3').css('marginTop', ((position.bottom - animRest) * 1.3));
                    view.$el.find('.analytics_piece_4').css('marginTop', ((position.bottom - animRest) * 1.5));
                    view.$el.find('.analytics_piece_5').css('marginTop', ((position.bottom - animRest) * 1.4));
                    view.$el.find('.analytics_piece_6').css('marginTop', ((position.bottom - animRest) * 1.7));

                } else if (!isMobile.any() && position.bottom < 2074) {

                    view.$el.find('.analytics_piece_1').css('marginTop', -9.6);
                    view.$el.find('.analytics_piece_2').css('marginTop', 6.4);
                    view.$el.find('.analytics_piece_3').css('marginTop', 1.3);
                    view.$el.find('.analytics_piece_4').css('marginTop', -33);
                    view.$el.find('.analytics_piece_5').css('marginTop', -14);
                    view.$el.find('.analytics_piece_6').css('marginTop', 45.9);

                }

            });

        }

    });

});