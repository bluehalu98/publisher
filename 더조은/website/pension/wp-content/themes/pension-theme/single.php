<?php include "sub-header.php" ?>
<!--포스트의 해당 카테고리 정보가져오기-->
<?php
$category = get_the_category();
$categoryID = $category[0]->cat_ID;
$categoryName = $category[0]->cat_name;
$categoryUrl = get_category_link($category[0]);
$categoryDesc = category_description($category[0]);
?>
<!--포스트의 해당 카테고리 제목 출력-->
<h2 class="sub-title"><?php echo $categoryName ?></h2>
<p class="theme-guide">
  해당 내용은 관리자모드의 글에서 편집하실 수 있습니다. <br>
  레이아웃은 테마폴더의 single.php, signgle.css에서 수정하실 수 있습니다
</p>
<!--post(글) 출력시작-->
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<dl class="post-metadata">
  <!--제목-->
  <dt>글제목</dt>
  <dd><?php the_title(); ?></dd>
  <!--작성자-->
  <dt>작성자</dt>
  <dd><?php echo get_the_author(); ?></dd>
  <!--작성 시간-->
  <dt>작성일자</dt>
  <dd><?php echo get_the_date(); ?></dd>
</dl>

<section class="single-section">
  <!--post 본문-->
  <?php the_content(); ?>
</section>

<!--이전글 다음글-->
<nav class="post-nav">
  <?php previous_post_link( '%link','<i class="fa-solid fa-circle-chevron-left"></i>' ); ?>
  <a href="<?php echo $categoryUrl; ?>"><i class="fa-solid fa-list"></i></a><!--해당 카테고리 정보를 가져와야 함-->
  <?php next_post_link( '%link','<i class="fa-solid fa-circle-chevron-right"></i>' ); ?>
  
</nav>

  <?php endwhile; else: ?>
<!--글 내용이 없을 경우-->
<?php endif; ?>
<!--post(글) 출력 끝-->

<?php include "sub-footer.php" ?>