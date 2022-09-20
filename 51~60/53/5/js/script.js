$(function(){
  function motion(){
    var scrt = $(window).scrollTop()
    var winh = $(window).height()
    $('.section1 li').each(function(){
      var t = $(this).offset().top
      if(scrt >= t-winh*.5){
        $(this).addClass('active')
      }else{
        $(this).removeClass('active')
      }
    })
  }
  
  motion()
  $(window).resize(function(){
  motion()
  }).scroll(function(){
  motion()
  })
})