$(function(){
  let speed = 0
  let delta

  window.addEventListener('wheel',function(e){
    e.preventDefault()
    delta = e.wheelDelta / -120
    //speed = 50*delta 등속 스크롤
    speed += 5 * delta
  },{passive:false})

  setInterval(function(){
    window.scrollTo({
      top:  scrt + speed
    })
    speed *= 0.95
  },20)
})