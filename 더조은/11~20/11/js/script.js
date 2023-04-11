$(document).ready(function(){
  $('.ex1 button').click(function(){
    var 상품 = parseInt($('.ex1 select').val())
    var 옵션 = parseInt($('.ex1 input[type=radio]:checked').val())
    var 수량 = $('.ex1 input[type=number]').val()
    var 총가격 = (상품 + 옵션) * 수량
    alert(총가격)
  })
  $('.ex2 button').click(function(){
    var kor = Number($('.ex2 input:nth-of-type(1)').val())
    var math = Number($('.ex2 input:nth-of-type(2)').val())
    var eng = Number($('.ex2 input:nth-of-type(3)').val())
    var sum = kor + math + eng
    var avg = ((sum)/3).toFixed(2)
    alert('총점은 ' + sum +', 평균은 '+ avg +'입니다.' )
  })
  $('.ex3 button').click(function(){
    var num = parseInt($('.ex3 input').val())
    var sum = (1+num)*(num/2)
    alert(sum)
  })
  $('.ex4 button').click(function(){
    var ctn = $('.ex4 input:nth-of-type(1)').val()
    var grid = Number($('.ex4 input:nth-of-type(2)').val())
    var gridcnt = Number($('.ex4 input:nth-of-type(3)').val())
    var marginsum = (ctn - (grid*gridcnt))
    var margin = (marginsum/(gridcnt+1)).toFixed(2)
    alert('총 여백은 '+marginsum+'이고 여백은 '+margin+'입니다.')
  })
})
