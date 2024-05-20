//[5, 22, 72, 14, 87, 54, 65]
//head : 56
let userArray = prompt("Enter numbers: ").split(",");
let head = prompt("enter a number as head: ");

let array = [];
userArray.forEach((input) => array.push(Number(input)));

array.push(head);
array.sort((a, b) => a - b);
let sequence = [];
let subtraction = [];

let currentNum = head;
let arrayLength = array.length - 1;
for (let i = 0; i <= arrayLength; i++) {
  let findClosestToHead = [];
  for (let i = 0; i <= array.length - 1; i++) {
    findClosestToHead.push(Math.abs(currentNum - array[i]));
  }
  let closestNumIndex = findClosestToHead.indexOf(Math.min(...findClosestToHead));
  currentNum = array[closestNumIndex];
  array.splice(array.indexOf(currentNum), 1);
  // console.log(currentNum, closestNumIndex, findClosestToHead, array);
  sequence.push(currentNum);
  subtraction.push(findClosestToHead[closestNumIndex]);
}
// console.log(subtraction)
let count = 0;
for (let i = 0; i < subtraction.length; i++) {
  count += subtraction[i];
}
console.log(`sequence: ${sequence}`); //56,54,65,72,87,22,14,5
console.log(`sum of subtraction: ${count}`); //117

// sequence.push(head, array[closest]);
// array.pop(array[closest]);
// while (array.length - 1 > 1) {
//   let temp;
//   temp = closest;
//   for (let i = 0; i < array.length - 1; i++) {
//     findClosestToHead.push(Math.abs(temp - array[i]));
//   }
//   array.pop(array[findClosestToHead.indexOf(Math.min(...findClosestToHead))]);
// }

// console.log(array);
// console.log(sequence);
