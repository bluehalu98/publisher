$(window).load(function(){
    setTimeout(function(){
      $('.spinner, .loading-message').fadeOut(1000)
      $('.preloader').slideUp()
      $('body').css({
        'overflow':'auto'
      })
    },500)

    $('.gnb ul li ul li a, .snb ul li ul li a').click(function(e){
      e.preventDefault()
      var url = $(this).attr('href')
      $('.page-cover').slideDown(function(){
        location.href = url
      })
    })
  })
