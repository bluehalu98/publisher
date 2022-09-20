$(function(){
  $(window).load(function(){
    /*
     load이벤트 안에서 써야 이미지크기를 받고나서 masonry가 작동 
    */
    $('.page3-2 ul').masonry({itemSelector:'.page3-2 ul li'})
  })

})