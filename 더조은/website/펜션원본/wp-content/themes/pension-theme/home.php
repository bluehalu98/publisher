<?php get_header(); ?>
<script src="<?php bloginfo('template_directory'); ?>/js/home.js" defer></script>
<!--블로그 글 출력 시작-->
<main class="home-visual">
<svg style="display:none;">
  <filter id="filter">
    <feTurbulence id="water" numOctaves="3" seed="1" baseFrequency="0.02 0.5" />
    <feDisplacementMap scale="10" in="SourceGraphic" />
    <animate href="#water" attributeName="baseFrequency" keyTimes="0;0.5;1"
    values="0.002;0.008;0.002" dur="10s" repeatCount="indefinite"/>
  </filter>
</svg>
  <div class="overflow">
    <div class="col_height">
      <ul class="img_container">
        <li class="box1">
          <figure></figure>
          <div>
            <h6>전 객실 <br> <b>프라이빗</b> 독채</h6>
            <p>
              4계절 내내 운영되는 온수 수영장은 마치 해외에 온듯한 기분을 만끽하실 수 있는 럭셔리한 공간입니다.
            </p>
          </div>
        </li>
        <li class="box2">
          <figure></figure>
          <div>
            <h6>파도의 아름다운 노래가 있는곳 <b>바닷가 펜션</b></h6>
            <p>
              4계절 내내 운영되는 온수 수영장은 마치 해외에 온듯한 기분을 만끽하실 수 있는 럭셔리한 공간입니다.
            </p>
          </div>
        </li>
        <li class="box3">
          <figure></figure>
          <div>
            <h6>자연친화적인 수영장 <br> <b>개별스파</b>와 <b>다양한 객실</b>을 보유</h6>
            <p>
              4계절 내내 운영되는 온수 수영장은 마치 해외에 온듯한 기분을 만끽하실 수 있는 럭셔리한 공간입니다.
            </p>
          </div>
        </li>
        <li class="box4">
          <figure></figure>
          <div>
            <h6>전 객실 독채<br> <b>개별 테라스</b> 제공</h6>
            <p>
              4계절 내내 운영되는 온수 수영장은 마치 해외에 온듯한 기분을 만끽하실 수 있는 럭셔리한 공간입니다.
            </p>
          </div>
        </li>
      </ul>
    </div><!-- col_height -->
  </div><!-- overflow -->
  <button class="prev">
    <i class="fa-solid fa-arrow-up"></i>
    <span>prev</span>
  </button>
  <div class="progress">
    <div class="bar bar1"></div>
    <div class="bar bar2"></div>
    <div class="bar bar3"></div>
  </div>
  <button class="next">
    <i class="fa-solid fa-arrow-down"></i>
    <span>next</span>
  </button>
  <ul class="indicator">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
  </ul>
</main>
<!--블로그 글 출력 끝-->

<?php get_footer(); ?>