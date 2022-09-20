/* 
참조
let arr1 = ['가','나','다']
let arr1Copy = arr1 
*/
let arr1 = ['가','나','다']
let arr1Copy = []
document.querySelector('.btn1').addEventListener('click',()=>{
  for(let i = 0 ; i < arr1.length ; i++){
    arr1Copy.push(arr1[i])
  }
})
/* ------------------------------ */
let arr2 = ['가','나','다']
document.querySelector('.btn2').addEventListener('click',()=> {
  let arr2Copy = arr2.map(v=>v)
})
/* ------------------------------ */
let arr3 =  ['가','나','다']
document.querySelector('.btn3').addEventListener('click',()=>{
  let arr3Copy = [...arr3]//전개연산자(스프레드연산자)
  arr3.pop()
  console.log(arr3Copy);
})
/* ------------------------------ */
let obj4 = {
  이름 : '홍길동',
  나이 : 20,
  성별 : '남'
}
document.querySelector('.btn4').addEventListener('click',()=>{
  let obj4Copy = {...obj4}
  obj4.name = '김'
  console.log(obj4Copy);
})
/* ------------------------------- */
let arr5 = [
  {이름 : '홍', 나이 : 20, 성별 : '남'},
  {이름 : '김', 나이 : 24, 성별 : '여'},
  {이름 : '이', 나이 : 22, 성별 : '남'},
]
document.querySelector('.btn5').addEventListener('click', ()=>{
  /* let arr5Copy = [...arr5] shallow copy 얕은복사 */
  let arr5Copy = arr5.map(v=> {return {...v}})//deep copy 깊은 복사
})
/* -------------------------------- */
let arr6 = [
  {
    name:'홍길동',  
    gender: '남',  
    age:24,  
  },
  {
    name:'아무개',  
    gender: '여',  
    age:21,  
  },
  {
    name:'진영진',  
    gender: '남',  
    age:25,  
  },
  {
    name:'김현아',  
    gender: '여',  
    age:29,  
  },
  {
    name:'위성은',  
    gender: '남',  
    age:27,  
  },
  {
    name:'박민규',  
    gender: '남',  
    age:26,  
  },
]
document.querySelector('.ex6 .btn1').addEventListener('click',()=>{
  let obj6 = {}
  obj6.name= document.querySelector('.ex6 input[type=text]').value
  obj6.gender= document.querySelector('.ex6 input[type=radio]:checked').value
  obj6.age= document.querySelector('.ex6 input[type=number]').value
  arr6.push(obj6)
  console.log(arr6);
})
document.querySelector('.ex6 .btn2').addEventListener('click',()=>{
  let result = document.querySelector('.ex6 .result')
  result.innerHTML=""//empty기능
  let ul = document.createElement('ul')
  arr6.forEach((v)=>{
    let li = document.createElement('li')
    li.innerHTML=`${v.name} ${v.gender}  ${v.age}`
    ul.append(li)
  })
  result.append(ul)
})
document.querySelector('.ex6 .btn3').addEventListener('click',()=>{
  let result = document.querySelector('.ex6 .result')
  result.innerHTML=''
  let ul = document.createElement('ul')
  let arr6Copy = arr6.filter(v=>v.gender==='여')
  arr6Copy.forEach(v=>{
    let li = document.createElement('li')
    li.innerHTML=`${v.name} ${v.gender} ${v.age}`
    ul.append(li)
  }) 
  result.append(ul)
})
/* 
  let arr=[1,4,3,10,5]
  arr2 = [...arr]
  arr2.sort((a,b)=>{
    return a-b
  })
*/
document.querySelector('.ex6 .btn4').addEventListener('click',()=>{
  let result = document.querySelector('.ex6 .result')
  result.innerHTML=''
  let ul = document.createElement('ul')

  let arr6Sort = [...arr6]
  arr6Sort.sort((a,b)=> parseInt(a.age)-parseInt(b.age))
  arr6Sort.forEach(v=>{
    let li = document.createElement('li')
    li.innerHTML=`${v.name} ${v.gender} ${v.age}`
    ul.append(li)
  })
  result.append(ul)
})