$(function(){
  $('.ex1 .btn1').click(function(){
    $('.ex1 .box').css({'background-color':'red', 'width':'200px', 'height': '100px'})
  })
  $('.ex1 .btn2').click(function(){
    $('.ex1 .box').css({'background-color':'blue', 'width':'200px', 'height': '200px'})
  })
  $('.ex1 .btn3').click(function(){
    $('.ex1 .box').css({'background':'none', 'width':'100px', 'height': '100px'})
  })
  $('.ex2 .btn1').click(function(){
    $('.ex2 .box').addClass('style1')
    $('.ex2 .box').removeClass('style2')
  })
  $('.ex2 .btn2').click(function(){
    $('.ex2 .box').addClass('style2')
    $('.ex2 .box').removeClass('style1')
  })
  $('.ex3 button').click(function(){
    $('.ex3 .box').toggleClass('style1 style2')
  })
  $('.ex4 .btn1').click(function(){
    $('.ex4 .box').removeClass('style reset')
    $('.ex4 .box').css({'background':'red'})
  })
  $('.ex4 .btn2').click(function(){
    $('.ex4 .box').addClass('style').removeClass('reset')
  })
  $('.ex4 .btn3').click(function(){
    $('.ex4 .box').removeClass('style').addClass('reset')
  })
  $('.ex5 .btn1').click(function(){
    $('.ex5 .box').hide()
  })
  $('.ex5 .btn2').click(function(){
    $('.ex5 .box').show()
  })
  $('.ex5 .btn3').click(function(){
    $('.ex5 .box').toggle()
  })
  $('.ex6 .btn1').click(function(){
    $('.ex6 .box').stop().fadeOut(3000)
  })
  $('.ex6 .btn2').click(function(){
    $('.ex6 .box').stop().fadeIn(3000)
  })
  $('.ex6 .btn3').click(function(){
    $('.ex6 .box').stop().fadeToggle(3000)
  })
  $('.ex7 .btn1').click(function(){
    $('.ex7 .box').stop().slideUp()
  })
  $('.ex7 .btn2').click(function(){
    $('.ex7 .box').stop().slideDown()
  })
  $('.ex7 .btn3').click(function(){
    $('.ex7 .box').stop().slideToggle()
  })
  $('.ex8 .btn1').click(function(){
    $('.ex8 .answer1').stop().slideToggle()
    $('.ex8 .answer2').stop().slideUp()
    $('.ex8 .answer3').stop().slideUp()
    $('.ex8 .btn1').toggleClass('open')
    $('.ex8 .btn2').removeClass('open')
    $('.ex8 .btn3').removeClass('open')
  })
  $('.ex8 .btn2').click(function(){
    $('.ex8 .answer2').stop().slideToggle()
    $('.ex8 .answer1').stop().slideUp()
    $('.ex8 .answer3').stop().slideUp()
    $('.ex8 .btn2').toggleClass('open')
    $('.ex8 .btn1').removeClass('open')
    $('.ex8 .btn3').removeClass('open')
  })
  $('.ex8 .btn3').click(function(){
    $('.ex8 .answer2').stop().slideUp()
    $('.ex8 .answer1').stop().slideUp()
    $('.ex8 .answer3').stop().slideToggle()
    $('.ex8 .btn3').toggleClass('open')
    $('.ex8 .btn2').removeClass('open')
    $('.ex8 .btn1').removeClass('open')
  })
  var n1 = 1
  $('.ex9 .btn1').click(function(){
    if(n1===0){
      $('.ex9 .btn1').addClass('open')
      $('.ex9 .btn2').removeClass('open')
      $('.ex9 .btn3').removeClass('open')
      $('.ex9 .answer1').stop().slideDown()
      $('.ex9 .answer2').stop().slideUp()
      $('.ex9 .answer3').stop().slideUp()
      n1=n1+1
    }else{
      $('.ex9 .btn1').removeClass('open')
      $('.ex9 .btn2').removeClass('open')
      $('.ex9 .btn3').removeClass('open')
      $('.ex9 .answer1').stop().slideUp()
      $('.ex9 .answer2').stop().slideUp()
      $('.ex9 .answer3').stop().slideUp()
      n1=n1-1
    }
    n2=0
    n3=0
  })
  var n2 = 0
  $('.ex9 .btn2').click(function(){
    if(n2===0){
      $('.ex9 .btn2').addClass('open')
      $('.ex9 .btn1').removeClass('open')
      $('.ex9 .btn3').removeClass('open')
      $('.ex9 .answer2').stop().slideDown()
      $('.ex9 .answer1').stop().slideUp()
      $('.ex9 .answer3').stop().slideUp()
      n2=n2+1
    }else{
      $('.ex9 .btn2').removeClass('open')
      $('.ex9 .btn1').removeClass('open')
      $('.ex9 .btn3').removeClass('open')
      $('.ex9 .answer2').stop().slideUp()
      $('.ex9 .answer1').stop().slideUp()
      $('.ex9 .answer3').stop().slideUp()
      n2=n2-1
    }
    n1=0
    n3=0
  })
  var n3 =0
  $('.ex9 .btn3').click(function(){
    if(n3===0){
      $('.ex9 .btn3').addClass('open')
      $('.ex9 .btn2').removeClass('open')
      $('.ex9 .btn1').removeClass('open')
      $('.ex9 .answer3').stop().slideDown()
      $('.ex9 .answer2').stop().slideUp()
      $('.ex9 .answer1').stop().slideUp()
      n3=n3+1
    }else{
      $('.ex9 .btn1').removeClass('open')
      $('.ex9 .btn2').removeClass('open')
      $('.ex9 .btn3').removeClass('open')
      $('.ex9 .answer1').stop().slideUp()
      $('.ex9 .answer2').stop().slideUp()
      $('.ex9 .answer3').stop().slideUp()
      n3=n3-1
    }
    n2=0
    n1=0
  })
  var n4 = 1
  $('.ex10 button').click(function(){
    if(n4===1){
      $('.ex10 button').addClass('trans')
    }else{
      $('.ex10 button').removeClass('trans')
    }
    n4=n4*-1
  })
})