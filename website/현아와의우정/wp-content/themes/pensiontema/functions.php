<?php
//메뉴
register_nav_menus( array(
  'menu' => 'menu',
));

// metabox 플러그인 설정
add_filter( 'rwmb_meta_boxes', 'your_prefix_meta_boxes' );

function your_prefix_meta_boxes( $meta_boxes ) {

  $meta_boxes[] = array(
    'title'      => '객실정보',
    'post_types' => 'post',
    'fields'     => array(

      array(
      'id' => 'id1',
      'name' => '주중안내',
      'type' => 'text',
      ),
      array(
        'id' => 'id2',
        'name' => '주말안내',
        'type' => 'text',
        ),
        array(
          'id' => 'id3',
          'name' => '준성수기안내',
          'type' => 'text',
          ),
          array(
            'id' => 'id4',
            'name' => '성수기안내',
            'type' => 'text',
            ),
            array(
              'id' => 'id5',
              'name' => '기준인원초과시안내',
              'type' => 'text',
              ),
              array(
                'id' => 'id6',
                'name' => '내부시설',
                'type' => 'text',
                ),
                array(
                  'id' => 'id7',
                  'name' => '내부구조',
                  'type' => 'text',
                  ),
    ),
  );

  return $meta_boxes;
}

//블로그 글 특성이미지(featured)
add_theme_support( 'post-thumbnails' );
