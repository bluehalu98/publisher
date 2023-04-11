$(function(){/* $(document).ready(function(){}) */
  function percent(e, ex){
    e.preventDefault()
    var num1 = $(ex+' .num1').val()
    var num2 = $(ex+' .num2').val()
    var result = (num1/num2*100).toFixed(2)
    $(ex+' .result').text(result+'%입니다')
  }

  $('.ex1 button').click(function(e){
    percent(e, '.ex1')
  })

  function getNum(e, ex){
    e.preventDefault()
    var num1 = $(ex+' .num1').val()
    var num2 = ($(ex+' .num2').val())/100
    var result = num1*num2
    $(ex+' .result').text(result+'입니다')
  }
  $('.ex2 button').click(function(e){
    getNum(e, '.ex2')
  })
  function getQuesMark(e, ex){
    e.preventDefault()
    var num1 = $(ex+' .num1').val()
    var num2 = $(ex+' .num2').val()
    var num3 = $(ex+' .num3').val()
    var ques = num2*num3/num1
    $(ex+' .result').text('?는 '+ques+'입니다')
  }
  $('.ex3 button').click(function(e){
    getQuesMark(e, '.ex3')
  })
  function getQuesMark2(e, ex){
    e.preventDefault()
    var num1 = $(ex+' .num1').val()
    var num2 = $(ex+' .num2').val()
    var num3 = $(ex+' .num3').val()
    var ques = num1*num3/num2
    $(ex+' .result').text('?는 '+ques+'입니다')
  }
  $('.ex4 button').click(function(e){
    getQuesMark2(e, '.ex4')
  })
})