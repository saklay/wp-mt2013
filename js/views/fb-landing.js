$(document).ready(function() {
	$('a').first().attr('href', 'javascript:;');
        $('#mc_embed_signup').remove();
	$('.moonloader').hide();
	// slides 
	var startSlide = 1;
	
	// Remove hashtag from URL to make the JQuery slides functional
	if(window.location.hash) {
		tempHash = window.location.hash.replace('#', '');
		window.location = window.location.protocol + window.location.host + tempHash;
	}
	
	$('.slides').slides({
		preload: true,
		generateNextPrev: false,
		generatePagination: true,
		start: startSlide,
		hoverPause: true
	});
	
	// eventsSlides
	$('.load_contact_form').click(loadContactForm);
	$('#submit_contact_form').click(submitContactForm);
        $('#close_contact_form').click(closeContactForm);
	$('.icon_share').click(shareThisPage);
	
        /**
	 * Loads the contact form. Occurs when user clicks any of the buttons in the main panel.
	 */
	function loadContactForm(evt) {
		evt.preventDefault();
		//$('#main').fadeOut(function() {
                        $('#overlay').height(window.innerHeight).fadeIn(function(){
                            $('#contact').fadeIn(); 
                        });
		//});
	};
        
        function closeContactForm(evt) {
		evt.preventDefault();
		$('#contact').fadeOut(function() {
                        $('#overlay').fadeOut(function(){
                            //$('#main').fadeIn(); 
                        });
		});
	};
	
	/**
	 * Validates that all contact form inputs are appropriate, then submits the contact form data to the server.
	 * Occurs when user clicks the submit button in the contact_form panel.
	 */
	function submitContactForm(evt) {

		evt.preventDefault();
		if(validateContactForm()) {
			$('.moonloader').show();
			var firstName = $('#first_name').val();
			var lastName = $('#last_name').val();
			var emailAddress = $('#email_address').val();
			var companyName = $('#company_name').val();
			var title = $('#title').val();
			var question = $('#question').val();
                        
                        $.post( document.URL,
                            {
                                firstName: firstName,
                                lastName: lastName,
                                emailAddress : emailAddress,
                                companyName : companyName,
                                title : title,
                                question : question
                            },
                            function(data) {
                                data = JSON.parse(data);
                                if(data.status == "success"){
                                    loadThankYouScreen();
                                }else{
                                    alert(data.reason);
                                }
                            }
                        );
                        $('.moonloader').hide();
                        return false;
		};
	};
	
	/**
	 * Validates the inputs of the contact form.
	 * The contact form requires that the first_name, last_name, email_address, company_name, and title not be empty.
	 */
	function validateContactForm() {
		var invalidInputs = 0;
		invalidInputs += validateNotEmpty('#first_name');
		invalidInputs += validateNotEmpty('#last_name');
		invalidInputs += validateNotEmpty('#email_address');
                invalidInputs += validateEmail('#email_address');
		invalidInputs += validateNotEmpty('#company_name');
		invalidInputs += validateNotEmpty('#title');
		return (invalidInputs == 0);
	};
	
        /**
	 * Validates that the email input is of a valid syntax.
	 * If the input is invalid, it will be marked with a red border (adding the 'invalid' class) and 1 will be returned.
	 * If the input is valid, it will be reset to its default border (removing the 'invalid' class if its there) and 0 will be returned. 
 	 * @param {Object} selector
	 */
        function validateEmail(selector) {
		var input = $(selector);
                var email = input.val();
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!emailPattern.test(email)) {
                    input.addClass('invalid');
                    return 1;
                } 
		input.removeClass('invalid');
		return 0;
	};
        
	/**
	 * Validates that the input identified by the given selector is not empty.
	 * If the input is empty, it will be marked with a red border (adding the 'invalid' class) and 1 will be returned.
	 * If the input is not empty, it will be reset to its default border (removing the 'invalid' class if its there) and 0 will be returned. 
 	 * @param {Object} selector
	 */
	function validateNotEmpty(selector) {
		var input = $(selector);
		if(input.val().length == 0) {
			input.addClass('invalid');
			return 1;
		} 
		input.removeClass('invalid');
		return 0;
	};
	
	/**
	 * Loads the thank_you panel, displays it for 3 seconds, then fades in the main content panel again.
	 * Occurs following a successful submit of the contact form.
	 */
	function loadThankYouScreen() {
			$('#thanks').fadeIn();
                        $('#contact_form').fadeOut(function() {
                            $('#thanks').delay(3000).fadeOut(function() {
                                $('#overlay').fadeOut();
                                $('#contact').fadeOut(function(){
                                    $('#contact_form').fadeIn();
                                });
                            });
			});
	};
	
	/**
	 * Occurs when "share this page" div is clicked in the UI. 
 	 * @param {Object} evt The click event.
 	 * TODO: IMPLEMENT ME
	 */
	function shareThisPage(evt) {
		evt.preventDefault();
		// TODO: port sharing functionality from other area of marketing site
	}

});

$(window).resize(function(){
    $('#overlay').height(window.innerHeight);
});

$(window).ready(function(){
   int=self.setInterval(function(){animateSlides()},5000); 
});

function animateSlides(){
    if($('.pagination li').last().hasClass('current')){
        $('.pagination li').first().find('a').click();
    }else{
        $('.pagination li').each(function(key, val){
           if($(this).prev().hasClass('current')){
                $(this).find('a').click();
                return false;
           }
        });
    }
}
