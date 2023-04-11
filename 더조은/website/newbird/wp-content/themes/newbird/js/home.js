responsive_carousel_horz('.home-visual', false, 2000, 5000)
responsive_carousel_horz('.carousel', false, 2000, 5000)
$('.section-home-1').bind('mousewheel',function(e){
  let delta = e.originalEvent.wheelDelta/ -120
  if(delta===1){//휠 아래로 
    $('.dummy').addClass('active')
  }
})
$('.section-home-2').bind('mousewheel',function(e){
  let delta = e.originalEvent.wheelDelta/ -120
  if(delta===-1 && scrt<winh*0.2){//휠 위로 
    $('.dummy').removeClass('active')
  }
})
