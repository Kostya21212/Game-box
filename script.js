const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 567;
ctx.fillStyle = "red",
ctx.fillRect(0,0,canvas.width,canvas.height)


// var number=function(array){
//    for(let i = 0; i < array.length;i++){
//     array[i]=`${i+1}: ${array[i]}`
//    }
//    return array
//   }
// console.log(number(['a','b','c']))

// function getBestWord(points,words){
//   //Return the shortest word realizing the best score
// }
// console.log(getBestWord([1,2,3,4,5,6],['AFDF','BDF','CDFDF','DFDSDSFS','ESDS','FS']));

// function arrayDiff(a, b) {
// let res = a.slice();
// for(let i = 0; i < a.length;i++){
//   if(b.includes(a[i])){
//     res.splice(res.indexOf(a[i]), 1)
// }}
// return res
// }
// console.log(arrayDiff([1,2,2,2,3],[2]))
