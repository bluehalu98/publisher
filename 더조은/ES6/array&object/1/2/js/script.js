var cls
$('.ex1 button').click(function(){
  for(i=1;i<=10;i++){
    if(i%2===1){
      cls='odd'
    }else{
      cls='even'
    }
    $('.ex1 .result').append(`
    <div class='${cls}'>${i}</div>
  `)
  }
})
$('.ex2 button').click(function(){
  for(var i=1;i<10;i++){
    for(var j=1;j<10;j++){
      $('.ex2 .result').append(`${i} * ${j} = ${i*j}<br>`)
    }//2dep for
    $('.ex2 .result').append(`<br>---------------------<br>`)
  }//1dep for
})//click
$('.ex3 button').click(function(){
  var num = $('.ex3 input').val()
  if(num<2 || num>9){
    alert('2단부터 9단까지만 입력해주세요')
  }else{
    $('.ex3 .result').empty()
    for(i=1;i<10;i++){
      $('.ex3 .result').append(`
        ${num} * ${i} = ${num*i} <br>
      `)
    }
  }
})
$('.ex4 button').click(function(){
  var numF = $('.ex4 input.fisrt').val()
  var numL = $('.ex4 input.last').val()
  $('.ex4 .result').empty()
  for(i=numF;i<=numL;i++){
    for(j=1;j<10;j++){
      $('.ex4 .result').append(`
        ${i} * ${j} = ${i * j} <br>
      `)
    }
    $('.ex4 .result').append(`<br>------------------------------------<br>`)
  }
})