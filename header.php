<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section
 *
 * @package WordPress
 * @subpackage Moontoast2013
 */
?>
<?php if (!isset($_GET['requestType']) || $_GET['requestType'] !== 'ajax') : ?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# moontoast: http://ogp.me/ns/fb/moontoast#" xml:lang="en" lang="en">
    <head>
        <title><?php wp_title('&#124;', true, 'right'); ?> <?php bloginfo('name'); ?></title>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <meta charset="utf-8" />
        <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
        <meta name="copyright" content="&#169; 2009-<?php echo date('Y'); ?> Moontoast, LLC" /> 
        <meta name="rating" content="general" /> 
        <meta name="robots" content="all, index, follow" /> 
        <meta name="google-site-verification" content="ICuVr_tNluU4yEOu_4Wzu7QxFqfvBR6_nuzIBilePhM" /> 
        <meta name="google-site-verification" content="hp4zBqneAaciXdQZnbGAcQxv4CTiK6C5DqxvpfEUzGc" />
        <meta name="google-site-verification" content="bnA0biCTyVGut7PeUvkIPimehdFt2oqY2IjcRD_TonE" />
        <meta name="viewport" content="width=1280" />

        <script type="text/javascript">
          (function() {
            var config = {
              kitId: 'aup4mop',
              scriptTimeout: 3000
            };
            var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)
          })();
        </script>
        
        <link rel="stylesheet" type="text/css" media="screen" href="/wp-content/themes/moontoast2013/css/screen.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="/wp-content/themes/moontoast2013/css/content/main-2.css" />
	<link rel="stylesheet" href="/wp-content/themes/moontoast2013/css/content/font.css">
        <!--[if IE]>
            <link href="/wp-content/themes/moontoast2013/css/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <![endif]-->
        
        <link rel="alternate" type="application/rss+xml" title="Moontoast Global Feed (All Content)" href="http://feeds.feedburner.com/Moontoast-all" />
        <link rel="alternate" type="application/rss+xml" title="Moontoast Blog" href="http://feeds.feedburner.com/Moontoast-blog" />
        <link rel="alternate" type="application/rss+xml" title="Moontoast Press Releases" href="http://feeds.feedburner.com/Moontoast-press" />
        <link rel="alternate" type="application/rss+xml" title="Moontoast in the News" href="http://feeds.feedburner.com/Moontoast-news" />
        <script type="text/javascript">
            var config = {
                "assetPath": "/wp-content/themes/moontoast2013/",
                "js": "js"
                //"js": "<?php if (isset($_GET['mode']) && $_GET['mode'] === 'd') : ?>js<?php else: ?>js-build<?php endif; ?>"
            };
        </script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script src="//cdn.optimizely.com/js/173977948.js"></script>
    </head>

    <script src="//cdn.optimizely.com/js/173977948.js"></script>
    <body>
        <div class="moonloader">
            <div class="moonloader_graphic"></div>
            <div class="moonloader_background"></div>
        </div>
<?php endif; ?>
        <div data-role="page" class="page_viewport">    
            <div class="page_viewport_inner">
                
