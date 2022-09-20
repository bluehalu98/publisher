$(function(){
  var n = 1
  var isClick=true
  var timeoutID
  var intervalID=setInterval(() => {
    n++
    change()
  }, 2000);
  function change(){
    // 7번째 칸으로 간다면 트랜지션을 제거하고 1번째 칸으로 이동
    // 트랜지션을 다시 설정하고 2번으로 목적지 재설정
    if(n>6){
      n=1
      $('.img-container').addClass('non-transition').css({'left':(n-1)*-100+'%'})
      $('.img-container').css('left')// 2번이상 css명령어를 사용하면 동일속성을 가진 css명령어로 확인필수
      $('.img-container').removeClass('non-transition')
      n=2
    }
    if(n<0){
      n=5
      $('.img-container').addClass('non-transition').css({'left':(n-1)*-100+'%'})
      $('.img-container').css('left')// 2번이상 css명령어를 사용하면 동일속성을 가진 css명령어로 확인필수
      $('.img-container').removeClass('non-transition')
      n=4
    }
    $('.img-container').css({'left':(n-1)* -100+'%'})
    //브래드크럼
    $('.indicator button').removeClass('active')
    $('.indicator .btn'+n).addClass('active')
  }
  function autoplay(){
    clearTimeout(timeoutID)
    clearInterval(intervalID)
    timeoutID = setTimeout(() => {
      intervalID=setInterval(() => {
        n++ 
        change()
      }, 2000);
    }, 3000);
  }
  $('.next').click(function(){
    if(!isClick){return false}
    isClick=false
    setTimeout(function(){isClick=true},500)
    n++
    change()
    autoplay()
  })
  
  $('.prev').click(function(){
    if(!isClick){return false}
    isClick=false
    setTimeout(function(){isClick=true},500)
    n--
    change()
    autoplay()
  })
  $('.indicator button').click(function(){
    n =$(this).val()
    change()
    autoplay()
  })
})