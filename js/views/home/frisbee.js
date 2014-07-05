/*jslint nomen:true */
/*global define, window, document, config */

// /views/home/frisbee.js

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

        el: '#panel_4',

        /**
        * @function
        */
        render: function () {

            this.setElement($('#panel_4:last'));

            var $bubble = this.$el.find('.panel04_bubble'),
                $photos = this.$el.find('.frisbee'),
                currentFrisbeeShot = 0,
                animStartPoint = 3900;

            // Parallax
            if (!isMobile.any()) {
                $photos.parallax('bottom', 0.9);
            }

            // Bind to the user scroll event
            $('body').bind('user_scroll', function (event, position) {

                    if (position.top > animStartPoint + 400) {
                         if (currentFrisbeeShot !== 2) {
                             $photos.css('visibility', 'hidden');
                             $('.frisbee_2').css('visibility', 'visible');
                             currentFrisbeeShot = 2;
                         }
                    } else if (position.top > animStartPoint + 300) {
                        if (currentFrisbeeShot !== 3) {
                             $photos.css('visibility', 'hidden');
                             $('.frisbee_3').css('visibility', 'visible');
                             currentFrisbeeShot = 3;
                         }
                    } else if (position.top > animStartPoint + 200) {
                        if (currentFrisbeeShot !== 4) {
                             $photos.css('visibility', 'hidden');
                             $('.frisbee_4').css('visibility', 'visible');
                             currentFrisbeeShot = 4;
                         }
                    } else if (position.top > animStartPoint + 100) {
                        if (currentFrisbeeShot !== 5) {
                             $photos.css('visibility', 'hidden');
                             $('.frisbee_5').css('visibility', 'visible');
                             currentFrisbeeShot = 5;
                         }
                     } else if (position.top > animStartPoint) {
                        if (currentFrisbeeShot !== 6) {
                             $photos.css('visibility', 'hidden');
                             $('.frisbee_6').css('visibility', 'visible');
                             currentFrisbeeShot = 6;
                         }
                    } else {
                        if (currentFrisbeeShot !== 1) {
                             $photos.css('visibility', 'hidden');
                             $('.frisbee_1').css('visibility', 'visible');
                             currentFrisbeeShot = 1;
                         }
                    }

            });
            
        }

    });

});