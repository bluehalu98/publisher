<!DOCTYPE html>
<html id="html-element" lang="ko">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <?php wp_head(); ?>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/reset.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/style.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/scrollbar.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/header.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/gnb.css">
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/footer.css">
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="https://kit.fontawesome.com/8f6acd3ae7.js" crossorigin="anonymous"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/window.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/header.js"></script>
  <title><?php bloginfo('name'); ?> <?php wp_title('|'); ?></title>
</head>

<body id="style-6" <?php body_class(); ?>>
  <header class="site-header">
    <h1>
      <span>
        펜션사이트
      </span>
      <a href="<?php bloginfo('url'); ?>">
        <img src="<?php bloginfo('template_directory'); ?>/img/icons/logo.png" alt="">
      </a>
    </h1>
    <a class="tel" href="tel:0">
      <i class="fa-solid fa-headset"></i>
      010-0000-0000
    </a>
    <?php include "login-menu.php" ?>
    <!-- php와 css에서는 자기파일에서 찾으면되니까 상대경로 안찾아도됨 -->
    <button class="mbtn">
      <span class="line1"></span>
      <span class="line2"></span>
      <span class="line3"></span>
    </button>
  </header>

  <nav class="gnb">
    <div class="menu-wrap" id="style-3">
      <?php /* div.menu-container */
      wp_nav_menu(array('theme_location' => 'menu'));
      ?>
      <!-- ul.login-menu -->
    </div>
    <?php include "login-menu.php" ?>

    <ul class="sns">
      <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
      <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
    </ul>
  </nav>
  <div class="nav-bg"></div>
  <aside class="sidebar-left">
  <ul class="bread-crumb">
    <li><i class="fa-solid fa-house"></i>HOME</li>
  </ul>
  <ul class="sns">
    <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
    <li><a href=""><i class="fa-solid fa-paper-plane"></i></a></li>
  </ul>
  </aside>