$(function(){
  var n = 1
  var delta
  function sectionChange(){
    $('.section'+n).addClass('active')
    $('.section'+n).prevAll('section').addClass('active')
    $('.section'+n).nextAll('section').removeClass('active')
  }
  sectionChange()
  $('.scrollspy button').click(function(){
    n = $(this).attr('data-n')
    sectionChange()
  })
  $('section').bind('mousewheel', function(e){
    delta = e.originalEvent.wheelDelta / -120
    n = parseInt($(this).attr('data-n')) + delta
    if(n<1){n=1}
    if(n>3){n=3}
    sectionChange()
  })
}) 