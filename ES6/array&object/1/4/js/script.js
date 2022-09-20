//.text()글자 가져오기 .text('asdf')글자를 넣는다
// .trim() 한칸이상의 공백을 지워준다
// length 글자의 길이
var str = $('.ex1 .result').text().trim()
$('.ex1 .result').empty()
var strLength = str.length

$('.ex1 button').click(function(){
  $('.ex1 .result').empty()
  for(var i=0;i<strLength;i++){
    if(str.charAt(i)===' '){
      $('.ex1 .result').append(`<span>&nbsp;</span>`)
    }else if(str.charAt(i)==='`'){
      $('.ex1 .result').append(`<br>`)
    }else{
      $('.ex1 .result').append(`<span>${str.charAt(i)}</span>`)
    }
    $('.ex1 .result span:last-child').css({
      'transition':`opacity ${i*0.1}s`
    })
  }
  setTimeout(function(){
    $('.ex1 .result span').addClass('active')
  },10)
})



var type1 = new Type_effect('#typed1',100)

$(".ex2 .btn1").click(function(){
  type1.play()
})
$(".ex2 .btn2").click(function(){
  type1.reverse()
})
$(".ex3 .btn3").click(function(){
  type1.toggle()
})
var scrt
var winh
var offT
var eleH
function motion(){
  offT=$('#typed1').offset().top
  eleH=$('#typed1').innerHeight()
  if(scrt>=offT-winh*0.5+eleH*0.5){
    type1.play()    
  }else{
    type1.reverse()
  }
}//motion
motion()
$(window).scroll(function(){
  motion()
}).resize(function(){
  motion()
})
var str = $('.ex3 .result').text().trim()
$('.ex3 .result').empty()
var strLength=str.length
for(var i=0;i<strLength;i++){
  if(str.charAt(i)===' '){
    $('.ex3 .result').append(`<span>&nbsp;</span>`)
  }else{
    $('.ex3 .result').append(`<span>${str.charAt(i)}</span>`)
  } 
  $('.ex3 .result span:last-child').css({
    'transition-delay':`${i * 0.1}s `
  })
}

$('.ex3 button').click(function(){
  $('.ex3 .result span').toggleClass('active')
})