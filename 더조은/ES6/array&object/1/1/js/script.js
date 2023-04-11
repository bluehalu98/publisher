$(function(){
  //템플릿문법 - 백틱`` (엔터가능)
  $('.ex1 button').click(function(){
    for(i=1;i<=10;i++){
      $('.ex1 .result').append(`${i},`)
    }
  })
  $('.ex2 button').click(function(){
    for(i=10;i>=1;i--){
      if(i>1){
        $('.ex2 .result').append(`${i},`)
      }else{
        $('.ex2 .result').append(i)
      }
/*       if(i==1){
        $('.ex2 .result').append(i)
      }else{
        $('.ex2 .result').append(`${i},`)
      } */
    }
  })
})