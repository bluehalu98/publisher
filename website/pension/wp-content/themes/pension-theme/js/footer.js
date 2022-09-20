$(function(){
  var footerH
  
  function setFooterHeight(){
    footerH = $('.site-footer').innerHeight()
    $('.footer-height').height(footerH)
  }//fn

  setFooterHeight()
  $(window).resize(function(){
    setFooterHeight()
  }).scroll(function(){
    setFooterHeight()
  })//window event

  $('.top-btn').click(function(){
    $('body,html').stop().animate({'scrollTop': 0})
    /* 
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth',
    })
     */
  })
})//ready