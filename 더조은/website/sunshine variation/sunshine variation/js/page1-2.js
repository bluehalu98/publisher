$(function(){
  $('.tab-menu button').click(function(){
    $('.tab-menu button').removeClass('active')
    $(this).addClass('active')
    var mapN = $(this).val()
    $('.map').hide()
    $('.map'+mapN).show()
  })
})