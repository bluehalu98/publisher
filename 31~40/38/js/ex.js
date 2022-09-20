$(function () {
  $('.ex8 button').click(function () {
    var n = $(this).attr('data-n')
    var color = $(this).attr('data-color')
    $('.ex8 button:not(.btn' + n + ')').removeClass('red blue green yellow purple')
    $('.ex8 button:nth-child(' + n + ')').toggleClass(color)
  })
})