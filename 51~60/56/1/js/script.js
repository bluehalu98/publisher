/* 
  1. scroll active(조건문), parallax(공식)
  2. width나 heigth 등에는 적용하지 말것 (다른 레이아웃에 영향을 끼치는 속성)
  3. 공식 적용후 조건문으로 변화량을 제어해야할 경우가 있다
  4. offset이 변하는 객체(크기, 수직위치가 변하는)를 스크롤 공식에 적용하면 안됨
    (객체를 한번 싼다음에 고정적인 객체를 기준으로 한다)
  5. 값에 민감한 속성은 속도를 미세하게 설정(scale, opacity등)
  6. 반대칭 모션을 parallax에 적용할 경우 Math.abs()와 속도를 음수로 설정
  7. 그리드 구조에 parallax효과를 적용할 경우 each문을 사용
  8. 이미적용된 속성에 parallax 적용하지말것
*/
$(function(){
  var meta
  var offt
  var offh
  function parallax(){
    offt = $('.box1').offset().top
    offh = $('.box1').innerHeight()
    offw = $('.box1').innerWidth()
    meta = 100 + (scrt - (offt-winh*0.5+offh*0.5)) * 0.1
    /* 
      물체의 높이가 웹브라우저 상단에 위치할때 100 
      100은 원하는 값(넓이) 
      (offt-winh*0.5+offh*0.5)는 원하는 스크롤높이
      (scrt-offt)는 물체가 스크롤에 닿는순간
      0.2는 변하는 속도, 양수 또는 음수로 변하는 방향 설정
    */
    if(meta<0){meta=0}
    if(meta>100){meta=100}
    /* 
      width값은 음수로주면 오류가 생기므로 방지한다 
      또한 width가 너무 커지는순간 가로스크롤바가 생기므로 
      해당섹션을 하나 만든뒤, 그 섹션에 overflow를 해줘야한다
    */
    $('.box1').css({'width':meta})
    /* ------------------------------------------------------ */
    offt=$('.box2').offset().top
    offh=$('.box2').innerHeight()
    meta = 1 +(scrt-(offt-winh*0.5+offh*0.5)) * -0.002
    /* Math.abs()는 절대값구하기, 속도에 음수를 넣으면 다이아몬드 형태가 나옴 */
    if(meta<0){meta=0}/* scale은 음수가되면 객체가 뒤집히기때문에 막아줘야함 */
    $('.box2 div').css({'transform':'scale('+meta+')'})
    /* ------------------------------------------------- */
    offt=$('.box3').offset().top
    offh=$('.box3').innerHeight()
    meta=1+Math.abs(scrt-(offt-winh*0.5+offh*0.5))*-0.002
    if(meta<0){meta=0}
    $('.box3 div').css({'opacity':meta})
    /* ---------------------------------------- */
    offt=$('.box4').offset().top
    offh=$('.box4').innerHeight()
    meta=50+Math.abs(scrt-(offt-winh*0.5+offh*0.5))*-0.09
    if(meta<0){meta=0}
    $('.box4').css({'border-radius':meta+'%'})
    /* -------------------------------------------------------- */
    $('.box5 li').each(function(){
      offt = $(this).offset().top
      offh = $(this).innerHeight()
      meta = 0 + (scrt - (offt-winh*0.5+offh*0.5)) * 0.1
      $(this).children('img').css({'transform':'scale(1.4) translateY('+meta+'px)'})
    })

  }
  parallax()
  $(window).resize(function(){
    parallax()
  }).scroll(function(){
    parallax()
  })
})