let obj = {
  이름:'홍길동',
  성별:'남',
  나이:24,
}

let {이름, 성별, 나이} = obj // 구조분해
//let 이름 = obj.이름
//let 성별 = obj.성별
//let 나이 = obj.나이

let arr1=['가', '나', '다']
let [첫글자,,]=arr1
console.log(첫글자)//가
/* ---------------------------------------------------- */
let arrList = [
  {이름:'홍길동',나이:22,성별:'여'},
  {이름:'아무개',나이:24,성별:'여'},
  {이름:'진영진',나이:25,성별:'남'}
]
arrList.forEach(v=>{
  let {이름,나이,성별} = v 
  console.log(이름,나이,성별)
})