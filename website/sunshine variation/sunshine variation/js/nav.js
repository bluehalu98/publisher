$(function(){
  $('.gnb-lg>ul>li').mouseenter(function(){/* 마우스가 올라갔을때 */
    $(this).children('ul').stop().slideDown(200)
  }).mouseleave(function(){/* 마우스가 빠질때 */
    $(this).children('ul').stop().slideUp(200)
  })
/*   $('.gnb-lg>ul>li').mouseenter(function(){ 마우스가 올라갔을때 
  $(this).children('ul').stop().slideDown(200)
})
$('.gnb-lg>ul>li').mouseleave(function(){ 마우스가 빠질때 
  $(this).children('ul').stop().slideUp(200)
}) */
  $('.mbtn').click(function(){
    $(this).toggleClass('active')
    $('.gnb-sm>ul').stop().slideToggle(200)
    $('.gnb-sm>ul>li>ul').stop().slideUp()
    $('.gnb-sm>ul>li>a').removeClass('active')
  })
  $('.gnb-sm>ul>li>a').click(function(e){
    /* 
    e.preventDefault() 맨 첫줄에 사용
    return false 맨 아랫줄에 사용
    */
    e.preventDefault()
    $('.gnb-sm>ul>li>ul').stop().slideUp(200)
    $(this).siblings('ul').stop().slideToggle(200)
    $(this).parent().siblings('li').children('a').removeClass('active')
    $(this).toggleClass('active')
  })
})