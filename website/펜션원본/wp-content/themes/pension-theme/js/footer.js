$(function(){
  var footerH
  function setFooterHeight(){
    footerH = $('.site-footer').innerHeight()
    $('.footer-height').height(footerH)
  }
  setFooterHeight()
  $(window).resize(function(){
    setFooterHeight() 
  }).scroll(function(){
    setFooterHeight()
  })
})