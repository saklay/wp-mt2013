/*jslint nomen:true */
/*global define, window, document, config, setTimeout, setInterval, clearInterval, alert */

// /views/home/moonwheel.js

define([

    'jquery',
    'underscore',
    'backbone',
    'jqpath',
    'jqmobile',
    'mobiledetection',
    'jqueryui'

], function ($, _, Backbone, jQueryPath, jqmobile, isMobile, jQueryUI) {

    'use strict';

    return Backbone.View.extend({

        el: '#panel_0',

        events: {
            'click .moonwheel_icon': 'closeClick',
            'click .item_link': 'moduleToggle',
            'click .featured_downloads .arrow_right': 'downloadsRightClick',
            'click .featured_downloads .arrow_left': 'downloadsLeftClick',
            'click .blog .arrow_right': 'blogRightClick',
            'click .blog .arrow_left': 'blogLeftClick'
        },

        wheelOut: true,
        timeout: 700,

        /**
        * @function
        */
        contactFormSubmit: function () {

            var data = {},
                error = false,
                $form = $(this);

            $form.find('input[type=text], select').each(function () {
                if (!$(this).val() || !$(this).val().length || $(this).val() === 'Select One…') {
                    $(this).addClass('error');
                    error = true;
                } else {
                    $(this).removeClass('error');
                }
                data[$(this).attr('name')] = $(this).val();
            });

            if (error) {
                alert('Please finish filling out the form before you submit it.');
                return false;
            } else {
                alert('Thanks!  We will be in touch!');
                return true;
            }

        },

        /**
        * @function
        */
        downloadsLeftClick: function (event) {
            
            var $current = this.$el.find('.featured_downloads .slides .current'),
                $prev,
                timeout = 500;

            if (event) {
                clearInterval(this.autoRotate);
            }

            if (!$current) {
                $current = this.$el.find('.featured_downloads .slides img:first');
            }
            
            $current.animate({
                'left': 236
            }, timeout, function () {
                $(this).removeClass('current');
            });

            if ($current.prev().length) {
                $prev = $current.prev();
            } else {
                $prev = this.$el.find('.featured_downloads .slides img:last');
            }

            $prev.css({
                'left': -236
            }).animate({
                'left': 0
            }, timeout, function () {
                $(this).addClass('current');
            });

        },

        /**
        * @function
        */
        downloadsRightClick: function (event) {

            var $current = this.$el.find('.featured_downloads .slides .current'),
                $next,
                timeout = 500;

            if (event) {
                clearInterval(this.autoRotate);
            }
            
            $current.animate({
                'left': -236
            }, timeout, function () {
                $(this).removeClass('current');
            });

            if ($current.next().length) {
                $next = $current.next();
            } else {
                $next = this.$el.find('.featured_downloads .slides img:first');
            }

            $next.css({
                'left': 236
            }).animate({
                'left': 0
            }, timeout, function () {
                $(this).addClass('current');
                $('#download_link').attr('href', $(this).data('link'));
            });

        },

        /**
        * @function
        */
        blogLeftClick: function (event) {
            
            var $current = this.$el.find('.blog .slides .current'),
                $prev,
                timeout = 500;

            if (event) {
                clearInterval(this.autoRotateBlog);
            }

            if (!$current) {
                $current = this.$el.find('.blog .slides a:first');
            }
            
            $current.animate({
                'left': 236
            }, timeout, function () {
                $(this).removeClass('current');
            });

            if ($current.prev().length) {
                $prev = $current.prev();
            } else {
                $prev = this.$el.find('.blog .slides a:last');
            }

            $('.blog h3').html($prev.data('name'));
            $('#blog_link').attr({
                'href': $prev.attr('href'),
                'target': $prev.attr('target')
            });

            $prev.css({
                'left': -236
            }).animate({
                'left': 0
            }, timeout, function () {
                $(this).addClass('current');
            });

        },

        /**
        * @function
        */
        blogRightClick: function (event) {

            var $current = this.$el.find('.blog .slides .current'),
                $next,
                timeout = 500;

            if (event) {
                clearInterval(this.autoRotateBlog);
            }
            
            $current.animate({
                'left': -236
            }, timeout, function () {
                $(this).removeClass('current');
            });

            if ($current.next().length) {
                $next = $current.next();
            } else {
                $next = this.$el.find('.blog .slides a:first');
            }

            $('.blog h3').html($next.data('name'));
            $('#blog_link').attr({
                'href': $next.attr('href'),
                'target': $next.attr('target')
            });

            $next.css({
                'left': 236
            }).animate({
                'left': 0
            }, timeout, function () {
                 $(this).addClass('current');                
            });

        },

        /**
        * @function
        * @param {Object} obj
        *    @config {Element} $el
        *    @config {Int} left
        *    @config {Int} top
        *    @config {int} width
        *    @config {Int} height
        */
        animateIn: function (obj) {
            obj.$el.css('display', 'block').animate({
                path: new $.path.bezier({
                    start: { 
                      x: 540, 
                      y: 540, 
                      angle: 180
                    },  
                    end: { 
                      x: obj.left,
                      y: obj.top, 
                      angle: 450, 
                      length: 1.25
                    }
                }),
                opacity: 1,
                width: obj.width,
                height: obj.height
            }, this.timeout);
            
        },

        /**
        * @function
        * @param {Object} obj
        *    @config {Element} $el
        *    @config {Int} left
        *    @config {Int} top
        */
        animateOut: function (obj) {
            obj.$el.animate({
                path: new $.path.bezier({
                    start: { 
                      x: obj.left, 
                      y: obj.top, 
                      angle: 450
                    },  
                    end: { 
                      x: 520,
                      y: 485, 
                      angle: 180, 
                      length: 1
                    }
                }),
                opacity: 0,
                width: 0,
                height: 0
            }, this.timeout, function () {
                $(this).css('display', 'none');
            });
            
        },

        /**
        * @function
        */
        openWheel: function (module) {

            var view = this;

            // Spin the Moonwheel
            this.$el.find('.moonwheel').css({
                'transform': 'rotate(-360deg)',
                '-moz-transform': 'rotate(-360deg)',
                '-webkit-transform': 'rotate(-360deg)',
                'o-transform': 'rotate(-360deg)'
            });

            // Dite Methodology
            if (!module || module === 'dite_methodology') {
                this.animateIn({
                    $el: this.$el.find('.dite_methodology'),
                    left: 460,
                    top: 680,
                    width: 195,
                    height: 149
                });
            }

            // Join the Toast
            if (!module || module === 'join_the_toast') {
                this.animateIn({
                    $el: this.$el.find('.join_the_toast'),
                    left: 215,
                    top: 390,
                    width: 195,
                    height: 149
                });
            }

            // Featured Downloads
            if (!module || module === 'featured_downloads') {
                this.animateIn({
                    $el: this.$el.find('.featured_downloads'),
                    left: 230,
                    top: 615,
                    width: 195,
                    height: 149
                });
            }

            // Contact Us
            if (!module || module === 'contact') {
                this.animateIn({
                    $el: this.$el.find('.contact'),
                    left: 320,
                    top: 125,
                    width: 458,
                    height: 210
                });
            }

            // Social Activation
            if (!module || module === 'social_activation') {
                this.animateIn({
                    $el: this.$el.find('.social_activation'),
                    left: 690,
                    top: 615,
                    width: 195,
                    height: 149
                });
            }

            // Our Blog
            if (!module || module === 'blog') {
                this.animateIn({
                    $el: this.$el.find('.blog'),
                    left: 715,
                    top: 380,
                    width: 195,
                    height: 149
                });
            }

            // Show the spokes
            setTimeout(function () {

                // Show all the spokes
                if (!module) {
                    view.$el.find('.spoke').animate({
                        'opacity': 1
                    }, 1000);

                // Show the spoke for the inividual module
                } else {
                    view.$el.find('.spoke_' + module).animate({
                        'opacity': 1
                    }, 1000);
                }

            }, this.timeout);

            // The wheel is out.  Proclaim it!
            if (!module) {
                this.wheelOut = true;
            }
            
            this.$el.find('.moonwheel_icon').removeClass('moonwheel_icon_off');

        },

        /**
        * @function
        */
        closeWheel: function (module) {

            var view = this;

            if (!module) {

                // Hide the spokes
                this.$el.find('.spoke').animate({
                    'opacity': 0
                }, 400);

                // Spin the wheel.  Get lucky.
                this.$el.find('.moonwheel').css({
                    'transform': 'rotate(360deg)',
                    '-moz-transform': 'rotate(360deg)',
                    '-webkit-transform': 'rotate(360deg)',
                    'o-transform': 'rotate(360deg)'
                });

            } else {

                // Hide the spoke
                this.$el.find('.spoke_' + module).animate({
                    'opacity': 0
                }, 400);

            }

            // Dite Methodology
            if (!module || module === 'dite_methodology') {
                this.animateOut({
                    $el: this.$el.find('.dite_methodology'),
                    left: 550,
                    top: 754
                });
            }

            // Join the Toast
            if (!module || module === 'join_the_toast') {
                this.animateOut({
                    $el: this.$el.find('.join_the_toast'),
                    left: 85,
                    top: 200
                });
            }

            // Featured Downloads
            if (!module || module === 'featured_downloads') {
                this.animateOut({
                    $el: this.$el.find('.featured_downloads'),
                    left: 0,
                    top: 485
                });
            }

            // Moontoast Videos
            if (!module || module === 'moontoast_videos') {
                this.animateOut({
                    $el: this.$el.find('.moontoast_videos'),
                    left: 215,
                    top: 755
                });
            }
            
            // Contact Us
            if (!module || module === 'contact') {
                this.animateOut({
                    $el: this.$el.find('.contact'),
                    left: 425,
                    top: 95
                });
            }
            
             // Social Activation
             if (!module || module === 'social_activation') {
                 this.animateOut({
                    $el: this.$el.find('.social_activation'),
                    left: 830,
                    top: 480
                });
             }
            
            // Our Blog
            if (!module || module === 'blog') {
                this.animateOut({
                    $el: this.$el.find('.blog'),
                    left: 765,
                    top: 195
                });
            }
            
            if (!module) {
                this.wheelOut = false;
            }

            this.$el.find('.moonwheel_icon').addClass('moonwheel_icon_off');
            
        },

        /**
        * @function
        * @param {Object} event
        */
        moduleToggle: function (event) {
            var widget = $(event.target).data('widget');
            if ($('.' + widget).css('display') === 'none') {
                this.openWheel(widget);
            } else {
                this.closeWheel(widget);
            }
            return false;
        },

        /**
        * @function
        * @param {Object} event
        */
        closeClick: function (event) {

            var view = this;

            // Animate Close
            if (this.wheelOut) {
                this.closeWheel();

            // Animate Open
            } else {
                this.openWheel();

            } 
        },

         /**
        * @function
        * @param {Object} obj
        */
        render: function (obj) {

            var view = this,
                onMoonwheelScreen = false;

            this.setElement($('#panel_0:last'));

            $('#contact form').bind('submit', view.contactFormSubmit);
            
            // Bind the user scroll event
            $('body').bind('user_scroll', function (event, position) {

                // Moonwheel Screen
                 if (position.top < 620) {

                     // If we just got to the moonwheel screen
                     if (!onMoonwheelScreen) {

                         // Animate the moonwheel opened
                        view.openWheel();

                         // Rembember that we are here
                         onMoonwheelScreen = true;

                     }

                     // Animate the moon with scrolling
                     if (position.top < 300) {
                         $('.top_moon').css({
                             'position': 'fixed',
                             'top': - (position.top * 1.5)
                         });

                     // Stop animating the moon
                     } else {
                         $('.top_moon').css({
                             'position': 'absolute',
                             'top': 0
                         });
                     }

                 // Leave the Moonwheel Screen
                 } else if (position.top > 1320) {
                     if (onMoonwheelScreen) {
                         view.closeWheel();
                         onMoonwheelScreen = false;
                     }
                 }

            });

            // Swipe Left Event on Downloads
            this.$el.find('.featured_downloads .moonwheel_box img').each(function () {
                $(this).bind('swipeleft', function () {
                    view.downloadsLeftClick();
                    clearInterval(view.autoRotate);
                });
            });

            // Swipe Right Event on Downloads
            this.$el.find('.featured_downloads .moonwheel_box img').each(function () {
                $(this).bind('swiperight', function () {
                    view.downloadsRightClick();
                    clearInterval(view.autoRotate);
                });
            });

            // Swipe Left Event on Blog
            this.$el.find('.blog.moonwheel_box img').each(function () {
                $(this).bind('swipeleft', function () {
                    view.blogLeftClick();
                    clearInterval(view.autoRotateBlog);
                });
            });

            // Swipe Right Event on Blog
            this.$el.find('.blog .moonwheel_box img').each(function () {
                $(this).bind('swiperight', function () {
                    view.blogRightClick();
                    clearInterval(view.autoRotateBlog);
                });
            });

            this.autoRotate = setInterval(function () {
                view.downloadsRightClick();
            }, 3900);

            this.autoRotateBlog = setInterval(function () {
                view.blogRightClick();
            }, 4000);

            if (!isMobile.any() && config.homeTop > 1200) {
                view.closeWheel();
            }
            view.downloadsRightClick();
            view.blogRightClick();

        }

    });

});