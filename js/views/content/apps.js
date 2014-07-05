/*jslint nomen:true */
/*global define, window, document, config */

// /views/content/apps.js

var addthis_config = addthis_config || {"data_track_addressbar":true};

define([
    'jquery',
    'underscore',
    'backbone',
    'jqmobile'
], function ($, _, Backbone, jqmobile) {

    'use strict';

    return Backbone.View.extend({

        el: '.view_content',

        events: {
          'click .product_box img': 'thumbnailClick',
          'click .product_box div': 'thumbnailClick',
          'click .arrow_right': 'rightClick',
          'click .arrow_left': 'leftClick',
          'click .icon_share2': 'shareClick'
        },

        /**
        * @function
        */
        shareClick: function (event) {

          var $el = $(event.target),
            loc = document.location,
            obj = {};

          obj.url = obj.url = loc.protocol + '//' + loc.hostname + ((loc.hash.length > 2) ? loc.hash.replace('#', '') : loc.pathname);

          if (!$el.hasClass('icon_share2')) {
            return true;
          }

          // Toggle off
          if ($el.find('ul').length) {

              $el.find('ul').remove();

          // Toggle on
          } else {

              require([
                  'handlebars',
                  'text!' + config.assetPath + '/templates/content/share.html'
              ], function (Handlebars, Template) {
                  $el.append(Handlebars.compile(Template)(obj));
              });

          }

          return false;

        },

        /**
        * @function
        */
        thumbnailClick: function (event) {
          this.changeCurrentSelection($(event.target).parent());
          // $('#social_apps_main_container').offset().top -- Giving inconsistent value
          $('.page_viewport_inner').animate({
                scrollTop: 450
            }, 'slow');
        },

        /**
        * @function
        */
        rightClick: function () {
          if ($('.product_box_selected').next().length) {
            this.changeCurrentSelection($('.product_box_selected').next());
          } else {
            this.changeCurrentSelection($('.product_box:first'));
          }
          return false;
        },

        /**
        * @function
        */
        leftClick: function () {
          if ($('.product_box_selected').prev().length) {
            this.changeCurrentSelection($('.product_box_selected').prev());
          } else {
            this.changeCurrentSelection($('.product_box:last'));
          }
          return false;
        },

        /**
        * @function
        */
        changeCurrentSelection: function ($el) {

          var view = this,
            animationTime = 1000,
            $oldCurrent = this.$el.find('.product_box_selected'),
            $thumbnail = $(this.$el.find('.product_box').get($el.index())).find('img'),
            direction = 'right',
            compatible;

          this.$el.find('.product_box').removeClass('product_box_selected');

          $el.addClass('product_box_selected');

          if (!$el.index() && $oldCurrent.index() === this.$el.find('.tv_inner img').length - 1) {
            direction = 'right';
          } else if ($oldCurrent.index() > $el.index() || (!$oldCurrent.index() && $el.index() === this.$el.find('.tv_inner img').length - 1)) {
            direction = 'left';
          }

          this.$el.find('#app_title').html($thumbnail.attr('title'));
          this.$el.find('#app_description').html($thumbnail.data('description'));
          this.$el.find('#app_overview_content').html($thumbnail.data('overview'));
          this.$el.find('.quote').html($thumbnail.data('moreoverview'));
          this.$el.find('#compatible_logos').html('');

          compatible = String($thumbnail.data('compatible')).split(',');

          for (var i = 0; i < compatible.length; i++) {
            view.$el.find('#compatible_logos').append('<img src="' + config.assetPath + '/images/' + compatible[i] + '.png' +'" />');
          }

          this.$el.find('.tv_inner img').each(function () {

            if ($(this).index() === $el.index()) {
              $(this).css('left', (direction === 'left') ? -855 : 855).animate({
                'left': 0,
                'opacity': 1
              }, animationTime);

            } else if (direction === 'right') {
              $(this).css('left', 0).animate({
                'left': -855,
                'opacity': 0
              }, animationTime);

            } else {
              $(this).css('left', 0).animate({
                'left': 855,
                'opacity': 0
              }, animationTime);
            }

          });

        },

        /**
        * @function
        */
        render: function () {

          var view = this;

          this.$el.find('.product_box img').each(function () {
            $(this).parent().append('<div class="title_hidden">' + $(this).attr('title') + '</div>');
            view.$el.find('.tv_inner').append('<img src="' + $(this).data('image') + '" title="" />')
          });

          this.$el.find('.tv_inner img').each(function () {

            // Swipe Left Event
            $(this).bind('swipeleft', function () {
                view.rightClick();
            });

            // Swipe Right Event
            $(this).bind('swiperight', function () {
                view.leftClick();
            });

          });

          this.changeCurrentSelection($('.product_box:first'));

        }

    });

});