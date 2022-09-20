$(function(){
  var isMobile = false; 
  var filter = "win16|win32|win64|mac";
  if (navigator.platform) {
    isMobile = filter.indexOf(navigator.platform.toLowerCase()) < 0;
  }//if navigator
  if(!isMobile){
    var speed=0
    var delta
    window.addEventListener('mousewheel', function(e){
      e.preventDefault()
      delta=e.wheelDelta/-120
      /* speed=50*delta  등속도 스크롤 */
      speed+=10*delta
    },{passive:false})
    setInterval(function(){
      window.scrollTo({
        top: scrt + speed,
      })
      speed *=0.9
    },20)
  }
})