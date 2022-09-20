$(function(){
  function motion(){
    var scrS = $('.section2').offset().top
    var scrE = $('.section3').offset().top -winh
    var scrRange = scrE - scrS
    var scrR = (scrt-scrS)/scrRange
    if(scrR<0){scrR=0}
    if(scrR>1){scrR=1}
    $('.svg2 .pen').css({'offset-distance':scrR*100+'%'})
    $('.svg2 path').css({'stroke-dashoffset': 1-scrR})
  }
  motion()
  $(window).scroll(function(){
    motion()
  }).resize(function(){
    motion()
  })
})