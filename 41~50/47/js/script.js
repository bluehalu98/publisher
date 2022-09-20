$(function(){
  var col=1
  var row=1
  var isClick = true
  var cnt=0
  var intervalID1
  function move(el){
    if(isClick === false){
      return false
    } 
    isClick=false;
    setTimeout(function(){
      isClick=true
    },1000)
    cnt++
    /* clearInterval(intervalID1)
    intervalID1 = setInterval(function(){
      col+=parseInt($(el).attr('data-col'))
      row+=parseInt($(el).attr('data-row'))
      if(col>6){
        col=0
        $('.box').addClass('remove-transition').css({'left' : (col-1)*20 +'%'})
        $('.box').css('left')
        $('.box').removeClass('remove-transition')
        col=1
      }
      if(row>6){
        row=0
        $('.box').addClass('remove-transition').css({'top' : (row-1)*20 +'%'})
        $('.box').css('top')
        $('.box').removeClass('remove-transition')
        row=1
      }
      if(col<0){
        col=6
        $('.box').addClass('remove-transition').css({'left' : (col-1)*20 +'%'})
        $('.box').css('left')
        $('.box').removeClass('remove-transition')
        col=5
      }
      if(row<0){
        row=6
        $('.box').addClass('remove-transition').css({'top' : (row-1)*20 +'%'})
        $('.box').css('top')
        $('.box').removeClass('remove-transition')
        row=5
      }
      if($(el).attr('class')==='reset'){
        col=1
        row=1
      }
      $('.container .box').css({
        'left' : (col-1)*20 + '%',
        'top' : (row-1)*20 + '%'
      })
    },1000) */
    col+=parseInt($(el).attr('data-col'))
    row+=parseInt($(el).attr('data-row'))
    if(col>6){
      col=0
      $('.box').addClass('remove-transition').css({'left' : (col-1)*20 +'%'})
      $('.box').css('left')
      $('.box').removeClass('remove-transition')
      col=1
    }
    if(row>6){
      row=0
      $('.box').addClass('remove-transition').css({'top' : (row-1)*20 +'%'})
      $('.box').css('top')
      $('.box').removeClass('remove-transition')
      row=1
    }
    if(col<0){
      col=6
      $('.box').addClass('remove-transition').css({'left' : (col-1)*20 +'%'})
      $('.box').css('left')
      $('.box').removeClass('remove-transition')
      col=5
    }
    if(row<0){
      row=6
      $('.box').addClass('remove-transition').css({'top' : (row-1)*20 +'%'})
      $('.box').css('top')
      $('.box').removeClass('remove-transition')
      row=5
    }
    if($(el).attr('class')==='reset'){
      col=1
      row=1
      cnt=0
    }
    if(col===5&&row===2){
      alert('불을 밟으셨습니다 기회가 1회 차감됩니다')
      cnt++
    }
    if(col===1&&row===3){
      alert('빙판을 밟아서 넘어졌습니다 기회가 1회 차감됩니다')
      cnt++
    }
    if(col===4&&row===5){
      alert('늪지대에 빠졌습니다 처음으로 돌아갑니다')
      col=1
      row=1
    }
    if(col===3&&row===2){
      alert('벽으로 막혀있습니다 다른길을 찾아보세요')
      cnt--
      col-=parseInt($(el).attr('data-col'))
      row-=parseInt($(el).attr('data-row'))
    }
    if(cnt>3 && !(col===4&&row===3)){
      alert('탈출에 실패하셨습니다 ㅠㅠ 다시 도전하세요')
      setTimeout(function(){
        col=1
        row=1
        cnt=0
        $('.container .box').css({
          'left' : (col-1)*20 + '%',
          'top' : (row-1)*20 + '%'
        })
      },1000)
    }else if(col===4&&row===3){
      alert('탈출하셨습니다! 축하드립니다')
      setTimeout(function(){
        col=1
        row=1
        cnt=0
        $('.container .box').css({
          'left' : (col-1)*20 + '%',
          'top' : (row-1)*20 + '%'
        })
      },1000)
    }
    $('.container .box').css({
      'left' : (col-1)*20 + '%',
      'top' : (row-1)*20 + '%'
    })
  }
  $('.indicator button').click(function(){
    move($(this))
  })
})//ready
/* 
css명령어는 이벤트안에서 같은속성을 2번사용하면 처음 사용한 속성을 무시한다
2번 사용하게 될경우 .css('속성')을 사용하여 확인하고난뒤에 사용한다
 */