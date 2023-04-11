$(function(){
  function subVisualHeigth(){
    if(window.matchMedia('(min-width:1000px)').matches){
      //winw와 media query는 값이 다르다(winh는 스크롤의 넓이 포함 x)
      h = winh - 90
    }else{
      h = winh - 70
    }
    $('.sub-visual').height(h)
  }
  subVisualHeigth()
  $(window).resize(function(){
    subVisualHeigth()
  })
  /* ------------------------------------------------ */
  $('.snb-btn').click(function(){
    $(this).toggleClass('active')
    $('.snb').stop().slideToggle()
  })
  /* ------------------------------------------------- */
  var url= location.href
  var category
  if(url.match('about')){// query string, 라우팅처리
    category='about'
  }else if(url.match('room-info')){
    category='room-info'
  }else if(url.match('book')){
    category='book'
  }else if(url.match('calendar')){
    category='book'   
    $('.sub-title').html('실시간 예약확인')
  }else if(url.match('around')){
    category='around'
  }else if(url.match('customer')){
    category='customer'
  }else if(url.match('member')){
    category='member'
  }
  $('.sub-visual figure.'+category).show()
  /* single page 에 해당하는 sub 메뉴 출력 */
  $('.current-post-parent').parent('ul').parent('li').show()
})