// let num1 = Number(prompt("enter the first number: "));
// let num2 = Number(prompt("enter the second number: "));
// let num3 = Number(prompt("enter the third number: "));
// let num4 = Number(prompt("enter the forth number: "));
// let num5 = Number(prompt("enter the fifth number: "));
// let num6 = Number(prompt("enter the sixth number: "));

// let head = Number(prompt("enter the head: "));

// let fifoArray = [head, num1, num2, num3, num4, num5, num6];
// let sum = 0;
// let numberDifference;
// for (let i = 0; i < fifoArray.length - 1; i++) {
//   numberDifference = Math.abs(fifoArray[i + 1] - fifoArray[i]);
//   sum += numberDifference;
// }
// console.log(`order : ${fifoArray}`);
// console.log(`count : ${sum}`);

//------------function---------------------

// function fifo(numberOfNumbers, head, low, high) {
//   let fifoArray = [];
//   let difference;
//   let sum = 0;
//   fifoArray.unshift(head);

//   for (let i = 0; i < numberOfNumbers; i++) {
//     let numbers = parseInt(prompt(`enter number${i + 1}: `));
//     fifoArray.push(numbers);
//   }
//   for (let j = 0; j < fifoArray.length - 1; j++) {
//     difference = Math.abs(fifoArray[j + 1] - fifoArray[j]);
//     sum += difference;
//   }
//   console.log(`order : ${fifoArray}`);
//   console.log(`count : ${sum}`);
// }

// fifo(6, 56);

//---------------considering a range-----------
// 5, 22, 72, 14, 87, 54, 65 -> 242

let low = prompt("lower limit: "); //0
let high = prompt("higher limit: "); //99
let head = prompt("head (should be in range of low and high)"); //56
let numberOfnums = prompt("how many numbers would you like to add?"); //6

function fifo(userArray, head, low, high) {
  let array = [];
  userArray.forEach((input) => Number(array.push(input)));
  array.push(head);
  array.push(low);
  array.push(high);
  array.sort((a, b) => a - b);
  let fifoArray = [];
  let sum = 0;
  fifoArray.unshift(head);

  for (let i = 0; i < numberOfNumbers; i++) {
    let number = parseInt(prompt(`enter number${i + 1}: `));
    if (number < low || number > high) {
      console.log(`number should be in a range between ${low} and ${high}`);
      break;
    }
    fifoArray.push(number);
  }
  for (let j = 0; j < fifoArray.length - 1; j++) {
    let difference = Math.abs(fifoArray[j + 1] - fifoArray[j]);
    sum += difference;
  }
  console.log("FIFO: ", `count : ${sum}`);
  console.log(`order : ${fifoArray}`);
}

fifo(numberOfnums, head, 0, 99);
