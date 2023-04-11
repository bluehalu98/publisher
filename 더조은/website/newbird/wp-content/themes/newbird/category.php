<?php include 'sub-header.php' ?>
<span class="typo"><?php single_cat_title(' '); ?></span>
<main class="sub-content">
<!--카테고리 전체 제목 출력-->


<!--카테고리 리스트 출력-->
<h2 class="sub-title"><?php single_cat_title(' '); ?></h2>
<nav class="category-menu">
  <?php wp_nav_menu( array(
    'theme_location' => 'categoryMenu'
  ));
?>
</nav>
<ul class="tag-cloud">
  <?php
    if ( is_active_sidebar( 'widjet1' ) ) {
      dynamic_sidebar( 'widjet1' );
    }
  ?> 
</ul>
<ul class="category-list-container">
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>   
  <!--리스트 한개 출력-->
  <li>
    <!--글 제목-->
    <div>
      <h3><?php the_title(); ?></h3>
      <dl>
        <dt><i class="fa-solid fa-building"></i>CLIENT</dt>
        <dd><?php echo rwmb_meta( 'id1' ); ?></dd>
        <dt><i class="fa-solid fa-book"></i>WORK</dt>
        <dd><?php echo rwmb_meta( 'id2' ); ?></dd>
        <dt><i class="fa-solid fa-link"></i>URL</dt>
        <dd><?php echo rwmb_meta( 'id3' ); ?></dd>
      </dl>
    </div>
    <figure>
      <!--해당글 링크-->
      <a href="<?php the_permalink(); ?>">VIEW<i class="fa-solid fa-square-arrow-up-right"></i></a> 
      <!--글 이미지-->
      <?php if ( has_post_thumbnail() ) { the_post_thumbnail('thumbnail'); } ?>
    </figure>
  </li>
  <!--리스트 한개 끝-->
  <?php endwhile; else: ?>
  <!--카테고리 글이 없는 경우-->
  <?php endif; ?>
</ul>
<!--카테고리 리스트 출력끝-->
<!--페이징출력시작--> 
<nav class="category-paging">
  <?php
    global $wp_query;
    $big = 999999999;
    echo paginate_links( array(
      'type'        => 'list',
      'base'        => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
      'format'      => '?paged=%#%',
      'current'     => max( 1, get_query_var('paged') ),
      'total'       => $wp_query->max_num_pages,
      'prev_text'   => __('<i class="fa-solid fa-arrow-left"></i>'),
      'next_text'   => __('<i class="fa-solid fa-arrow-right"></i>'),
    ) );
  ?>
</nav>
<!--페이징출력끝--> 
<?php include 'sub-footer.php' ?>