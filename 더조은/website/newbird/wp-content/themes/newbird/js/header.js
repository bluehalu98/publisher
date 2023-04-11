$(function(){
  $('.mbtn').click(function(){
    $(this).toggleClass('active')
    $('.gnb-sm').fadeToggle().toggleClass('active')
    $('h1 sup').toggleClass('active')
  })
})