$(function(){
  function show(el, exNum){
    var n = el.val()
    $('.ex'+exNum+' div').hide()
    $('.ex'+exNum+' .box'+n).show()
  }
  $('.ex1 input, .ex2 input').click(function(){
    var containerNum = $(this).attr('data-containerNum')
    show($(this), containerNum)
  })
  function fn3_4(el, ex){
    var n = el.val()
    var color = el.attr('data-color')
    $('.ex'+ex+' div').css({'background':'none'})
    $('.ex'+ex+' .box'+n).css({'background':color})
  }
  $('.ex3 button, .ex4 button').click(function(){
    fn3_4($(this), $(this).attr('data-exNum'))
  })
  function toggle(el, ex){
    var n = el.val()
    $('.ex'+ex+' div:not(.box'+n+')').removeClass('active')
    $('.ex'+ex+' .box'+n).toggleClass('active')
  }
  $('.ex5 button, .ex6 button').click(function(){
    toggle($(this), $(this).attr('data-exNum'))
  })
  function toggleShow(el, exNum){
    var ex = el.val()
    $('.ex'+exNum+' div:not(.box'+ex+')').hide()
    $('.ex'+exNum+' .box'+ex).toggle()
  }
  $('.ex7 input').click(function(){
    toggleShow($(this), $(this).attr('data-containerNum'))
  })
})