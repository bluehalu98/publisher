<?php include 'sub-header.php' ?>
<script>
  $(function(){
    let numbers = new Jquery_count(".section-about-1 li em", 3, 50)
    function motion(){
      let t = $('.section-about-1 ul').offset().top
      if(scrt > t - winh*.7){
        numbers.start()
      }else{
        numbers.reverse()
      }
    }
    motion()
    $(window).resize(function(){
      motion()
    }).scroll(function(){
      motion()
    })
  })
</script>
<!--페이지 제목 출력-->
<span class="typo"><?php the_title(); ?></span>
<main class="sub-content">
<!--페이지 출력 시작-->
  <h2 class="sub-title"><?php the_title(); ?></h2>
  <section class="section-about-1">
    <p class="desc">
      뉴버드는 지금까지 함께 했던 고객으로부터 <br>
      <b>“뉴버드 덕분에 웃을 수 있었고, 만족스러웠고, 사업에 큰 도움이 되었다”</b>고 들어왔습니다. <br>
      그리고 앞으로도 듣고 싶습니다.
    </p>
    <p class="slogun">
      저희와 함께 성공적인 프로젝트를 진행하세요!
    </p>
    <img src="<?php bloginfo('template_directory'); ?>/img/about/pic_sketch.jpg" alt="">
    <ul>
      <li>
        <b>PROJECTS</b>
        <em>447</em>
      </li>
      <li>
        <b>CLIENTS</b>
        <em>674</em>
      </li>
      <li>
        <b>WORKERS</b>
        <em>123</em>
      </li>
      <li>
        <b>AVERAGE CAREER</b>
        <em>140</em>
      </li>
    </ul>
  </section><!-- section about 1 -->
  <section class="section-about-2">
    <h3>COMPANY OVERVIEW</h3>
    <dl>
      <dt>COMPANY</dt>
      <dd>(주)뉴버드</dd>
      <dt>BRAND</dt>
      <dd>뉴버드(new bird)</dd>
      <dt>CEO</dt>
      <dd>정원규</dd>
      <dt>SINCE</dt>
      <dd>2017년 10월</dd>
      <dt>ADDRESS</dt>
      <dd>서울특별시 서대문구 연희로2길 76 한빛빌딩A동 1층</dd>
      <dt>BUSINESS</dt>
      <dd>Web, Mobile, App, E-commerce, Solution, Ad/Marketing</dd>
    </dl>
    <ul>
      <li><span>PASSION</span></li>
      <li>
        <span>CHANGE</span>
        <i class="fa-solid fa-link link1"></i>
        <i class="fa-solid fa-link link2"></i>
      </li>
      <li><span>STEADINESS</span></li>
    </ul>
  </section><!-- section about 2 -->

<?php include 'sub-footer.php' ?>