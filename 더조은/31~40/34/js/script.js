$(function(){
  var n1 = Math.ceil(Math.random()*3)
  $('.ex1 .num').text(n1)
  $('.ex1 button').click(function(e){
    e.preventDefault()
    var user = $('.ex1 input').val()
    var com
    if(n1===1){
      com='one'
    }else if(n1===2){
      com='two'
    }else{
      com='three'
    }
    if(user===com){
      alert('정답')
    }else{
      alert('오답')
    }
    /* 
      if(
        (n===1 && user==='one') ||
        (n===2 && user==='two') ||
        (n===3 && user==='three') 
      ){
        result=o
      }else{
        result=x
      }
    */
  })
  var n2 = Math.floor(Math.random() * 3) + 1
  $('.ex2 .num').html(n2)
  $('.ex2 button').click(function(){
    var word = $('.ex2 input').val()
    var result
    if(n2===1){
      if(word==='one'){
        result='정답'
      }else{
        result='오답'
      }
    }else if(n2===2){
      if(word==='two'){
        result='정답'
      }else{
        result='오답'
      }
    }else if(n2===3){
      if(word==='three'){
        result='정답'
      }else{
        result='오답'
      }
    }
    alert(result)
  })
  $('.ex3 button').click(function(){
    var age = $('.ex3 .age').val()
    var point = $('.ex3 .point').val()
    var result
    /* 
      if(
        (age>='20'&&point>='70') ||
        (age<'20'&&point>='60')
      ){
        result='합격'
      }else{
        result='불합격'
      }
    */
    if(age>='20'){
      if(point>='70'){
        result='축하드립니다 합격입니다'
      }else{
        result='죄송합니다 불합격입니다'
      }
    }else{
      if(point>='60'){
        result='축하드립니다 합격입니다'
      }else{
        result='죄송합니다 불합격입니다'
      }
    }
    alert(result)
  })
  $('.ex4 button').click(function(e){
    e.preventDefault()
    var pdt = $('.ex4 select').val()
    var cnt = $('.ex4 .cnt').val()
    var age = $('.ex4 .age').val()
    var result
    if(age<20&&pdt==='4000'){
      result='죄송합니다 미성년자는 담배를 구입하실수 없습니다'
    }else{
      result = (pdt*cnt)+'원 입니다 감사합니다'
    }
    alert(result)
  })
  $('.ex5 button').click(function(e){
    e.preventDefault()
    var n = $('.ex5 input').val()
    var result
    if(n==='one' || n==='two' || n==='three'){
      result='정답입니다'
    }else if(n===''){
      result='입력오류입니다 다시입력해주세요'
    }else{
      result='오답입니다'
    }
    alert(result)
  })
})