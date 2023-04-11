let isLogged = localStorage.getItem('logged')
//window.localStorage.removeItem('logged')
if(isLogged){
  //document.querySelector('.ex1 form').remove()
  document.querySelector('.ex1 form').style.display='none'//$('.ex1 form').css({'display':'none'})

}
document.querySelector('.ex1 button').addEventListener('click',(e)=>{
  e.preventDefault()
  let id = document.querySelector('.ex1 input[type=text]').value
  let pw = document.querySelector('.ex1 input[type=password]').value
  
  // window.localStorage.setItem('a','1') a = 1이라는것을 하드디스크에 저장
  // window.localStorage.getItem('a') a값을 가져온다
  // window.localStorage.removeItem('a') a값 제거


  let isChecked = document.querySelector('.ex1 input[type=checkbox]').checked //true, false

  if(isChecked){
    window.localStorage.setItem('logged', true)
  }
 
  console.log(window.localStorage.getItem('logged'))
}) 

/* -------------------------------------------------------------------------- */
let userArrJson = localStorage.getItem('userArrJson')
let userArr
if(userArrJson){
  userArr=JSON.parse(userArrJson)//json 데이터를 자바스크립트 데이터로 변경
}else{
  userArr=[]
}
document.querySelector('.ex2 .add').addEventListener('click', ()=>{
  let userObj={}
  userObj.name = document.querySelector('.ex2 .name').value
  userObj.age = document.querySelector('.ex2 .age').value
  userArr.push(userObj)
  let userArrJson=JSON.stringify(userArr)//자바스크립트 데이터를 json 데이터로 변환
  localStorage.setItem('userArrJson',userArrJson)
  console.log(userArr);
})
document.querySelector('.ex2 .reset').addEventListener('click',()=>{
  localStorage.removeItem('userArrJson')
})
document.querySelector('.ex2 .show').addEventListener('click',()=>{
  let result = document.querySelector('.ex2 .result')
  result.innerHTML=''
  let ul = document.createElement('ul')
  userArr.forEach((v)=>{
    let li = document.createElement('li')
    li.innerHTML = `${v.name} ${v.age}`
    ul.append(li)
  })
  result.append(ul)
})