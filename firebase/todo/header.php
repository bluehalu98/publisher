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
  <title>파이어베이스 일정관리 앱</title>
</head>
<body>
  <h1>일정앱</h1>
  <main>
    <script type="module" defer src="./js/fbAuth.js"></script>
    <header>
      <?php include 'signinMenu.php' ?>
      <?php include 'signoutMenu.php' ?>
    </header>