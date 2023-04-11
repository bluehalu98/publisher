$(function () {
  var footerH
  function setFooterHeight() {
    footerH = $('.site-footer').innerHeight()
    $('.footer-height').height(footerH)
  }
  setFooterHeight()
  $(window).resize(function () {
    setFooterHeight()
  }).scroll(function () {
    setFooterHeight()
  })

  $('.top-button').click(function () {
   $('body,html').stop().animate({'scrollTop':0}) 
/*     window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', //smooth스크롤 js랑 쓸수없음
    }) */
  })
})