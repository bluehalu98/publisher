<?php include 'sub-header.php' ?>
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
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <p class="theme-guide">
  본문은 facility.php에서 수정하실 수 있습니다.
  </p> 
  <div class="sub-desc">
    <p>한번 더 쉬게 되는 편안함, 쾌적한 자연이 한데 어우러져 있는 곳</p>  
  </div> 
  <!--페이지 본문 출력-->
  <section class="page-facility">
    <ul>
      <li>
        <h3>자연과 함께하는 맛있는 바베큐파티!</h3>
        <p>
          각 객실마다 조용하고 편안하게 즐기실 수 있는 개별바비큐장이 마련되어 있습니다. 친구와 가족, 연인과 특별한 추억을 만들어 보세요. <br>
          ※ 이용료(국내산 참숯 사용) 숯 + 그릴 : 2인기준 10,000원, 10인기준 : 30,000원
        </p>
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub2/facility1.jpg" alt="">
        </figure>
      </li>
      <li>
        <h3>탁트인 수영장!</h3>
        <p>
          무더운 여름휴가를 완벽하게 해줄 넓은 수영장이 펜션 내 두 곳에 마련되어 있습니다. <br>
          바닷가까지 나가지 않아도 되고 물때가 맞지 않아도 시원한 물놀이를 즐기실 수 있습니다.
        </p>
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub2/facility2.jpg" alt="">
        </figure>
      </li>
      <li>
        <h3>피로를 풀어줄 제트스파!</h3>
        <p>
          사계절 즐기실 수 있는 제트스파가 객실 내에 마련되어 있습니다. <br>
          바다를 보며 하루를 마무리하는 힐링포인트가 되어줍니다.
        </p>
        <ul>
          <li>제트스파는 약 40분 정도 물받는 구조로 되어 있습니다.</li>
          <li>제트스파에서는 수영복 착용바랍니다.</li>
          <li>입욕제, 오일, 거품제, 샴푸 트리트먼트, 꽃잎등은 고장의 원인이되므로 사용을 금합니다.</li>
          <li>와인잔이 깨지면 위험하므로 조심하시기 바랍니다.</li>
        </ul>
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub2/facility3.jpg" alt="">
        </figure>
      </li>
      <li>
        <h3>무선인터넷!</h3>
        <p>
          오시는 고객이라면 누구나 데이터 걱정없이 사용하실 수 있는 무선인터넷이 설치되어 있습니다. <br>
          다양한 멀티미디어를 펜션에서고 즐기실 수 있습니다. <br>
          아이패드, 노트북등 기기들을 가져오시면 언제 어디서나 무선인터넷을 즐기실 수 있습니다. <br>
        </p>
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub2/facility4.jpg" alt="">
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