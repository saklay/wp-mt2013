<?php
if(!empty($_POST)):
    $message = false;
    if(empty($_POST['companyName']) || empty($_POST['firstName']) || empty($_POST['lastName']) || empty($_POST['companyName'])){
        $result = array(
            'status' => 'error',
            'reason' => 'All Fields Are Required'
        );
    }else{
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $emailAddress = $_POST['emailAddress'];
        $companyName = $_POST['companyName'];
        $title = $_POST['title'];
        $question = $_POST['question'];
        
        $to      = 'daniel@moontoast.com';
        $subject = 'PMD Contact Form Submission';
        $message = "Name: " . $firstName. " " . $lastName . "\nEmail: " . $emailAddress . "\nCompany Name: " . $companyName . "\nTitle: " . $title . "\nQuestion: " . $question;
        $message = wordwrap($message,70);
        $headers = '    From: marketingsite@moontoast.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        
        $status = mail($to, $subject, $message, $headers);
        if ($status)
            $result = array(
                'status' => 'success',
                'reason' => 'Inquiry Sent'
            );
        else
            $result = array(
                'status' => 'error',
                'reason' => 'There was an error submitting the request'
            );
    }
    print_r(json_encode($result));
    exit();
endif;
?>
<?php include("content_header.php"); ?>
<?php if($message): ?>
    <div style="width: 100%; text-align: center; color: red;"><?php echo $message; ?></div>
<?php endif; ?>
<div class="subheader">
			<div class="landing_header_inner">
				Rich Media For Social
			</div>
		</div>
		
		<section>
			<div class="content" id="main">
				<!-- Letterbox -->
				<div id="letterbox" class="content_panel">
					<div class="center_layout module">
						<div class="slides thick_gray_border">
							<div class="slides_container">
								<div>
									<img src="/wp-content/themes/moontoast2012/images/fb-landing/moontoast_devices.png"/>
								</div>
								<div>
									<iframe src="http://player.vimeo.com/video/51708378?badge=0&api=1" width="600" height="334" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen>
									</iframe> 
								</div>
							</div>
						</div>
						<div class="bottom_shadow">
						</div>
						<div class="info center_text">
							<p>The first platform to bring rich media to social, elevating how brands connect and engage with their audiences.</p>
							<a class="button load_contact_form">Say Hello</a>
						</div>
					</div>
				</div>
			
				<!-- Module 1 -->
				<div id="module1" class="content_panel">
					<div class="center_layout module">
                                                <div class="arrow"></div>
						<div class="left image">
							<img src="/wp-content/themes/moontoast2012/images/fb-landing/nike_phone.png"/>
						</div>
						<div class="right smaller">
							<h4>Build Brand Awareness</h4>
							<p>Get the right message to the right audience directly within the Facebook news feed.</p>
							<a class="button load_contact_form">Get Started</a>
						</div>
					</div>
				</div>
			
				<!-- Module 2 -->
				<div id="module2" class="content_panel">
					<div class="center_layout module">
                                                <div class="arrow"></div>
						<div class="left smaller">
							<h4>Brand Consideration Through Product Interaction</h4>
							<p>Allow users to experience your brand and interact with your product, all within one post, in both desktop and mobile.</p>
							<a class="button load_contact_form">Learn more</a>
						</div>
						<div class="right image">
							<img src="/wp-content/themes/moontoast2012/images/fb-landing/apple_desktop.png"/>
						</div>
					</div>
				</div>
			
				<!-- Module 3 -->
				<div id="module3" class="content_panel">
					<div class="center_layout module">
                                                <div class="arrow"></div>
						<div class="left image">
							<img src="/wp-content/themes/moontoast2012/images/fb-landing/go_pro.png"/>
						</div>
						<div class="right smaller">
							<h4>Sell Directly Within the Post</h4>
							<p>Enable consumers to complete transactions without ever leaving the news feed.</p>
							<a class="button load_contact_form">Learn more</a>
						</div>
					</div>
				</div>
				
				<!-- Module 4 -->
				<div id="module4" class="content_panel">
					<div class="center_layout module">
                                                <div class="arrow"></div>
						<div class="left smaller">
							<h4>Empower your fans to endorse your brand</h4>
							<p>Allow brand advocates to endorse your brand directly within the Facebook news feed.</p>
							<a class="button load_contact_form">Try it out</a>
						</div>	
						<div class="right image">
							<img src="/wp-content/themes/moontoast2012/images/fb-landing/ibm.png"/>
						</div>
					</div>
				</div>
                                
                                <div id="footer-pmd">
                                    <p><a target="_blank" href="https://www.dropbox.com/s/ixu2ipddke6ewe3/Facebook%20Deck%20-%20All%20Verticals.pptx">Learn more about Moontoast SOCIAL rich media today</a></p>
                                </div>
			</div>
		</section>
		<!-- End main content section -->
		
		<!-- Contact form, shown to user whenever they click on one of the links/buttons in the main content area -->
		<section>
			<div class="content_panel" id="contact">
				<div id="contact_form">
                                        <div id="close_contact_form"></div>
					<h3>We'd love to hear from you!</h3>
					<div class="input_row">
						<div class="input_col">
							<label for="first_name">First Name*</label>
							<input id="first_name" name="firstName"></input>
						</div>
						<div class="input_col">
							<label for="last_name">Last Name*</label>
							<input id="last_name" name="lastName"></input>
						</div>
					</div>
					<div class="input_row">
						<div class="input_col">
							<label for="email_address">Email Address*</label>
							<input id="email_address" name="emailAddress"></input>
						</div>
						<div class="input_col">
							<label for="company_name">Company name*</label>
							<input id="company_name" name="companyName"></input>
						</div>
					</div>
					<div class="input_row">
						<div class="input_col">
							<label for="title">Title*</label>
							<input id="title" name="title"></input>
						</div>
						<div class="input_col">
							<label for="question">Question</label>
							<textarea cols="23" rows="5" id="question" name="question"></textarea>
						</div>
					</div>
					<button id="submit_contact_form">Submit</button>
				</div>
			</div>
		</section>
		<!-- End contact form section -->
		
		<!-- Thank you message - shown to user whenever they successfully submit the contact form -->
		<section>
			<div class="content_panel" id="thanks">
				<div class="center_layout_thanks">
					<h2>Thank you!</h2>
					<h3>You'll be hearing from us soon!</h3>
				</div>
			</div>
		</section>
                <div id="overlay"></div>
                <link rel="stylesheet" type="text/css" media="screen" href="/wp-content/themes/moontoast2012/css/content/social-rich-media.css" />
                <script type="text/javascript" src="/wp-content/themes/moontoast2012/js/lib/jquery/main.js"></script>
                <script type="text/javascript" src="/wp-content/themes/moontoast2012/js/views/fb-landing.js"></script>
                <script type="text/javascript" src="/wp-content/themes/moontoast2012/js/lib/slides/slides.min.jquery.js"></script>
                <script type="text/javascript" src="/wp-content/themes/moontoast2012/js/views/vimeo.js"></script>