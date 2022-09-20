$(function(){
  $('.door-btn').click(function(){
    $('.door-container>div').toggleClass('active')
  })
  $('.cube-btns button').click(function(){
    var rotate = $(this).attr('data-rotate')
    $('.cube1').removeClass('rotate-top rotate-bottom rotate-front rotate-back rotate-right rotate-left')
    $('.cube1').addClass(rotate)
  })
})