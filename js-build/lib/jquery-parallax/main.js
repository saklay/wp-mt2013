/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function(e){var t=e(window),n=t.height();t.resize(function(){n=t.height()}),e.fn.parallax=function(r,i,s){function l(){var s=t.scrollTop();o.each(function(){var t=e(this),f=t.offset().top,l=u(t);if(f+l<s||f>s+n)return;o.css("backgroundPosition",r+" "+Math.round((a-s)*i)+"px")})}var o=e(this),u,a,f=0;o.each(function(){a=o.offset().top}),s?u=function(e){return e.outerHeight(!0)}:u=function(e){return e.height()};if(arguments.length<1||r===null)r="50%";if(arguments.length<2||i===null)i=.1;if(arguments.length<3||s===null)s=!0;e("body").bind("user_scroll",l),l()}})(jQuery)