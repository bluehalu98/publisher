$(function(){

  function getWindowInfo(){
    window.scrt = $(window).scrollTop()
    window.scrl = $(window).scrollLeft()
    window.winw = $(window).width()
    window.winh = $(window).height()
  }
  
  getWindowInfo()
  
  $(window).resize(function(){
    getWindowInfo()
  }).scroll(function(){
    getWindowInfo()
  })
})