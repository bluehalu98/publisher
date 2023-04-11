<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/5c078cf8a0.js" crossorigin="anonymous"></script>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script type="module" defer src="./js/fbInit.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/animation.css">
  <link rel="stylesheet" href="./css/scrollbar.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/index.css">
  <link rel="stylesheet" href="./css/register.css">
  <link rel="stylesheet" href="./css/add.css">
  <link rel="stylesheet" href="./css/list.css">
  <link rel="stylesheet" href="./css/detail.css">
  <title>파이어베이스 일정관리 앱</title>
</head>
<body>
  <img class="deco-top" src="./img/common/top.png" alt="">
  <div class="modal">
    <div class="inner">
      <img class="alert" src="./img/header/alert-deregister.png" alt="">
      <p>
        <button class="btn-yes"><img src="./img/header/btn-yes.png" alt=""></button>
        <button class="btn-no"><img src="./img/header/btn-no.png" alt=""></button>
      </p>
    </div>
  </div>
  <div class="wrap">
    <h1><img src="./img/header/title-main.png" alt=""></h1>
    <main>
      <script type="module" defer src="./js/header.js"></script>
      <img class="main-bg" src="./img/common/main-bg.png" alt="">
      <img class='pin' src="./img/common/pin.png" alt="">
      <header>
        <?php include 'signinMenu.php' ?>
        <?php include 'signoutMenu.php' ?>
      </header>