<?php get_header(); ?>
<script src="<?php bloginfo('template_directory'); ?>/js/sub-layout.js"></script>
  <div class="sub-wrap">
    <section class="sub-visual">
      <div class="figure-container">
        <svg>
          <filter id="filter">
            <feTurbulence id="water" numOctaves="3" seed="1" baseFrequency="0.02 0.5" />
            <feDisplacementMap scale="10" in="SourceGraphic" />
            <animate href="#water" attributeName="baseFrequency" keyTimes="0;0.5;1"
            values="0.002;0.008;0.002" dur="10s" repeatCount="indefinite"/>
          </filter>
        </svg>
        <figure class="about">
          <img src="<?php bloginfo('template_directory'); ?>/img/sub/sub1-1-bg.jpg" alt="">
          <figcaption>
            <h5>펜션소개</h5>
            <p>
            글램핑 및 풀비치 실내수영장 구비는 물론, 곳곳에 숨어있는 프라이빗한 공간, 온실카페와 아름다운 정원에서 만끽하는 불빛축제까지 즐겨보세요
            </p>
          </figcaption>
        </figure>
        <figure class="room-info">
          <img src="<?php bloginfo('template_directory'); ?>/img/sub/sub2-1-bg.jpg" alt="">
          <figcaption>
            <h5>펜션정보</h5>
            <p>
              글램핑 및 풀비치 실내수영장 구비는 물론, 곳곳에 숨어있는 프라이빗한 공간, 온실카페와 아름다운 정원에서 만끽하는 불빛축제까지 즐겨보세요.
            </p>
          </figcaption>
        </figure>
        <figure class="book">
          <img src="<?php bloginfo('template_directory'); ?>/img/sub/sub3-1-bg.jpg" alt="">
          <figcaption>
            <h5>예약안내</h5>
            <p>
            글램핑 및 풀비치 실내수영장 구비는 물론, 곳곳에 숨어있는 프라이빗한 공간, 온실카페와 아름다운 정원에서 만끽하는 불빛축제까지 즐겨보세요.
            </p>
          </figcaption>
        </figure>
        <figure class="around">
          <img src="<?php bloginfo('template_directory'); ?>/img/sub/sub4-1-bg.jpg" alt="">
          <figcaption>
            <h5>주변여행지</h5>
            <p>
            글램핑 및 풀비치 실내수영장 구비는 물론, 곳곳에 숨어있는 프라이빗한 공간, 온실카페와 아름다운 정원에서 만끽하는 불빛축제까지 즐겨보세요.
            </p>
          </figcaption>
        </figure>
        <figure class="customer">
          <img src="<?php bloginfo('template_directory'); ?>/img/sub/sub5-bg.jpg" alt="">
          <figcaption>
            <h5>고객센터</h5>
            <p>
            글램핑 및 풀비치 실내수영장 구비는 물론, 곳곳에 숨어있는 프라이빗한 공간, 온실카페와 아름다운 정원에서 만끽하는 불빛축제까지 즐겨보세요.
            </p>
          </figcaption>
        </figure>
        <figure class="member">
          <img src="<?php bloginfo('template_directory'); ?>/img/sub/sub3-2-bg.jpg" alt="">
          <figcaption>
            <h5>회원</h5>
            <p>
            회원에게 제공되는 다양한 혜택을 누려보세요
            </p>
          </figcaption>
        </figure>
      </div>
      <aside class="sub-sidebar">
        <p class="text">
          scroll <br> down
        </p>
        <button class="snb-btn">
          <span class="line1"></span>
          <span class="line2"></span>
          <span class="line3"></span>
        </button>
        <i class="fa-solid fa-computer-mouse mouse"></i>
        <nav class="snb">
          <?php wp_nav_menu( array('theme_location' => 'menu')); ?> 
        </nav>
      </aside>
    </section>
    <main class="sub-content">
      <span class='line-grid line-grid1'></span>
      <span class='line-grid line-grid2'></span>
      <span class='line-grid line-grid3'></span>