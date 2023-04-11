<ul class="login-menu">
<?php
if (is_user_logged_in()) {
  echo '<li><a href="';
  echo wp_logout_url( get_permalink() );//현재페이지
  echo '"><i class="fa-solid fa-right-from-bracket"></i> LogOut</a></li>';
  echo '<li><a href="';
  bloginfo('url');
  echo '/member/profile/"><i class="fa-solid fa-id-card"></i> Profile</a></li>';
} else {
  echo '<li><a href="';
  bloginfo('url');
  echo '/member/login/"><i class="fa-solid fa-right-to-bracket"></i> Login</a></li>';
  echo '<li><a href="';
  bloginfo('url');
  echo '/member/join/"><i class="fa-solid fa-file-signature"></i> join</a></li>';
}
?>
</ul>