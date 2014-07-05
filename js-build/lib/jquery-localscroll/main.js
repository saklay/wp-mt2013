/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/

(function(e){function r(t,n,r){var i=n.hash.slice(1),s=document.getElementById(i)||document.getElementsByName(i)[0];if(!s)return;t&&t.preventDefault();var o=e(r.target);if(r.lock&&o.is(":animated")||r.onBefore&&r.onBefore.call(r,t,s,o)===!1)return;r.stop&&o.stop(!0);if(r.hash){var u=s.id==i?"id":"name",a=e("<a> </a>").attr(u,i).css({position:"absolute",top:e(window).scrollTop(),left:e(window).scrollLeft()});s[u]="",e("body").prepend(a),location=n.hash,a.remove(),s[u]=i}o.scrollTo(s,r).trigger("notify.serialScroll",[s])}var t=location.href.replace(/#.*/,""),n=e.localScroll=function(t){e("body").localScroll(t)};n.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window,reset:!0},n.hash=function(t){if(location.hash){t=e.extend({},n.defaults,t),t.hash=!1;if(t.reset){var s=t.duration;delete t.duration,e(t.target).scrollTo(0,t),t.duration=s}r(0,location,t)}},e.fn.localScroll=function(s){function o(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==t&&(!s.filter||e(this).is(s.filter))}return s=e.extend({},n.defaults,s),s.lazy?this.bind(s.event,function(t){var n=e([t.target,t.target.parentNode]).filter(o)[0];n&&r(t,n,s)}):this.find("a,area").filter(o).bind(s.event,function(e){r(e,this,s)}).end().end()}})(jQuery)