$(function(){
  function scrollspy(){
    var scrt = $(window).scrollTop()
    var offset1 = $('.section1').offset().top-70
    var offset2 = $('.section2').offset().top-70
    var offset3 = $('.section3').offset().top-70
    var offset4 = $('.section4').offset().top-70
    var offset5 = $('.section5').offset().top-70
    var section
    if(scrt<offset2){
      section =1 
    }
    else if(scrt>=offset2&&scrt<offset3){
      section =2 
    }
    else if(scrt>=offset3&&scrt<offset4){
      section =3 
    }
    else if(scrt>=offset4&&scrt<offset5){
      section =4 
    }
    else{
      section =5
    }
    $('header a').removeClass('active')
    $('.btn'+section).addClass('active')
  }
  scrollspy()
  $(window).scroll(function(){
    scrollspy()
  }).resize(function(){
    scrollspy()
  })
  $('header a').click(function(e){
    e.preventDefault()
    var sectionN = $(this).attr('data-n')
    var sectionT=$('.section'+sectionN).offset().top
    window.scrollTo({
      top:sectionT-70, behavior:"smooth"
    })
  })
})