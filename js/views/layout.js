/*jslint nomen:true */
/*global define, window, document, config, require */

// /views/layout.js

define([
    'jquery',
    'underscore',
    'backbone',
    'scrollto',
    'mobiledetection',
    'prettyphoto',
    'jqmobile',
    'scrollto'
], function ($, _, Backbone, scrollTo, isMobile, prettyPhoto, jqm, ScrollTo) {

    'use strict';

    var lastPage,
        firstLoad = true,
        screenTops = [230, 1192, 2272, 3040, 4133, 4990, 5710];

    config.screen = 6;
    config.screenTop = 5;

    return Backbone.View.extend({

        el: 'body',

        events: {
            'click .bottomnav .page_item a': 'bottomNavClick'
        },

        /**
        * @function
        */
        renderHome: function () {

            var that = this;

            $('body').unbind('user_scroll');

            require([
                '_js/views/home',
            ], function (Layout) {

                // Initialize the modules
                var layout = new Layout();

                that.doLayout();

                layout.render();

               $('.moonloader').hide();

            });

        },

        /**
        * @function
        */
        renderContent: function () {

            var view = this;

            $('.navigation').css('bottom', '0px').removeClass('loading');

            //this.$el.unbind('scroll');

            //$('body').unbind('user_scroll');

            require([
                '_js/views/content/apps'
            ], function (View) {

                var view = new View();
                view.render();

                $('.moonloader').hide();

                $('.content_header .icon_share2_inner').bind('click', function () {
    
                  var loc = document.location, obj = {}, $el = $(this).parent();

                  obj.url = loc.protocol + '//' + loc.hostname + ((loc.hash.length > 2) ? loc.hash.replace('#', '') : loc.pathname);

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

                });

            });

        },

        /**
        * @function
        */
        bottomNavClick: function (event) {
            var $next = $(event.target).next();
            this.hideSubnavs();
            if ($next && $next.is('ul')) {
                if ($next.css('display') === 'block') {
                    this.hideSubnavs();
                } else {
                    this.hideSubnavs(function () {
                        $next.css('display', 'block');
                        $next.animate({
                            bottom: 75,
                            opacity: 1
                        }, 150);
                    });
                }
                return false;
            }
        },

        /**
        * @function
        * @param {Element} $bubble
        * @param {Int} position
        * @param {Int} topBounds
        * @param {Int} bottomBounds
        * @param {Int} rate
        */
        animateOpacity: function ($bubble, position, topBounds, bottomBounds, rate) {
             if (position > bottomBounds - rate || position < topBounds + (rate * 2)) {
                  $bubble.css('opacity', 0);
              } else if (position > bottomBounds - (rate * 2) || position < topBounds + (rate * 2)) {
                  $bubble.css('opacity', 0.2);
              } else if (position > bottomBounds - (rate * 3) || position < topBounds + (rate * 3)) {
                  $bubble.css('opacity', 0.3);
              } else if (position > bottomBounds - (rate * 4) || position < topBounds + (rate * 4)) {
                  $bubble.css('opacity', 0.4);
              } else if (position > bottomBounds - (rate * 5) || position < topBounds + (rate * 5)) {
                  $bubble.css('opacity', 0.5);
              } else if (position > bottomBounds - (rate * 6) || position < topBounds + (rate * 6)) {
                  $bubble.css('opacity', 0.6);
              } else if (position > bottomBounds - (rate * 7) || position < topBounds + (rate * 7)) {
                  $bubble.css('opacity', 0.7);
              } else if (position > bottomBounds - (rate * 8) || position < topBounds + (rate * 8)) {
                  $bubble.css('opacity', 0.8);
              } else if (position > bottomBounds - (rate * 9) || position < topBounds + (rate * 9)) {
                  $bubble.css('opacity', 0.9);
              } else {
                  $bubble.css('opacity', 1);
              }

        },

         /**
        * @function
        * @param {Object} obj
        */
        doLayout: function (obj) {

             var displayHeight = 0,
                 panels = [],
                 view = this;

             this.setElement($('.page_viewport_inner:last'));

             this.$el.find('.panel').each(function () {
                 displayHeight += $(this).height();
                 panels.push({
                     top: displayHeight,
                     left: $(this).offset().left,
                     bottom:  displayHeight - $(this).height(),
                     id: $(this).attr('id'),
                     $el: $(this)
                 });
             });

             $('.page_viewport_inner').scrollTo(
                config.homeTop || 8000,
                0
              );

             function scrollChange () {

               var position = {
                     left: view.$el[0].pageXOffset || view.$el[0].scrollLeft,
                     top: view.$el[0].pageYOffset || view.$el[0].scrollTop,
                     current: null
                 };

                 // Set the current item on the right navigation
                 $('.side_navigation a').removeClass('current');
                 
                 _.each(panels, function (panel) {

                     if (position.bottom < panels[0].top) {
                       config.screen = 0;
                       config.screenTop = 0;

                     } else if (panel.top < position.top) {
                         config.screen = parseInt(panel.id.replace('panel_', ''), 10) + 1;
                         config.screenTop = parseInt(panel.id.replace('panel_', ''), 10);
                     }

                 });

                 position.current = '#panel_' + config.screen;

                 $('.side_navigation a[href=#panel_' + config.screen + ((config.screen === 6) ? '_anchor' : '') + ']').addClass('current');

                 config.homeTop = position.top;

                 // Fire an event to announce the new position
                 $('body').trigger('user_scroll', position);

             }

             // Bind the scroll event
             if (!isMobile.any()) {
               this.$el.scroll(scrollChange);
               $(window).resize(scrollChange);
             }

            // Make the last dot selected as current to start with
            this.$el.find('.side_navigation a:last').addClass('current');

            this.$el.find('.side_navigation a').unbind('click').bind('click', function () {

              $('.page_viewport_inner').scrollTo(
                screenTops[$(this).attr('href').replace('#panel_', '').replace('_anchor', '')],
                1000
              );

              return false;
            });

            // Remove the loading class from the panels to show them
            $('body .loading').removeClass('loading');

            // Add a special mobile class to the body tag for mobile devices
            if (isMobile.any()) {
                $('body').addClass('mobile');

            // Add a computer class for non-mobile devices
            } else {
               $('body').addClass('computer');
            }

            // Bind an Event Listener to listen for a change to animateOpacity
            $('body').bind('animateOpacity', function (event, $bubble, position, topBounds, bottomBounds, rate) {
                view.animateOpacity($bubble, position, topBounds, bottomBounds, rate);
            });

            // Initialize Pretty Photo
            $("a[rel^='prettyPhoto']").prettyPhoto({
                opacity: 0.3,
                default_height: 650,
                default_width: 1000,
                social_tools: '',
                theme: 'light_rounded'
            });

            if (config.page !== 'home') {
                $('.navigation').css('bottom', '0px');
            }

        },

        /**
        * @function
        */
        hideSubnavs: function (cb) {

            $('.navigation .children').animate({
                bottom: -30,
                opacity: 0
            }, 150, function () {
                $(this).css('display', 'none');
                if (typeof cb === 'function') {
                    cb();
                }
            });

        },

        /**
        * @function
        * @param {String} action
        */
        pageChange: function (action) {

            var that = this, $back;

            function renderView (html) {
              var $new = $(html),
                    $old = $('div[data-role=page]:last');

                // Add the back button
                if (!$new.find('.page-home').length && !firstLoad) {
                    $back = $('<a class="page_back" href="#/"></a>');
                    $back.bind('click', function () {
                        document.location.hash = '/';
                        return false;
                    });
                    $new.find('.page_viewport_inner').append($back);
                }

                // Put the new element in the DOM after the old one
                $old.after($new);

                // Animate in the new content
                $new.css('left', '100%').animate({
                    'left': '0%'
                }, 700).attr('data-action', action);

                // Animate out the old content
                $old.animate({
                    'left': '-100%'
                }, 700, function () {
                    $(this).remove();
                });

                if (action.replace('/', '') === '') {
                    that.renderHome();
                } else {
                    that.renderContent();
                }

                firstLoad = false;

            }

            this.hideSubnavs();

            if (action.indexOf('/') === -1 && action.length) {
                if (!firstLoad) {
                    return true;
                } else {
                    action = '';
                }
            }

            // If we need to pull the page in with ajax (hash tag change)
            if ((action.replace('/', '') !== document.location.pathname.replace('/', '') && action.replace('/', '').length) || (lastPage && lastPage !== action)) {

                $('.moonloader').show();

                $('.navigation li').removeClass('on_page_item');

                $('.navigation a').each(function () {
                  if ($(this).attr('href').indexOf(document.location.hash.replace('#', '')) !== -1) {
                    $(this).parent().addClass('on_page_item');
                  }
                });                

                // Get the page with Ajax
                $.ajax({
                    url: document.location.port + '//' + document.location.host + document.location.hash.replace('#', ''),
                    dataType: 'html',
                    data: {
                      'requestType': 'ajax'
                    },
                    success: function (html) {
                        renderView(html);
                    }, error: function (data) {
                      if (typeof data.responseText === 'string') {
                        renderView($(data.responseText));
                      }
                    }
                });

            // Home page
            } else if (action.replace('/', '') === '' && document.location.pathname.replace('/', '')  === '') {
                that.renderHome();
                firstLoad = false;

            // Content page
            } else {
                that.renderContent();
                firstLoad = false;
            }

            lastPage = action;

        },

        /**
        * @function
        */
        render: function () {

          this.setElement($('.page_viewport_inner:last'));

          // Override every link click if it is in the Moontoast domain
          $('a').live('click', function (event) {
              var loc = $(this).attr('href');

              if ($(this).parents('.panel').length) {
                config.screen = parseInt($(this).parents('.panel').attr('id').replace('panel_', ''), 10);                
              }
                if(typeof loc != 'undefined' && loc != '#'){
                    return true;
                }else{
                    return false;
                }
              if ((loc.indexOf('http') === -1 || loc.indexOf(document.location.host) !== -1) && $(this).attr('target') !== '_blank') {

                  if (loc.indexOf('http') !== -1) {
                      loc = loc.replace('https', '').replace('http', '').replace(document.location.host, '').replace('://', '').replace('www', '');
                  }

                  // Blog Link In SubNav
                  if (loc === '/story-telling/blog') {
                      $(this).attr('target', '_blank');
                      $(this).attr('href', '/blog/');
                      return true;

                  // Blog links
                  } else if (loc.indexOf('blog') !== -1) {
                    $(this).attr('target', '_blank');
                    return true;
                  }

                  document.location.hash = loc;

                  return false;
                  
              }

          });

          // Hide the subnav if an item is clicked
          $('.children').bind('click', function () {
            $(this).hide();
          });

        }

    });

});