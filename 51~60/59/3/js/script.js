$(function(){
  var scrS
  var scrE
  var scrRange
  var scrR
  function svgLineDrawing(){
    scrS=$('.section2').offset().top
    scrE=$('.section3').offset().top - winh
    scrRange = scrE-scrS
    scrR=(scrt-scrS)/scrRange
    strokeoff=1-scrR
    if(scrR<0){scrR=0}
    if(scrR>1){scrR=1}
    $('.section2 svg path').css({'stroke-dashoffset': strokeoff})
  }
  svgLineDrawing()
  $(window).scroll(function(){
    svgLineDrawing()
  }).resize(function(){
    svgLineDrawing()
  })
})