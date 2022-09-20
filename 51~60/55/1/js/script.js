$(function(){
  /*
    $(window).click(function(){})의 바닐라 버전
       delta = e.wheelDelta / -120 휠을 제어할때 쓰는 값(바닐라 문법)
    window.addEventListener('mousewheel', function(e){
      e.preventDefault()
    }, {passive:false}) 기능을 다 무시하고 내뜻대로(jqeury에는 이문법이 존재안함)

    $(window).click(function(){})는 약식이고,
    $(window).bind('click',function({}))이 원래의 문법
   */
  var delta
  var currentPage
  $('section').bind('mousewheel', function(e){
    e.preventDefault()
    delta = e.originalEvent.wheelDelta/-120
    currentPage = parseInt($(this).attr('data-n'))
    if(delta===1){
      currentPage++
    }else{
      currentPage--
    }
    if(currentPage<1){
      currentPage=1
    }
    if(currentPage>5){
      currentPage=5
    }
    window.scrollTo({
      top: $('.section'+currentPage).offset().top,
      behavior:"smooth"
    })
  })
})