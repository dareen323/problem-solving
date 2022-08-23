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

// let array=[1,2,2];
// const initialValue = 0;
// let countNumberOfElements  = array.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );
// console.log(countNumberOfElements);
// //===================================DOM==================================
// function Employee(employeeID, fullName, department, level, imageURL,) {
//   this.employeeID = employeeID;
//   this.fullName = fullName;
//   this.department = department;
//   this.level = level;
//   this.imageURL = imageURL;
//   this.salary = salaryCalc(level);
//   }
//   function salaryCalc(level) {
//   switch (level) {
//       case "Junior":
//         return Math.floor(Math.random() * 500) + 500;
//       case "Mid-Senior":
//         return Math.floor(Math.random() * 500) + 1000;
//       case "Senior":
//         return Math.floor(Math.random() * 500) + 1500;
//   }
//   }

//   let person01 = new Employee(
//   1000,
//   "Gazi Sameer",
//   "Advertisement",
//   "Senior",

//   );
//   let person02 = new Employee(
//   1001,
//   "Lana Ali",
//   "Finance",
//   "Senior",
//   );
//   let person03 = new Employee(
//   1002,
//   "Tamara Ayoub",
//   "Marketing",
//   "Senior",

//   );
//   let person04 = new Employee(
//   1003,
//   "Safi Waleed",
//   "Advertisement",
//   "Mid-Senior",

//   );
//   let person05 = new Employee(
//   1004,
//   "Omar Zaid",
//   "Development",
//   "Senior",

//   );
//   let person06 = new Employee(
//   1005,
//   "Rana Saleh",
//   "Development",
//   "Junior",

//   );
//   let person07 = new Employee(
//   1006,
//   "Hadi Ahmed",
//   "Finance",
//   "Mid-Senior",
//   ""
//   );

//   let person08= new Employee(
// 1000,
// "hiii",
// "kk",
// "",
//   )
//   const table = document.createElement("table");
//   const thead = document.createElement("thead");
//   const tbody = document.createElement("tbody");

//   let static = ["Employee ID", "Full Name", "Department", "Level", "Salary"];

//   function theadGenerator() {
//     const row = document.createElement("tr");

//     for (let x = 0; x <5 ; x++) {
//       const column = document.createElement("th");
//       const Content = document.createTextNode(
//         static [x]);
//       column.appendChild(Content);
//       row.appendChild(column);
//     }

//     thead.appendChild(row);
//     table.appendChild(thead);
//   }
//   let employees = [
//     person01,
//     person02,
//     person03,
//     person04,
//     person05,
//     person06,
//     person07,
//     person08,
//   ]
//   function tbodyGenerator() {
//     // create a rows
//     for (let x = 0; x < 8; x++) {
//       const row = document.createElement("tr");
//   // create a column inside the rows
//       for (let j = 0; j < 6; j++) {
//         const column = document.createElement("td");
//         if (j == 4) {
//           continue;
//         }
//         let person = Object.values(employees[x]);
//         const Content = document.createTextNode(person[j]);

//         column.appendChild(Content);
//         row.appendChild(column);
//       }
//       tbody.appendChild(row);
//     }

//     table.appendChild(tbody);
//   }

//   function render() {
//     theadGenerator();
//     tbodyGenerator();
//     document.getElementById("main").appendChild(table);
//   }

//   render();

// //================================constractor======================================
// // function Employee(employeeID, fullName, department, level, imageURL,salary) {
// //   this.employeeID = employeeID;
// //   this.fullName = fullName;
// //   this.department = department;
// //   this.level = level;
// //   this.imageURL = imageURL;
// //   this.salary = salaryCalc(level);
// //   }
// //   function salaryCalc(level) {
// //   switch (level) {
// //       case "Junior":
// //         return Math.floor(Math.random() * 500) + 500;

// //       case "Mid-Senior":
// //         return Math.floor(Math.random() * 500) + 1000;
// //       case "Senior":
// //         return Math.floor(Math.random() * 500) + 1500;
// //   }
// //   }

// //   let person01 = new Employee(
// //   1000,
// //   "Gazi Sameer",
// //   "Advertisement",
// //   "Senior",

// //   );
// //   let person02 = new Employee(
// //   1001,
// //   "Lana Ali",
// //   "Finance",
// //   "Senior",
// //   );
// //   let person03 = new Employee(
// //   1002,
// //   "Tamara Ayoub",
// //   "Marketing",
// //   "Senior",

// //   );
// //   let person04 = new Employee(
// //   1003,
// //   "Safi Waleed",
// //   "Advertisement",
// //   "Mid-Senior",

// //   );
// //   let person05 = new Employee(
// //   1004,
// //   "Omar Zaid",
// //   "Development",
//   "Senior",

//   );
//   let person06 = new Employee(
//   1005,
//   "Rana Saleh",
//   "Development",
//   "Junior",

//   );
//   let person07 = new Employee(
//   1006,
//   "Hadi Ahmed",
//   "Finance",
//   "Mid-Senior",
//   ""
//   );

