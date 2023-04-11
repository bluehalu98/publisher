$(function(){
  /* 조상객체에 overflow hidden값이 적용되어있으면 안됌 */
  function stickyMotion(){
    /*
     포지션이 fixed이거나 sticky이면 offset top값이 변하므로
     시작이나 끝점으로 잡으면 안된다
    */
    var scrStart = $('.scr-start').offset().top
    var scrEnd = $('.scr-end').offset().top-$('.img-container').innerHeight()
    var scrRange = scrEnd - scrStart
    var scrRatio = (scrt - scrStart)/scrRange
    if(scrRatio<0){scrRatio=0}
    if(scrRatio>1){scrRatio=1}
    var imgStart = 1
    var imgEnd = 36
    var imgRange = imgEnd - imgStart
    var imgTarget = parseInt((imgRange*scrRatio)+imgStart) 
    $('.img-container img').hide()
    $('.img-container img:nth-child('+imgTarget+')').show()
  }
  stickyMotion()
  $(window).scroll(function(){
    stickyMotion()
  }).resize(function(){
    stickyMotion()
  })
})