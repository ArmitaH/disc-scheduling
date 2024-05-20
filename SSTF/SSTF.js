let userInputs = prompt("enter the numbers as this pattern: [ , , ...]").split(
  ","
);
let head = Number(prompt("Enter head:"));

let arrayOfInputs = [];
arrayOfInputs.push(head);

userInputs.forEach((input) => {
  arrayOfInputs.push(Number(input));
});

arrayOfInputs.sort((a, b) => a - b);

let substraction = [];
for (let i = 0; i < arrayOfInputs.length - 1; i++) {
  substraction.push(Math.abs(head - arrayOfInputs[i]));
}
let min = Math.min(...substraction);
let closest = arrayOfInputs[substraction.indexOf(min)]; //tatbighe index va value
console.log(arrayOfInputs);
console.log(closest);
//---order
let order1 = [];
let order2 = [];
let sumOfDifference1 = 0;
let sumOfDifference2 = 0;
let indexOfClosest = substraction.indexOf(closest);
for (let i = indexOfClosest; i < arrayOfInputs.length - 1; i++) {
  order1.push(arrayOfInputs[i]);
  sumOfDifference1 += Math.abs(arrayOfInputs[i] - arrayOfInputs[i + 1]);
}
console.log(order1);
for (let i = indexOfClosest - 1; i > 0; i--) {
  order2.push(arrayOfInputs[i]);
  sumOfDifference2 += Math.abs(arrayOfInputs[i] - arrayOfInputs[i + 1]);
}

console.log(`order : ${order1.concat(order2)}
sum of difference : ${
  sumOfDifference1 +
  sumOfDifference2 +
  arrayOfInputs[arrayOfInputs.length - 1] -
  arrayOfInputs[indexOfClosest - 1]
}`);
//5, 22, 72, 14, 87, 54, 65

// let userInputs = prompt("enter the numbers as this pattern: [ , , ...]").split(
//   ","
// );

// let head = Number(prompt("Enter head:"));
// class SSTF {
//   constructor(arrayOfInputs, head) {
//     this.arrayOfInputs = arrayOfInputs;
//     this.head = head;
//   }
//   getValues() {
//     arrayOfInputs.push(head);

//     userInputs.forEach((input) => {
//       arrayOfInputs.push(input);
//     });

//     arrayOfInputs.sort((a, b) => a - b);
//     return this.arrayOfInputs;
//   }

//   findClosestToHead(getValues) {
//     let substraction = [];
//     for (let i = 0; i < arrayOfInputs.length - 1; i++) {
//       substraction.push(Math.abs(head - arrayOfInputs[i]));
//     }
//     let min = Math.min(...substraction);
//     let closest = arrayOfInputs[substraction.indexOf(min)]; //tatbighe index va value
//     return closest;
//   }
//   displayOrder(findClosestToHead) {
//     order1 = [];
//     order2 = [];
//     indexOfClosest = substraction.indexOf(min);
//     for (let i = indexOfClosest; i < arrayOfInputs.length - 1; i++) {
//       order1.push(this.arrayOfInputs[i]);
//     }
//     for (let j = indexOfClosest - 1; j > 0; j--) {
//       order2.push(this.arrayOfInputs[j]);
//     }
//     return `order : ${[...order1, order2]}`;
//   }

//   displayCount() {
//     let substraction1 = 0;
//     let substraction2 = 0;
//     indexOfClosest = substraction.indexOf(min);
//     for (let i = indexOfClosest; i < arrayOfInputs.length - 1; i++) {
//       substraction1 += Math.abs(this.arrayOfInputs[i] - this.arrayOfInputs[i + 1]);
//     }
//     for (let j = indexOfClosest - 1; j > 0; j--) {
//         substraction2 += Math.abs(this.arrayOfInputs[j] - this.arrayOfInputs[j + 1]);
//     }
//     return `count : ${substraction1 + substraction2 +Math.abs(this.arrayOfInputs[this.arrayOfInputs.length-1] - this.arrayOfInputs[indexOfClosest - 1] )}`;
//   }
// }
