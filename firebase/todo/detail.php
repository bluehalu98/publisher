<?php include 'header.php' ?>
<script type="module" src="./js/detail.js" defer></script>
<section class="section-detail style-2">
  <div class="inner">
    <h2><img src="./img/detail/title-detail.png" alt=""></h2>
    <div class="detail-form">
      <p class="date-container">
        <input class="detail-date" type="date">
        <input class="detail-time" type="time">
      </p>
      <p class="input-container"><input class="detail-title" type="text"></p>
      <p class="input-container"><textarea class="detail-desc"></textarea></p>
    </div>
    <p class="btn-container">
      <button class="update-list-btn"><img src="./img/detail/btn-update-list.png" alt=""></button>
      <a href="./list.php"><img src="./img/detail/btn-goto-list.png" alt=""></a>
      <button class="delete-list-btn"><img src="./img/detail/btn-delete-list.png" alt=""></button>
    </p>
  </div>
</section>
<?php include 'footer.php' ?>
  
