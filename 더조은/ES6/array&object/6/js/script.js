var arr1=[1,2,3]
var arr1Copy=[]
//arr1Copy=arr1 참조(refer)
for(var i=0;i<arr1.length;i++){
  arr1Copy.push(arr1[i])
}
//console.log(arr1Copy);
/* -------------------------------------- */
var arr2=[
  ['a','b','c'],
  ['가','나','다'],
  [1,2,3],
]
var arr2Copy=[]
/* for(var i=0;i<arr2.length;i++){
  arr2Copy.push(arr2[i])
} */ // shell copy 배열은 다르지만 그 배열안의 값들은 동일하게 설정해서 arr2안의 배열을
//변경할시 arr2Copy안의 배열도 같이 변경이 된다.
// arr2와 arr2Copy는 다른 배열이지만 arr2[a]와 arr2Copy[a]는 같은 배열이다. 
for(var i=0;i<arr2.length;i++){
  arr2Copy.push([])
  for(var j=0;j<arr2[i].length;j++){
    arr2Copy[i].push(arr2[i][j])
  }
}
console.log(arr2Copy);