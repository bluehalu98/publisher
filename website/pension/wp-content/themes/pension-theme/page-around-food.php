<?php include "sub-header.php" ?>
  <!--페이지 제목 출력-->
  <h2 class="sub-title"><?php the_title(); ?></h2>
  <p class="theme-guide">
    본문은 테마폴더의 page-around-food.php에서 편집하실 수 있습니다.
  </p>
  <div class="sub-desc">
    <p>주변의 다양한 볼거리와 먹거리를 즐기세요</p>
  </div>  
  <!--페이지 출력 시작-->
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <!--페이지 본문 출력-->
  <section class="page-around">
    <ul>
      <li>
        <h3>꽃지 해수욕장</h3>
        <p>
          충남 태안군 안면읍 광지길에 자리한 꽃지해변은 5KM에 이르는 백사장과 할배바위, 할매바위가 어우러져 그림 같은 풍광을 보여준다.
        </p>
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub4/etc1.jpg" alt="">
        </figure>
      </li>
      <li>
        <h3>꽃지 해수욕장</h3>
        <p>
          충남 태안군 안면읍 광지길에 자리한 꽃지해변은 5KM에 이르는 백사장과 할배바위, 할매바위가 어우러져 그림 같은 풍광을 보여준다.
        </p>
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub4/etc1.jpg" alt="">
        </figure>
      </li>
    </ul>
  </section>
  <!--페이지 본문 출력 끝-->
  <?php endwhile; else: ?>
  <!--페이지가 없을 경우 출력될 내용-->	
  <?php endif; ?>
  <!--페이지 출력 끝-->
<?php include "sub-footer.php" ?>