<?php include 'sub-header.php' ?>

<!--포스트의 해당 카테고리 정보가져오기-->
<?php
$category = get_the_category();
$categoryID = $category[0]->cat_ID;
$categoryName = $category[0]->cat_name;
$categoryUrl = get_category_link($category[0]);
$categoryDesc = category_description($category[0]);
?>

<span class="typo"><?php echo $categoryName ?></span>
<main class="sub-content">

<!--post(글) 출력시작-->
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<div class="metabox">
  <div class="textbox">
    <h3><?php the_title(); ?></h3>
    <dl>
      <dt><i class="fa-solid fa-building"></i>CLIENT</dt>
      <dd><?php echo rwmb_meta( 'id1' ); ?></dd>
      <dt><i class="fa-solid fa-book"></i>WORK</dt>
      <dd><?php echo rwmb_meta( 'id2' ); ?></dd>
      <dt><i class="fa-solid fa-link"></i>URL</dt>
      <dd><?php echo rwmb_meta( 'id3' ); ?></dd>
    </dl>
  </div><!-- text box -->
  <figure>
    <?php if ( has_post_thumbnail() ) { the_post_thumbnail('thumbnail'); } ?>
  </figure>
</div><!-- meta box -->

<!--포스트의 해당 카테고리 태그 출력--> 
<nav class="tag-cloud">
  <?php the_tags(' · ', ''); ?>
</nav>

<!--이전글 다음글-->
<nav class="single-paging">
  <?php previous_post_link( '%link','<i class="fa-solid fa-arrow-left"></i> prev ' ); ?>
  <a href="<?php echo $categoryUrl; ?>" class="btn-list">목록 <i class="fa-solid fa-list"></i></a><!--해당 카테고리 정보를 가져와야 함-->
  <?php next_post_link( '%link','next <i class="fa-solid fa-arrow-right"></i>' ); ?>
</nav>

<!--post 본문-->
<section class="single-content">
  <?php the_content(); ?>
</section>
<!--post 본문 끝-->

<?php endwhile; else: ?>
<!--글 내용이 없을 경우-->
<?php endif; ?>
<!--post(글) 출력 끝-->

<?php include 'sub-footer.php' ?>