//   let employees = [
//     person01,
//     person02,
//     person03,
//     person04,
//     person05,
//     person06,
//     person07,

//   ];

//   function render() {

//     for (let i = 0; i <= 6; i++) {
//       console.log(
//         "Employee Name: " +
//           employees[i].fullName +
//           ", Salary: " +
//           employees[i].salary
//       );
//     }
//   }

//  render();

//================================================stack============================

// function bracketsBalanced(string)
// {
//   // class Stack {

// //   constructor()
// //   {
// //       this.items = [];
// //   }

//   let stack = [];

//  // Traversing the Expression
//   for(let i = 0; i < string.length; i++)
//   {
//     let x = string[i];

//     if (x == '(' || x == '[' || x == '{')
//         {

//     // Push the element in the stack
//           stack.push(x);
//           continue;
//         }

//          // If current character is not opening
//          // bracket, then it must be closing.
//          // So stack cannot be empty at this point.
//         if (stack.length == 0)
//             return false;

//         let check;
//       switch (x){
//       case ')':
//             check = stack.pop();
//             if (check == '{' || check == '[')
//                 return false;
//             break;

//         case '}':
//             check = stack.pop();
//             if (check == '(' || check == '[')
//                 return false;
//             break;

//         case ']':
//           check = stack.pop();
//             if (check == '(' || check == '{')
//                 return false;
//             break;
//         }
//       }

//      // Check Empty Stack
//     return (stack.length == 0);
// }

//  // Driver code
// let string = "([{}])";

//  // Function call
// if (bracketsBalanced(string))
//   console.log(" Balanced ");
// else
//   console.log(" Not Balanced ");

//==================================================queue================================================================

// JavaScript program to reverse first
// k elements of a queue.

/* Function to reverse the first
K elements of the Queue */
// function reverseQueueFirstKElements(k, Queue) {
//   // if (Queue.length == 0 || k > Queue.length)
//   //     return;
//   // if (k <= 0)
//   //     return;

//   let Stack = [];

//   /* Push the first K elements
//     into a Stack*/
//   for (let i = 0; i < k; i++) {
//     Stack.push(Queue.shift());
//   }

//   /* Enqueue the contents of stack
//     at the back of the queue*/
//   while (Stack.length > 0) {
//     Queue.push(Stack.pop());
//   }

//   /* Remove the remaining elements and
//     enqueue them at the end of the Queue*/
//   for (let i = 0; i < Queue.length - k; i++) {
//     Queue.push(Queue.shift());
//   }
// }

// // Driver code

// let Queue = [];
// Queue.push(1);
// Queue.push(2);
// Queue.push(3);
// Queue.push(4);
// Queue.push(5);
// Queue.push(6);
// Queue.push(7);
// Queue.push(8);
// Queue.push(9);
// Queue.push(10);

// let k = 5;
// reverseQueueFirstKElements(k, Queue);
// console.log(Queue);

// // //================================================recursion1====================

// //program to find the factorial of a number
// function factorial(x) {
//   // if number is 0
//   if (x === 0) {
//     return 1;
//   }

//   // if number is positive
//   else {
//     return x * factorial(x - 1);
//   }
// }

// const num = 5;

// // calling factorial() if num is non-negative
// if (num > 0) {
//   let result = factorial(num);
//   console.log(`The factorial of ${num} is ${result}`);
// }
///================================

// const fibonacci = (n) =>
//   Array.from({ length: n }).reduce(
//     (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
//     []
//   );

//   console.log(fibonacci(10));
//   //======================recursion2===============================
//   function fibonacciNum (n)
// {
//   if (n===1)
//   {
//     return [0, 1];
//   }
//   else
//   {
//   let s = fibonacciNum(n - 1);
//   // console.log(s);
//   console.log(s.push(s[s.length - 1] + s[s.length - 2]));
//     return s;
//   }
// };

// console.log(fibonacciNum(4));
//  //=======================================================
// const form = document.querySelector("#form");
// const input = document.querySelector("#phone");
// const output = document.querySelector("#output");

// const re = /^(\d{10})$/;

// function testInfo(phoneInput) {
//   const ok = re.exec(phoneInput.value);

//   output.textContent = ok
//     ? `Thanks, your phone number is ${ok[0]}`
//     : `${phoneInput.value} isn't a phone number with area code!`;
// }

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   testInfo(input);
// });
// //================================================

// //===========================================
// function palindrome(str) {
//   // let re = /[^A-Za-z0-9]/g;
//   // str = str.toLowerCase().replace(re, "");

//   let len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
      
//       return false;
      
//     }
//   }
//   return true;
// }
// console.log(palindrome("pmomp"));
// //=========================================
// //  JavaScript program to check if
// // linked list is palindrome recursively */

// class Node {
//   constructor(val) {
//     this.data = val;
//     this.ptr = null;
//   }
// }

