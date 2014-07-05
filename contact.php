<?php
/*
Template Name: Contact
*/
?>

<!DOCTYPE html>

<html>
    <head>
        <title>Moontoast</title>

        <link rel="stylesheet" href="/wp-content/themes/moontoast2013/css/content/reset.css">
        <link rel="stylesheet" type="text/css" media="screen" href="/wp-content/themes/moontoast2013/css/screen.css">
        <link rel="stylesheet" href="/wp-content/themes/moontoast2013/css/content/font.css">
        <link rel="stylesheet" href="/wp-content/themes/moontoast2013/css/content/main-2.css">
        <link rel="stylesheet" href="/wp-content/themes/moontoast2013/css/content/home-2.css">
        <script type="text/javascript">
            var config = {
                "assetPath": "/wp-content/themes/moontoast2013/",
                "js": "js"
                //"js": "<?php if (isset($_GET['mode']) && $_GET['mode'] === 'd') : ?>js<?php else: ?>js-build<?php endif; ?>"
            };
        </script>
        
        <script type="text/javascript" src="/wp-content/themes/moontoast2013/js/jquery.1.8.3.js"></script>
        <script type="text/javascript" src="/wp-content/themes/moontoast2013/js/underscore.1.4.3.js"></script>
        <!-- <script type="text/javascript" data-main="/wp-content/themes/moontoast2013/js/main" src="/wp-content/themes/moontoast2013/js/views/new_home.js"></script> -->
        <script type="text/javascript" data-main="/wp-content/themes/moontoast2013/js/main" src="/wp-content/js/sae.js"></script>
        <script type="text/javascript" src="/wp-content/themes/moontoast2013/js/views/nav.js"></script>
        <script type="text/javascript">
          (function() {
            var config = {
              kitId: 'aup4mop',
              scriptTimeout: 3000
            };
            var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)
          })();
        </script>
        <!--
        
        <script type="text/javascript" src="/wp-content/themes/moontoast2013/js/underscore.1.4.3.js"></script>
        <script type="text/javascript" src="/wp-content/themes/moontoast2013/js/main-2.js"></script>
        <script type="text/javascript" src="/wp-content/themes/moontoast2013/js/home.js"></script>
        -->
	<script src="//cdn.optimizely.com/js/173977948.js"></script>
    </head>

    <body>
            <div class="header header_contactus">
                <?php include('header-simple.php'); ?>
                <div id="hero_container" class="hero-container">
                    <div id="hero_bg" class="hero-bg">
                        <div id="hero_inner">
                            <img src="/wp-content/themes/moontoast2013/images/header_contactus.png" />
                        </div>
                    </div>
                </div>

                    <div class="row">
                        <div class="contact_slide" style="z-index: 1">
                            <div class="left">
                                <h1>We're here to help.</h1>
                                <p>Contact us anytime - we'd love to hear from you.</p>
                            </div>
                        </div>
                    </div>
            </div>
            
            <div class="contactus_container">
            	<div class="geninquiry">
            		<h3 class="heading2"><span class="bold">GENERAL</span> INQUIRIES</h3>
            		<p>You’ve got questions? We’ve got answers.</p>
            		
            		<div class="salesforce_form">
            			<form action="https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" _lpchecked="1">
            				<input name="oid" type="hidden" value="00DA0000000Hd0u">
            				<input name="Campaign_ID" type="hidden" value="701F00000007c5z">
            				<input name="retURL" type="hidden" value="http://www.moontoast.com/contact/thank-you">
            				
            				<div class="contactus_form"><input id="first_name" maxlength="40" name="first_name" size="50" type="text" value="First Name" onblur="if(this.value==''){this.value='First Name'}" onfocus="if(this.value=='First Name'){this.value=''}"></div>
            				<div class="contactus_form marginleft10"><input id="last_name" maxlength="40" name="last_name" size="50" type="text" value="Last Name" onblur="if(this.value==''){this.value='Last Name'}" onfocus="if(this.value=='Last Name'){this.value=''}"></div>
            				<div class="contactus_form"><input id="email" maxlength="40" name="email" size="50" type="text" value="Email Address" onblur="if(this.value==''){this.value='Email Address'}" onfocus="if(this.value=='Email Address'){this.value=''}"></div>
            				<div class="contactus_form marginleft10"><input id="company" maxlength="40" name="company" size="50" type="text" value="Company Name" onblur="if(this.value==''){this.value='Company Name'}" onfocus="if(this.value=='Company Name'){this.value=''}"></div>
            				<div class="contactus_form"><input id="title" maxlength="40" name="title" size="50" type="text" value="Title" onblur="if(this.value==''){this.value='Title'}" onfocus="if(this.value=='Title'){this.value=''}"></div>
            				<div class="contactus_form marginleft10"><input id="phone" maxlength="40" name="phone" size="50" type="text" value="Phone Number" onblur="if(this.value==''){this.value='Phone Number'}" onfocus="if(this.value=='Phone Number'){this.value=''}"></div>
            				<div class="contactus_form"><input id="zip" maxlength="40" name="zip" size="50" type="text" value="Zip Code" onblur="if(this.value==''){this.value='Zip Code'}" onfocus="if(this.value=='Zip Code'){this.value=''}"></div>
            				<div class="contactus_form marginleft10"><input id="URL" maxlength="40" name="URL" size="50" type="text" value="Website" onblur="if(this.value==''){this.value='Website'}" onfocus="if(this.value=='Website'){this.value=''}"></div>
            				<div class="clear"></div>
            				
            				<div class="contactus_form">
            					<select id="00NF0000008RYG0" title="Hear About" name="00NF0000008RYG0">
            						<option>How did you hear about us?</option>
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
            				<div class="clear"></div>
            				
            				<div class="contactus_form"><textarea name="description">Message</textarea></div>
            				
            				<div class="clear"></div>
            				
            				<input name="submit" type="submit" />
            				
            				<div class="clear"></div>
            				
            			</form>
            		</div>
            		
            		<h3 class="heading2"><span class="bold">OUR</span> HEADQUARTERS</h3>
            		
            		<div class="ourHQ">
            			<div><img src="/wp-content/themes/moontoast2013/images/office_boston.png" /></div>
            			<h3 class="heading2"><span class="bold">BOSTON, MA</span></h3>
            			4 South Market Place, 4th Floor<br />
            			Suite 5005<br />
            			Boston, MA 02109<br />
            			(857) 277-5810
            		</div>
            		
            		<div class="ourHQ marginleft10">
            			<div><img src="/wp-content/themes/moontoast2013/images/office_nashville.png" /></div>
            			<h3 class="heading2"><span class="bold">NASHVILLE, TN</span></h3>
            			40 Burton Hills Blvd.<br />
            			Suite 100<br />
            			Nashville, TN  37215<br />
            			(857) 277-5810
            		</div>
            		
            		<div class="clear"></div>
            		
            	</div>
            	
            	<div class="contactsales">
            		<h3 class="heading2"><span class="bold">CONTACT</span> SALES</h3
            		<p>Interested in hearing more about how Moontoast can help you maximize social advertising ROI? Call us and we’ll show you!</p>
            		<div class="icon_callus">1 (617) 892-4896</div>
            	</div>
            	
            	<div class="clear"></div>
            </div>
            
            <?php get_footer(); ?>
        </div>
    </body>
</html>
