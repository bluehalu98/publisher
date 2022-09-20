<?php include 'sub-header.php' ?>
  <!--페이지 제목 출력-->
 <h2 class="sub-title"> <?php the_title(); ?></h2>

<!--  페이지 본문에서 직접 작성 -->
  <p class="theme-guide">
  해당페이지는 page-location.php에서 수정하실 수 있습니다.
  </p> 

  <div class="sub-desc">
    <p>방문전 미리 연락주시면 친절히 안내해 드리고있습니다.</p>  
  </div> 

  <!--페이지 출력 시작-->
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <!--페이지 본문 출력-->
  <section class="page-location">
    <h3 class="hidden">page location</h3>
    <dl>
      <dt><i class="fa-solid fa-phone"></i>연락처</dt>
      <dd>000-0000-0000</dd>
      <dt><i class="fa-solid fa-map"></i>주소</dt>
      <dd>인천시 부평구 부평동 경원대로 0000</dd>
      <dt><i class="fa-solid fa-bus"></i>버스이용</dt>
      <dd>○○역에서 하차후 ○○○버스를 이용하세요</dd>
      <dt><i class="fa-solid fa-train-subway"></i>지하철이용</dt>
      <dd>○○역에서 하차후 ○○○버스 ○○○역에서 하차(도보 20분)</dd>
    </dl>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170510.2960011241!2d126.66262662682693!3d37.42970068836669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7123a1a63107%3A0xcc40ec32cde86127!2z64yA67aA64-E66mU66W067iU66Oo7Y6c7IWY!5e0!3m2!1sko!2skr!4v1661910540503!5m2!1sko!2skr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>
  <!--페이지 본문 출력-->
  <?php endwhile; else: ?>
  <!--페이지가 없을 경우 출력될 내용-->	
  <?php endif; ?>
  <!--페이지 출력 끝-->
  
<?php include 'sub-footer.php' ?>