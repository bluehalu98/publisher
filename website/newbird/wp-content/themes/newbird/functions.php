<?php
//metabox plugin
add_filter( 'rwmb_meta_boxes', 'your_prefix_meta_boxes' );
function your_prefix_meta_boxes( $meta_boxes ) {
  $meta_boxes[] = array(
    'title'      => '포트폴리오정보',
    'post_types' => 'post',
    'fields'     => array(
      //meta data의 갯수가 4개기 때문에 4개 생성
      array(
      'id'   => 'id1',
      'name' => 'client',
      'type' => 'text',
      ),
      array(
        'id'   => 'id2',
        'name' => 'work',
        'type' => 'text',
      ),  
      array(
        'id'   => 'id3',
        'name' => 'url',
        'type' => 'text',
      ),
      array(
        'id'   => 'id4',
        'name' => 'date',
        'type' => 'text',
      ),
    ),
  );
  return $meta_boxes;
}
//메뉴
register_nav_menus( array(
  'menu' => 'menu',
  'categoryMenu' => 'categoryMenu',
));

// 위젯
register_sidebar( array(
  'name' => __( '태그위젯' ),
  'id'=> 'widjet1',  // 위젯 영역의 고유한 ID
));

//single.php에서 카테고리내 이동 설정
add_filter( 'get_next_post_join', 'navigate_in_same_taxonomy_join', 20);
add_filter( 'get_previous_post_join', 'navigate_in_same_taxonomy_join', 20 );
function navigate_in_same_taxonomy_join() {
global $wpdb;
return " INNER JOIN $wpdb->term_relationships AS tr ON p.ID = tr.object_id INNER JOIN $wpdb->term_taxonomy tt ON tr.term_taxonomy_id = tt.term_taxonomy_id";
}
add_filter( 'get_next_post_where' , 'navigate_in_same_taxonomy_where' );
add_filter( 'get_previous_post_where' , 'navigate_in_same_taxonomy_where' );
function navigate_in_same_taxonomy_where( $original ) {
global $wpdb, $post;
$where   = '';
$taxonomy   = 'category';
$op   = ('get_previous_post_where' == current_filter()) ? '<' : '>';
$where   = $wpdb->prepare( "AND tt.taxonomy = %s", $taxonomy );
if ( ! is_object_in_taxonomy( $post->post_type, $taxonomy ) )
return $original ;
$term_array = wp_get_object_terms( $post->ID, $taxonomy, array( 'fields' => 'ids' ) );
$term_array = array_map( 'intval', $term_array );
if ( ! $term_array || is_wp_error( $term_array ) )
return $original ;
$where   = " AND tt.term_id IN (" . implode( ',', $term_array ) . ")";
return $wpdb->prepare( "WHERE p.post_date $op %s AND p.post_type = %s AND p.post_status = 'publish' $where", $post->post_date, $post->post_type );
}
//카테고리내 이동 설정 끝


//블로그 글 대표(featured) 이미지
add_theme_support( 'post-thumbnails' );
?>


