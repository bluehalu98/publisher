var ex2Arr=[]
$('.ex2 .add').click(function(){
  var name = $('.ex2 .name').val()
  var age = $('.ex2 .age').val()
  var gender = $('.ex2 .gender').val()
  var tel = $('.ex2 .tel').val()
  var newArr=[name,age,gender,tel]
  ex2Arr.push(newArr)
})
$('.ex2 .print').click(function(){
  $('.ex2 .result').empty()
  $('.ex2 .result').append(`
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>나이</th>
          <th>성별</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  `)
  for(var i=0;i<ex2Arr.length;i++){
    $('.ex2 .result table tbody').append(`<tr></tr>`)
    for(var j=0;j<ex2Arr[i].length;j++){
      $('.ex2 .result table tbody tr:last-child').append(`
        <td>${ex2Arr[i][j]}</td>
      `)
    }
  }
})