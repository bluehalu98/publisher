$(function(){
  $('.mbtn').click(function(){
    $('.gnb-sm').stop().slideToggle()
    $('.mbtn').toggleClass('active')
  })
})