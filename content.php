<?php
/**
 * The default template for displaying content
 *
 * @package WordPress
 * @subpackage Moontoast2012
 */
?>

<?php include("content_header.php"); ?>

<div class="view_content">

    <div class="header header_social_apps">
        <div class="header_social_apps_image">
            <div class="header_social_apps_image_inner">
                
            </div>
        </div>
    </div>

    
            <?php the_content(); ?>
        </div>
    </div>
    <div class="clearAll"></div>

    <br /><br /><br /><br /><br /><br /><br /><br /><br />

</div>

<?php  get_footer(); ?>