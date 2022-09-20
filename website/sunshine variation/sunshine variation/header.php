<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="./js/masonry-docs.min.js"></script><!-- 무조건 jquery다음에 호출 -->
  <script src="./js/jquery.justifiedGallery.min.js"></script>
  <script src="./js/responsive_carousel_horz.js"></script>
  <script src="./js/jquery.isotope.js"></script>
  <script src="./js/window.js"></script>
  <script src="./js/common.js"></script>
  <script src="./js/nav.js"></script>
  <script src="./js/header.js"></script>
  <script src="https://kit.fontawesome.com/5c078cf8a0.js" crossorigin="anonymous"></script>
  <link rel="shortcut icon" href="./img/icons/favicon.ico"><!-- 홈페이지 아이콘 -->
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/isotope.css">
  <link rel="stylesheet" href="./css/justifiedGallery.min.css">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/pre-loader.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/sub-common.css">
  <link rel="stylesheet" href="./css/home.css">
  <link rel="stylesheet" href="./css/page1-1.css">
  <link rel="stylesheet" href="./css/page1-2.css">
  <link rel="stylesheet" href="./css/page1-3.css">
  <link rel="stylesheet" href="./css/page2-1.css">
  <link rel="stylesheet" href="./css/page2-2.css">
  <link rel="stylesheet" href="./css/page3-1.css">
  <link rel="stylesheet" href="./css/page3-2.css">
  <link rel="stylesheet" href="./css/page3-3.css">
  <link rel="stylesheet" href="./css/page3-4.css">
  <link rel="stylesheet" href="./css/page3-5.css">
  <link rel="stylesheet" href="./css/page4-1.css">
  <link rel="stylesheet" href="./css/page5-2.css">
  <link rel="stylesheet" href="./css/page-board.css">
  <title>사이트리뉴얼</title>
</head>
<body>
  <?php include 'pre-loader.php' ?>
  <header>
    <nav class="member">
      <ul class="center-width">
        <li><a href="./index.php">처음으로</a></li>
        <li><a class="dummy-link" href="#">로그인</a></li>
        <li><a class="dummy-link" href="#">회원가입</a></li>
      </ul>
    </nav>
    <div class="header-bottom center-width">
      <h1>
        <span class="hidden">로고</span>
        <a href="./index.php"><img src="./img/icons/logo.png" alt=""></a>
      </h1>
      <nav class="gnb gnb-lg"><!-- 2dep이상구조는 좋지않음 -->
        <?php include 'menu.php' ?>
      </nav>
      <div class="mbtn-grp">
        <a class='tel' href="tel:000"><i class="fa-solid fa-phone-flip"></i></a>  
        <button class="mbtn">
          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-up-long"></i>
        </button>
      </div>
    </div>
    <nav class="gnb gnb-sm">
      <?php include 'menu.php' ?>
    </nav><!-- 모바일에서는 밖에다가 만들어야 한다 -->
  </header>