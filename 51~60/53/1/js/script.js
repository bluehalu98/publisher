$(function(){
  /* 
  scrollTop():웹브라우저 위로 올라간만큼의 값
  $(window).height():웹브라우저의 높이값
  */
  var scrt
  var winh
  var scrl
  var winw
  fn()
  function fn(){
    scrt = $(window).scrollTop()
    winh=$(window).height()
    scrl=$(window).scrollLeft()
    winw=$(window).width()
    $('.lt').css({'left':scrl,'top':scrt})
    $('.ct').css({'left':scrl+winw*0.5,'top':scrt})
    $('.rt').css({'left':scrl+winw,'top':scrt})

    $('.lc').css({'left':scrl,'top':scrt+winh*0.5})
    $('.cc').css({'left':scrl+winw*0.5,'top':scrt+winh*0.5})
    $('.rc').css({'left':scrl+winw,'top':scrt+winh*0.5})

    $('.lb').css({'left':scrl,'top':scrt+winh})
    $('.cb').css({'left':scrl+winw*0.5,'top':scrt+winh})
    $('.rb').css({'left':scrl+winw,'top':scrt+winh})
  }
  $(window).scroll(function(){
    fn()
  }).resize(function(){
    fn()
  })
})