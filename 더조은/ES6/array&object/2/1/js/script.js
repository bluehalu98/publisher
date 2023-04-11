var nameArr1 = ['홍길동', '아무개', '무명씨']
$('.ex1 .index').click(function(){
  var index = nameArr1[0];
  console.log(index);
})
$('.ex1 .push').click(function(){
  nameArr1.push('개똥이')
  console.log(nameArr1);
})
$('.ex1 .unshift').click(function(){
  nameArr1.unshift('개똥이')
  console.log(nameArr1);
})
$('.ex1 .pop').click(function(){
  nameArr1.pop()
  console.log(nameArr1);
})
$('.ex1 .shift').click(function(){
  nameArr1.shift()
  console.log(nameArr1);
})
$('.ex1 .length').click(function(){
  var leng = nameArr1.length
  console.log(leng);
})
$('.ex1 .splice').click(function(){
  nameArr1.splice(1,0,'철수')
  console.log(nameArr1)
})
/* ------------------------------------------- */   
var ex2Arr = []
$('.ex2 button').click(function(){
  for(var i=0;i<1000;i++){
    ex2Arr.push(i+1)
  }
  console.log(ex2Arr)
})
/* --------------------------------------------- */
var ex3Arr = ['김','이','박','송','차']
$('.ex3 button').click(function(){
  for(var i=0;i<ex3Arr.length;i++){
    console.log(ex3Arr[i])
  }
})
/* -------------------------------------------- */
var ex4Arr = ['홍길동','아무개','무명씨','철수','영희']
var cnt = 0
$('.ex4 button').click(function(){
  if(ex4Arr.length>0){
    var randomIndex = Math.floor(Math.random()*ex4Arr.length)
    var name=ex4Arr[randomIndex]
    cnt++
    console.log(`${name}는 ${cnt}등`);
    ex4Arr.splice(randomIndex,1)
  }
})
/* -------------------------------------------- */
var ex5Arr = ['홍길동','아무개','무명씨','철수','영희']
$('.ex5 button').click(function(){
  for(var i=ex5Arr.length;i>0;i--){
    var randomIndex = Math.floor(Math.random()*ex5Arr.length)
    console.log(`${ex5Arr[randomIndex]}는 ${i}등입니다.`)
    ex5Arr.splice(randomIndex,1)
  }
})