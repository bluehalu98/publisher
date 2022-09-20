$(function(){
  var wave = new TimelineMax({paused:false, repeat:-1}); 
  wave.to(".wave1",1,{morphSVG:".wave2",ease:Linear.easeNone})
  .to(".wave1", 1,{morphSVG:".wave3",ease:Linear.easeNone})
  .to(".wave1", 1,{morphSVG:".wave4",ease:Linear.easeNone})
  .to(".wave1", 1,{morphSVG:".wave5",ease:Linear.easeNone})
  .to(".wave1", 1,{morphSVG:".wave1-backup",ease:Linear.easeNone});
})