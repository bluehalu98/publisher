<?php include 'header.php' ?>
<script defer type='module' src="./js/add.js"></script>
<section class="section-add style-2">
  <div class="inner">
    <h2><img src="./img/add/title-add.png" alt=""></h2>
    <div class="add-form">
      <p class="date-container">
        <input class="add-date" type="date">
        <input class="add-time" type="time">
      </p>
      <p class="input-container">
        <img class="icon-pencil" src="./img/list/icon-pencil.png" alt="">
        <input class="add-title" type="text" placeholder="일정 제목을 입력해주세요">
      </p>
      <p class="input-container">
        <textarea class="add-desc style-1" placeholder="일정 세부 내용을 입력해주세요"></textarea>
      </p>
    </div>
    <img src="./img/login/line-dashed.png" alt="">
    <p class="btn-container">
      <button class="add-list-btn"><img src="./img/add/btn-add-list.png" alt=""></button>
      <a href="./list.php"><img src="./img/add/btn-backto-list.png" alt=""></a>
    </p>

  </div>
</section>

<?php include 'footer.php' ?>
  
