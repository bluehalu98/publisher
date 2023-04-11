$(function(){
  /* sub-visual figure  */
  var url = location.href
  var category
  if(url.match('about')){
    category = 'about'
  }else if(url.match('room-info')){
    category = 'room-info' 
  }else if(url.match('book')){
    category = 'book'
  }else if(url.match('calnedar')){
    category = 'book' 
    $('.sub-title').html('실시간 예약 확인')
  }else if(url.match('around')){
    category = 'around'
  }else if(url.match('customer')){
    category = 'customer'
  }else if(url.match('member')){
    category = 'member'
  }

  $('.sub-visual   figure.'+category).show()
  /* single page에 해당하는 sub메뉴 출력 */
  $('.current-post-parent').parent('ul').parent('li').show()
  /* sub-visual 높이 조정----------------------- */
  var h
  function subVisualHeight(){
    if(window.matchMedia('(min-width:1000px)').matches){
      h = winh - 90
    }else{
      h = winh - 70
    }
    $('.sub-visual').height(h)
  }//fn
  subVisualHeight()
  $(window).resize(function(){
    subVisualHeight()
  })
  /* snb-btn ----------------------------------- */
  $('.snb-btn').click(function(){
    $(this).toggleClass('active')
    $('.snb').stop().slideToggle() 
  })//click
})//ready