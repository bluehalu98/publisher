$(function(){
  $('.ex1 .btn1').click(function(){
    $('.ex1 .answer').stop().slideUp()
    $('.ex1 .answer1').stop().slideToggle()
    $('.ex1 .btn2, .ex1 .btn3').removeClass('active')
    $('.ex1 .btn1').toggleClass('active')
  })
  $('.ex1 .btn2').click(function(){
    $('.ex1 .answer').stop().slideUp()
    $('.ex1 .answer2').stop().slideToggle()
    $('.ex1 .btn1, .ex1 .btn3').removeClass('active')
    $('.ex1 .btn2').toggleClass('active')
  })
  $('.ex1 .btn3').click(function(){
    $('.ex1 .answer').stop().slideUp()
    $('.ex1 .answer3').stop().slideToggle()
    $('.ex1 .btn2, .ex1 .btn1').removeClass('active')
    $('.ex1 .btn3').toggleClass('active')
  })
  $('.ex2 button').click(function(){
    var pdt = $('.ex2 select').val()
    var pdtName = $('.ex2 select option:selected').attr('data-pdtName')
    var cnt = $('.ex2 .cnt').val()
    var age = $('.ex2 .age').val()
    var sum = pdt * cnt
    console.log(pdt, cnt, age, sum)
    if(pdtName==='술'&&age<=19){
      sum='미성년자는 술을 구매하실수 없습니다'
    }else{
      sum = sum + '원 입니다'
    }
    alert(sum)
  })
  $('.ex3 input').click(function(){
    var n = $(this).attr('data-n')
    alert(n)
  })
  $('.ex4 button').click(function(){
    $('.ex4 button').css({'color':'black'})
    $(this).css({'color':'red'})
  })
  $('.ex5 button').click(function(){
    $('.ex5 button').css({'color':'black'})
    var color = $(this).attr('value')
    $(this).css({'color':color})
  })
  $('.ex6 button').click(function(){
    var n = $(this).attr('value')
    $('.ex6 .box').hide()
    $('.ex6 .box'+n).show()
  })
  $('.ex7 button').click(function(){
    var n = $(this).attr('value')
    var color = $('.ex7 .box'+n).attr('data-color')
    $('.ex7 .box').css({'background':'none'})
    $('.ex7 .box'+n).css({'background':color})
  })
  $('.ex8 button').click(function(){
    var n = $(this).attr('data-n')
    var n1 = n+1
    var color = $(this).attr('data-color')
    $('.ex8 button:not(.btn'+n+')').removeClass('red blue green yellow purple')
    $('.ex8 .btn'+n).toggleClass(color)
  })
})