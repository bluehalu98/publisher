<?php get_header(); ?>
<script src="<?php bloginfo('template_directory'); ?>/js/home.js" defer></script>
<div class="dummy"></div>
<section class="section-home-1">
    <div class="inner">
      <div class="home-visual">
        <div class="overflow">
          <div class="col_width">
            <ul class="img_container">
              <li style="background-color: #ffe618;">
                <img src="<?php bloginfo('template_directory'); ?>/img/home/visual_t1.jpg" alt="">
              </li>
              <li style="background-color: #c0dae9;">
                <img src="<?php bloginfo('template_directory'); ?>/img/home/visual_t2.jpg" alt="">
              </li>
            </ul>
          </div>
        </div>
        <div class="indicator">
          <button></button>
          <button></button>
        </div>
      </div><!-- home visual -->
      <div class="textbox">
        <em>
          WE ARE <br>
          CREATIVE
        </em>
        <p>
          <b>뉴버드는 E-비즈니스 마케팅 에이전시 입니다. </b>
          온라인 서비스 컨설팅과 홈페이지, 어플리케이션, 솔루션 개발 서비스를 제공하고 있습니다.
        </p>
        <a class="more" href="/about-us">
          MORE <i class="fa-solid fa-arrow-trend-up"></i>
        </a>
      </div><!-- text box -->
    </div><!-- inner -->
</section><!-- section home 1 -->
<section class="section-home-2">
  <div class="inner">
    <p class="home-desc">
      <span>Passion leads to design, Design leads to performance,</span> <br>
      <span>Performance leads to success!</>
    </p>
    <em class="home-slogun">
      성공적인 프로젝트를 약속합니다!
    </em>
    <h2 class="typo">
      PORTFOLIO
    </h2>
    <ul class="category-list-container"><!--카테고리 최신글 출력 시작-->
      <?php
      $catquery = new WP_Query( 'cat=3&posts_per_page=10' ); // 카테고리 ID, 표시 글 개수
      while($catquery->have_posts()) : $catquery->the_post();
      ?>
      <li>
        <!--글 제목-->
        <div>
          <h3><?php the_title(); ?></h3>
          <dl>
            <dt><i class="fa-solid fa-building"></i>CLIENT</dt>
            <dd><?php echo rwmb_meta( 'id1' ); ?></dd>
            <dt><i class="fa-solid fa-book"></i>WORK</dt>
            <dd><?php echo rwmb_meta( 'id2' ); ?></dd>
            <dt><i class="fa-solid fa-link"></i>URL</dt>
            <dd><?php echo rwmb_meta( 'id3' ); ?></dd>
          </dl>
        </div>
        <figure>
          <!--해당글 링크-->
          <a href="<?php the_permalink(); ?>">VIEW<i class="fa-solid fa-square-arrow-up-right"></i></a> 
          <!--글 이미지-->
          <?php if ( has_post_thumbnail() ) { the_post_thumbnail('thumbnail'); } ?>
        </figure>
      </li>
      <?php endwhile; ?>
    </ul><!--카테고리 최신글 출력 끝-->
    <div class="more">
      <a href="/portfolio">
        MORE <i class="fa-solid fa-arrow-trend-up"></i>
      </a>
    </div>
  </div><!-- inner -->
  <div class="family">
    <p>
      <em>PROJECT COMPLETION</em>
      <b>2022년, 현재까지 447 개의 프로젝트를 완료했습니다.</b>
    </p>
    <div class="carousel">
      <div class="overflow">
        <div class="col_width">
          <ul class="img_container">
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/1.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/2.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/3.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/4.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/5.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/6.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/7.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/8.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/9.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/10.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/11.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/12.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/13.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/14.jpg" alt=""></li>
            <li><img src="<?php bloginfo('template_directory'); ?>/img/home/15.jpg" alt=""></li>
          </ul>
        </div>
      </div><!-- overflow -->
    </div><!-- carousel -->
  </div><!-- family -->
</section><!-- section home 2 -->
<?php get_footer(); ?>