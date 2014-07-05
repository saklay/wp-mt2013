var moontoast = moontoast || {};
moontoast.home = moontoast.home || {};

// hero

moontoast.home.Hero = function(bg_target, content_target, options) {
    _.bindAll(this, 'resize', 'start', 'stop', 'selector_click', 'next_slide', 'prev_slide');

    this.options = {
        min_width: 1200,
        delay: 10000,
        scroll_speed: 250
    };

    _.extend(this.options, options || {});

    this.slides = [];
    var self = this,
        imgs = $(bg_target).find('img'),
        contents = $(content_target);

    $.each(imgs, function(i, img) {
        self.slides.push(new moontoast.home.Slide(img, contents[i]));
    });

    this.imgs = $(bg_target).find('img');
    this.slide_count = this.imgs.length;

    this.interval = null;
    this.current_slide = 0;
    this.animating = false;

    $(window).resize(this.resize);

    this.prepare_content();
    this.load_images();


};

moontoast.home.Hero.prototype.prepare_content = function() {
    var self = this;

    $.each(this.slides, function(i, slide) {

        slide.content.hover(self.stop, self.start);
        slide.content.mousemove(self.stop);
        slide.content.find('.left-nav').click(self.prev_slide);
        slide.content.find('.right-nav').click(self.next_slide);

        var selector = slide.content.find('.selector');
        for(var sel_index = 0; sel_index < self.slide_count; sel_index++) {
            var page = $('<a href="#" class="page-selector" />');

            if(i == sel_index) {
                page.addClass('active');
            } else {
                page.on('click', {index: sel_index}, self.selector_click);
            }

            selector.append(page);
        }

        if(i !== 0) {
            slide.right.css('top', slide.right.position()['top'] + slide.right.outerHeight());
        }
    });
};

moontoast.home.Hero.prototype.selector_click = function(evt) {
    var index = evt.data.index;

    this.goto_slide(index);
    this.stop();

    return false;
};

moontoast.home.Hero.prototype.resize = function() {
    this.slide_width = $(window).width();

    if(this.slide_width < this.options.min_width) {
        this.slide_width = this.options.min_width;
    }

    this.imgs.css('width', this.slide_width);
};

moontoast.home.Hero.prototype.load_images = function() {
    var self = this,
        loaded = 0;

    this.imgs.each(function(i, item) {
        $(this).load(function() {
            loaded++;

            if(loaded >= self.slide_count) {
                self.start();
            }
        });
    });
};

moontoast.home.Hero.prototype.start = function() {
    this.resize();
    this.interval = setInterval(this.next_slide, this.options.delay);
};

moontoast.home.Hero.prototype.stop = function() {
    clearInterval(this.interval);
};

moontoast.home.Hero.prototype.restart = function() {
    this.stop();
    this.start();
};

moontoast.home.Hero.prototype.goto_slide = function(slide_number) {
    var self = this;

    if(!this.animating) {
        if(slide_number >= this.slide_count) {
            slide_number = 0;
        } else if(slide_number < 0) {
            slide_number = this.slide_count - 1;
        }

        if(slide_number == this.current_slide) {
            return;
        }

        this.animating = true;

        var slide = this.slides[this.current_slide],
            next_slide = this.slides[slide_number];

        slide.transition(next_slide, function() {
            self.animating = false;
        });

        this.current_slide = slide_number;
    }
};

moontoast.home.Hero.prototype.next_slide = function() {
    this.goto_slide(this.current_slide + 1);
};

moontoast.home.Hero.prototype.prev_slide = function() {
    this.goto_slide(this.current_slide - 1);
};


moontoast.home.Slide = function(img, content) {
    this.img = $(img);
    this.content = $(content);
    this.right = this.content.find('.right');
};

