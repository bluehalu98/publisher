var number = [0,1,2,3,4,5,6,7,8,9,]
var answer = []
var cnt=0
for(var j=0;j<4;j++){
  var t=Math.floor(Math.random()*number.length)
  answer.push(number[t])
  number.splice(t,1)
}
console.log(answer);
$('button.check').click(function(){
  $('button.reset').show()
  $('button.check').hide()
  cnt++
  var newArr=[]
  var strike=0
  var ball=0
  var out=0
  for(var i=1;i<5;i++){
    var num = parseInt($(`input:nth-child(${i})`).val())
    var check=answer.indexOf(num)
    if(check===-1){
      $(`input:nth-child(${i})`).addClass('out')
      out++
    }else if(check===(i-1)){
      $(`input:nth-child(${i})`).addClass('strike')
      strike++
    }else{
      $(`input:nth-child(${i})`).addClass('ball')
      ball++
    }
    console.log(check);
    newArr.push(num)
  }
  console.log(newArr);
  if(strike===4){
    $('button.check').css({
      'pointer-events' : 'none'
    }).text(`축하드립니다`)
  }
  $('p:not(.result)').text(`시도횟수 : ${cnt}`)
  $('.result').append(`${newArr}는 ${strike}스트라이크, ${ball}볼, ${out}out 입니다. <br>`)
})
$('button.reset').click(function(){
  $(this).css({'display':'none'})
  $(this).siblings('.check').css({'display':'block'})
  $('input').val('')
  $('input').removeClass('out strike ball')
})