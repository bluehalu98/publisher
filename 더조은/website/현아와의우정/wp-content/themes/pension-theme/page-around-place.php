<?php include 'sub-header.php' ?>
  <!--페이지 제목 출력-->
 <h2 class="sub-title"> <?php the_title(); ?></h2>
  <p class="theme-guide">
    본문은 테마폴더의 page-around-place.php에서 편집하실 수 있습니다. <br>
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
        남 태안군 안면읍 광지길에 자리한 꽃지해변은 5KM에 이르는 백사장과
할배바위, 할매바위가 어우러져 그림 같은 풍광을 보여준다.
        </p>
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub4/etc1.jpg" alt="">
        </figure>
      </li>
      <li>
        <h3>남해 가천 다랭이마을</h3>
        <p>
        경남 남해의 최남단 지역에 위치한 잘 보존된 작은 마을로
해변에 맞닿은 산비탈 위에 위치하고 있습니다.
        </p>
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub4/etc2.jpg" alt="">
        </figure>
      </li>
      <li>
        <h3>우포늪</h3>
        <p>
        우리나라의 대표적인 생태관광지인 우포늪과 자동차드라이브 코스로 일품인 의령 한우산을 함께 돌아보는 코스다.
우포늪에서 원시 자연의 아름다움을 마음에 담은 뒤, 의령의 봉화대와 일붕사에서 바위절벽과 동굴법당의 매력에 흠뻑 빠질 수 있다. 늪에서 출발하여 기암절벽과 산으로 이어지는 자연친화적인 코스이며, 가족이나 연인과 함께 하는 여행코스로 추천할 만하다.
        </p>
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub4/etc3.jpg" alt="">
        </figure>
      </li>
      <li>
        <h3>담양 죽녹원</h3>
        <p>
        전남 담양에 있는 죽녹원은 울창한 대나무 숲으로 분주한 도시 생활에 지친 사람들을 환영하는 '슬로우 도시' 입니다.
        </p>
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub4/etc4.jpg" alt="">
        </figure>
      </li>
    </ul>
  </section>
  <!--페이지 본문 출력-->
  <?php endwhile; else: ?>
  <!--페이지가 없을 경우 출력될 내용-->	
  <?php endif; ?>
  <!--페이지 출력 끝-->
<?php include 'sub-footer.php' ?>