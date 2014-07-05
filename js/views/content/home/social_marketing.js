/*jslint nomen:true */
/*global define, window, document, config */

// /views/home/social_marketing.js

define([

    'jquery',
    'underscore',
    'backbone',
    'mobiledetection'

], function ($, _, Backbone, isMobile) {

    'use strict';

    return Backbone.View.extend({

        el: '#panel_6',

        /**
        * @function
        */
        render: function () {

            this.setElement($('#panel_6:last'));

            var view = this,
                $titles = this.$el.find('.social_messages'),
                $content = this.$el.find('.content'),
                waitTime = 2000,
                animateTime = 450,
                pageBottom = $('.page-home').height();

            $('body').bind('user_scroll', function (event, position) {

                if (!isMobile.any() && position.bottom > 6000) {

                    view.$el.find('.scroll_up').css({
                        'margin-top': -((position.bottom - pageBottom + 200) * 1.2)  + 230
                    });

                    view.$el.find('.scrollup_text').css({
                        'margin-top': -((position.bottom - pageBottom + 80) * 0.3)  + 20
                    });

                    view.$el.find('.monitor').css({
                        'bottom': ((position.bottom - pageBottom + 200)) - 140
                    });

                    view.$el.find('.ipad').css({
                        'bottom': ((position.bottom - pageBottom + 140) * 1.4) - 140
                    });

                    view.$el.find('.smartphone').css({
                        'bottom': ((position.bottom - pageBottom + 110) * 1.8) - 140
                    });

                }

            });

            // TODO: This is pretty ugly.... clean it up sometime

            setTimeout(function () {
                $titles.animate({
                    'top': -32
                }, animateTime, function () {

                    setTimeout(function () {
                        $titles.animate({
                            'top': -64
                        }, animateTime, function () {

                            setTimeout(function () {

                                $titles.animate({
                                    'top': -96
                                }, animateTime, function () {

                                    $content.animate({
                                        'margin-top': 290
                                    }, animateTime, function () {

                                        $('.finished_circles .circle_marketing').animate({
                                            'opacity': 1
                                        }, animateTime, function () {

                                            $('.finished_circles .circle_commerce').animate({
                                                'opacity': 1
                                            }, animateTime , function () {

                                                $('.finished_circles .circle_analytics').animate({
                                                    'opacity': 1
                                                }, animateTime, function () {

                                                    $('.finished_circles .circle_arrow').animate({
                                                        'opacity': 1
                                                    }, animateTime);

                                                });

                                            });

                                        });

                                    });

                                });
                                
                            }, waitTime);

                        });
                    }, waitTime);

                });
            }, waitTime);

        }

    });

});