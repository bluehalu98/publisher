$(document).ready(function(){
  $('.ex1 button').click(function(){
    var num1 =  parseInt($('.ex1 select:nth-child(2)').val())
    var num2 =  parseInt($('.ex1 select:nth-last-child(2)').val())
    alert(num1+num2)
  })
  $('.ex2 button').click(function(){
    var num1 = parseInt($('.ex2 select:nth-child(2)').val() 
              +$('.ex2 select:nth-child(3)').val() )
    var num2 = parseInt($('.ex2 select:nth-last-child(3)').val() 
              +$('.ex2 select:nth-last-child(2)').val() )
    alert(num1+num2)
  })
})