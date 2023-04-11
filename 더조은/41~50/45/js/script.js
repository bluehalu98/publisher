$(function(){
  var col = 1 
  var row = 1
  var cnt = 0
  function move(el){
    col += parseInt($(el).attr('data-col'))
    row += parseInt($(el).attr('data-row'))
    if(col > 6){col=1}
    if(col < 0){col=5}
    if(row > 6){row=1}
    if(row < 0){row=5}
    $('.box').css({
      'left': (col-1)*50+'px',
      'top': (row-1)*50+'px'
    })
  }
  function game(){
    cnt++
    if(col===2 && row===4){
      alert('축하드립니다 탈출하셨습니다')
      col=1
      row=1
      $('.box').css({
        'left':'0',
        'top':'0'
      })
      cnt=0
    }
    if(cnt>3 && !(col===2 && row===4)){
      alert('4번이상 움직이셨지만 탈출하지 못했습니다 ㅠㅠ')
      col=1
      row=1
      $('.box').css({
          'left':'0',
          'top':'0'
      })
      cnt=0
    }
  }
  $('.indicator button').click(function(){
    move($(this))
    game()
  })
})