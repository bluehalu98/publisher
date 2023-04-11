$(function(){
  function getWinInfo(){
    scrt = $(window).scrollTop()
    scrl = $(window).scrollLeft()
    winh = $(window).innerHeight()
    winw = $(window).innerWidth()
  }
  /* 
    전역변수
    변수앞에 window.를 붙여서 확실하게 표시하기도한다
   */
  getWinInfo()
  $(window).resize(function(){
    getWinInfo()
  }).scroll(function(){
    getWinInfo()
  })
})