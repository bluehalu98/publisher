$(function(){
  function scrollProgress(){
    var scrollS = 0
    var scrollE = doch - winh
    var scrollScope = scrollE - scrollS
    var scrollRatio = (scrt-scrollS) / scrollScope
    console.log(scrollRatio);

    var progressS = 0
    var progressE = 100
    var progressScope = progressE - progressS
    var progressP = progressScope*scrollRatio + progressS
    $('.progress').css({'height':progressP+'%'})

    $('.scrollspy button').each(function(){
      var sectionN = $(this).attr('data-n')
      var sectionL = $('.section'+sectionN).offset().top
      var sectionRatio = sectionL / doch *100
      $(this).css({'top':sectionRatio+'%'})
    })
    var offset1 = $('.section1').offset().top
    var offset2 = $('.section2').offset().top
    var offset3 = $('.section3').offset().top
    var offset4 = $('.section4').offset().top
    var offset5 = $('.section5').offset().top
    if(scrt < offset2){
      n=1
    }else if(scrt>=offset2 && scrt < offset3){
      n=2
    }else if(scrt>=offset3 && scrt < offset4){
      n=3
    }else if(scrt>=offset4 && scrt < offset5){
      n=4
    }else if(scrt>=offset5){
      n=5
    }
    $('.scrollspy button').removeClass('active')
    $('.btn'+n).addClass('active')

  }
  scrollProgress()
  $(window).scroll(function(){
    scrollProgress()
  }).resize(function(){
    scrollProgress()
  })
  $('.scrollspy button').click(function(){
    var n = $(this).attr('data-n')
    var target = $('.section'+n).offset().top +1 
    /*
     jquery에서는 offset().top 값이 소숫값이 나오므로 +1을 해주는것이 좋다 
     */
    $('body,html').stop().animate({'scrollTop':target})
  })
})