$(document).ready(function(){
  $('.ex1 button').click(function(){
    var num = Number($('.ex1 input').val())
    var result = num.toFixed(2)
    alert(result)
  })
  $('.ex2 button').click(function(){
    var num1 = parseInt($('.ex2 > .sel1').val())
    var num2 = parseInt($('.ex2 > .sel2').val())
    var result = num1+num2
    alert(result)
  })
  $('.ex3 button').click(function(){
    var num1 = $('.ex3 .num1 input:checked').val()//:checked는 자바스크립트에서만
    var num2 = $('.ex3 .num2 input:checked').val()
    var 나누기결과 = num1/num2
    나누기결과=parseInt(나누기결과*100)*0.01
    alert(나누기결과)
  })
  $('.ex4 button').click(function(){
    var num1 = parseInt($('.ex4 select').val())
    var num2 = parseInt($('.ex4 input:checked').val())
    var num3 = $('.ex4 .n1').val()
    var result = (num1+num2)*num3
    alert(result)
  })
})//ready