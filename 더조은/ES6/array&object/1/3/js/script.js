$('.ex1 button').click(function(){
  var s = $('.ex1 .start').val()
  var e = $('.ex1 .end').val()
  for(var i=s;i<=e;i++){
    for(var j=1;j<=9;j++){
      $('.ex1 .result').append(`
        ${i} * ${j} = ${i * j} <br>
      `)
    }
    /* $('.ex1 .result').append(`<br>--------------------------------------<br>`) */
    $(`<br>--------------------------------------<br>`).appendTo('.ex1 .result')
  }
})
/* --------------------- */
$('.ex2 button').click(function(){
  for(var i=1;i<=3;i++){
    for(var j=1;j<=i;j++){
/*       if(j<=i){
        $('.ex2 .result').append('*')
      }else{
        $('.ex2 .result').append('-')
      } */
      $('.ex2 .result').append('*')
    }
    for(var k=1;k<=3-i;k++){
      $('.ex2 .result').append('&nbsp;')
    }
    $('.ex2 .result').append('<br>')
  }
})
/* -------------------- */
$('.ex3 button').click(function(){
  for(var i=1;i<=5;i++){
    for(var j=1;j<=5-i;j++){
      $('.ex3 .result').append(`&nbsp;`)
    }
    for(var k=1;k<=i;k++){
      $('.ex3 .result').append('*')
    }
  $('.ex3 .result').append('<br>')
  }  
})
/* ------------------------------ */
$('.ex4 button').click(function(){
  for(var i=1;i<=5;i++){
    for(var j=1;j<=5-i;j++){
      $('.ex4 .result').append(`&nbsp;`)
    }
    for(var k=1;k<=i*2-1;k++){
      $('.ex4 .result').append('*')
    }
    for(var l=1;l<=5-i;l++){
      $('.ex4 .result').append(`&nbsp;`)
    }
    $('.ex4 .result').append('<br>')
  }
})
/* ------------------------------ */
$('.ex5 button').click(function(){
  for(var i=1;i<=5;i++){
    for(var j=1;j<=i-1;j++){
      $('.ex5 .result').append(`&nbsp;`)
    }
    for(var k=1;k<=(5-i)*2+1;k++){
      $('.ex5 .result').append('*')
    }
    for(var l=1;l<=i-1;l++){
      $('.ex5 .result').append(`&nbsp;`)
    }
    $('.ex5 .result').append('<br>')
  }
})