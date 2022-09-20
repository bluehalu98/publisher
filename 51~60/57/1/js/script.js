$(function(){
  $('.ex1 button').click(function(){
    var 공의범위 = 100 - 0
    var 상금범위 = 40 - 0
    var 공의위치 = Number($('.ex1 input').val())
    var 공의위치비율 = 공의위치 / 공의범위
    var 지급상금 = 공의위치비율 * 상금범위
    alert(지급상금)
  })
  $('.ex2 button').click(function(){
    var 공의범위 = 100 - 0
    var 상금범위 = 40 - 0
    var 상금액수 = Number($('.ex2 input').val())
    var 상금비율 = 상금액수 / 상금범위
    var 공의위치 = 공의범위 * 상금비율
    alert(공의위치)
  })
  $('.ex3 button').click(function(){
    var 공의시작위치 = 25
    var 공의끝위치 = 75
    var 공의범위 = 공의끝위치 - 공의시작위치
    var 상금최소치 = 10 
    var 상금최대치 = 30
    var 상금범위 = 상금최대치 - 상금최소치
    var 사용자입력위치 = Number($('.ex3 input').val())
    var 공의위치비율 = (사용자입력위치-공의시작위치) / 공의범위
    var 지급상금 = 상금범위 * 공의위치비율 + 상금최소치 
    alert(지급상금)
  })
  $('.ex4 button').click(function(){
    var 신장최소치 = 150
    var 신장최대치 = 200
    var 신장범위 = 신장최대치 - 신장최소치

    var 체중최소치 = 50
    var 체중최대치 = 100
    var 체중범위 = 체중최대치 - 체중최소치
    
    var 입력신장 = Number($('.ex4 input').val())
    var 신장비율 = (입력신장-신장최소치) / 신장범위
    var 정상체중 = 체중범위 * 신장비율 + 체중최소치
    alert(정상체중)
  })
  $('.ex5 button').click(function(){
    var scrollS = 500
    var scrollL = 1000
    var scrollScope = scrollL - scrollS

    var imgS = 1
    var imgL = 30
    var imgScope = imgL - imgS

    var scrollRatio = (750-scrollS) / scrollScope
    var imgAlert = Math.floor((imgScope * scrollRatio) + imgS)
    alert(imgAlert)
  })
})