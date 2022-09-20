$(document).ready(function(){
  $('.ex1 button').click(function(){
    var num1 = parseInt($('.ex1 .a').val())
    var num2 = parseInt($('.ex1 .b').val())
    var result = num1 + num2
    alert(result)
  })
  $('.ex2 button').click(function(){
    var num1 = $('#select1').val()
    var num2 = $('#select2').val()
    var result = num1-num2
    alert(result)
  })
  $('.ex3 button').click(function(){
    var num1 = $('.ex3 > input').val()
    var num2 = $('.ex3 input:checked').val()
    var result = num1 * num2
    alert(result)
  })
})