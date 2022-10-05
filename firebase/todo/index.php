<?php include 'header.php' ?>
<script type="module" src="./js/fbSignIn.js" defer></script>
<section class="section-signin">
  <div class="inner">
    <p>
      <label for="user-email">이메일</label>
      <input id="user-email" type="email" placeholder="등록된 이메일 주소를 입력하세요">
    </p>
    <p>
      <label for="user-password">비밀번호</label>
      <input id="user-password" type="password" placeholder="등록된 비밀번호를 입력하세요">
    </p>
  </div>
  <p>
    <button class="login-btn">로그인</button>
  </p>
  <p>
    <input class="remember" type="checkbox">기억하기
  </p>
  <hr>
  <p>
    <button class="google-btn">구글로그인</button>
  </p>

</section>
<?php include 'footer.php' ?>
  
