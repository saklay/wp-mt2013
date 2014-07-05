<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the content
 *
 * @package WordPress
 * @subpackage Moontoast2012
 */
?>

            </div>
        </div>

        <?php if (!isset($_GET['requestType']) || $_GET['requestType'] !== 'ajax') : ?>
    
        <!-- Begin the Bottom Navigation
        <div class="navigation loading">
            <div class="navigation_inner">
                <ul class="footer_nav">
                    <li><a href="#" class="noajax">About Us</a></li>
                    <li><a href="#" class="noajax">How We are Different</a></li>
                    <li><a href="#" class="noajax">Executive Team</a></li>
                    <li><a href="#" class="noajax">Board & Advisors</a></li>
                    <li><a href="#" class="noajax">Clients</a></li>
                    <li><a href="#" class="noajax">Careers</a></li>
                    <li><a href="#" class="noajax">Resources</a></li>
                </ul>
                <ul class="footer_nav">
                    <li><a href="#" class="noajax">Products</a></li>
                    <li><a href="#" class="noajax">Social Activation Platform</a></li>
                    <li><a href="#" class="noajax">Social Analytics Suite</a></li>
                    <li><a href="#" class="noajax">Social Rich Media Units</a></li>
                </ul>
                <ul class="footer_nav">
                    <li><a href="#" class="noajax">Policies</a></li>
                    <li><a href="#" class="noajax">Terms of Use</a></li>
                    <li><a href="#" class="noajax">Privacy Policy</a></li>
                </ul>
                <ul class="footer_nav">
                    <li><a href="#" class="noajax">Contact Us</a></li>
                    <li><a href="#" class="noajax">Contact Moontoast</a></li>
                    <li><a href="#" class="noajax">Request a Demo</a></li>
                </ul>
                <ul class="footer_nav">
                    <li><a href="#" class="noajax">Stay Connected</a></li>
                    <li><a href="#" class="noajax">Sign up for our social activation newsletter</a></li>
                </ul>
                <div class="navigation_bottom">
                    <div id="footer_signup">
                        <form method="post">
                            <input type="text" name="signup_email" value="you@there.com" id="footer_signup_email">
                            <button type="submit">SUBSCRIBE</button>
                        </form>
                    </div>
                    <div class="copyright">
                        &#169;Copyright 2013 Moontoast, Inc. All rights reserved.
                    </div>
                    <div class="social_icons">
                        <ul>
                            <li><a href="#" class="facebook"></a></li>
                            <li><a href="#" class="twitter"></a></li>
                            <li><a href="#" class="youtube"></a></li>
                            <li><a href="#" class="pinterest"></a></li>
                            <li><a href="#" class="linkedin"></a></li>
                            <li><a href="#" class="google"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- End the Bottom Navigation -->
        <link rel="stylesheet" href="/wp-content/themes/moontoast2013/css/content/footer.css">
        <div class="footer">
                <div class="row">
                    <div class="left">
                        <div class="menu">
                            <h4 class="footer-heading">About Us</h4>
                            <ul>
                                <li><a href="http://www.moontoast.com/company/who-we-are">How We Are Different</a></li>
                                <li><a href="http://www.moontoast.com/company/team">Executive Team</a></li>
                                <li><a href="http://www.moontoast.com/company/advisors">Board & Advisors</a></li>
                                <li><a href="https://www.moontoast.com/company/client">Clients</a></li>
                                <li><a href="http://www.moontoast.com/company/jobs">Careers</a></li>
                                <li><a href="https://www.moontoast.com/story-telling/ebooks">Resources</a></li>
                                <li><a href="https://www.moontoast.com/blog/">Blog</a></li>
                            </ul>
                        </div>

                        <div class="menu">
                            <h4 class="footer-heading">Products</h4>
                            <ul>
                                <li><a href="https://www.moontoast.com/social-activation-engine">Social Activation Platform</a></li>
                                <li><a href="http://www.moontoast.com/social-analytics-suite">Social Analytics Suite</a></li>
                                <li><a href="http://www.moontoast.com/social-rich-media">Social Rich Media Unit</a></li>
                            </ul>
                        </div>

                        <div class="menu">
                            <h4 class="footer-heading">Policies</h4>
                            <ul>
                                <li><a href="http://www.moontoast.com/legal/terms-of-use">Terms of Use</a></li>
                                <li><a href="http://www.moontoast.com/legal/terms-of-service">Terms of Service</a></li>
                                <li><a href="http://www.moontoast.com/legal/privacypolicy">Privacy Policy</a></li>
                                <li><a href="/legal/sla">Service Level Agreement</a></li>
                            </ul>
                        </div>

                        <div class="menu">
                            <h4 class="footer-heading">Contact Us</h4>
                            <ul>
                                <li><a href="http://www.moontoast.com/contact">Contact Moontoast</a></li>
                                <li><a href="http://info.moontoast.com/request-demo-web">Request a Demo</a></li>
                            </ul>
                        </div>

                        <div class="clear"></div>

                        <p class="copy">&copy;Copyright 2012 Moontoast, Inc. All rights reserved.</p>
                    </div>
                    <div class="right">
                        <h4 class="footer-heading">Stay Connected</h4>
                        <p>Sign up for our Social Activation newsletter.</p>
                        <form method="POST">
                            <input type="text" class="newsletter-email" placeholder="joe@smith.com" />
                            <input type="submit" class="newsletter-sub" value="Subscribe" />
                        </form>

                        <ul class="social">
                            <li class="social-icon facebook">
                                <a href="https://www.facebook.com/Moontoast"><span class="hidden">Facebook</span></a>
                            </li>
                            <li class="social-icon twitter">
                                <a href="https://twitter.com/moontoast"><span class="hidden">Twitter</span></a>
                            </li>
                            <li class="social-icon youtube">
                                <a href="http://www.youtube.com/user/moontoasttv"><span class="hidden">YouTube</span></a>
                            </li>
                            <li class="social-icon pinterest">
                                <a href="http://pinterest.com/MoontoastPins/"><span class="hidden">Pinterest</span></a>
                            </li>
                            <li class="social-icon linkedin">
                                <a href="http://www.linkedin.com/company/753435"><span class="hidden">LinkedIn</span></a>
                            </li>
                            <li class="social-icon google">
                                <a href="https://plus.google.com/114957265096714433195/posts"><span class="hidden">Google+</span></a>
                            </li>
                        </ul>
                    </div>

                    <div class="clear"></div>
                </div>
            </div>
        <div id="overlay"></div>
        <div id="contact_form_1" class="contact_form">
            <div class="close_button"></div>
            <form action="http://hubspot.moontoast.com/Default.aspx?app=iframeform&hidemenu=true&ContactFormID=138973" method="post" target="post_iframe">
                <input type="hidden" name="FormSubmitRedirectURL" id="FormSubmitRedirectURL" value="http://www.moontoast.com/contact/thank-you" >
                <input type="hidden" name="Lead_Src" id="LeadSrc" value="Website Contact Form - Test_Overlay" />
                
                
                <script type='text/javascript' language='javascript'>/* <![CDATA[ */
                   HubSpotFormSpamCheck_LeadGen_ContactForm_138973_m0 = function() {
                       var key = document.getElementById('LeadGen_ContactForm_138973_m0spam_check_key').value;
                           var sig = '';
                           for (var x = 0; x< key.length; x++ ) {
                                                sig += key.charCodeAt(x)+13;
                           }
                           document.getElementById('LeadGen_ContactForm_138973_m0spam_check_sig').value = sig; 
                       /* Set the hidden field to contain the user token */
                       var results = document.cookie.match ( '(^|;) ?hubspotutk=([^;]*)(;|$)' );
                        if (results && results[2]) {
                            document.getElementById('LeadGen_ContactForm_138973_m0submitter_user_token').value =  results[2];
                        } else if (window['hsut']) {
                            document.getElementById('LeadGen_ContactForm_138973_m0submitter_user_token').value = window['hsut'];
                            }
                        return true;
                   };
                /*]]>*/</script>
                
                <input type='hidden' id='LeadGen_ContactForm_138973_m0submitter_user_token' name='LeadGen_ContactForm_138973_m0submitter_user_token'  value='' /><input type='hidden' name='ContactFormId'  value='138973' /><input type='hidden' id='LeadGen_ContactForm_138973_m0spam_check_key' name='LeadGen_ContactForm_138973_m0spam_check_key'  value='fidfqdrrlmnemqddiprpregfshnlenpjhhpjsfgdrmqgctpkdtiflouenuqv' /><input type='hidden' id='LeadGen_ContactForm_138973_m0spam_check_sig' name='LeadGen_ContactForm_138973_m0spam_check_sig'  value='' /><div class='ContactFormItems FormClassID_138973'><table border="0" cellspacing="0" cellpadding="5">
                <tr>
                    <td>
                        <input type="Text" name="LeadGen_ContactForm_138973_m0:FirstName" class="StandardI AutoFormInput LeadGen_ContactForm_138973_m0_AutoForm" id="LeadGen_ContactForm_138973_m0_FirstName" value="First Name" />
                        <div class="fieldclear"></div>
                    </td>
                    <td>
                        <input type="Text" name="LeadGen_ContactForm_138973_m0:LastName" class="StandardI AutoFormInput LeadGen_ContactForm_138973_m0_AutoForm" id="LeadGen_ContactForm_138973_m0_LastName" value="Last Name" />
                        <div class="fieldclear"></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="Text" name="LeadGen_ContactForm_138973_m0:Email" class="StandardI AutoFormInput LeadGen_ContactForm_138973_m0_AutoForm" id="LeadGen_ContactForm_138973_m0_Email" value="Email Address" />
                        <div class="fieldclear"></div>
                    </td>
                    <td>
                        <input type="Text" name="LeadGen_ContactForm_138973_m0:Company" class="StandardI AutoFormInput LeadGen_ContactForm_138973_m0_AutoForm" id="LeadGen_ContactForm_138973_m0_Company" value="Company Name" />
                        <div class="fieldclear"></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="Text" name="LeadGen_ContactForm_138973_m0:Title" class="StandardI AutoFormInput LeadGen_ContactForm_138973_m0_AutoForm" id="LeadGen_ContactForm_138973_m0_Title" value="Title" />
                        <div class="fieldclear"></div>
                    </td>
                    <td>
                        <input type="Text" name="LeadGen_ContactForm_138973_m0:Phone" class="StandardI AutoFormInput LeadGen_ContactForm_138973_m0_AutoForm" id="LeadGen_ContactForm_138973_m0_Phone" value="Phone Number" />
                        <div class="fieldclear"></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="Text" name="LeadGen_ContactForm_138973_m0:PostalCode" class="StandardI AutoFormInput LeadGen_ContactForm_138973_m0_AutoForm" id="LeadGen_ContactForm_138973_m0_PostalCode" value="Zip Code" />
                        <div class="fieldclear"></div>
                    </td>
                    <td>
                        <input type="Text" name="LeadGen_ContactForm_138973_m0:Website" class="StandardI AutoFormInput LeadGen_ContactForm_138973_m0_AutoForm" id="LeadGen_ContactForm_138973_m0_Website" value="Website" />
                        <div class="fieldclear"></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <select  class='wide StandardI' name="LeadGen_ContactForm_138973_m0:Hear_About__c" id="LeadGen_ContactForm_138973_m0_Hear_About__c"  placeholder="How did you hear about us?">
                            <option value=""  >How did you hear about us?</option>
                            <option value="Email"  >Email</option>
                            <option value="Friends&#x2f;Family"  >Friends/Family</option>
                            <option value="Web&#x20;Search&#x20;&#x28;google,&#x20;etc.&#x29;"  >Web Search (google, etc.)</option>
                            <option value="Website&#x20;Ad"  >Website Ad</option>
                            <option value="Press&#x20;Coverage"  >Press Coverage</option>
                            <option value="Facebook&#x2f;Twitter"  >Facebook/Twitter</option>
                            <option value="Paypal"  >Paypal</option>
                            <option value="Magento"  >Magento</option>
                            <option value="Demandware"  >Demandware</option>
                            <option value="Mercent"  >Mercent</option>
                            <option value="ExactTarget"  >ExactTarget</option>
                            <option value="Other"  >Other</option>
                        </select>
                        <div  class='fieldclear'></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea type="Text" name="LeadGen_ContactForm_138973_m0:Description" class="StandardI AutoFormInput LeadGen_ContactForm_138973_m0_AutoForm" id="LeadGen_ContactForm_138973_m0_Description"  >Message</textarea>
                        <div class='fieldclear'></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input onclick='return HubSpotFormSpamCheck_LeadGen_ContactForm_138973_m0();' class='FormSubmitButton' type='submit' name='LeadGen_ContactForm_Submit_LeadGen_ContactForm_138973_m0' value="Send">
                    </td>
                </tr>
                </table>
                </div>
                
                    </form>
                
            </div>
            <div id="contact_form_2" class="contact_form">
                <div class="close_button"></div>
                <form action="http://hubspot.moontoast.com/Default.aspx?app=iframeform&hidemenu=true&ContactFormID=138974" method="post" target="post_iframe">
        <input type="hidden" name="FormSubmitRedirectURL" id="FormSubmitRedirectURL" value="http://www.moontoast.com/contact/thank-you" >
        <input type="hidden" name="Lead_Src" id="LeadSrc" value="Website_RichMedia_Contact_Form" />
        
        
    <script type='text/javascript' language='javascript'>/* <![CDATA[ */
       HubSpotFormSpamCheck_LeadGen_ContactForm_138974_m0 = function() {
           var key = document.getElementById('LeadGen_ContactForm_138974_m0spam_check_key').value;
               var sig = '';
               for (var x = 0; x< key.length; x++ ) {
                                    sig += key.charCodeAt(x)+13;
               }
               document.getElementById('LeadGen_ContactForm_138974_m0spam_check_sig').value = sig; 
           /* Set the hidden field to contain the user token */
           var results = document.cookie.match ( '(^|;) ?hubspotutk=([^;]*)(;|$)' );
            if (results && results[2]) {
                document.getElementById('LeadGen_ContactForm_138974_m0submitter_user_token').value =  results[2];
            } else if (window['hsut']) {
                document.getElementById('LeadGen_ContactForm_138974_m0submitter_user_token').value = window['hsut'];
                }
            return true;
       };
    /*]]>*/</script>
    
    <input type='hidden' id='LeadGen_ContactForm_138974_m0submitter_user_token' name='LeadGen_ContactForm_138974_m0submitter_user_token'  value='' />
    <input type='hidden' name='ContactFormId'  value='138974' /><input type='hidden' id='LeadGen_ContactForm_138974_m0spam_check_key' name='LeadGen_ContactForm_138974_m0spam_check_key'  value='neojqiqiqeesrildedggoohpjkloqlqekeksijhkkdhchtptrhjpksjdrhie' />
    <input type='hidden' id='LeadGen_ContactForm_138974_m0spam_check_sig' name='LeadGen_ContactForm_138974_m0spam_check_sig'  value='' />
    <div class='ContactFormItems FormClassID_138974'>
    <table border="0" cellspacing="0" cellpadding="5">
        <tr>
            <td>
                <input type="Text" name="LeadGen_ContactForm_138974_m0:FirstName" class="StandardI AutoFormInput LeadGen_ContactForm_138974_m0_AutoForm" id="LeadGen_ContactForm_138974_m0_FirstName" value="First Name" />
                <div class="fieldclear"></div>
            </td>
            <td>
                <input type="Text" name="LeadGen_ContactForm_138974_m0:LastName" class="StandardI AutoFormInput LeadGen_ContactForm_138974_m0_AutoForm" id="LeadGen_ContactForm_138974_m0_LastName" value="Last Name" />
                <div class="fieldclear"></div>
            </td>
        </tr>
        <tr>
            <td>
                <input type="Text" name="LeadGen_ContactForm_138974_m0:Email" class="StandardI AutoFormInput LeadGen_ContactForm_138974_m0_AutoForm" id="LeadGen_ContactForm_138974_m0_Email" value="Email Address" />
                <div class="fieldclear"></div>
            </td>
            <td>
                <input type="Text" name="LeadGen_ContactForm_138974_m0:Company" class="StandardI AutoFormInput LeadGen_ContactForm_138974_m0_AutoForm" id="LeadGen_ContactForm_138974_m0_Company" value="Company Name" />
                <div class="fieldclear"></div>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="Text" name="LeadGen_ContactForm_138974_m0:Title" class="StandardI AutoFormInput LeadGen_ContactForm_138974_m0_AutoForm" id="LeadGen_ContactForm_138974_m0_Title" value="Title" style="width: 499px"/>
                <div class="fieldclear"></div>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <textarea type="Text" name="LeadGen_ContactForm_138974_m0:Description" class="StandardI AutoFormInput LeadGen_ContactForm_138974_m0_AutoForm" id="LeadGen_ContactForm_138974_m0_Description"  >Message</textarea>
                <div class='fieldclear'></div>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <input onclick='return HubSpotFormSpamCheck_LeadGen_ContactForm_138974_m0();' class='FormSubmitButton' type='submit' name='LeadGen_ContactForm_Submit_LeadGen_ContactForm_138974_m0' value="Send">
            </td>
        </tr>
    </table>
    </div>
    
        </form>
        </div>
        <div id="thankyou">
        </div>
        <!--<script type="text/javascript" data-main="/wp-content/themes/moontoast2012/<?php if (isset($_GET['mode']) && $_GET['mode'] === 'd') : ?>js<?php else: ?>js-build<?php endif; ?>/main" src="/wp-content/themes/moontoast2012/<?php if (isset($_GET['mode']) && $_GET['mode'] === 'd') : ?>js<?php else: ?>js-build<?php endif; ?>/lib/require/main.js"></script>-->
        <script type="text/javascript" data-main="/wp-content/themes/moontoast2013/js/main" src="/wp-content/themes/moontoast2013/js/lib/require/main.js"></script>
        <script type="text/javascript">
        var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-8973162-10']);
          _gaq.push(['_trackPageview']);
        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
        </script>
        <script type="text/javascript" src="https://lct.salesforce.com/sfga.js"></script> 
        <script type="text/javascript">__sfga();</script>
        <!-- Start of Async HubSpot Analytics Code -->
        <script type="text/javascript">
        (function(d,s,i,r) {
        	var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
        	n.id=i;n.src='//js.hubspot.com/analytics/'+(Math.ceil(new Date()/r)*r)+'/213341.js';
        	e.parentNode.insertBefore(n, e);
        })(document,"script","hs-analytics",300000);
        </script>
        <!-- End of Async HubSpot Analytics Code -->
        <iframe name="post_iframe" src="http://www.moontoast.com/wp-content/images/close_button.png" style="height: 0px; width: 0px" ></iframe>
    </body>
</html>

<?php endif; ?>
