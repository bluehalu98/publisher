$(function(){
  function headerMotion(){
    var scrt = $(window).scrollTop()
    if(scrt>=35){
      $('header').addClass('active')
    }else{
      $('header').removeClass('active')
    }
    if(scrt>=125){
      $('header').addClass('active-bg')
    }else{
      $('header').removeClass('active-bg')
    }

    if(scrt>=300){/* 스크롤모션안에는 .stop()사용 권장 x */
      $('.top-btn').fadeIn()
    }else{
      $('.top-btn').fadeOut()
    }
  }
  headerMotion()
  $(window).scroll(function(){
    headerMotion()
  }).resize(function(){
    headerMotion()
  })
  $('.top-btn').click(function(){
    window.scrollTo({
      top:0
    })
  })
})