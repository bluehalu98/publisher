$(function () {
  var delta
  var speed = 0

  window.addEventListener('mousewheel',function(e){
    e.preventDefault()
    delta = e.wheelDelta/-120
/*     speed = 30 * delta 등속도 스크롤 */
    speed += 5 * delta /* 가속도 */
  },{passive:false})

  setInterval(function(){ //setinterval 은 반복하다
    window.scrollTo({
      top: scrt + speed ,
    })
    speed = speed * 0.9
  },20) // 10으로가면 너무 FPS가 100이됨, 컴퓨터 부하 걸릴까봐 20~50 사이쓰는게좋음
})