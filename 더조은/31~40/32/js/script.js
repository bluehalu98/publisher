$(function(){
  function ex1(e, ex){
    e.preventDefault()
    var num= $(ex+' input').val()
    var result
    if(num%2===0){
     result='짝수입니다.'
    } else{
      result='홀수입니다.'
    }
    $(ex+' .result').text(result)
  }
  function ex2(e, ex){
    e.preventDefault()
    var num = $(ex+' input').val()
    var result
    if(num%1===0){
      result='숫자입니다'
    } else{
      result='글자입니다'
    }
    $(ex+' .result').text(result)
  }
  function ex3(e, ex){
    e.preventDefault()
    var various = isNaN($(ex+' input').val())
    var result
    if(various){
      result='글자입니다'
    } else{
      result='숫자입니다'
    }
    $(ex+' .result').text(result)
  }
  $('.ex1 button').click(function(e){
    ex1(e, '.ex1')
  })
  $('.ex2 button').click(function(e){
    ex2(e, '.ex2')
  })
  $('.ex3 button').click(function(e){
    ex3(e, '.ex3')
  })
})