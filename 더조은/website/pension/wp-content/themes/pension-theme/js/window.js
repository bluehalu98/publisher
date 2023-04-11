$(function(){
  function getWinInfo(){
    scrt = $(window).scrollTop()
    scrl = $(window).scrollLeft()
    winw = $(window).width()
    winh = $(window).height()
    doch = $(document).height()
  }//fn getWinInfo 
   
  getWinInfo()

  $(window).resize(function(){
    getWinInfo()
  }).scroll(function(){
    getWinInfo()
  })//window event
})//ready