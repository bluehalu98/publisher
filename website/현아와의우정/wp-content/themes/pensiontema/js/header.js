$(function(){
  $('.mbtn').click(function(){
    $(this).toggleClass('active')
    $('.gnb .menu-menu-container>ul>li>ul').stop().slideUp()
/*     $('.gnb .menu-menu-container>ul>li>a').removeClass('active') */
    $('body').toggleClass('active')
    $('.nav-bg').stop().fadeToggle()
    $('.gnb').toggleClass("active")
/* $('body::before').stop().fadeToggle() 제이쿼리는 가상엘리먼트를 선택할수없음 */
  })

  $('.gnb .menu-menu-container>ul>li>a').click(function(e){
    e.preventDefault()
    $('.gnb .menu-menu-container>ul>li>a').not($(this)).removeClass('active') //$(this).parent().siblings('li').children('a').removeClass('active')
    $(this).toggleClass('active')
    $('.gnb .menu-menu-container>ul>li>ul').stop().slideUp()
    $(this).siblings('ul').stop().slideToggle()
  })
})