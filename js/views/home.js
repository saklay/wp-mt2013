/*jslint nomen:true */
/*global define, window, document, config, require */

// /views/layout.js
console.log('home');
define([
  'backbone',
  'underscore',
  '_js/views/home/analytics',
  '_js/views/home/band',
  '_js/views/home/frisbee',
  '_js/views/home/moonwheel',
  '_js/views/home/social_apps',
  '_js/views/home/social_marketing',
  '_js/views/home/video'
], function (Backbone, _, Analytics, Band, Frisbee, Moonwheel, SocialApps, SocialMarketing, Video) {

    'use strict';

    return Backbone.View.extend({

        /**
        * @function
        */
        render: function () {

            // Initialize the modules
            var modules = [
                new Analytics(),
                new Band(),
                new Frisbee(),
                new Moonwheel(),
                new SocialApps(),
                new SocialMarketing(),
                new Video()
            ];

            // Render the modules
            _.each(modules, function (module) {
                module.render();
            });

        }

    });

});