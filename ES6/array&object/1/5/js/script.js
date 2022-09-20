for(var i=0;i<50;i++){
  var n = Math.ceil(Math.random()*7)
  var w = 10+ Math.ceil(Math.random()*40)
  var o = 0.5 + Math.random()*0.5
  var l = Math.random()*100
  var duration = 5+Math.random()*15
  $('.container').append(`
    <img src='./img/bubble/bubble${n}.png' alt=''>
  `)
  $('.container img:last-child').css({
    'width':w,
    'opacity':o,
    'left':`${l}%`,
    'animation-duration':duration+'s'
  })
}