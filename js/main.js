/*global require, define, config */
(function () {

    'use strict';

    // The configuration for requirejs
    require.config({

        // File shorthand
        paths: {

            // Major libraries
            'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
            'underscore': config.assetPath + '/' + config.js + '/lib/underscore/main',
            'backbone': config.assetPath + '/' + config.js + '/lib/backbone/main',
            'handlebars': config.assetPath + '/' + config.js + '/lib/handlebars/main',
            'jqueryui': config.assetPath + '/' + config.js + '/lib/jquery-ui/jquery-ui',
            'touchwipe': config.assetPath + '/' + config.js + '/lib/jquery-touchwipe/main',
            'jqmobile': config.assetPath + '/' + config.js + '/lib/jquery-mobile/jquery-mobile',
            'easing': config.assetPath + '/' + config.js + '/lib/jquery-easing/main',
            'prettyphoto': config.assetPath + '/' + config.js + '/lib/jquery-prettyphoto/production',
            'mobiledetection': config.assetPath + '/' + config.js + '/lib/detection/mobile',
            'parallax': config.assetPath + '/' + config.js + '/lib/jquery-parallax/main',
            'scrollto': config.assetPath + '/' + config.js + '/lib/jquery-scrollto/main',
            'localscroll': config.assetPath + '/' + config.js + '/lib/jquery-localscroll/main',
            'jqpath': config.assetPath + '/' + config.js + '/lib/jquery-path/main',

            // Require.js plugins
            'text': config.assetPath + '/' + config.js + '/lib/require/text',
            '_js': config.assetPath + '/' + config.js

        },

        // This is passed into every file's query string to keep the files from caching
        urlArgs: "_=" +  new Date().getTime()

    });

    define([
        '_js/router'
    ], function (Router) {
        Router.initialize(config);
    });

}());