var moontoast = moontoast || {};
moontoast.home = moontoast.home || {};

// dite bar

moontoast.home.diteBar = function(options) {
    _.bindAll(this, 'changeDite');
    
    var target = $('#header_subnav');
    this.links = target.find('a');
    
    this.options = {};

    _.extend(this.options, options || {});
    var self = this;
    
    this.links.on('click', function(){
        self.changeDite($(this));    
    });
    
    this.appSlider = new moontoast.home.appSlider();
};

moontoast.home.diteBar.prototype.changeDite = function(target){
    this.links.removeClass('active');
    target.addClass('active');
    if(typeof this.currentSelection != 'undefined'){
        var direction = this.currentSelection - target.parent('li').index() < 1 ? 'right' : 'left';
    }
    this.currentSelection = target.parent('li').index();
    this.appSlider.Slide(this.currentSelection, direction);
}

// device viewer
moontoast.home.deviceViewer = function(target, options) {
    _.bindAll(this, 'slideRight', 'slideLeft');
    
    this.options = {
        delay: 10000,
        scroll_speed: 250,
        panelWidth: 480
    };

    _.extend(this.options, options || {});
    this.currentPosition = 0;
    var self = this;
    
    
};

moontoast.home.deviceViewer.prototype.Slide = function(target){
    var self = this;
    this.devices = [];
    /*
    var self = this,
        appDevices = $(bg_target).find('div'),
        contents = $(content_target);
    */
    self.target = target;
    
    this.devices = $(target).parent('div').find('.device-list');
    this.deviceCount = this.devices.find('li').length;
    var nav = $(target).attr('class');
    if(nav == 'nav-device-right'){
        if(this.currentPosition < this.deviceCount - 1){
            this.currentPosition++;
            this.slideRight();
        }
    }else{
        if(this.currentPosition > 0){
            this.currentPosition--;
            this.slideLeft();
        }
    }
}

moontoast.home.deviceViewer.prototype.getPosition = function(){
    var self = this;
    return this.currentPosition = self.devices.css('left').replace(/[^-\d\.]/g, '') * 1;
}

moontoast.home.deviceViewer.prototype.slideRight = function(){
    var self = this;
    $(this.target).parent('div').find('.nav-device-left').css('visibility', 'visible');
    $(this.devices).stop().animate({
        left: '-'+this.currentPosition * this.options.panelWidth
      }, 1000, function() {
        if(self.currentPosition + 1 >= self.deviceCount){
            $(self.target).css('visibility', 'hidden');
        }
      });
}

moontoast.home.deviceViewer.prototype.slideLeft = function(){
    var self = this;
    $(self.target).parent('div').find('.nav-device-right').css('visibility', 'visible');
    $(this.devices).stop().animate({
        left: '-'+this.currentPosition * this.options.panelWidth
      }, 1000, function() {
        if(self.currentPosition <= 0){
            $(self.target).css('visibility', 'hidden');
        }
      });
}

moontoast.home.deviceViewer.prototype.hideNav = function(side){
    $(side).css('visibility', 'hidden');
}


//app slider

moontoast.home.appSlider = function(options) {
    _.bindAll(this);

    this.options = {};

    _.extend(this.options, options || {});

    var self = this,
    target = $('#apps-slider');
    apps = target.find('li'),
    left_nav = target.find('.nav-device-left'),
    right_nav = target.find('.nav-device-right'),
    diteGroups = target.find('ul');
    
    apps.on('click', function(){
        apps.removeClass('active');
        $(this).addClass('active');
        selection = $(this).index();
        els = $('.social_apps_container > div');
        $(els).fadeOut('fast', function(){
            console.log(selection, els);
            $(els[selection]).fadeIn();
        });
    });
    
    this.currentSelection = typeof this.currentSelection !== 'undefined' ? this.currentSelection : 0;
    
    left_nav.on('click', function(){
        $(".nav-device-right").css('visibility', 'visible');
        var el = $('#header_subnav').find('ul').find('li')[self.currentSelection - 1];
        $(el).find('a').click();
    });
    
    right_nav.on('click', function(){
        $(".nav-device-left").css('visibility', 'visible');
        var el = $('#header_subnav').find('ul').find('li')[self.currentSelection + 1];
        $(el).find('a').click();
        //self.Slide(self.currentSelection + 1, 'right');
    });
};

moontoast.home.appSlider.prototype.Slide = function(selection, direction){
    var self = this;
    
    selection = typeof selection !== 'undefined' ? selection : 1;
    this.currentSelection = selection;
    direction = typeof direction !== 'undefined' ? direction : 'right';
    self.slideDirection = {};
    self.slideDirection[direction] = '-960px';
    var target = $('#apps-slider');
    var diteGroups = target.find('ul');
    self.inactiveGroup = $(diteGroups[selection]);
    diteGroups.each(function(){
        var el = this;
        if(!$(this).hasClass('hidden')){
            $(this).promise().done(function(){
                $(this).animate(
                    self.slideDirection
                  , 1000, function() {
                    $(el).addClass('hidden').removeAttr('style');
                    console.log(self.slideDirection);
                    $(self.inactiveGroup).css(self.slideDirection).removeClass('hidden');
                    self.slideDirection[direction] = 0;
                    $(self.inactiveGroup).stop().animate(
                        self.slideDirection
                      , 1000, function() {
                        $(self.inactiveGroup).removeAttr('style');
                      });
                  });  
            })
        }
    });
    
    if(selection <= 0){
        $(".nav-device-left").css('visibility', 'hidden');
        $(".nav-device-right").css('visibility', 'visible');
    }else if(selection + 1 >= diteGroups.length){
        $(".nav-device-right").css('visibility', 'hidden');
         $(".nav-device-left").css('visibility', 'visible');
    }else{
        $(".nav-device-right").css('visibility', 'visible');
        $(".nav-device-left").css('visibility', 'visible');
    }
    
    
    //$('#apps-slider ul').css(slideDirection)
    //self.activeGroup = {};
    //self.activeGroup = diteGroups;
    //self.inactiveGroup.css(direction, '-960px');
    
}


// setup functions
moontoast.home.blog_links = function(el) {
    el.hover(
        function(){
            $(this).animate({
                top: '-5px'
            }, 100); 
        },
        function(){
            $(this).animate({
                top: '0'
            }, 100);
        });
};

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
        if($(this).find('.subnav > li').length > 0){
            $(this).find('.subnav').stop(true, false).slideDown(speed);
        }
    }, function() {
        var nav = $(this);
        nav.find('.subnav').slideUp(speed, function() {
            nav.removeClass('hover');
        });
    });
};

$(document).ready(function() {
    var deviceViewer = new moontoast.home.deviceViewer();
    $('.social_apps_container .nav-device-left, .social_apps_container .nav-device-right').on('click', function(e){
         deviceViewer.Slide(e.target);
    });
    
    var diteBar = new moontoast.home.diteBar();
    
    moontoast.home.navigation('.nav > li', 100);
});
