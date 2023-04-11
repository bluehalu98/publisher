$(function(){
  $('.naver').click(function(evt){
    evt.preventDefault()
    alert('링크클릭')
  })
  function fn(el, ex){
    el.preventDefault()
    var num1 = parseInt($(ex+' .num1').val())
    var num2 = parseInt($(ex+' .num2').val())
    var result = num1 + num2
    $(ex+' .result').html('결과 : '+result)
  }
  $('.ex1 button').click(function(e){
    fn(e, '.ex1')
  })
  $('.ex2 button').click(function(e){
    fn(e, '.ex2')
  })
  function fn1(e, ex){
    e.preventDefault()
    var num1 = $(ex+' .num1').val()
    var num2 = $(ex+' .num2').val()
    var result = (num1/num2*100).toFixed(2)
    $(ex+' .result').text(result +'%입니다')
  }
  $('.ex3 button').click(function(e){
    fn1(e, '.ex3')
  })
  function attendence(e, ex){
    e.preventDefault()
    var num1 = $(ex+' .num1').val()    
    var result = num1*8/10
    $(ex+' .result').text('최소 '+result+'일을 출석하셔야 합니다')
  }
  $('.ex4 button').click(function(e){
    attendence(e, '.ex4')
  })
})