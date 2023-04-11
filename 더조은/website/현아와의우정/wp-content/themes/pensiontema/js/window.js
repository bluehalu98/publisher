$(function(){
  function getWinInfo(){
    scrt = $(window).scrollTop()
    scrl = $(window).scrollLeft()
    winw = $(window).width()
    winh = $(window).height()
    doch = $(document).height() //문서의높이 = 문서의길이
  }/* fn getWinInfo */
  getWinInfo()
  $(window).resize(function(){
    getWinInfo()
  }).scroll(function(){
    getWinInfo()
  })

})
