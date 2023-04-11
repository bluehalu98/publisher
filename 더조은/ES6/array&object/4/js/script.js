var arr1 = ['가','나','다']
$('.ex1 button').click(function(){
  var leng = arr1.length
  var char = arr1[leng-1]
  console.log(leng, char);
})
$('.ex1 .push').click(function(){
  arr1.push('라')
  console.log(arr1);
})
$('.ex1 .unshift').click(function(){
  arr1.unshift('a')
  console.log(arr1);
})
$('.ex1 .pop').click(function(){
  arr1.pop()
  console.log(arr1);
})
$('.ex1 .shift').click(function(){
  arr1.shift()
  console.log(arr1);
})
$('.ex1 .splice').click(function(){
  //추가
  //arr1.splice(0,1,'a')
  //제거
  arr1.splice(0,1)
  console.log(arr1);
})
/* ---------------------------------------- */
var arr2 = []
$('.ex2 button').click(function(){
  for(var i=1;i<=100;i++){
    arr2.push(`${i}`)
  }
  console.log(arr2)
})
/* --------------------------------------- */
var arr3=['홍','김','박','이','유']
$('.ex3 button').click(function(){
  var arr3L = arr3.length
  for(var i=0;i<arr3L;i++){
    var num=Math.floor(Math.random()*arr3.length)
    console.log(`${arr3[num]}는 ${i+1}등 입니다.`)
    arr3.splice(num,1)
    console.log(arr3)
  }
})
/* --------------------------------------- */
var arr4=['홍','김','박','이','유']
$('.ex4 button').click(function(){
  var arr4L = arr4.length
  if(arr4L>0){
    for(var i=0;i<arr4L;i++){
      var num=Math.floor(Math.random()*arr4.length)
      console.log(`${arr4[num]}는 ${i+1}등 입니다.`)
      arr4.splice(num,1)
      console.log(arr4)
    }
  }
})
/* --------------------------------------- */
var arr5=
[
  ['홍길동','남성'],
  ['김철수','남성','000'],
  ['이영희','여성'],
  ['김순자','여성','000-000','인천시 부평구'],
]
/* 
  <table>
    <tr>
      <td>홍길동</td>
      <td>남성</td>
    </tr>
    <tr>
      <td>김철수</td>
      <td>남성</td>
    </tr>
  </table>
*/
$('.ex5 button').click(function(){
  $('.ex5 .result').empty()
  $('.ex5 .result').append(`<table></table>`)
  for(var i = 0;i<arr5.length;i++){
    $('.ex5 .result table').append(`<tr>`)
    for(var j=0; j<arr5[i].length;j++){
      $('.ex5 .result table tr:last-child').append(`
        <td>${arr5[i][j]}</td>
      `)
    }
    $('.ex5 .result table').append(`</tr>`)
  }
})
/* ------------------------------------------ */
var arr6=
[
  ['가','나','다','라'],
  ['a','b'],
  ['A','B','C','D',],
]
$('.ex6 button').click(function(){
  $('.ex6 .result').empty()
  for(var i = 0;i<arr6.length;i++){
    for(var j=0; j<arr6[i].length;j++){
      $('.ex6 .result').append(`
        <b>${arr6[i][j]}</b>
      `)
    }
    $('.ex6 .result').append(`<hr>`)
  }
})
/* ------------------------------------------ */
var arr7=[]
var category=['이름', '성별', '전화번호']
$('.ex7 button.add').click(function(){
  var name = $(this).siblings('input.name').val()
  var gender = $(this).siblings('input.gender').val()
  var contact = $(this).siblings('input.contact').val()
  var newArr=[`${name}`, `${gender}`,`${contact}`,]
  arr7.push(newArr)
  alert('추가되었습니다.')
})
$('.ex7 button.check').click(function(){
  var num = arr7.length
  $('.ex7 .result').empty()
  $('.ex7 .result').append(`<table></table>`)
  for(var i = 0 ; i<num;i++){
    $('.ex7 .result table').append(`<tr></tr>`)
    for(var j=0;j<arr7[i].length;j++){
      $('.ex7 .result table tr:last-child').append(`<td class='line'>${category[j]}</td>`)
      $('.ex7 .result table tr:last-child').append(`<td>${arr7[i][j]}</td>`)
    }
  }
})