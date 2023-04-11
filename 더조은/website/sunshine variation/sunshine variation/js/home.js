$(function(){
  responsive_carousel_horz('.home-visual', false, 8000, 15000)
  var t
  function motion(){
    $('.home-section1 ul li , .home-section2 section').each(function(){
      t = $(this).offset().top
      if(scrt>=t-winh){
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