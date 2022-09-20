<?php include "sub-header.php" ?>
<script src="<?php bloginfo('template_directory');?>/js/category-faq.js"></script>
<!--카테고리 전체 제목 출력-->
<h2 class="sub-title"><?php single_cat_title(' '); ?></h2>
<p class="theme-guide">
  관리자메뉴 / faq 카테고리 목록을 출력합니다. <br>
  레이아웃은 테마폴더의 category-faq.php, category-faq.css에서 수정하실 수 있습니다.
</p>
<!--카테고리 설명 출력-->
<div class="sub-desc">
  <?php echo category_description(); ?>
</div> 

<!--카테고리 리스트 출력-->
<ul class="faq-list-container">
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>   
    <!--리스트 한개 출력-->
    <li>
      <!--글 제목-->
      <button><?php the_title(); ?></button>
      <div>
        <!--요약글 출력-->
        <?php the_excerpt(); ?>
        <!--해당글 링크-->
        <a href="<?php the_permalink(); ?>">해당글 보기</a>
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