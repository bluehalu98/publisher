$(function(){
  for(i=0;i<7;i++){
    var col = Math.ceil(Math.random()*10)
    var row = Math.ceil(Math.random()*10)
    $('.mine'+i).css({
      'left':(col-1)*90+'px',
      'top':(row-1)*90+'px'
    })
  }
  $('.hint').click(function(){
    $('.container div').toggleClass('active')
  })
})