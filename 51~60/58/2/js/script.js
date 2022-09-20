$(function(){
  let section1Width = $('.section1').innerWidth()
  let section1Height = $('.section1').innerHeight()
  let maskWidth = 0

  if(section1Width > section1Height){//landscape - 가로형
    maskWidth = section1Width * 1.3
  }else{//potrait - 세로형
    maskWidth = section1Height * 1.3
  }
  $('.section1').css({
    '-webkit-mask-size' : maskWidth
  })
  $(window).resize(function(){

  })

  $('button').click(function(){
    if(winw >= winh){
      maskWidth = winw * 1.3
    }else{
      maskWidth = winh * 1.3
    }
    let n = $(this).attr('data-num')
    $('.section'+n).css({
      '-webkit-mask-size' : maskWidth,
      'pointer-events' : 'all'
    })
    $('.section'+n).prevAll('section').css({
      '-webkit-mask-size' : maskWidth,
      'pointer-events' : 'all'
    })
    $('.section'+n).nextAll('section').css({
      '-webkit-mask-size' : 0,
      'pointer-events' : 'none'
    })
  })

  $('section').bind('mousewheel', function(e){
    let delta = e.originalEvent.wheelDelta/ -120
    let num = Number($(this).attr('data-num'))
    let n = num + delta
    if(n < 1){ n = 3}
    if(n > 3){ n = 1}
    $('.section'+n).css({
      '-webkit-mask-size' : maskWidth,
      'pointer-events' : 'all'
    })
    $('.section'+n).prevAll('section').css({
      '-webkit-mask-size' : maskWidth,
      'pointer-events' : 'all'
    })
    $('.section'+n).nextAll('section').css({
      '-webkit-mask-size' : 0,
      'pointer-events' : 'none'
    })
  })
})