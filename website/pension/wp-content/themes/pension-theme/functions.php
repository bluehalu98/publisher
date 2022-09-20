<?php
//메뉴생성
register_nav_menus( array(
  'menu' => 'menu',
  'menu-rooms' => 'menu-rooms',
)); 

// metabox 플러그인 설정
add_filter( 'rwmb_meta_boxes', 'your_prefix_meta_boxes' );
function your_prefix_meta_boxes( $meta_boxes ) {
  $meta_boxes[] = array(
    'title'      => '객실정보',
    'post_types' => 'post',
    'fields'     => array(
      array(
      'id'   => 'id1',
      'name'   => '주중안내',
      'type' =>'text'
      ),
      array(
      'id'   => 'id2',
      'name'   => '주말안내',
      'type' =>'text'
      ),
      array(
      'id'   => 'id3',
      'name'   => '준성수기안내',
      'type' =>'text'
      ),
      array(
      'id'   => 'id4',
      'name'   => '성수기안내',
      'type' =>'text'
      ),
      array(
      'id'   => 'id5',
      'name'   => '기준인원초과시안내',
      'type' =>'text'
      ),
      array(
      'id'   => 'id6',
      'name'   => '내부시설',
      'type' =>'text'
      ),
      array(
      'id'   => 'id7',
      'name'   => '내부구조',
      'type' =>'text'
      ),
    ),
  );
  return $meta_boxes;
}
//블로그 특성(featured) 이미지
add_theme_support( 'post-thumbnails' );

//single.php에서 카테고리내 next prev 이동 설정
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