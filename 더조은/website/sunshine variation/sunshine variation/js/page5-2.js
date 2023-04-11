$(function(){
  $('.page5-2-section button').click(function(){
    $('.page5-2-section ul li p').stop().slideUp(200)
    $(this).next().stop().slideToggle(200)
    $(this).parent().siblings('li').children('button').removeClass('active')
    $(this).toggleClass('active')

  })
})