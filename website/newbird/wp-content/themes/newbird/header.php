<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js" id="html">

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/reset.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/style.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/header.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/footer.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/sub-layout.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/category.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/single.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/contact.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/page-service.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/page-about.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/home.css">
  <script src="https://kit.fontawesome.com/5c078cf8a0.js" crossorigin="anonymous"></script>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/window.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/responsive_carousel_horz.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/jquery_count.js"></script>
  <title><?php bloginfo('name'); ?> <?php wp_title('|'); ?></title>
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<script src="<?php bloginfo('template_directory'); ?>/js/header.js"></script>
  <header class="site-header">
    <h1>
      <a href="/">
        <sup>
          <span class="first-letter">n</span>
          <span>e</span>
          <span>w</span>
        </sup>
        <em>
          <span class="first-letter">b</span>
          <span>i</span>
          <span>r</span>
          <span>d</span>
        </em>
      </a>
    </h1>
    <nav class="gnb gnb-lg">
      <?php wp_nav_menu( array('theme_location' => 'menu')); ?>
    </nav>
    <button class="mbtn">
      <span class="bar1"></span>
      <span class="bar2"></span>
      <span class="bar3"></span>
    </button>
  </header>
  <nav class="gnb gnb-sm">
    <?php wp_nav_menu( array('theme_location' => 'menu')); ?>
  </nav>
  <ul class="contact-links">
    <li><a href="#"><i class="fa-solid fa-location-dot"></i></a></li>
    <li><a href="/contact/"><i class="fa-solid fa-envelope"></i></a></li>
  </ul>
  <a class="tel" href="tel:0">
    <small>customer</small>
    <div>
      <span>
        <i class="fa-solid fa-phone"></i>
        <i class="fa-solid fa-phone"></i>
      </span>
    </div>
    <b>02-6044-1234</b>
  </a>

  <a href="#" class="download-btn">
    <span><b>COMPANY</b> BROCHURE</span>
    <i class="fa-solid fa-download"></i> 
  </a>
  <p class="copy">
    &copy; 2020 <b>NEWBIRD</b> _
  </p>