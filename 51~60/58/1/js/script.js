$(function(){
  $('figure.imgbox').mousemove(function(e){
    var x =e.pageX
    var y =e.pageY
    var objx=$(this).offset().left
    var objy=$(this).offset().top
    $(this).children('.color').css({
      '-webkit-mask-position':(x-50-objx)+'px '+ (y-50-objy)+'px'
    })
  })
  $('.zoom-container').mousemove(function(e){
    var mouseX = e.pageX
    var mouseY = e.pageY
    var bigOffsetLeft = $('.big-img').offset().left
    var bigOffsetTop = $('.big-img').offset().top
    var maskSize = 200
    var maskX = mouseX - bigOffsetLeft -maskSize*0.5
    var maskY = mouseY - bigOffsetTop -maskSize*0.5
    var mouseStartX = $(this).offset().left
    var mouseStartY = $(this).offset().top
    var containerWidth = $(this).innerWidth()
    var containerHeight = $(this).innerHeight()
    var bigWidth = $('.big-img').innerWidth()
    var bigHeight = $('.big-img').innerHeight()
    var mouseRangeX = containerWidth
    var mouseRangeY = containerHeight
    var mouseRatioX=(mouseX-mouseStartX)/mouseRangeX
    var mouseRatioY=(mouseY-mouseStartY)/mouseRangeY
    var bigMoveRangeX=containerWidth-bigWidth
    var bigMoveRangeY=containerHeight-bigHeight
    var bigX = mouseRatioX * bigMoveRangeX
    var bigY = mouseRatioY * bigMoveRangeY
    $('.big-img').css({
      '-webkit-mask-position': maskX+'px '+maskY+'px',
      'left':bigX,
      'top':bigY
    })
  })

})
