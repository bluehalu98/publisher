<!DOCTYPE html>
<html id='html-element' lang='ko'>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <!-- 워드프레스 header function -->
  <?php wp_head(); ?> 
  <!-- 워드프레스 header function -->
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/reset.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/style.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/scrollbar.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/header.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/gnb.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/footer.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/sub-layout.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/category.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/category-faq.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/category-rooms.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/single.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/single-room-detail.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/page-around&page-facility.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/event-calendar.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/page-book-guide.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/page-story.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/page-location.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/member.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/home.css">
  <script src="https://kit.fontawesome.com/5c078cf8a0.js" crossorigin="anonymous"></script>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/hoverBox.js"></script>  
  <script src="<?php bloginfo('template_directory'); ?>/js/window.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/smmothScroll.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/jquery.ripples-min.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/responsive_carousel_vert.js"></script>  


  <?php //bloginfo('url'); ?> <!-- 홈 url -->
  <?php //bloginfo('template_directory'); ?> <!-- 테마 url -->
  <title><?php bloginfo('name'); ?> <?php wp_title('|'); ?></title> 
</head>

<body id="style-6" <?php body_class(); ?>>
<?php include "preloader.php" ?>
<script src="<?php bloginfo('template_directory'); ?>/js/header.js"></script>  
  <header class="site-header">
    <h1>
      <span>
        펜션사이트
      </span>
      <a href="<?php bloginfo('url'); ?>">
        <img src="<?php bloginfo('template_directory'); ?>/img/icons/logo.png" alt="">
      </a>
    </h1>
    <a class='tel' href="tel:0">
      <i class="fa-solid fa-headset"></i>
      010-0000-0000
    </a>
    <?php include 'login-menu.php' ?>
    <button class="mbtn">
      <span class="line1"></span>
      <span class="line2"></span>
      <span class="line3"></span>
    </button>
  </header>
  <nav class="gnb">
    <div class="menu-wrap" id='style-3'>
      <?php wp_nav_menu( array('theme_location' => 'menu'));?><!-- div.menu-menu-container -->
    </div>
    <?php include 'login-menu.php' ?><!-- ul.login-menu -->
    <ul class="sns">
      <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
      <li><a href="#"><i class="fa-solid fa-paper-plane"></i></a></li>
    </ul>
  </nav>
  <div class="nav-bg"></div>
  <aside class="sidebar-left">
    <nav class="bread-crumb">
      <?php if(function_exists('bcn_display')){ bcn_display(); }?>
    </nav>
    <ul class="sns">
      <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
    </ul>
  </aside>