$(function(){
  function motion(){
    var scrt = $(window).scrollTop()
    var divt = $('.box1').offset().top
    var winh = $(window).height()
    var divh = $('.box1').innerHeight()/* 패딩값을 포함, 보통 inner를 사용 */
    if(divt>=scrt+70&& divt+divh<=scrt+winh*0.3){
      $('.box1').addClass('activeR')
    }else if(divt>=scrt+winh*0.7&&divt+divh<=scrt+winh-70){
      $('.box1').addClass('activeB')
    }else{
      $('.box1').removeClass('activeR')
      $('.box1').removeClass('activeB')
    }
  }
  motion()
  $(window).scroll(function(){
    motion()
  })
  $(window).resize(function(){
    motion()
  })
})