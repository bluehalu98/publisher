var strCnt=0
var cnt=0
for(var i=0;i<arr1.length;i++){//동적개체 추가
  $('table tbody').append(`<tr></tr>`)
  for(var j=0;j<arr1[i].length;j++){
    if(arr1[i][j]===''){
      var td =`<td></td>`
    }else{
      strCnt++
      var td = `      
        <td>
          <input 
            data-row='${i}' 
            data-col='${j}' 
            type='text' 
            maxlength='1'
          >
        </td>
      `
    }
    $('table tbody tr:last-child').append(td)
  }
}
/* --------------------------------------- */
for(var i=0;i<arr2.length;i++){
  var row = arr2[i][0]
  var col = arr2[i][1]
  $(`tr:nth-child(${row+1}) td:nth-child(${col+1})`).append(`
    <span>${i+1}</span>
  `)
}
/* --------------------------------------- */
$('input').change(function(){
  var row=$(this).attr('data-row')
  var col=$(this).attr('data-col')
  var char = arr1[row][col]
  var inp = $(this).val()
  if(char===inp){
    cnt++
    $(this).addClass('active')
    if(cnt===strCnt){
      alert('성공')
    }
  }
})