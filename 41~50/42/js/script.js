$(function(){
  $('.ex1>div').click(function(){
    $('.ex1 div').css({'background':'none'})
    $(this).children('div').css({'background':'red'})
  })
  $('.ex1 div div').click(function(){/* event bubble 해결법 */
    return false;
  })
  $('.ex2>div').click(function(){
    var clr = $(this).children('div').attr('data-color')
    $('.ex2 div').css({'background':'none'})
    $(this).children('div').css({'background':clr})
  })
  $('.ex2 div div').click(function(){
    return false
  })
  $('.ex3 div div').click(function(){
    var clr = $(this).parent().attr('data-color')
    $('.ex3>div').css({'background':'none'})
    $(this).parent().css({'background':clr})
  })
  $('.ex4 button').click(function(){
    $(this).css({'background':'none'})
    $(this).siblings('button').css({'background':'red'})
  })
  $('.ex5 button').click(function(){
    $(this).siblings('button').removeClass('active')
    $(this).toggleClass('active')
  })
  $('.ex6 button').click(function(){
    var n = $(this).val()
    $('.ex6 .box'+n).siblings('div').hide()
    $('.ex6 .box'+n).toggle()

/*     $(this).siblings('div:not(.box'+n+')').hide()
    $(this).siblings('div.box'+n).toggle() */
  })
  $('.ex7 button').click(function(){
    $('.ex7 button').css({'color':'#000'})
    $(this).nextAll().css({'color':'red'})
  })
  $('.ex8 button').click(function(){
    $('.ex8 div p').stop().slideUp()
    $(this).siblings().stop().slideToggle()
    $(this).parent().siblings('div').children('button').removeClass('active')
    $(this).toggleClass('active')
  })
})