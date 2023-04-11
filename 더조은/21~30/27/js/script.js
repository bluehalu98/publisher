$(function(){
  var a = 2
  var b = 10 
  var c
  var num = 1
  var result = 2
  var num1 = 1
  function calc(e, ex){
    e.preventDefault()
    var adult = $(ex+' .adult').val()
    var nonAdult = $(ex+' .nonAdult').val()
    var time = parseInt($(ex+' input[type=radio]:checked').val())
    var seat = parseInt($(ex+' .seat').val())
    var result = ((10000+time)*adult)+(nonAdult*(5000+time))+seat
    $(ex+' p:last-child').text(result+'원입니다.')
  }
  function totalAbsent(e, ex){
    e.preventDefault()
    var absent = parseInt($(ex+' .absent').val())
    var late = parseInt($(ex+' .late').val())
    var early = parseInt($(ex+' .early').val())
    var total = absent+parseInt(((late+early)/3))
    $(ex+' p:last-child').text('총 결석일수는 '+total+'일입니다.')
  }
  function lateRate(e, ex){
    e.preventDefault()
    var absent = parseInt($(ex+' .absent').val())
    var late = parseInt($(ex+' .late').val())
    var early = parseInt($(ex+' .early').val())
    var attend = parseInt($(ex+' .attend').val())
    var total = absent+parseInt(((late+early)/3))
    var rate = ((attend-total)/attend*100).toFixed(2)
    $(ex+' p:last-child').text('현재 출석률은 '+ rate+'%입니다')
  }
  $('.ex1 button').click(function(e, ex){
    calc(e, '.ex1')
  })
  $('.ex2 button').click(function(e){
    totalAbsent(e, '.ex2')
  })
  $('.ex3 button').click(function(e){
    lateRate(e, '.ex3')
  })
  $('.ex4 button').click(function(){
    $('.ex4 *:nth-child(2)').text(a)
    c=a
    a=b
    b=c
  })
  $('.ex5 button').click(function(){
    num1=num1*(-1)
    $('.ex5 *:nth-child(2)').text(num1)
  })
})