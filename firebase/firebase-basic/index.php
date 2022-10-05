<?php include 'header.php' ?>
  <input class="user-email" type="email"> <br>
  <input class="user-password" type="password"> <br>
  <button class="email-regi-btn">이메일회원가입</button>
  <button class="google-login">구글로그인</button>
  <hr>
  <p>실시간 로그인 현황</p>
  <div class="login-before">
    <input class="login-email" type="email"> <br>
    <input class="login-password" type="password"> <br>
    <button class="login-btn">로그인</button>
  </div>
  <div class="login-after">
    uid : <span class="uid"></span> <br>
    email : <span class="email"></span> <br>
    <button class="logout-btn">로그아웃</button>
    <button class="deregister">회원탈퇴</button>
  </div>
  <hr>
  <input class="ipt-date" type="date">
  <input class="ipt-time" type="time"> <br>
  <input class="ipt-title" type="text" placeholder="일정제목"> <br>
  <textarea class="ipt-desc" placeholder="일정내용"></textarea> <br>
  <button class="add-list">일정등록하기</button>
  <hr>
  <button class="get-list">일정출력하기</button>
  <div class="output">
    일정출력
  </div>
<?php include 'footer.php' ?>