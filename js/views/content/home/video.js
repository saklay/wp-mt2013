/*jslint nomen:true */
/*global define, window, document, config */

// /views/home/video.js

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

        el: '#panel_5',

        /**
        * @function
        */
        render: function () {

            this.setElement($('#panel_5:last'));

            var $tv = this.$el.find('.panel05_tv'),
                view = this;
            
            // Parallax
            if (!isMobile.any()) {
                this.$el.parallax("bottom", -0.2);
            }

        }

    });

});