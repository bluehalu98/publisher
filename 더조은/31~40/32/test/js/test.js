$(function(){
  function ex1(e, el){
    e.preventDefault()
    var num1_1= $(el+'>select:nth-child(2)').val()
    var num1_2=$(el+'>select:nth-child(3)').val()
    var num2_1= $(el+'>select:nth-child(5)').val()
    var num2_2=$(el+'>select:nth-child(6)').val()
    var num1=parseInt(num1_1+num1_2)
    var num2=parseInt(num2_1+num2_2)
    var option = $(el+'>select:nth-child(4)').val()
    var result
    if(option==='+'){
      result=num1+num2
    } else if(option==='-'){
      result=num1-num2
    } else if(option==='*'){
      result=num*num2
    } else if(opttion==='/'){
      result=(num1/num2).toFixed(2)
    }
    $(el+' .result').text(result+'입니다')
  }
  function ex2(e, el){
    e.preventDefault()
    var num1= $(el+' input:nth-child(2)').val()
    var num2= $(el+' input:nth-child(3)').val()
    var num= num1+num2
    var result
    if(num%1===0){
      result=parseInt(num1)*10+parseInt(num2)
    }else{
      result='계산오류'
    }
    $(el+' .result').text(result+'입니다')
  }
  function ex3(e, el){
    e.preventDefault()
    var num1=$(el+' input:nth-child(2)').val()
    var num2=$(el+' input:nth-child(3)').val()
    var num= (num2-num1)+1
    var result
    if(num%2===1){
      result='계산오류'
    } else{
      var cnt = num/2
      result= (parseInt(num1)+parseInt(num2))*cnt
    }
    $(el+' .result').text(result+'입니다')
  }
  function ex4(e, el){
    e.preventDefault()
    var num1=parseInt($(el+' input:nth-child(2)').val())
    var num2=parseInt($(el+' input:nth-child(3)').val())
    var num= (num2-num1)+1
    var cnt
    var avg
    var result
    if(num%2===0){
      cnt = num/2
      result= (num1+num2)*cnt
    } else{
      cnt = parseInt(num/2)
      avg = num1+cnt
      result=((num1+num2)*cnt) +avg
    }
    $(el+' .result').text(result+'입니다')
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
  $('.ex4 button').click(function(e){
    ex4(e, '.ex4')
  })
})//ready