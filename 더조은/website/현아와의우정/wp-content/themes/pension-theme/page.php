<?php include 'sub-header.php' ?>
  <!--페이지 제목 출력-->
 <h2 class="sub-title"> <?php the_title(); ?></h2>

<!--  페이지 본문에서 직접 작성 
  <p class="theme-guide">
  본문은 관리자모드의 페이지에서 편집하실 수 있습니다. <br>
  게시판은 관리자모드의 kboard에서 설정하실 수 있습니다.
  </p> 
-->
<!-- 
  <div class="sub-desc">
    <p>페이지 본문에서 직접 작성</p>  
  </div> 
-->
  <!--페이지 출력 시작-->
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <!--페이지 본문 출력-->
  <?php the_content(); ?>

  <?php endwhile; else: ?>
  <!--페이지가 없을 경우 출력될 내용-->	
  <?php endif; ?>
  <!--페이지 출력 끝-->
 
<?php include 'sub-footer.php' ?>