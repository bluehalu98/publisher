$(function(){

  $('.ex1 button').click(function(){
    $('.ex1 .box').each(function(){
      var boxClr=$(this).attr('data-clr')
      $(this).css({'background-color':boxClr})
    })
  })
  $('.ex2 button').click(function(){
    $(this).siblings('div').each(function(){
      var boxClr=$(this).attr('data-clr')
      $(this).css({'background-color':boxClr})
    })
  })
  $('.ex3 button').click(function(){
    var point=0
    $(this).siblings('div').each(function(){
      var anw = $(this).children('select').val()
      if(anw==='정답'){
        point++
      }else{
        return true
      }
    })
    console.log(point);
  })
  var answer = ''
  $('.ex5 button').click(function(){
    $(this).siblings('div').each(function(){
      var num1 = parseInt($(this).children('.num1').val())
      var num2 = parseInt($(this).children('.num2').val())
      var num3 = parseInt($(this).children('.num3').val())
      if(num1+num2===num3){
        answer+=' 정답'
      }else{
        answer+=' 오답'
      }
    })
    console.log(answer)
  })
  $('.ex6 button').click(function(){
    $(this).siblings('div').each(function(){
      var num1 = parseInt($(this).children('.num1').val ())
      var num2 = parseInt($(this).children('.num2').val())
      var num3 = parseInt($(this).children('.num3').val())
      if(num1+num2===num3){
        answer+=' 정답'
      }else{
        answer+=' 오답'
      }
    })
    console.log(answer)
  })
})