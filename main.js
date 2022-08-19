
// let result=prompt("enter anumber");

// let y=alert(result);
// let n=5;y=5;
//     if (y>n){
//         console.log(n);}
//         else{
// console.log(y);
//         }  
//     let n=5;k=5;
//     console.log(n+k);

//     let m=5;
//     if (m==1) {
//        console.log("ONE");
//     }
//     else if(m==2){
//         console.log("TWO");
//     }
//     else if(m==3) {
// console.log("three")
//     }
//     else{
//         console.log("no data"
//         )
//     }
//===================================
// Use a loop to display the numbers 0 through 5 in a single alert window
// let s=""; // Create empty string.
// for (let i=0; i<=5; i++)
// {
//  s = s + i ; 
// }
// alert(s);
// //=================================
// for (let j=0;j<=20;j++){
//     if (j%3==0){
//         alert(j);

//     }

//==========================================
// let n=prompt("enter a num from 0-100");
// while (n<0 || n>100)
// {
//  alert(n +" is out of range. Try again.");
//  n = prompt("Please enter a number in the range 0…100");

// } 
//====================================================
// let x=110111;
// console.log(parseInt(x,2));
//=====================
// Get the upper bound.
// let max = 1*prompt ("Please enter an integer.");
// let sum = 0;
// for (let i=0; i<=max; i++)
//  sum = (sum + i); // Add i to the running sum.
// alert("The sum of 0 through "+max+" is "+(sum/(max+1)));
//===========================================================..===================..
// let fazzbazz= function(array) {
//     let arr=[]
//     for (let i=0; array.length > i;i++){
//     if(array[i] % 3 === 0 && array[i] % 5 === 0){
//         arr.push("fazzbazz");
// }else if(array[i] % 3 === 0){
//         arr.push("fazz");
// }else if( array[i] % 5 === 0){
//         arr.push("bazz")
// }else{
//         arr.push(array[i]);
//     }
//     }
//     return arr;
// }
// console.log(fazzbazz([2,3,5,15]));
//============================================================..===================..
// let fazzbazz=function (...numbers){
//     let array=[]
//     numbers.forEach(b=>{
//         if(b % 3 === 0 && b % 5 === 0){
//             array.push("fazzbazz")
//             }else if(b % 3 === 0){
//                 array.push("fazz")
//             }else if(b % 5 === 0){
//                 array.push("bazz")
//             }else{
//                 array.push(b)
//                 }
//     });return array

// }
// console.log
// (fazzbazz(4,5,10,15,9));
//====================================


// let forloop =function(arr){
//     let array=[] 
// for(i=0; i< arr.length;i++){
//     let element= arr[i];
//     array.push(Math.pow(element,2));
// } return array;
// } 
// console.log(forloop([2,3,4,2,5]));
//========================================
// function loop (arr){
//     return arr.map((num) =>{
//         return 2**num
//     }

//     )
// }
// console.log(loop([2,4,6]))
//================================
// let oddvalue= function(arr){
// return arr.filter((num)=>{
// if (num%2!==0) 
// return num;
// });
// }
// console.log(oddvalue([1,2,3,4]));
//=====================================

let array=[1,2,2];
const initialValue = 0;
let countNumberOfElements  = array.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(countNumberOfElements);
//===========================================