moontoast.home.Slide.prototype.transition = function(next_slide, callback) {
    var self = this;

    speed = 250;

    this.hide_right(function() {
        self.content.fadeOut(speed, function() {
            // put the new bg image behind the current one
            self.img.css('z-index', 1);
            next_slide.img.css('z-index', 0).show();

            // and fade out ontop of it
            self.img.fadeOut(speed, function() {
                next_slide.content.fadeIn(speed, function() {
                    next_slide.show_right(callback);
                });
            });
        });
    });
};

moontoast.home.Slide.prototype.hide_right = function(callback)  {
    this.right.animate({
        top: '+=' + this.right.outerHeight()
    }, {
        duration: 100,
        complete: callback
    });
};

moontoast.home.Slide.prototype.show_right = function(callback)  {
    var bottom = this.right.outerHeight() + this.right.position()['top'];

    this.right.animate({
        top: '-=' + this.right.outerHeight()
    }, {
        duration: 100,
        complete: callback
    });
};

// logo scroller

moontoast.home.ClientScroller = function(content, left, right, options) {
    _.bindAll(this, 'scroll_left', 'scroll_right', 'scroll', 'stop');

    this.options = {
        scroll_speed: 15,
        scroll_dx: 6
    };

    _.extend(this.options, options || {});

    // access dom elements
    this.content = $(content);
    $(left).hover(this.scroll_right, this.stop);
    $(right).hover(this.scroll_left, this.stop);

    // scroll propertes
    this.scroll_vel = 0;
    this.scroll_interval = null;

    // get some initial sizes and positions
    this.total_width = 0;
    this.viewport_width = this.content.parent().width();
    if(this.content.position() != null){
        this.position = this.content.position().left;
    }
    
    this.content.css('left', this.position);

    this.init();
};

moontoast.home.ClientScroller.prototype.init = function() {
    var self = this;

    this.content.find('img').load(function(evt) {
        self.total_width += $(evt.target).parents('li').outerWidth(true);
        self.content.css('width',  self.total_width);
    });
};

moontoast.home.ClientScroller.prototype.scroll_left = function() {
    this.scroll_vel = -this.options.scroll_dx;

    this.scroll_interval = setInterval(this.scroll, this.options.scroll_speed);
};

moontoast.home.ClientScroller.prototype.scroll_right = function() {
    this.scroll_vel = this.options.scroll_dx;
    this.scroll_interval = setInterval(this.scroll, this.options.scroll_speed);
};

moontoast.home.ClientScroller.prototype.scroll = function() {
    this.position += this.scroll_vel;

    if(this.position <= -this.total_width + this.viewport_width) {
        this.position = -this.total_width + this.viewport_width;
    } else if(this.position > 0) {
        this.position = 0;
    }

    this.content.css('left', this.position);
};

moontoast.home.ClientScroller.prototype.stop = function() {
    clearInterval(this.scroll_interval);
};

// setup functions

moontoast.home.column_hover = function(hero) {
    $('.column').hover(function() {
        $(this).addClass('hover');

        var goto_slide = $(this).attr('data-goto-slide');
        if(goto_slide) {
            hero.goto_slide(goto_slide - 1);
            hero.stop();
        }

    }, function() {
        $(this).removeClass('hover');
        hero.start();
    });

    $('.column').mousemove(function() {
        var goto_slide = $(this).attr('data-goto-slide');
        if(goto_slide) {
            hero.goto_slide(goto_slide - 1);
            hero.stop();
        }
    });
};

moontoast.home.navigation = function(nav_selector, speed) {
    $(nav_selector).hover(function() {
        $(this).addClass('hover');

        $(this).find('.subnav').slideDown(speed);
    }, function() {
        var nav = $(this);
        nav.find('.subnav').stop(true, false).slideUp(speed, function() {
            nav.removeClass('hover');
        });
    });
};

$(document).ready(function() {
    var hero = new moontoast.home.Hero(
        '#hero_container',
        '#slides .slide',
        {
            scroll_speed: 500
        }
    );

    var scroller = new moontoast.home.ClientScroller(
        '#client_content',
        '#left_button',
        '#right_button'
    );

    moontoast.home.navigation('.nav > li', 100);
    moontoast.home.column_hover(hero);
});