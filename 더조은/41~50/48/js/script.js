$(function(){
  var n = 1
  var limit=true
  function change(type, el){
    if(!limit){return false}
    limit=false;
    setTimeout(function(){limit=true},500)
    if(type==='arrow'){
      n+=parseInt($(el).attr('data-n'))
    }else if(type==='move'){
      n = parseInt($(el).attr('data-n'))
    }
    if(n>5){n=1}
    if(n<1){n=5}
    $('.carousel li').stop().fadeOut()
    $('.carousel li.imgbox'+n).stop().fadeIn()
    $('.carousel button').removeClass('active')
    $('.carousel button.btn'+n).addClass('active')
  }
  $('.carousel>button').click(function(){
    change('arrow', $(this))
  })
  $('.indicator button').click(function(){
    change('move',$(this))
  })
})
