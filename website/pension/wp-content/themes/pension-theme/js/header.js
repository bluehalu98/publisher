$(function(){
  /* ----------------------------------- */
  $('.mbtn').click(function(){
    $(this).toggleClass('active')
    //$('body::before').stop().fadeToggle()
    $('.nav-bg').stop().fadeToggle()
    $('.gnb').toggleClass('active')
  })//click
  /* ----------------------------------- */
  $('.gnb .menu-menu-container>ul>li>a').click(function(e){
    e.preventDefault()
    $('.gnb .menu-menu-container>ul>li>ul').stop().slideUp()
    $(this).siblings('ul').stop().slideToggle()
    $('.gnb .menu-menu-container>ul>li>a').not($(this)).removeClass('active')
    $(this).toggleClass('active')
  })
  /* ----------------------------------- */
  //$('.theme-guide').empty()
  //$('.theme-guide').remove()
})