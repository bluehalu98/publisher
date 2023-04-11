$(function(){
  $('.faq-list-container button').click(function(){
    $('.faq-list-container li div').stop().slideUp()
    $(this).siblings('div').stop().slideToggle()
    $('.faq-list-container button').not($(this)).removeClass('active')
    $(this).toggleClass('active')
  })
})
