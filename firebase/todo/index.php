<?php include 'header.php' ?>
<script type="module" src="./js/index.js" defer></script>
<section class="section-signin style-2">
  <div class="inner">
    <h2><img src="./img/login/title-sign-in.png" alt=""></h2>
    <div class="email-login-container">
      <p>
        <label for="user-email"><img src="./img/login/icon-email.png" alt=""></label>
        <input id="user-email" type="email" placeholder="등록된 이메일 주소를 입력하세요">
      </p>
      <p>
        <label for="user-password"><img src="./img/login/icon-key.png" alt=""></label>
        <input id="user-password" type="password" placeholder="등록된 비밀번호를 입력하세요">
      </p>
      <p class="login-btn-container">
        <input id="remember" class="remember" type="checkbox">
        <label for="remember">
          <img class="checked" src="./img/login/remember-checked.png" alt="">
          <img class="check" src="./img/login/remember-check.png" alt="">
        </label>
        <button class="login-btn"><img src="./img/login/btn-login.png" alt=""></button>
      </p>
    </div>
    <img class="line" src="./img/login/line-dashed.png" alt="">
    <p>
      <button class="google-btn"><img src="./img/login/btn-google-login.png" alt=""></button>
    </p>
  </div>
</section>
<?php include 'footer.php' ?>
  
