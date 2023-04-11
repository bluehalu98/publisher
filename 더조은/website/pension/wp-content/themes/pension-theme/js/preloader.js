$(window).load(function() {
  setTimeout(function() {
    //로딩끝나면 
    $('.spinner,.loading-message').fadeOut(1000)
    $('.preloader').slideUp()
    $('body').css({
      'overflow': 'auto'
    })
  },500)

  $('.gnb ul li ul li a , .snb ul li ul li a').click(function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    $('.page-cover').stop().slideDown(function(){
      location.href = url
    })
  })


})