<?php include 'sub-header.php' ?>
  <!--페이지 제목 출력-->
 <h2 class="sub-title"> <?php the_title(); ?></h2>
  <p class="theme-guide">
    본문은 테마폴더의 page-around-food.php에서 편집하실 수 있습니다. <br>
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
        <h3>무창포해수욕장 주꾸미·도다리</h3>
        <p>
          무창포해수욕장은 매년 3월 주꾸미·도다리축제가 열리는 보령의 대표적인 봄맞이 미식 여행지다(올해 축제 일정은 코로나바이러스감염증-19 상황에 따라 변동·취소 가능). 이맘때면 해변에 늘어선 음식점 어디서든 알이 꽉 찬 주꾸미와 도다리를 만날 수 있다. 주꾸미는 낙지처럼 몸통에 다리가 8개 달렸지만, 짧고 통통한 것이 특징이다. 필수아미노산과 피로 회복에 좋은 타우린이 풍부한 주꾸미는 산란 전인 3~4월에 영양분이 가장 많아 봄철 보양식으로 인기다.
        </p>
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub4/etc1.jpg" alt="">
        </figure>
      </li>
      <li>
        <h3>조개의 여왕, 부안 백합</h3>
        <p>
          백합은 지역에 따라 생합, 상합이라고도 부른다. 속이 맑아 회로 먹을 수 있으니 생합이요, 전복에 버금가는 고급 조개니 상합이다. 백합에 풍부한 비타민 B12와 타우린은 피로 회복에 좋다. 그러니 백합은 겨울이 끝나고 봄이 시작되는, 몸이 나른해지는 이 계절에 먹어야 제맛이다.
        </p>
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub4/etc2.jpg" alt="">
        </figure>
      </li>
      <li>
        <h3>남해 죽방멸치쌈밥과 멸치회</h3>
        <p>
          한려수도의 비경을 품은 남해는 태생적으로 섬이나, 후천적으로 뭍과 연결됐다. 노량대교와 남해대교가 남해와 하동을, 창선·삼천포대교가 남해와 사천을 잇는다.  
        </p>
        <figure>
          <img src="<?php bloginfo('template_directory'); ?>/img/sub4/etc3.jpg" alt="">
        </figure>
      </li>
      <li>
        <h3>산야초한방수육</h3>
        <p>
          충북 제천은 약초가 많이 나는 고장이다. 조선 시대부터 한약재 생산과 거래가 활발했다. 근대 들어 한약재를 거래하는 약령시가 개설됐고, 현재 제천약초시장이 명맥을 잇는다. 그러다 보니 자연스레 한방 관련 산업이 발달했다. 한방 차와 화장품, 건강식품을 만드는 업체가 여러 곳이고, 각 기업이 생산한 제품을 한데 모은 온라인 쇼핑몰도 운영한다.
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