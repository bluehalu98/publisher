$(function(){

  function sum(num1, num2){
    var num1 = parseInt(num1)
    var num2 = parseInt(num2)
    alert(num1+num2)
  }

  $('.ex1 button').click(function(){
    var num1 = $('.ex1 .num1').val()
    var num2 = $('.ex1 .num2').val()
    sum(num1, num2)
  })
  $('.ex2 button').click(function(){
    var num1 = $('.ex2 .num1').val()
    var num2 = $('.ex2 .num2').val()
    sum(num1, num2)
  })
  $('.ex3 button').click(function(){
    var num1 = $('.ex3 .num1-1').val() + $('.ex3 .num1-2').val()
    var num2 = $('.ex3 .num2-1').val() + $('.ex3 .num2-2').val()    
    sum(num1, num2)
  })

  function grid(num1, num2, num3){
    var num1 = parseInt(num1)
    var num2 = parseInt(num2)
    var num3 = parseInt(num3)
    var result = (num1 - (num2*(num3+1)))/num3
    alert(result)
  }
  $('.ex4 button').click(function(){
    var num1 = $('.ex4 .container').val()
    var num2 = $('.ex4 .margin').val()
    var num3 = $('.ex4 .gridcnt').val()
    grid(num1, num2, num3) 
  })
})

