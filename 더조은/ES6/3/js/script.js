/* 
$(function(){}) -> $(document).ready(function(){}) //jquery 비동기화
document.addEventListener('DOMContentLoaded',function(){})//바닐라 비동기화

$(window).load(function(){})
window.addEventListener('load',function(){})
*/

/* function fn1(){
  return 0//return문 아래로는 실행되지않기때문에 마지막에 적는다.
}
let n1 = fn1()
console.log(n1); */

document.getElementById('btn1').addEventListener('click',function(){
  let arr = [1,2,3,]
  arr = arr.map(function(v){//원래 객체와 동일한 길이의 배열을 반환한다.
    return v+5
  })
  console.log(arr);
})
document.getElementById('btn2').addEventListener('click',function(){
  let arr = [1,2,3,]
  arr = arr.filter(function(v){//조건에 해당하는 값만 배열로 반환한다.
    return v<3
  })
  console.log(arr);
})
document.getElementById('btn3').addEventListener('click',function(){
  let n=5
  //삼항연산자
  n = (n>1)? 2 : 3 //앞의 조건이 true이면 앞의 값(2)을, false면 뒤의 값(3)을 return한다
  console.log(n);
})
document.getElementById('btn4').addEventListener('click',function(){
  let n=5
  //이항연산자
  n = (n>1) && 2 //앞의 조건이 true이면 앞의 값(2)을 return한다(false면 false return)
  //n = (n>1) || 2 앞의 조건이 false이면 앞의 값(2)을 return한다(true면 false return)
  console.log(n);
})
/* 
  function fn(){}
  fn = function(){}
  fn = () => {} 호이스팅이 되지않는다.
  
*/
document.getElementById('btn5').addEventListener('click', ()=>{
  alert('화살표함수')
})
let fn=()=> 1 //let fn = () => { return 1 }
let fn2=(a)=>a//function fn2(a){return a}

let arr = [1,2,3,]
arr.map(v=> v+1)





