var shopping = {
  purchaseCnt : 5, //key : value , (무조건 ,를 넣어야한다)
  basketCnt : 20,
  likeCnt : 100,
}//[]는 배열 {}는 객체
//shopping.basketCnt key 값 호출
//shopping.basketCnt = 6 key 값 변경
//delete shopping.basketCnt key 삭제

var list = [
  {
    name : '진영진',
    age : 24,
    gender : '남성',
  },
  {
    name : '아무개',
    age : 20,
    gender : '여성',
  }, 
  {
    name : '무명씨',
    age : 40,
    gender : '남성',
  },
]
/*   for(var i=0;i<list.length;i++){
    $('.ex1 .result').append(`<p></p>`)
    $('.ex1 .result p:last-child').append(`
      name : ${list[i].name}  <br>
      age : ${list[i].age}  <br>
      gender : ${list[i].gender}  <br>
    `)
  } */
  /* 
    list.forEach(function(v){
    $('.ex1 .result').append(`
      <p>
       ${v.name} <br>
       ${v.age} <br>
       ${v.gender} <br>
      </p>
    `)
  }) // foreach 문
  */
$('.ex1 button').click(function(){
  list.map(function(v){
    $('.ex1 .result').append(`
      <p>
       ${v.name} <br>
       ${v.age} <br>
       ${v.gender} <br>
      </p>
    `)
  })//map 문 (map은 foreach문과 다르게 배열을 deep copy 할 수 있다)
})
var ex2Arr=[]
$('.ex2 .input').click(function(){
  ex2Arr.push(
    {
      name : $('.ex2 input[type=text]').val(),
      age : $('.ex2 input[type=number]').val(),
      gender : $('.ex2 input[type=radio]:checked').val(),
    },
  )
})
$('.ex2 .output').click(function(){
  ex2Arr.map(function(v){
    $('.ex2 .result').append(`
      이름 : ${v.name} <br>
      나이 : ${v.age}<br>
      성별 : ${v.gender}<br>
      <hr>
    `)
  })
})
var ex3Arr=[]
$('.ex3 button').click(function(){
  ex3Arr.map(function(v){
    if($('.ex3 .id').val()===`${v.id}`){
      alert('이미 사용중인 아이디입니다.')
    }else{
      ex3Arr.push(
        {
          id : $('.ex3 .id').val(),
          pw : $('.ex3 .pw').val(),
        },
      )
    }
  })
  console.log(ex3Arr);
})
var ex4Arr=[
  {
    name : '진',
    age : 20,
    gender : '남',
  },
  {
    name : '영',
    age : 24,
    gender : '여',
  },
  {
    name : '박',
    age : 23,
    gender : '남',
  },
  {
    name : '이',
    age : 26,
    gender : '여',
  },
  {
    name : '김',
    age : 24,
    gender : '여',
  },
  {
    name : '위',
    age : 25,
    gender : '남',
  },
]
/* 
  var arr=[1,2,3,4,5]
  var arr2 = arr.map(function(v){
    if()
  })
*/
var check=false
$('.ex4 button').click(function(){
  $('.ex4 .result').empty()
  var search = $('.ex4 input').val()
  var target = ex4Arr.map(function(v){
    if(search===`${v.name}`){
      $('.ex4 .result').append(`
        ${v.name}님은 ${v.age}살의 ${v.gender}성입니다.
      `)
      return v
    }
  })
/*   if(!check){
    $('.ex4 .result').append(`
        ${search}님은 등록되어있지 않습니다
      `)
  } */
  console.log(target);
  if(target.length===0){
    $('.ex4 .result').append(`
        ${search}님은 등록되어있지 않습니다
    `)
    return false
  }
})
/* ------------------------------------------------ */
  var arr5 = [0,-1,15,-2,1,3,-4,-5]
$('.ex5 button').click(function(){
  var arr5L = arr5.filter(function(v){//map은 배열길이는 유지해서 undefined값으로 저장
    if(v<0){
      return v
    }else{
      return false
    }
  })
  $('.ex5 .result').append(`
    음수는 ${arr5L.length}개 입니다.
  `)
})

