$(function(){
  $('.ex1 button').click(function(){
    var result = $('.ex1 input:checked').val()
    alert(result)
  })
  $('.ex2 button').click(function(){
    var num = parseInt($('.ex2 input').val())
    var result = '오답'
    if(num===1){
      result='정답'
    }
      alert(result)
  })
  $('.ex3 button').click(function(){
    var num = parseInt($('.ex3 input').val())
    var result
    if(num ===2){
      result='정답'
    }else{
      result='오답'
    }
    alert(result)
  })
  $('.ex4 button').click(function(){
    var num = $('.ex4 select').val()
    alert(num)
  })
  $('.ex5 button').click(function(){
    var num=parseInt($('.ex5 input').val())
    var result
    if(num===3){
      result='three'
    } else if(num===2){
      result='two'
    } else if(num===1){
      result='one'
    } else{
      result='잘못입력'
    }
    alert(result)
  })
  $('.ex6 button').click(function(){
    var char = $('.ex6 input:checked').val()
    alert(char)
  })
  $('.ex7 button').click(function(){
    var num1 = parseInt($('.ex7 .num1').val())
    var num2 = parseInt($('.ex7 .num2').val())
    var num3 = parseInt($('.ex7 .num3').val())
    var sum = num1 + num2
    var result
    if(sum===num3){
      result='정답'
    } else{
      result='오답'
    }
    alert(result)
  })
  $('.ex8 button').click(function(){
    var num1 = parseInt($('.ex8 .num1').val())
    var num2 = parseInt($('.ex8 .num2').val())
    var str = $('.ex8 select').val()
    var result
    if(str==='+'){
      result = num1+num2
    } else if(str==='-'){
      result = num1-num2
    }else if(str==='*'){
      result = num1*num2
    }else{
      result = (num1/num2).toFixed(2)
    }
    alert(result)
  })
  var a=0
  $('.ex9 button').click(function(){
    a=a+1
    $('.ex9 p').text(a+'입니다')
  })
  var num=0
  var add = 1
  $('.ex10 button').click(function(){
    if(num<2){
      add = 1
    } else if(num>4){
      add = -1
    }
    num= num+add
    $('.ex10 p').text(num+'입니다')
  })
})

/* 
  조건문
    - 문법
      if문(한가지 결과행동) 
        if(조건){실행코드}
      else문(두가지 결과행동)
      else if문(여러가지 결과행동)

    - 비교연산자
      ===(같다), !==(같지 않다), >, <, >=, <=
      true, false
*/

