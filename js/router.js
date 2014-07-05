/*jslint nomen: true */
/*global define, require */
// router.js
define([

    'jquery',
    'underscore',
    'backbone',
    '_js/views/layout',
    'jqmobile'

], function ($, _, Backbone, Layout) {

    'use strict';

    // Create a new Backbone Router to listen for changes to the URL hash tag
    var Router = Backbone.Router.extend({

        routes: {

            // Default Routing for Widgets
            '*actions': 'pageAction'

        }

    });

    return {

        /**
        * @function
        * @param options
        */
        initialize: function (options) {
            
            // Create a New Router
            var router = new Router(options),
                layout = new Layout();
            // Widget Routing Event
            router.on('route:pageAction', function (action) {
                if (action.indexOf('prettyPhoto') === -1) {
                    layout.pageChange(action);
                }
            });
            
            // Remember routing changes so we can go back
            Backbone.history.start();

            layout.render();

        }

    };

});