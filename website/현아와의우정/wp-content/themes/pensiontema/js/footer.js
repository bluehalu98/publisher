$(function(){
  var footerH
  function fn(){
    footerH = $('.site-footer').innerHeight()
    $('.footer-height').height(footerH)
  }//fn
  fn()
  $(window).resize(function(){
    fn()
  }).scroll(function(){
    fn()
  })
})