/* 
let btn1 = document.getElementById('btn1')
btn1.addEventListener('click',function(){
  console.log('클릭했습니다.')
}) 
document.getElementById('btn1').addEventListener('click',function(){
  console.log('클릭했습니다.')
}) 

let btn1 = document.getElementsByClassName('btn1')
console.log(btn1)
btn1.addEventListener('click',function(){
  console.log('클릭했습니다.')
})


#홍길동.btn, #아무개.btn
document.getElementByID('홍길동') -> 홍길동(요소)
document.getElementByClassName('btn') -> [홍길동(요소), 아무개(요소)](배열)
getElementByClassName은 배열로 값을 뱉어낸다.
배열에는 eventlistener를 사용할 수 없기 때문에 배열의 값을 찾아서 이벤트를 줘야한다.
예시) 
let btnArr = document.getElementByClassName('btn')
btnArr[0].addEventListener('click',function(){

})
------옛날방식-----
let btnArr = document.getElementByClassName('btn')
btnArrLength = btnArr.length
for(let i = 0;i<btnArrLength;i++){
  btnArr[i].addEventListener('click',function(){
    console.log('클릭')
  })
}
------새로운방식-----
let btnArr = document.getElementByClassName('btn') -->유사배열
btnArray = Array.from(btnArr) --> 유사배열을 진짜 배열로 변환시켜준다
btnArr.forEach(function(el){ forEach는 진짜 배열에만 사용할 수 있다.
  el.addEventListener('click',function(){
    console.log('클릭')
  })
})

let btn = document.querySelector('.ex2 button') --> 앞의 한개만 찾는다(id만 찾는다)
btn.addEventListener('click',function(){
  console.log('클릭')
})

let btn = document.querySelectorAll('.ex2 button') --> all은 모든 요소를 찾는다(배열)
btn.forEach(function(el){ --> querySelector는 진짜 배열을 뱉기때문에 Array.from를 쓰지 않는다.
  el.addEventListener('click',function(){
    console.log('클릭')
  })  
})

*/

let btn = document.querySelectorAll('.ex3 button')
btn.forEach(function(el){
  el.addEventListener('click',function(e){
    //e.target.classList.add('active')
    e.currentTarget.classList.add('active')

    //target는 만약에 자식이 있을경우 자식을 찾는다.
    //currentTarget는 자식이 있더라도 그 요소를 찾는다.
  })
})

let btnArrEx4 = document.querySelectorAll('.ex4 button')
btnArrEx4.forEach(function(el){
  el.addEventListener('click',function(e){
    btnArrEx4.forEach(function(el){
      el.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
  })
})

let btnArrEx5 = document.querySelectorAll('.ex5 button')
btnArrEx5.forEach(function(el){
  el.addEventListener('click',function(e){
    btnArrEx5.forEach(function(el){
      if(el != e.currentTarget){
        el.classList.remove('active')
      }
    })
    e.currentTarget.classList.toggle('active')
  })
})

/* 
  부모찾기
  let btnArrEx6 = document.querySelectorAll('.ex6 div div')
  btnArrEx6.forEach(function(el){
    el.addEventListener('click',function(e){
      e.currentTarget.parentElement.classList.add('active')
    })
  })
*/
//자식찾기
let btnArrEx6 = document.querySelectorAll('.ex6>div')
btnArrEx6.forEach(function(el){
  el.addEventListener('click',function(e){
    btnArrEx6.forEach(function(v){
      let b = v.children
      b = Array.from(b)
      b.forEach(function(v){
        v.classList.remove('active')
      })
    })
    let arr = e.currentTarget.children
    arr = Array.from(arr)
    arr.forEach(function(v){
      v.classList.add('active')
    })
  })
})


let btnArr7 = document.querySelectorAll('.ex7 button')
btnArr7.forEach(function(v){
  v.addEventListener('click',function(e){
    console.log(e.currentTarget.getAttribute('data-n'))
    e.currentTarget.style.backgroundColor= 'red' // $(this).css({'background-color':'red'})
  })
})