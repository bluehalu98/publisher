$(function(){
  var meta
  var meta2
  var offt
  var offh
  var imgt
  var imgh
  function parallax(){
    $('section ul li').each(function(){
      offt = $(this).offset().top
      offh = $(this).innerHeight()
      imgt=$(this).children('div').children('figure').offset().top
      imgh=$(this).children('div').children('figure').innerHeight()
      meta = 1 + Math.abs(scrt - (offt-winh*0.5+offh*0.5))*-0.0009
      if(meta<0){meta=0}
      $(this).children('div').css({'transform':'scale('+ meta+')'})
      meta = 0 + (scrt-(imgt-winh*0.5+imgh*0.5))*0.15
      /* $(this).find('img') 자식이 아닌 자손에서 찾는 메소드 */
      $(this).children('div').children('figure').children('img').css({
        'transform': 'scale(1.5) translateY('+meta+'px)'
      })

      if(scrt>=offt-winh*0.8){
        $(this).addClass('active')
      }else{
        $(this).removeClass('active')
      }
    })
  }
  parallax()
  $(window).resize(function(){
    parallax()
  }).scroll(function(){
    parallax()
  })
})