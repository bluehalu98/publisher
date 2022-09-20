$(function(){
  morph1 = new TimelineMax({repeat:-1}); 
  morph1.to(".svg1 .line11",1,{morphSVG:".svg1 .line12",ease:Linear.easeNone})
  .to(".svg1 .line11", 1,{morphSVG:".svg1 .line13",ease:Linear.easeNone})
  .to(".svg1 .line11", 1,{morphSVG:".svg1 .line14",ease:Linear.easeNone})
  .to(".svg1 .line11", 1,{morphSVG:".svg1 .line11copy",ease:Linear.easeNone});
  morph2 = new TimelineMax({repeat:-1}); 
  morph2.to(".svg1 .line21",1,{morphSVG:".svg1 .line22",ease:Linear.easeNone})
  .to(".svg1 .line21", 2,{morphSVG:".svg1 .line23",ease:Linear.easeNone})
  .to(".svg1 .line21", 2,{morphSVG:".svg1 .line24",ease:Linear.easeNone})
  .to(".svg1 .line21", 2,{morphSVG:".svg1 .line21copy",ease:Linear.easeNone});
  morph3 = new TimelineMax({repeat:-1}); 
  morph3.to(".svg1 .line31",1,{morphSVG:".svg1 .line32",ease:Linear.easeNone})
  .to(".svg1 .line31", 1.5,{morphSVG:".svg1 .line33",ease:Linear.easeNone})
  .to(".svg1 .line31", 1.5,{morphSVG:".svg1 .line34",ease:Linear.easeNone})
  .to(".svg1 .line31", 1.5,{morphSVG:".svg1 .line31copy",ease:Linear.easeNone});
  /////////////////////////////////////////////////////////////////////////////////////
  var n = 1
  setInterval(function(){
    n++
    if(n>3){n=1}
    $('.svg1 image').stop().fadeOut()
    $('.svg1 .img'+n).stop().fadeIn(1000)
  },2000)
})