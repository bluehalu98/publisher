$(function () {
  var isMobile = false;
  var filter = "win16|win32|win64|mac";
  if (navigator.platform) {
    isMobile = filter.indexOf(navigator.platform.toLowerCase()) < 0;
  }//if navgtor

  if(!isMobile){
    var delta
    var speed = 0
    window.addEventListener('mousewheel', function (e) {
      e.preventDefault()
      delta = e.wheelDelta / -120
      //speed = 30 * delta//등속도 스크롤
      speed += 5 * delta
    }, { passive: false })

    setInterval(function () {
      window.scrollTo({
        top: scrt + speed,
      })
      speed = speed * 0.95
    }, 20)
  }//if isMobile
})//ready