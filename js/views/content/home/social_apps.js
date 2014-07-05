/*jslint nomen:true */
/*global define, window, document, config */

// /views/home/social_apps.js

define([

    'jquery',
    'underscore',
    'backbone',
    'jqmobile',
    'mobiledetection'

], function ($, _, Backbone, jqmobile, isMobile) {

    'use strict';

    return Backbone.View.extend({

        el: '#panel_3',
        animationTime: 300,

        events: {
            'click .carousel_arrow_left a': 'previousSlide',
            'click .carousel_arrow_right a': 'nextSlide',
            'click .iphone_content img': 'iphoneTap'
        },

        /**
        * @function
        */
        showPreview: function () {

            require([
                'handlebars',
                'text!' + config.assetPath + '/templates/home/iphone.html'
            ], function (Handlebars, Template) {
                var template = Handlebars.compile(Template)({});
                $('body').append(template);
                $('.test_iphone_close').bind('click', function () {
                    $('.test_iphone_container').remove();
                    $('.test_overlay_background').remove();
                });
            });

        },

        /**
        * @function
        */
        iphoneTap: function () {
            $('#try_it').click();
        },

        /**
        * @function
        */
        fanOut: function () {

            this.setCurrentSlide(this.$el.find('.apps_carousel_container_inner .current'));

        },

        /**
        * @function
        */
        fanIn: function () {

            var view = this,
                $slides = this.$el.find('.apps_carousel_container_inner img'),
                elements = {
                    $current: this.$el.find('.apps_carousel_container_inner .current')
                }, $el,
                layerOneTimeout = 1000,
                layerTwoTimeout = 1200;

            // Shorthand
            $el = elements.$current;

            elements.$next = ($el.next().is('img')) ? $el.next() : $slides.first();
            elements.$prev = ($el.prev().is('img')) ? $el.prev(): $slides.last();
            elements.$nextNext = (elements.$next.next().is('img')) ? elements.$next.next() : $slides.first();
            elements.$prevPrev = (elements.$prev.prev().is('img')) ? elements.$prev.prev(): $slides.last();

            elements.$next.stop().animate({
                'left': 340
            }, layerOneTimeout);

            elements.$prev.stop().animate({
                'left': 340
            }, layerOneTimeout);

            elements.$nextNext.stop().animate({
                'left': 340
            }, layerTwoTimeout);

            elements.$prevPrev.stop().animate({
                'left': 340
            }, layerTwoTimeout);

        },

        /**
        * @function
        */
        nextSlide: function () {

            var $current = this.$el.find('.apps_carousel_container_inner .current'),
                $next;

            if ($current.next().is('img')) {
                $next = $current.next();
            } else {
                $next = this.$el.find('.apps_carousel_container_inner img:first');
            }

            this.setCurrentSlide($next);

            return false;
        },

        /**
        * @function
        */
        previousSlide: function () {

            var $current = this.$el.find('.apps_carousel_container_inner .current'),
                $prev;

            if ($current.prev().is('img')) {
                $prev = $current.prev();
            } else {
                $prev = this.$el.find('.apps_carousel_container_inner img:last');
            }

            this.setCurrentSlide($prev);

            return false;

        },

        /**
        * @function
        * @param {Object} $el - The element to make current
        */
        setCurrentSlide: function ($el) {

            var view = this,
                $slides = this.$el.find('.apps_carousel_container_inner img'),
                $mobileSlides = this.$el.find('.iphone_content img'),
                elements = {
                    $current: $el
                };

            elements.$next = ($el.next().is('img')) ? $el.next() : $slides.first();
            elements.$prev = ($el.prev().is('img')) ? $el.prev(): $slides.last();
            elements.$nextNext = (elements.$next.next().is('img')) ? elements.$next.next() : $slides.first();
            elements.$prevPrev = (elements.$prev.prev().is('img')) ? elements.$prev.prev(): $slides.last();
            
            $slides.each(function () {

                $(this).removeClass('current');

                // Current Slide
                if ($(this).index() === elements.$current.index()) {

                    $(this).addClass('current').css({
                        'z-index': 9
                    }).animate({
                        'left': 320,
                        'top': 9,
                        'height': 440
                    }, view.animationTime);

                    $mobileSlides.eq($(this).index() - 2).css({
                        'z-index': 9
                    }).animate({
                        'left': 0
                    });

                // Next Slide
                } else if ($(this).index() === elements.$next.index()) {

                    $(this).css({
                        'z-index': 7
                    }).animate({
                        'left': 485,
                        'top': 45,
                        'height': 383
                    }, view.animationTime);

                    $mobileSlides.eq($(this).index() - 2).css({
                        'z-index': 8
                    }).animate({
                        'left': 141
                    });

                // Previous Slide
                } else if ($(this).index() === elements.$prev.index()) {

                    $(this).css({
                        'z-index': 7
                    }).animate({
                        'left': 209,
                        'top': 45,
                        'height': 383
                    }, view.animationTime);

                    $mobileSlides.eq($(this).index() - 2).css({
                        'z-index': 8
                    }).animate({
                        'left': -141
                    });

                // Next Next Slide
                } else if ($(this).index() === elements.$nextNext.index()) {

                     $(this).css({
                         'z-index': 5
                     }).animate({
                        'left': 664,
                        'top': 86,
                        'height': 304
                    }, view.animationTime);

                     $mobileSlides.eq($(this).index() - 2).css({
                        'z-index': 7
                     });

                // Previous Previous Slide
                } else if ($(this).index() === elements.$prevPrev.index()) {

                    $(this).css({
                        'z-index': 5
                    }).animate({
                        'left': 112,
                        'top': 86,
                        'height': 304
                    }, view.animationTime);

                    $mobileSlides.eq($(this).index() - 2).css({
                        'z-index': 7
                     });

                // Every Other Slide
                } else {

                    $(this).css({
                        'z-index': 3
                    }).animate({
                        'left': 340,
                        'top': 100,
                        'height': 100
                    }, view.animationTime);

                    $mobileSlides.eq($(this).index() - 2).css({
                        'z-index': 7
                     });

                }

            });

        },

        /**
        * @function
        */
        render: function () {

            var view = this,
                isCurrentScreen = false;

            this.setElement($('#panel_3:last'));

            // Swipe Left Event
            this.$el.find('img').each(function () {
                $(this).bind('swipeleft', function () {
                    view.nextSlide();
                });
            });

            // Swipe Right Event
            this.$el.find('img').each(function () {
                $(this).bind('swiperight', function () {
                    view.previousSlide();
                });
            });

            // Bind the keyboard left and right keys to go through the slides
            $(window).keydown(function (event) {

                // Left
                if (config.screen === 3 && event.keyCode === 37) {
                    view.previousSlide();
                }

                // Right
                if (config.screen === 3 && event.keyCode === 39) {
                    view.nextSlide();
                }

            });

            $('body').bind('user_scroll', function (event, obj) {

                if (obj.top < 3335  && obj.bottom > 3610 && !isCurrentScreen) {
                    view.fanOut();
                    isCurrentScreen = true;
                } else if ((obj.top > 3335  || obj.bottom < 3610) && isCurrentScreen) {
                    view.fanIn();
                    isCurrentScreen = false;
                }

            });

            // Open the preview store
            $('#try_it').bind('click', function () {

                if (isMobile.any()) {

                    return true;

                } else {

                    view.showPreview();

                    return false;

                }
                
            });

            // Set the current slide
            this.setCurrentSlide(this.$el.find('.apps_carousel_container_inner img:first'));

            // Fan the gallery in if we're on a different screen
            if (config.screen !== 3 && !isMobile.any()) {
                this.fanIn();
            }

        }

    });

});