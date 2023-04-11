$(function(){
  var cnt = 1
  var limit = true
  var si
  var st
  si = setInterval(() => {
    cnt++
    if(cnt>5){cnt=1}
    if(cnt<1){cnt=5}
    $('.img-container li').stop().fadeOut()
    $('.img-container .imgbox'+cnt).stop().fadeIn()
    $('.controls button').removeClass('active')
    $('.controls .btn'+cnt).addClass('active')
  }, 1000);

  function autoPlay(){
    clearTimeout(st)//stack중첩 방지
    clearTimeout(si)
    st = setTimeout(() => {
      si = setInterval(() => {
        cnt++
        if(cnt>5){cnt=1}
        if(cnt<1){cnt=5}
        $('.img-container li').stop().fadeOut()
        $('.img-container .imgbox'+cnt).stop().fadeIn()
        $('.controls button').removeClass('active')
        $('.controls .btn'+cnt).addClass('active')
      }, 1000);
    }, 5000);
  }
  function fade(el){
    if(!limit){return false}
    limit=false
    setTimeout(() => {
      limit=true      
    }, 500);
    if($(el).attr('data-type')==='fade'){
    cnt+=parseInt($(el).val())
    }else{cnt=parseInt($(el).val())}
    if(cnt>5){cnt=1}
    if(cnt<1){cnt=5}
    $('.img-container li').stop().fadeOut()
    $('.img-container .imgbox'+cnt).stop().fadeIn()
    $('.controls button').removeClass('active')
    $('.controls .btn'+cnt).addClass('active')
  }

  $('.carousel button').click(function(){
    fade($(this))
    autoPlay()
  })
})