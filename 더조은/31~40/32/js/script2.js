$(function(){
  /* 
    논리연산
    - 비교연산이 두개이상 사용되면 반드시 논리연산자로 연결해야 함
    - &&(and) : 그리고, 면서, 모든 비교조건이 참일때 최종 참
    - ||(or) : 또는, 거나, 조건하나만 참이면 최종 참
    - &&와 ||이 혼합되어 있으면 ()괄호를 이용해서 범위를 설정하거나 중첩조건을 사용
  */
  $('.ex1 button').click(function(){
    var n = $('.ex1 input').val()
    var result
    if(n>0 && n<4){
      result='정답'
    } else{
      result='오답'
    }
    alert(result)
  })
  $('.ex2 button').click(function(){
    var n = $('.ex2 input').val()
    var result
    if(n==='1' || n === '3' || n === '10'){
      result='정답'
    } else{
      result ='오답'
    }
    alert(result)
  })
  $('.ex3 button').click(function(){
    var n = $('.ex3 input').val()
    var result
    if(n%2===0 && n>10){
      result='정답'
    } else{
      result='오답'
    }
    alert(result)
  })
  $('.ex4 button').click(function(){
    var n = $('.ex4 input').val()
    var result
    if(n%5===0 && n>0 && n<10){
      result='정답'
    }else{
      result='오답'
    }
    alert(result)
  })
  $('.ex5 button').click(function(){
    var n = $('.ex5 input').val()
    var result
    if((n>=1&&n<=3)||(n>=11&&n<=13)){
      result='정답'
    }else{
      result='오답'
    }
    alert(result)
  })
  $('.ex6 button').click(function(){
    var n = $('.ex6 input').val()
    var result
    if(n>=1&&n<=3){
      if(n>=11&&n<=13){
        result='정답'
      }else{
        result='오답'
      }
    }else{
      if(n>=11&&n<=13){
        result='정답'
      }else{
        result='오답'
      }
    }
    alert(result)
  })//ex5와 ex6의 결과는 동일
  $('.ex7 button').click(function(){
    var user = $('.ex7 select').val()
    var result
    /* 
      Math.random() *3 => 0.000000000001~2.9999999999
      Math.ceil() : 올림
      Math.floor() : 버림
    */
    var com = Math.random() * 3
    var nCom= Math.ceil(com)
/*     if(user==='가위'){
      if(nCom===1){
        result='비겼습니다'
      } else if(nCom===2){
        result='졌습니다'
      } else{
        result='이겼습니다'
      }
    }else if(user==='바위'){
      if(nCom===1){
        result='이겼습니다'
      } else if(nCom===2){
        result='비겼습니다'
      } else{
        result='졌습니다'
      }
    }else{
      if(nCom===1){
        result='졌습니다'
      } else if(nCom===2){
        result='이겼습니다'
      } else{
        result='비겼습니다'
      }
    }
    alert(result) */
    if(nCom===1){
      nCom='가위'
    }else if(nCom===2){
      nCom='바위'
    }else{
      nCom='보'
    }
    if((user==='가위' && nCom==='보')||(user==='바위'&&nCom==='가위')||(user==='보'&&nCom==='주먹')){
      result='이겼습니다'
    }else if(user===nCom){
      result='비겼습니다'
    }else{
      result='졌습니다'
    }
    alert('사용자 : '+user+', 컴퓨터 : '+nCom+ ' 따라서 결과는 '+result)
  })
  $('.ex8 button').click(function(){
    var user = $('.ex8 select').val()
    var com
    if(user==='가위'){
      com='바위'
    }else if(user==='바위'){
      com='보'
    }else{
      com='가위'
    }
    alert('사용자 : '+user+', 컴퓨터 : '+com+', 결과는 아쉽게 졌습니다 ㅠㅠ')
  })
  $('.ex9 button').click(function(){
    var n = $('.ex9 select').val()
    var result
    var lose = Math.ceil(Math.random() * 10)
    var com
    if(lose===1){
      if(n==='가위'){
        com='보'
      }else if(n==='바위'){
        com='가위'
      }else{
        com='바위'
      }
      result='이겼습니다'
    }else if(lose===2){
      com= n
      result='비겼습니다'
    }else{
      if(n==='가위'){
        com='바위'
      }else if(n==='바위'){
        com='보'
      }else{
        com='가위'
      }
      result='졌습니다'
    }
    alert('사용자 : '+n+' 컴퓨터 : '+com+' 결과는 ' + result)
  })
  var cnt=0
  $('.ex10 button').click(function(){
    var percent = Math.floor(Math.random()*10000)
    var result
    if(percent<5){
      cnt=0
      result='와 이걸 사기치네 성공!'
      alert(result)
      $('.ex10 :last-child').html(result+' <br> 총 강화횟수 : '+cnt)
    }else{
      cnt=cnt+1
      result='아 너무 아쉬워요 실패입니다~~'
    }
    $('.ex10 :last-child').html(result+' <br> 총 강화횟수 : '+cnt)
    console.log(percent)
  })
})