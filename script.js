// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// canvas.width = 1024;
// canvas.height = 567;
// ctx.fillStyle = "red",
// ctx.fillRect(0,0,canvas.width,canvas.height);
// ctx.fillStyle = 'orange';
// ctx.fillRect(0,0,100,100)
// let y = 0
// let y2 = 0

// class player {
//    constructor(){
//     this.position = {

//     }
//    }
//    draw(){
//     ctx.fillStyle= 'yellow';
//     ctx.fillRect(this.position.x, this.position.y, 100, 100)
//    }
//    update(){
//     this,this.draw()
//     this.position++
//    }
// }
// const player = new Player ({x:0,y:0})
// const player2 = new Player ({x:0,y:0})
// function animated (){
//   let y = 0
// let y2 = 0
//   window.requestAnimationFrame(animated);
//   ctx.fillStyle = "red",
// ctx.fillRect(0,0,canvas.width,canvas.height);
//  player.draw();
//  player.update()
// }
// 










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

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 567;
const gravity = 0.5;

class Player{
    constructor (position){
        this.position = position;
        this.velocity = {x: 0,y: 1};
        this.height = 100;
    }
        draw(){
            ctx.fillStyle = 'red';
            ctx.fillRect(this.position.x,this.position.y,100,this.height);
        }
        update(){
            this.draw()
            this.position.y += this.velocity.y;
            if(this.position.y+this.height+this.velocity.y < canvas.height){
                this.velocity.y += gravity
            }else{
                this.velocity.y = 0
            }
        }
    
}
const player = new Player({x:0,y:0,});
const player2 = new Player({x:200,y:0});
let y = 0
let x = 0
function animate(){
window.requestAnimationFrame(animate);
ctx.fillStyle = 'White'
ctx.fillRect(0,0,canvas.width ,canvas.height);
player.draw();
player.update()
player2.draw()
player2.update()
}
animate()

