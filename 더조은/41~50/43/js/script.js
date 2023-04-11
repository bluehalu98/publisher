$(function(){
  var n = 0
  $('.ex1 button').click(function(){
    var btn = ($(this).attr('class'))
    if(btn=='btn1'){
      n++
    }else{
      n--
    }
    $('.ex1 .output').text(n)
  })
  var n_ex2 = 1
  $('.ex2 button').click(function(){
    var btn = ($(this).attr('class'))
    if(btn=='btn1'){
      if(n_ex2<5){
        n_ex2++
      }else{
        return n_ex2
      }
    }else{
      if(n_ex2>1){
        n_ex2--
      }else{
        return n_ex2
      }
    }
    $('.ex2 .output').text(n_ex2)
  })
  var n_ex3=1
  $('.ex3 button').click(function(){
    var btn = $(this).attr('class')
    if(btn=='btn1'){
      if(n_ex3<5){
        n_ex3++
      }else{
        n_ex3=1
      }
    }else{
      if(n_ex3>1){
        n_ex3--
      }else{
        n_ex3=5
      }
    }
    $('.ex3 .output').text(n_ex3)
  })
  var n_ex4=0
  $('.ex4 button').click(function(){
    var add = parseInt($(this).val())
    n_ex4+=add
    if(add===0){
      n_ex4=0
    }
    $('.ex4 .output').text(n_ex4)
  })
  var n_ex5 = 1
  $('.ex5 button').click(function(){
    var btn = parseInt($(this).val())
    n_ex5+=btn
    if(n_ex5>5){
      n_ex5=1
    }else if(n_ex5<1){
      n_ex5=5
    }
    $('.ex5 .output').text(n_ex5)
  })
  var n_ex6=0
  var timeoutID1
  $('.ex6 .btn1').click(function(){
    clearTimeout(timeoutID1)
    timeoutID1 = setTimeout(function(){
      n_ex6++
      $('.ex6 .output').text(n_ex6)
    },3000)
  })
  $('.ex6 .btn2').click(function(){
    clearTimeout(timeoutID1)
  })
  var n_ex7=0
  var intervalID1
  $('.ex7 .btn1').click(function(){
    clearInterval(intervalID1)
    intervalID1 = setInterval(function(){
      n_ex7++
      $('.ex7 .output').text(n_ex7)
    },1000)
  })
  $('.ex7 .btn2').click(function(){
    clearInterval(intervalID1)
    intervalID1 = setInterval(function(){
      n_ex7--
      $('.ex7 .output').text(n_ex7)
    },1000)
  })
  var n_ex8=0
  var timeoutID2
  var intervalID2
  $('.ex8 .btn1').click(function(){
    clearTimeout(timeoutID2)
    clearInterval(intervalID2)
    timeoutID2 = setTimeout(function(){
      intervalID2 = setInterval(function(){
        n_ex8++
        $('.ex8 .output').text(n_ex8)
      },1000)
    },5000)
  })
  $('.ex8 .btn2').click(function(){
    clearTimeout(timeoutID2)
    clearInterval(intervalID2)
    timeoutID2 = setTimeout(function(){
      intervalID2 = setInterval(function(){
        n_ex8--
        $('.ex8 .output').text(n_ex8)
      },1000)
    },5000)
  })
  var num = 0
  var addNum = 0
  var prevNum=0
/*   si = setInterval(function(){
    addNum++
    st = setTimeout(function(){
      num+=addNum
      if(num>30){
        clearInterval(si)
        clearTimeout(ti)
      }
      $('.ex9 .output').text(num)
    },1000)
  },1000) */
  si = setInterval(function(){
    addNum++
    num+=addNum
    /* prevNum += (' , '+num) */
    prevNum = $('.ex9 .output').text() + ' , '+num
    if(num>=28){
      clearInterval(si)
    }
    $('.ex9 .output').text(prevNum)
  },500)
})