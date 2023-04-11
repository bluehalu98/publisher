$(function(){
  $('.mbtn').click(function(){
    $(this).toggleClass('active')
    $('.gnb .menu-wrap .menu-menu-container>ul>li>a').removeClass('active')
    $('.gnb .menu-wrap .menu-menu-container>ul>li>ul').stop().slideUp()
    //$('body::before').stop().fadeToggle()//js, jquery는 가상엘리먼트를 선택할 수 없다
    $('div.nav-bg').stop().fadeToggle()
    $('.gnb').toggleClass('active')
  })
  $('.gnb .menu-wrap .menu-menu-container>ul>li>a').click(function(e){
    e.preventDefault()
    $(this).toggleClass('active')
    /* $(this).parent().siblings('li').children('a').removeClass('active') */
    $('.gnb .menu-wrap .menu-menu-container>ul>li>a').not($(this)).removeClass('active')
    $('.gnb .menu-wrap .menu-menu-container>ul>li>a').not($(this)).siblings('ul').stop().slideUp()
    $(this).siblings('ul').stop().slideToggle()
  })
  /* -------------------------------------------------------------- */
  /*  
    $('.theme-guide').empty() 내용만 지운다
    $('.theme-guide').remove() 컨테이너까지 지운다
  */
})