// let one = new Node(1);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(3);
// let six = new Node(2);
// let seven = new Node(1);
// one.ptr = two;
// two.ptr = three;
// three.ptr = four;
// four.ptr = five;
// five.ptr = six;
// six.ptr = seven;
// let condition = isPalindrome(one);
// document.write("isPalidrome: " + condition);

// function isPalindrome(head) {
//   let slow = head;
//   let ispalin = true;
//   let stack = [];

//   while (slow != null) {
//     stack.push(slow.data);
//     slow = slow.ptr;
//   }

//   while (head != null) {
//     let i = stack.pop();
//     if (head.data == i) {
//       ispalin = true;
//     } else {
//       ispalin = false;
//       break;
//     }
//     head = head.ptr;
//   }
//   return ispalin;
// }
// console.log(isPalindrome())

// / LinkedList
// console.log("-----------Link list------------");

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   insertHead(value) {
//     this.length++;
//     let node = new Node(value);
//     this.head = this.tail = node;
//     return node;
//   }

//   insert(value) {
//     this.length++;
//     let node = new Node(value);

//     if (this.tail) {
//       this.tail.next = node;
//       this.tail = node;
//       return node;
//     } else {
//       this.head = this.tail = node;
//       return node;
//     }
//   }
// }

// function insertTheWord(theWord) {
//   let input = new LinkedList();
//   input.insertHead(theWord[0]);
//   for (let x = 1; x < theWord.length; x++) {
//     input.insert(theWord[x]);
//   }
//   return input;
// }

// function isPalindrome(ll) {
//   let head = ll.head;
//   let valuesFound = [];
//   while (head) {
//     valuesFound.push(head.value);
//     head = head.next;
//   }
//   // R A C  C A R
//   //   .       .
//   let left = 0;
//   let right = valuesFound.length - 1;
//   while (left <= right) {
//     if (valuesFound[left] !== valuesFound[right]) {
//       return false;
//     }
//     left++, right--;
//   }

//   return true;
// }

// console.log(isPalindrome(insertTheWord("moom")));
// //==========================================================================================================
// Q1:
// Write a function named createList that takes in an array of the current store intentory.

// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]

// This function should use forEach to populate your grocery list based on the store's inventory.
//  If the item is available, add it to your list. Return the final list.

const createList = (availableItems) => {
  let arr = [];
  availableItems.forEach(function(e){if (e.available==true)arr.push(e)});
  return arr;
}

//test code.
let a = [
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
];
console.log(createList(a));
//==========================================================================================================
//  Q2:map
// Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

// For example: evenOdd([1,2,3,'a']) returns ['odd','even','odd','N/A'].


function h(arr){
  let array=[];
  arr.map(function(m){

    if (m%2 ==1 ){
    array.push("odd")}
    
    else if (m%2 == 0 ) {
      array.push("even")
    }
    else {
      array.push("N/A")
    }
  })
  return array
}
//test code 
let evenOdd=[1,2,3,'aiij',5,22,"hello"];
console.log(h(evenOdd));

//=================================================================================================================

// Q3:filter
// Write a function named notInFirstArray that, given two arrays as input,
//  uses filter to return an array of all the elements in the second array that are not included in the first array.

// For example, notInFirstArray([1,2,3,5], [1,2,3,4]) returns [4].
function notInFirstArray(arr1,arr2){
  return arr2.filter((element) => !arr1.includes(element));
}

//test code 
let d=[1,2,3,5]
let e=[1,2,3,4,5,6]
console.log(notInFirstArray(d,e));

//===========================================================================================================================

// Q4:reduce
// Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

// Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
// function reversedString(string){
//   return string.
// }
function reversedString(input) {
  const lettersArray = input.split("");
  let reversedWord = lettersArray.reduce((previous, current) => {
    return current + previous;
  });
  console.log(reversedWord);
}
//test code.
reversedString("hello");

//============================================================================================================================

// Q5: regex
// Write a function named isNum that takes in a string or number of any length. 
// This function should use a regular expression pattern to return true if the input contains a number,
//  and false if the input does not contain a number.
// For example:
// 12345 returns true
// '12345' returns true
// 'h3llo world' returns true
// 'hello world' returns false
// function isNum(value){
// let r=[];
// if (b//)
// }


function isNum(str) {
  let pattern = /\d/;
  return pattern.test(str);
}
//test code
console.log(isNum(12345));
console.log(isNum("12345"));
console.log(isNum("h3llo world"));
console.log(isNum("hello world"));
//==========================================================================================================================

// Q6:regex
// You have created a game application and begin by asking users an easy question: In which month is Halloween?

// Write a function named matchMonth which uses a regular expression pattern to match any of these 
// inputs: October, Oct, october, oct

// If the user enters any of these four inputs, return true. For any other input, return false.

function matchMonth(value){
let regex = /(^\s*october\s*$|^\s*oct\s*$)/i;
return regex.test(value);
}
//test code
let month="October"
console.log(matchMonth(month));
//==================================