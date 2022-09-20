$(function(){
  function motion(){
    var offset1 = $('.section1').offset().top
    var offset2 = $('.section2').offset().top
    var offset3 = $('.section3').offset().top
    var offset4 = $('.section4').offset().top
    if(scrt < offset2){
      TweenMax.to(".section1 .land .line",0.5,{morphSVG:".section1 .land .triangle", ease:Linear.easeNone})
      TweenMax.to(".section1 .port .line",0.5,{morphSVG:".section1 .port .triangle", ease:Linear.easeNone})
    }else{
      TweenMax.to(".section1 .land .line",0.5,{morphSVG:".section1 .land .line-backup", ease:Linear.easeNone})
      TweenMax.to(".section1 .port .line",0.5,{morphSVG:".section1 .port .line-backup", ease:Linear.easeNone})
    }
    if(scrt >= offset2 && scrt < offset3){
      TweenMax.to(".section2 .land .line",0.5,{morphSVG:".section2 .land .triangle", ease:Linear.easeNone})
      TweenMax.to(".section2 .port .line",0.5,{morphSVG:".section2 .port .triangle", ease:Linear.easeNone})
    }else{
      TweenMax.to(".section2 .land .line",0.5,{morphSVG:".section2 .land .line-backup", ease:Linear.easeNone})
      TweenMax.to(".section2 .port .line",0.5,{morphSVG:".section2 .port .line-backup", ease:Linear.easeNone})
    }
    if(scrt >= offset3 && scrt < offset4){
      TweenMax.to(".section3 .land .line",0.5,{morphSVG:".section3 .land .triangle", ease:Linear.easeNone})
      TweenMax.to(".section3 .port .line",0.5,{morphSVG:".section3 .port .triangle", ease:Linear.easeNone})
    }else{
      TweenMax.to(".section3 .land .line",0.5,{morphSVG:".section3 .land .line-backup", ease:Linear.easeNone})
      TweenMax.to(".section3 .port .line",0.5,{morphSVG:".section3 .port .line-backup", ease:Linear.easeNone})
    }
    if(scrt >= offset4){
      TweenMax.to(".section4 .land .line",0.5,{morphSVG:".section4 .land .triangle", ease:Linear.easeNone})
      TweenMax.to(".section4 .port .line",0.5,{orphSVG:".section4 .port .triangle", ease:Linear.easeNone})
    }else{
      TweenMax.to(".section4 .land .line",0.5,{morphSVG:".section4 .land .line-backup", ease:Linear.easeNone})
      TweenMax.to(".section4 .port .line",0.5,{morphSVG:".section4 .port .line-backup", ease:Linear.easeNone})
    }
  }
  motion()
  $(window).scroll(function(){
    motion()
  }).resize(function(){
    motion()
  })
})