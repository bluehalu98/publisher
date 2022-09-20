<?php get_header(); ?>
<script src="<?php bloginfo('template_directory'); ?>/js/home.js"></script>
<main class="home-visual">
  <svg style="display:none;">
    <filter id="filter">
      <feTurbulence id="water" numOctaves="3" seed="1" baseFrequency="0.02 0.5" />
      <feDisplacementMap scale="10" in="SourceGraphic" />
      <animate href="#water" attributeName="baseFrequency" keyTimes="0;0.5;1" values="0.002;0.008;0.002" dur="10s" repeatCount="indefinite" />
    </filter>
  </svg>
  <div class="overflow">
    <div class="col_height">
      <ul class="img_container">
        <li class="box1">
          <figure></figure>
          <div>
            <h6>전 객실 <br> <b>프라이빗</b> 독채1</h6>
            <p>
              4계절 내내 운영되는 온수 수영장은 마치 해외에 온 듯한 기분을 만끽하실 수 있는 럭셔리한 공간입니다
            </p>
          </div>
        </li>
        <li class="box2">
          <figure></figure>
          <div>
            <h6>전 객실 <br> <b>프라이빗</b> 독채2</h6>
            <p>
              4계절 내내 운영되는 온수 수영장은 마치 해외에 온 듯한 기분을 만끽하실 수 있는 럭셔리한 공간입니다
            </p>
          </div>
        </li>
        <li class="box3">
          <figure></figure>
          <div>
            <h6>전 객실 <br> <b>프라이빗</b> 독채3</h6>
            <p>
              4계절 내내 운영되는 온수 수영장은 마치 해외에 온 듯한 기분을 만끽하실 수 있는 럭셔리한 공간입니다
            </p>
          </div>
        </li>
        <li class="box4">
          <figure></figure>
          <div>
            <h6>전 객실 <br> <b>프라이빗</b> 독채4</h6>
            <p>
              4계절 내내 운영되는 온수 수영장은 마치 해외에 온 듯한 기분을 만끽하실 수 있는 럭셔리한 공간입니다
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <button class="prev">
    <i class="fa-solid fa-arrow-turn-up"></i>
    <span>prev</span>
  </button>

  <div class="progress">
    <div class="bar bar1"></div>
    <div class="bar bar2"></div>
    <div class="bar bar3"></div>
  </div><!-- progress -->

  <button class="next">
    <span>next</span>
    <i class="fa-solid fa-arrow-turn-down"></i>
  </button>
  <ul class="indicator">
    <button>01</button>
    <button>02</button>
    <button>03</button>
    <button>04</button>
  </ul>

</main>
<?php get_footer(); ?>