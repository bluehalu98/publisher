/* 
  호이스팅
  스크립트가 에러를 안내기위해서 var나 function을 쓸경우 최상단으로 올린뒤 작동하지만
  이때문에 순서를 바꿔버리고 이로인해서 스크립트 순서가 꼬이거나 메모리효율이 떨어진다.

  window.a = 1 전역변수 window는 생략하고 a=1로 쓰는것도 동일하다(권장x)
  console.log(n) 

  console.log(n)
  var n 
  웹브라우저는 var를 만나는순간 그 변수를 최상단으로 끌어올려서 작동한다.

  fn()
  function fn(){
    console.log('ttt')
  }
  function도 var와 마찬가지로 웹브라우저가 최상단으로 끌어올려서 작동한다.
  
  이때문에 웹브라우저의 성능이 떨어질수도 있다.
  그래서 최신 스크립트에서는 var와 function은 잘 쓰지 않는 추세이다

  var let const => (scope)
  
  ------------ let ----------------
  let은 호이스팅이 일어나지않는다!
  console.log(a);
  let a = 1

  let은 동일한 변수를 선언할 수 없다
  let b = 1
  let b = 2
  console.log(b)

  ------------ const ---------------
  const는 한번 선언한뒤 값을 변경할 수 없다.
  const a = 1
  a = 2

  const의 값이 바뀌지않는것은 scope안에서 단 한번만 선언할수 있다는것이다.
  즉 function안에서는 한번만 선언되었기때문에 상관이없다.
  $('button').click(function(){
    const a = $(this).attr('data-n')
    console.log(a)
  })

  const로 선언한 array 나 obj의 값을 바꾸는것은 에러가 나지않는다
  (선언한 변수자체를 건들이지만않으면 상관없다.)
  즉 =를 한번만 사용하면 괜찮다.
  const arr = [1,2,3]
  arr.push(4)

  const obj = {
    name : '홍길동',
    age : 24,
  }
  obj.name='아무개'
  console.log(obj)
*/

/*
  블럭레벨, 함수레벨

  var a = 1
  function fn(){
    var a = 2
    if(true){
      var a = 3
    }
    consolo.log(a)//3
  }
  console.log(a)//1
  fn()

  var은 함수레벨로 작동하기때문에 {}기준이 아니라 function안에서 같은 값을 갖지만
  let와 const는 블럭레벨로 작동하기때문에 {}안에서만 작동하기때문에 다른 값을 갖는다.
  function fn(){
    let a = 1
    if(true){
      let a = 2
    }
    console.log(a)//1
  }
*/