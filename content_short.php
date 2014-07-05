<?php
/*
Template Name: ShortContent
*/
?>

<?php include("content_header.php"); ?>

<div class="view_content">

    <div class="header header_social_apps">
        <div class="header_social_apps_image">
            <div class="header_social_apps_image_inner">
                <div class="page_title"><?php the_title(); ?></div>
            </div>
        </div>
    </div>

    <div class="products_container no_border pad_top">
        <div class="main_container social_apps_container">
            <div class="short_content">
                <?php if (have_posts()) : ?>
                   <?php while (have_posts()) : the_post(); ?> 
                        <?php the_content(); ?>
                   <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
    <div class="clearAll"></div>

    <br /><br /><br /><br /><br /><br /><br /><br /><br />

</div>

<?php  get_footer(); ?>