<?php include 'sub-header.php' ?>
<script src="<?php bloginfo('template_directory'); ?>/js/page-story.js"></script>
<!--페이지 제목 출력-->
<h2 class="sub-title"> <?php the_title(); ?></h2>

<!--  페이지 본문에서 직접 작성 
  <p class="theme-guide">
  본문은 관리자모드의 페이지에서 편집하실 수 있습니다. <br>
  게시판은 관리자모드의 kboard에서 설정하실 수 있습니다.
  </p> 
-->
<!-- 
  <div class="sub-desc">
    <p>페이지 본문에서 직접 작성</p>  
  </div> 
-->
<!--페이지 출력 시작-->
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

    <p class="theme-guide">
      본문은 테마폴더의 page-story.php에서 편집하실 수 있습니다.
    </p>
    <div class="sub-desc">
      <p>
        한번더 쉬게 되는 편안함, 쾌적한 자연이 한데 어우려져 있는곳
      </p>
    </div>
    <!--페이지 본문 출력-->
    <section class="visual-story">
      <figure>
        <img src="<?php bloginfo('template_directory'); ?>/img/sub1/sub1-1.jpg" alt="">
      </figure>
      <svg style="display:none;">
        <filter id="filter">
          <feTurbulence id="water" numOctaves="3" seed="1" baseFrequency="0.02 0.5" />
          <feDisplacementMap scale="10" in="SourceGraphic" />
          <animate href="#water" attributeName="baseFrequency" keyTimes="0;0.5;1" values="0.002;0.008;0.002" dur="10s" repeatCount="indefinite" />
        </filter>
      </svg>
    </section>
    <section class="greet-story">
      <h3>
      <i class="fa-solid fa-comment-dots"></i>
      관리자 인사말</h3>
      <p>
        OO펜션을를 찾아주셔서 진심으로 감사합니다. <br>
        OO펜션은전 객실 프라이빗 독채로서 개별 테라스 및 실내 공용 바비큐장이 있습니다. <br>
        편백나무 객실에서 보이는 환상적인 오션뷰는 머무시는 동안, 마음의 평안과 힐링의 공간으로서 고객님께 최상의 휴식을 선물할 것입니다. <br>
        4계절 내내 운영되는 온수 수영장은 마치 해외에 온 듯한 기분을 만끽하실 수 있는 럭셔리한 공간입니다. <br>
        고객만족을 위해 항상 최상의 서비스를 제공하겠습니다. <br>
        연인, 친구, 가족과 함께 잊지 못할 추억을 만들어 가시길 바랍니다. <br>
      </p>
    </section>
    <!--페이지 출력 끝-->
  <?php endwhile;
else : ?>
  <!--페이지가 없을 경우 출력될 내용-->
<?php endif; ?>
<!--페이지 출력 끝-->
<?php include 'sub-footer.php' ?>