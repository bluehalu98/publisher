<?php include "sub-header.php" ?>
<script src="<?php bloginfo('template_directory');?>/js/menu-rooms-detail.js"></script>
<!--카테고리 전체 제목 출력-->
<h2 class="sub-title"><?php single_cat_title(' '); ?></h2>
<p class="theme-guide">
  관리자메뉴 / gallery카테고리 목록을 출력합니다. <br>
  레이아웃은 테마폴더의 category.php, category.css에서 수정하실 수 있습니다.
</p>
<!--카테고리 설명 출력-->
<div class="sub-desc">
  <?php echo category_description(); ?>
</div> 

<!-- 룸메뉴 출력 -->
<nav class="menu-rooms-detail">
  <button>객실상세보기</button>
  <?php wp_nav_menu( array('theme_location' => 'menu-rooms')); ?> 
</nav>

<!--카테고리 리스트 출력--> 
<ul class="category-rooms-list-container">
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>   
  <!--리스트 한개 출력-->
  <li>
    <div>
     <figure>  
        <!--글 이미지-->
        <?php if ( has_post_thumbnail() ) { the_post_thumbnail('thumbnail'); } ?>
      </figure>
      <!--글 제목-->
      <h3><?php the_title(); ?></h3>
      <!--해당글 링크-->
      <a href="<?php the_permalink(); ?>">
        <i class="fa-solid fa-magnifying-glass-plus"></i>
      </a>
    </div>
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
      'prev_text'   => __('<i class="fa-solid fa-circle-chevron-left"></i>'),
      'next_text'   => __('<i class="fa-solid fa-circle-chevron-right"></i>'),
    ) );
  ?>
</nav>
<!--페이징출력끝--> 
<?php include "sub-footer.php" ?>