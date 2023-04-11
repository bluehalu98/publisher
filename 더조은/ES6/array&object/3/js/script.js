$('.ex1 button').click(function(){
  for(var i=1;i<10;i+=2){
    $('.ex1 .result').append(`${i}, `)
  }
})
/* -------------------------------------- */
var ex2Sum = 0
$('.ex2 button').click(function(){
  for(var i = 1; i<=10;i++){
    ex2Sum+=i
    $('.ex2 .result').append(`${ex2Sum} <br>`)
  }
})
/* ---------------------------------------- */
var ex3Sum = 0
var ex3Start
var ex3End
$('.ex3 button').click(function(){
  ex3Start = Number($('.ex3 .start').val())
  ex3End = Number($('.ex3 .end').val())
  for(var i = ex3Start;i<=ex3End;i++){
    ex3Sum+=i
    $('.ex3 .result').append(`${ex3Sum} <br>`)
  }
})
/* ------------------------------------- */
var ex4Sum = 0
var ex4Start
var ex4End
$('.ex4 button').click(function(){
  ex4Start = Number($('.ex4 .start').val())
  ex4End = Number($('.ex4 .end').val())
  if(ex4Start<ex4End){
    for(var i = ex4Start;i<=ex4End;i++){
      ex4Sum+=i
      $('.ex4 .result').append(`${ex4Sum} <br>`)
    }
  }else{
    for(var i = ex4End;i<=ex4Start;i++){
      ex4Sum+=i
      $('.ex4 .result').append(`${ex4Sum} <br>`)
    }
  }
})
/* ------------------------------------------ */
$('.ex5 button').click(function(){
  var ex5Start=Number($('.ex5 .start').val())
  var ex5End=Number($('.ex5 .end').val())
  if(ex5Start>=ex5End){
    for(var i = ex5End;i<=ex5Start;i++){
      for(var j=1;j<10;j++){
        $('.ex5 .result').append(`
          ${i} * ${j} = ${i*j} <br>
        `)
      }
      $('.ex5 .result').append(`<hr>`)
    }
  }else{
    for(var i = ex5Start;i<=ex5End;i++){
      for(var j=1;j<10;j++){
        $('.ex5 .result').append(`
          ${i} * ${j} = ${i*j} <br>
        `)
      }
      $('.ex5 .result').append(`<hr>`)
    }
  }
})
/* ------------------------------------------------ */
$('.ex6 button').click(function(){
  for(var i=1;i<6;i++){
    for(var j=1;j<=i;j++){
      $('.ex6 .result').append(`*`)
    }
    $('.ex6 .result').append(`<br>`)
  }
})
/* ------------------------------------------------ */
$('.ex7 button').click(function(){
  for(var i=5;i>=1;i--){
    for(var j=1;j<i;j++){
      $('.ex7 .result').append(`
        -
      `)
    }
    for(var k=j;k<6;k++){
      $('.ex7 .result').append(`
        ${k}
      `)
    }
  $('.ex7 .result').append(`<br>`)
  }
})
/* --------------------------------------------------- */
var korArr = ['가', '나', '다', '라', '마']
$('.ex8 button').click(function(){
  var arrL = korArr.length
  for(var i=arrL;i>0;i--){//43210
    for(var j=0;j<i-1;j++){//
      $('.ex8 .result').append(`-`)
    }
    for(var k=i-1;k<i+4-j;k++){
      $('.ex8 .result').append(`${korArr[k]}`)
    }
  $('.ex8 .result').append(`<br>`)
  }
})