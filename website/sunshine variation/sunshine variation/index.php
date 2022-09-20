<?php include 'header.php' ?>
<script src="./js/particles.js"></script>
<script src="./js/app_particle_star.js"></script>
<script src="./js/home.js"></script>
  <section class="home-visual">
    <div class="overflow"><!-- 슬라이더 화면영역 -->
      <div class="col_width"><!-- 반응형 넓이 설정 -->
        <!-- 이부분부터 class명을 임의로 사용하지 말것 -->
        <ul class="img_container">
          <li>
            <figure class="inner"><!-- li에 padding을 이용해 간격설정시 필요 -->
              <img src="./img/home/main01.jpg" alt="" draggable="false">
              <figcaption><!-- figure안에 a는 들어가면안된다 -->
                <h6>Creative Design</h6>
                <p>
                  차별화된 전문 디자인 경험과 모바일 환경을 고려한 
                  컨텐츠 최적화 홈페이지 전문회사입니다.
                </p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure class="inner"><!-- li에 padding을 이용해 간격설정시 필요 -->
              <img src="./img/home/main02.jpg" alt="" draggable="false">
              <figcaption><!-- figure안에 a는 들어가면안된다 -->
                <h6>Creative Design</h6>
                <p>
                  차별화된 전문 디자인 경험과 모바일 환경을 고려한 
                  컨텐츠 최적화 홈페이지 전문회사입니다.
                </p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure class="inner"><!-- li에 padding을 이용해 간격설정시 필요 -->
              <img src="./img/home/main03.jpg" alt="" draggable="false">
              <figcaption><!-- figure안에 a는 들어가면안된다 -->
                <h6>Creative Design</h6>
                <p>
                  차별화된 전문 디자인 경험과 모바일 환경을 고려한 
                  컨텐츠 최적화 홈페이지 전문회사입니다.
                </p>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure class="inner"><!-- li에 padding을 이용해 간격설정시 필요 -->
              <img src="./img/home/main04.jpg" alt="" draggable="false">
              <figcaption><!-- figure안에 a는 들어가면안된다 -->
                <h6>Creative Design</h6>
                <p>
                  차별화된 전문 디자인 경험과 모바일 환경을 고려한 
                  컨텐츠 최적화 홈페이지 전문회사입니다.
                </p>
              </figcaption>
            </figure>
          </li>
        </ul>
        <!-- 이부분까지 class명을 임의로 사용하지 말것 -->
      </div>
    </div>
    <!-- 파티클효과 -->
    <div id="particles-js"></div>
    <button class="next"><i class="fa-solid fa-circle-arrow-right"></i></button>
    <button class="prev"><i class="fa-solid fa-circle-arrow-left"></i></button>
    <div class="indicator">
      <button class="active"></button>
      <button></button>
      <button></button>
      <button></button>
    </div>
    <div class="progress">
      <div class="bar"></div>
    </div>
  </section>
  <main class="home-content">
    <section class="home-section1">
      <h2 class="hidden">feature</h2>
      <ul class="center-width">
        <li>
          <a href="./page2-1.php">
            <figure class="icon-font">
              <div>
                <img src="./img/home/banner01.jpg" alt="">
                <span class="line1"></span>
                <span class="line2"></span>
                <span class="line3"></span>
                <span class="line4"></span>
              </div>
              <figcaption>
                <h3>
                  <span>
                    <i class="fa-solid fa-briefcase"></i>
                    BUSINESS INFO
                  </span>
                </h3>
                <p>
                  회사만의 특화되고 세분화된 사업영역을 바탕으로
                  최고의 비즈니스를 제안합니다.
                </p>
              </figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="./page3-1.php">
            <figure class="icon-font">
              <div>
                <img src="./img/home/banner02.jpg" alt="">
                <span class="line1"></span>
                <span class="line2"></span>
                <span class="line3"></span>
                <span class="line4"></span>
              </div>
              <figcaption>
                <h3>
                  <span>
                    <i class="fa-solid fa-envelopes-bulk"></i>
                    ONLINE INQUIRY
                  </span>
                </h3>
                <p>
                  온라인 무료상담 및 견적받기로 빠르고 효율적인
                  상담을 받으세요.
                </p>
              </figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="./page4-1.php">
            <figure class="icon-font">
              <div>
                <img src="./img/home/banner03.jpg" alt="">
                <span class="line1"></span>
                <span class="line2"></span>
                <span class="line3"></span>
                <span class="line4"></span>
              </div>
              <figcaption>
                <h3>
                  <span>
                     <i class="fa-solid fa-box-open"></i>
                    PRODUCT INFO
                  </span>
                </h3>
                <p>
                  최고의 기술력과 최상의 품질, 착한 가격으로
                  보답하여 드리겠습니다.
                </p>
              </figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="./page5-1.php">
            <figure class="icon-font">
              <div>
                <img src="./img/home/banner04.jpg" alt="">
                <span class="line1"></span>
                <span class="line2"></span>
                <span class="line3"></span>
                <span class="line4"></span>
              </div>
              <figcaption>
                <h3>
                  <span>
                    <i class="fa-solid fa-map-location-dot"></i>
                    LOCATION INFO
                  </span>
                </h3>
                <p>
                  당사로 찾아오시는 길을 상세하게 안내해
                  드리겠습니다.
                </p>
              </figcaption>
            </figure>
          </a>
        </li>
      </ul>
    </section>
    <article class="home-section2">
      <h2 class="hidden">Latest Section</h2>
      <section class="news">
        <div class="center-width">
          <h3>latest news</h3>
          <div class="news-list">
            <ul>
              <li><a href="#" class="dummy-link">- 선샤인의 최신 소식을 전달해 드립니다.</a></li>
              <li><a href="#" class="dummy-link">- 선샤인의 최신 뉴스 1번입니다.</a></li>
              <li><a href="#" class="dummy-link">- 선샤인의 최신 뉴스 2번입니다.</a></li>
              <li><a href="#" class="dummy-link">- 선샤인의 최신 뉴스 3번입니다.</a></li>
            </ul>
            <ul>
              <li><a href="#" class="dummy-link">- 선샤인의 최신 소식을 전달해 드립니다.</a></li>
              <li><a href="#" class="dummy-link">- 선샤인의 최신 뉴스 1번입니다.</a></li>
              <li><a href="#" class="dummy-link">- 선샤인의 최신 뉴스 2번입니다.</a></li>
              <li><a href="#" class="dummy-link">- 선샤인의 최신 뉴스 3번입니다.</a></li>
            </ul>
          </div>
        </div>

      </section>
      <div class="wrap center-width">
        <section class="notice">
          <h3>notice</h3>
          <ul>
            <li>
              <a href="#" class="dummy-link">
                최신 게시물 1번 테스트
              </a>
              <span>2022-00-00</span>
            </li>
            <li>
              <a href="#" class="dummy-link">
                최신 게시물 2번 테스트
              </a>
              <span>2022-00-00</span>
            </li>
            <li>
              <a href="#" class="dummy-link">
                최신 게시물 3번 테스트
              </a>
              <span>2022-00-00</span>
            </li>
            <li>
              <a href="#" class="dummy-link">
                최신 게시물 4번 테스트
              </a>
              <span>2022-00-00</span>
            </li>
            <li>
              <a href="#" class="dummy-link">
                최신 게시물 5번 테스트
              </a>
              <span>2022-00-00</span>
            </li>
          </ul>
        </section>
        <section class="gallery">
          <h3>gallery</h3>
          <ul>
            <li>
              <a href="#" class="dummy-link">
                <img src="./img/sub3/1.jpg" alt="">
              </a>
            </li>
            <li>
              <a href="#" class="dummy-link">
                <img src="./img/sub3/2.jpg" alt="">
              </a>              
            </li>
            <li>
              <a href="#" class="dummy-link">
                <img src="./img/sub3/3.jpg" alt="">
              </a>
            </li>
            <li>
              <a href="#" class="dummy-link">
                <img src="./img/sub3/4.jpg" alt="">
              </a>
            </li>
          </ul>
        </section>
        <section class="banner">
          <h3>customer</h3>
          <p>
            문의전화를 주시면 친절히 상담하여 드립니다.
          </p>
          <a href="tel:0" class="tel">
            <i class="fa-solid fa-headset"></i> 
            032-000-0000
          </a>
          <a href="./page4-1.php" class="contact">contact us</a>
        </section>
      </div>
    </article>
  </main>
<?php include 'footer.php' ?>
