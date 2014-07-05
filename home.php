<?php
/*
Template Name: Home
*/
?>

<?php  get_header(); ?>

<?php
	/****** 
		Primary Pages that are published but is not part of the navigation links on header and footer
		Values of the array should be Page Titles
	******/
	$invisiblelinks = array(
		'What is Moontoast?',
		'Company'
	);
	
	$excludepages = '';
	$result = $wpdb->get_results("SELECT ID, post_title FROM $wpdb->posts WHERE post_type = 'page'");
	
	if ($result){
		foreach ($result as $row) {
			if (in_array($row->post_title, $invisiblelinks)) {
				$excludepages .= $row->ID.',';
			}
		}
		substr_replace($excludepages ,'',-1);
	}
?>

<div class="page-home">
	<div class="top_footer">
		<div class="new_links">
			<div><span class="copyright">&copy;Copyright 2012</span> Moontoast, Inc. All rights reserved.</div>
			<div>
				<a href="/legal/terms-of-service">Terms and Conditions</a> |
				<a href="/legal/privacypolicy">Privacy Policy</a>
			</div>
			<div>
				<a href="/company/who-we-are">About</a> |
				<a href="/contact">Contact Us</a>
			</div>
		</div>
		<div class="new_icons">
			<div class="left"><a href="http://pinterest.com/MoontoastPins/" target="_blank"><img src="/wp-content/themes/moontoast2012/images/icon_new_pinterest.png" alt="Pinterest" title="Pinterest" /></a></div>
			<div class="left"><a href="https://www.facebook.com/Moontoast" target="_blank"><img src="/wp-content/themes/moontoast2012/images/icon_new_facebook.png" alt="Facebook" title="Facebook" /></a></div>
			<div class="left"><a href="https://twitter.com/moontoast" target="_blank"><img src="/wp-content/themes/moontoast2012/images/icon_new_twitter.png" alt="Twitter" title="Twitter" /></a></div>
			<div class="left"><a href="http://www.youtube.com/user/moontoasttv" target="_blank"><img src="/wp-content/themes/moontoast2012/images/icon_new_youtube.png" alt="Youtube" title="Youtube" /></a></div>
			<div class="left"><a href="http://www.linkedin.com/company/753435" target="_blank"><img src="/wp-content/themes/moontoast2012/images/icon_new_linkedin.png" alt="LinkedIn" title="LinkedIn" /></a></div>
			<div class="left"><a href="https://plus.google.com/114957265096714433195/posts" target="_blank"><img src="/wp-content/themes/moontoast2012/images/icon_new_plus.png" alt="Google+" title="Google+" /></a></div>
		</div>
		<div class="clearAll"></div>
	</div>
    <!-- #(PANEL 0) Begin Top Moon Panel -->
    <div class="panel panel_everyone_is_social loading" id="panel_0">
        <img src="/wp-content/themes/moontoast2012/images/moon.png" class="top_moon" />
        <div class="moonwheel_container">
        	<h1>Get Social.</h1>
        	<h2>Contact us to get started.</h2>
        	
                <!-- The Moonwheel -->
        	<div class="animatable moonwheel">
        	    <div class="moonwheel_icon"></div>
                    <a href="#" class="item_link item_link_blog" data-widget="blog" title="Our Blog"></a>
                    <a href="#" class="item_link item_link_social_activation" data-widget="social_activation" title="Social Activation"></a>
                    <a href="#" class="item_link item_link_contact" data-widget="contact" title="Contact"></a>
                    <a href="#" class="item_link item_link_featured_downloads" data-widget="featured_downloads" title="Downloads"></a>
                    <a href="#" class="item_link item_link_join_the_toast" data-widget="join_the_toast" title="Careers"></a>
                    <a href="#" class="item_link item_link_dite_methodology" data-widget="dite_methodology" title="DITE Methodology"></a>
        	</div>
                <!-- End the Moonwheel -->

                <!-- Moonwheel Spokes -->
                <div class="spoke spoke_blog"></div>
                <div class="spoke spoke_social_activation"></div>
                <div class="spoke spoke_contact"></div>
                <div class="spoke spoke_featured_downloads"></div>
                <div class="spoke spoke_join_the_toast"></div>
                <div class="spoke spoke_dite_methodology"></div>
                <!-- End Moonwheel Spokes -->
        	
                <!-- Begin Dite Methodology -->
        	<div class="dite_methodology">
        		<a href="/story-telling/dite-methodology" title="Learn More"><div class="moonwheel_box">
        			<img src="/wp-content/themes/moontoast2012/images/panel01_ditemethodology.png" />
        			<h3>Dite Methodology</h3>
        		</div></a>
        		<div class="moonwheel_button"><a href="/story-telling/dite-methodology" title="Learn More">Learn More</a></div>
        	</div>
                <!-- End Dite Methodology -->
        	
                <!-- Begin Join the Toast -->
        	<div class="join_the_toast">
        		<a href="/company/jobs" title="View Openings"><div class="moonwheel_box">
        			<img src="/wp-content/themes/moontoast2012/images/panel01_jointhetoast.png" />
        			<h3>Join the Toast</h3>
        		</div></a>
        		<div class="moonwheel_button"><a href="/company/jobs" title="View Openings">View Openings</a></div>
        	</div>
                <!-- End Join the Toast -->
        	
                <!-- Begin Blog -->
            <div class="blog">
                <div class="moonwheel_box">
                    <div class="slides">
                        <a href="/blog"  title="Subscribe" data-name="Our Blog">
                            <img src="/wp-content/themes/moontoast2012/images/panel01_blog.png" />
                        </a>
                        <a href="http://www.youtube.com/user/moontoasttv?feature=results_main&amp;continue_action=X1vGYT-ZqahDMwg-CnguxHv0Jc_p_XXONl_mDGwC8Oiu5Q9KhwkXQ8OACuKd5ljtisxG_BkClYSxhDDp4SaAVXjbkcLJTeCWObbEZyzGvDvNrCBW4Vyfag==" title="Subscribe" target="_blank" data-name="Moontoast TV">
                            <img src="/wp-content/themes/moontoast2012/images/panel01_moontoastvideos.png" />
                        </a>
                    </div>
                    <h3>Our Blog</h3>
                    <div class="arrow_left"></div>
                    <div class="arrow_right"></div>
                    <div class="clearAll"></div>
                </div>
                <div class="moonwheel_button"><a href="/blog" title="Blog" id="blog_link">View Now</a></div>
            </div>

                <!-- End Blog -->
        	
                <!-- Begin Featured Downloads -->
        	<div class="featured_downloads">
        		<div class="moonwheel_box">
                                        <div class="slides">
                    	                    <img src="/wp-content/themes/moontoast2012/images/panel01_featureddownloads.png" />
                                            <img src="/wp-content/themes/moontoast2012/images/panel01_featureddownloads2.png" />
                                            <img src="/wp-content/themes/moontoast2012/images/panel01_featureddownloads3.png" />
                                            <img src="/wp-content/themes/moontoast2012/images/panel01_featureddownloads4.png" />
                                        </div>
        			<h3>Featured Downloads</h3>
        			<div class="ebook_ribbon"></div>
        			<div class="arrow_left"></div>
        			<div class="arrow_right"></div>
        			<div class="clearAll"></div>
        		</div>
        		<div class="moonwheel_button"><a href="/story-telling/ebooks" title="Download" id="download_link">Download</a></div>
        	</div>
                <!-- End Featured Downloads -->
        	
                <!-- Begin Social Activation -->
        	<div class="social_activation">
        		<a href="/social-activation-engine" title="Learn More" data-transition="slidefade"><div class="moonwheel_box">
        			<img src="/wp-content/themes/moontoast2012/images/panel01_socialactivation.png" />
        			<h3>Social Activation</h3>
        		</div></a>
        		<div class="moonwheel_button"><a href="/social-activation-engine" title="Learn More" data-transition="slidefade">Learn More</a></div>
        	</div>
                <!-- End Social Activation -->
        	
                <!-- Begin Contact -->
        	<div class="contact" id="contact" name="contact">
        		<div class="contact_form">
        			<div class="icon_contactus"></div>
        			<div class="title">Contact Us to Learn More</div>
        			<div class="clearAll"></div>
        			
        			<br />
                                    <iframe id="salesforce_iframe" name="salesforce_iframe" height="0px" width="0px" style="position: absolute;"></iframe>
        			<form method="POST" action="https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" target="salesforce_iframe">
                                        <input type="hidden" value="00DA0000000Hd0u" name="oid">
                                        <input type="hidden" value="701F00000007c5z" name="Campaign_ID">
                                        <input type="hidden" value="http://www.moontoast.com/" name="retURL">
        			<div class="form_left">
        				<div>First Name</div>
        				<div><input type="text" name="first_name" /></div>
        			</div>
        			<div class="form_right">
        				<div>Last Name</div>
        				<div><input type="text" name="last_name" /></div>
        			</div>
        			<div class="clearAll"></div>
        			
        			<div class="form_left">
        				<div>Email</div>
        				<div><input type="text" name="email" /></div>
        			</div>
        			<div class="form_right">
        				<div>Website</div>
        				<div><input type="text" name="website" /></div>
        			</div>
        			<div class="clearAll"></div>
        			
        			<div class="form_left">
        				<div>How did you hear about us?</div>
        				<div>
        					<select name="00NF0000008RYG0" id="00NF0000008RYG0">
                                                                    <option>Select One…</option>
                                                                    <option value="PayPal">PayPal</option>
                                                                    <option value="Amazon">Amazon</option>
                                                                    <option value="Magento">Magento</option>
                                                                    <option value="Demandware">Demandware</option>
                                                                    <option value="Mercent">Mercent</option>
                                                                    <option value="FanBridge/Damntheradio">FanBridge/Damntheradio</option>
                                                                    <option value="Facebook/Twitter">Facebook/Twitter</option>
                                                                    <option value="Other">Other</option>
        					</select>
        				</div>
        			</div>
        			<div class="form_right">
        				<input type="submit" value="submit" />
        			</div>
        			<div class="clearAll"></div>
        			</form>
        		</div>
        		<div class="contact_icons">
                                        <a href="http://pinterest.com/MoontoastPins/" target="_blank">
        			    <div class="icon_pinterest"></div>
                                        </a>
                                        <a href="https://www.facebook.com/Moontoast" target="_blank">
        			    <div class="icon_facebook"></div>
                                        </a>
                                        <a href="https://twitter.com/moontoast" target="_blank">
        			    <div class="icon_twitter"></div>
                                        </a>
                                        <a href="http://www.youtube.com/user/moontoasttv?feature=results_main" target="_blank">
        			    <div class="icon_youtube"></div>
                                        </a>
                                        <a href="http://www.linkedin.com/company/753435?goback=%2Efcs_GLHD_moontoast_false_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2&amp;trk=ncsrch_hits" target="_blank">
        			    <div class="icon_linkedin"></div>
                                        </a>
                                        <a href="https://plus.google.com/114957265096714433195" target="_blank">
        			    <div class="icon_plus"></div>
                                        </a>
        		</div>
        		<div class="clearAll"></div>
        	</div>
                <!-- End Contact -->
        	
        	<div class="clearAll"></div>
        </div>
    </div>
    <!-- End Top Moon Panel -->

    <!-- #(PANEL 1) Begin Analytics Panel -->
    <div class="panel panel_analytics loading" id="panel_1">
    	<div class="analytics_container">

                <div class="analytics_images_container">
                    
                    <h1>Social Analytics Suite</h1>
                    <h2>Your data tells a story.  Our analytics reads between the lines.</h2>
                    <div class="watchdemo">
                        <a href="http://vimeo.com/35904619" rel="prettyPhoto" title="" class="button" id="icon_video">Watch Demo</a>
                        <a href="/social-analytics-suite" title="" class="button">Learn More</a>
                    </div>
                    
                    <div class="analytics_piece analytics_piece_6"></div>
                    <div class="analytics_piece analytics_piece_5"></div>
                    <div class="analytics_piece analytics_piece_4"></div>
                    <div class="analytics_piece analytics_piece_3"></div>
                    <div class="analytics_piece analytics_piece_2"></div>
                    <div class="analytics_piece analytics_piece_1"></div>

                </div>

    	</div>
    </div>
    <!-- End Analytics Panel -->

    <!-- #(PANEL 2) Begin Heroic Band Shot Panel -->
    <div class="panel panel_band loading" id="panel_2">
        <div class="bg_hand">
            <div class="bg_hand_inner">
                <div class="screen1"></div>
                <div class="screen2"></div>
            </div>
        </div>
        <div class="panel02_bubble"></div>
    </div>
    <!-- End Heroic Band Shot Panel -->

    <!-- #(PANEL 3) Begin Social Apps Panel -->
    <div class="panel panel_social_apps loading" id="panel_3">
        <div class="social_apps_container">
            <h1>Social Activation Engine</h1>
            <h2>Moontoast's SaaS platform allows marketers to choose from our library of apps to <br />
            activate their fans on Facebook, Twitter, Pinterest, YouTube, and anywhere they spend time online. </h2>

            <div class="fullsocial"><a href="/social-activation-engine" class="button">Learn More</a></div>

            <div class="iphone_container">
                <div class="iphone_content">
                    <img src="/wp-content/themes/moontoast2012/images/social_store_mobile_1.png" />
                    <img src="/wp-content/themes/moontoast2012/images/social_store_mobile_2.png" />
                    <img src="/wp-content/themes/moontoast2012/images/social_store_mobile_3.png" />
                    <img src="/wp-content/themes/moontoast2012/images/social_store_mobile_4.png" />
                    <img src="/wp-content/themes/moontoast2012/images/social_store_mobile_5.png" />
                    <img src="/wp-content/themes/moontoast2012/images/social_store_mobile_6.png" />
                </div>
            </div>

            <div class="apps_carousel_container">
                <div class="apps_carousel_container_inner">
                    <div class="filter filter_1"></div>
                    <div class="filter filter_2"></div>
                    <img src="/wp-content/themes/moontoast2012/images/social_store_1.png" />
                    <img src="/wp-content/themes/moontoast2012/images/social_store_2.png" />
                    <img src="/wp-content/themes/moontoast2012/images/social_store_3.png" />
                    <img src="/wp-content/themes/moontoast2012/images/social_store_4.png" />
                    <img src="/wp-content/themes/moontoast2012/images/social_store_5.png" />
                    <img src="/wp-content/themes/moontoast2012/images/social_store_6.png" />
                </div>
            </div>
        	
            <div class="carousel"></div>
        	
            <div class="carousel_arrow_left"><a href="#"><img src="/wp-content/themes/moontoast2012/images/carousel_arrow_left.png" /></a></div>
            <div class="carousel_arrow_right"><a href="#"><img src="/wp-content/themes/moontoast2012/images/carousel_arrow_right.png" /></a></div>
            <div class="clearAll"></div>

            <a href="http://nike.moontoast.com/nike_1b/nikeplus.html?mobile=true" target="_blank" id="try_it"><img src="/wp-content/themes/moontoast2012/images/try_it.png" class="try_it" /></a>

        </div>
    </div>
    <!-- End Social Apps Panel -->

    <!-- #(PANEL 4) Begin Phil Throwing a Frisbee Panel -->
    <div class="panel panel_frisbee loading" id="panel_4">
            <div class="frisbee frisbee_1"></div>
            <div class="frisbee frisbee_2"></div>
            <div class="frisbee frisbee_3"></div>
            <div class="frisbee frisbee_4"></div>
            <div class="frisbee frisbee_5"></div>
            <div class="frisbee frisbee_6"></div>
    	<div class="panel04_bubble"></div>
    </div>
    <!-- End Phil Throwing a Frisbee Panel -->

    <!-- #(PANEL 5) Begin Video Panel -->
    <div class="panel panel_video loading" id="panel_5">
        <div class="panel05_tv">
            <iframe id="overview_video" src="http://player.vimeo.com/video/47873031?title=0&amp;byline=0&amp;color=ee4326" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        </div>
    </div>
    <!-- End Video Panel -->

    <!-- #(PANEL 6) Begin Social Marketting Panel -->
    <div class="panel panel_social_marketting loading" id="panel_6">
        <div class="panel_social_marketting_inner">

        <div class="scroll_up_container">
            <img class="scroll_up" src="/wp-content/themes/moontoast2012/images/screen1_arrowup.png" /><br />
            <span class="scrollup_text">Our story scrolls up.</span>
        </div>
        
        <div class="social_marketing_container">

            <!-- Moontoast Logo -->
            <div class="logo_moontoast_container">
                <div class="logo_moontoast"></div>
            </div>
            
        	<div class="content">
        		<div class="finished_circles">
                            <div class="finished_circles_inner">
                                <div class="circle_marketing"></div>
                                <div class="circle_commerce"></div>
                                <div class="circle_analytics"></div>
                                <div class="circle_arrow"></div>
                            </div>
                        </div>
        		<div class="social_marketing">
                            <div class="social_word"></div>
                            <div class="social_messages">
                            </div>
                        </div>
        		<p>Moontoast is a technology innovator in social marketing, social commerce, and social analytics. Our SaaS and cloud-based platform - the <strong>Social Activation Engine</strong> - empowers our clients to self-serve their social campaigns from a library of social app templates. Our <strong>Social Analytics Suite</strong> measures and optimizes the ROI of each social campaign. Social Activation captures the value of the social audience.</p>
        		<br /><a href="/social-activation-engine" class="button" id="panel_6_anchor">Learn More</a>
        	</div>
        	
    	<div class="monitor"><img src="/wp-content/themes/moontoast2012/images/monitor.png" /></div>
    	<div class="ipad"><img src="/wp-content/themes/moontoast2012/images/ipad.png" /></div>
    	<div class="smartphone"><img src="/wp-content/themes/moontoast2012/images/smartphone.png" /></div>

            </div>
        </div>

    </div>
    <!-- End Social Marketting Panel -->

    <!-- Begin the Side Navigation -->
    <div class="side_navigation loading">
        <ul>
            <li><a href="#panel_0"></a></li>
            <li><a href="#panel_1"></a></li>
            <li><a href="#panel_2"></a></li>
            <li><a href="#panel_3"></a></li>
            <li><a href="#panel_4"></a></li>
            <li><a href="#panel_5"></a></li>
            <li><a href="#panel_6_anchor"></a></li>
        </ul>
    </div>
    <!-- End the Side Navigation -->

</div>

<?php  get_footer(); ?>