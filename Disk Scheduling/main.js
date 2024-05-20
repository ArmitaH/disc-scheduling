let low = prompt("lower limit: "); //0
let high = prompt("higher limit: "); //99
let head = prompt("head (should be in range of low and high)"); //56
let arrayOfInputs = prompt("Enter numbers : ").split(",");

function fifo(userArray, head, low, high) {
  let array = [];
  userArray.forEach((input) => Number(array.push(input)));
  array.push(head);
  array.push(low);
  array.push(high);
  array.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < userArray; i++) {
    let number = parseInt(prompt(`enter number${i + 1}: `));
    if (number < low || number > high) {
      console.log(`number should be in a range between ${low} and ${high}`);
      break;
    }
    userArray.push(number);
  }
  for (let j = 0; j < userArray.length - 1; j++) {
    let difference = Math.abs(userArray[j + 1] - userArray[j]);
    sum += difference;
  }
  console.log("FIFO: ", sum);
  console.log(`sequence : ${userArray}`);
  console.log("\n");
}

function SSTF(userArray, head, low, high) {
  let array = [];
  userArray.forEach((input) => array.push(Number(input)));

  array.push(head);
  array.push(low);
  array.push(high);
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
    let closestNumIndex = findClosestToHead.indexOf(
      Math.min(...findClosestToHead)
    );
    currentNum = array[closestNumIndex];
    array.splice(array.indexOf(currentNum), 1);
    sequence.push(currentNum);
    subtraction.push(findClosestToHead[closestNumIndex]);
  }
  let count = 0;
  for (let i = 0; i < subtraction.length; i++) {
    count += subtraction[i];
  }
  console.log("SSTF:", count);
  console.log(`sequence: ${sequence}`); //56,54,65,72,87,22,14,5
  console.log("\n");
}

function scan(userArray, head, low, high) {
  let array = [];
  userArray.forEach((input) => Number(array.push(input)));
  array.push(head);
  array.push(low);
  array.push(high);
  array.sort((a, b) => a - b);

  //   console.log(array);

  let subtraction = 0;
  let sequence1 = [];
  let sequence2 = [];

  for (let i = array.indexOf(head); i <= array.length - 1; i++) {
    sequence1.push(array[i]);
  }
  for (let j = array.indexOf(head) - 1; j >= 0; j--) {
    sequence2.push(array[j]);
  }

  let sequence = sequence1.concat(sequence2);
  // let mainSequence = sequence.map(function(str){
  //   return parseInt(str);
  // });
  for (let i = 0; i < sequence.length - 1; i++) {
    subtraction += Math.abs(sequence[i] - sequence[i + 1]);
  }

  console.log("scan: ", subtraction);
  console.log(`sequence: ${sequence}`);
  console.log("\n");
  // console.log(mainSequence);
}

function c_Scan(userArray, head, low, high) {
  let array = [];
  array.push(low);
  array.push(high);
  array.push(head);
  userArray.forEach((input) => array.push(Number(input)));

  array.sort((a, b) => a - b);

  let orderArray1 = [];
  let orderArray2 = [];
  let headIndex = array.indexOf(head);
  for (let i = headIndex; i < array.length; i++) {
    orderArray1.push(Number(array[i]));
  }
  for (let j = 0; j < headIndex; j++) {
    orderArray2.push(Number(array[j]));
  }
  let newArray = orderArray1.concat(orderArray2);
  let subtraction = 0;
  for (let i = 0; i < newArray.length - 1; i++) {
    subtraction += Math.abs(newArray[i + 1] - newArray[i]);
  }
  console.log("C_scan:", subtraction);
  console.log(`sequence: ${newArray}`);
  console.log("\n");
}

function LOOK(userArray, head, low, high) {
  let array = [];
  userArray.forEach((input) => Number(array.push(input)));
  array.push(head);
  array.push(low);
  array.push(high);
  array.sort((a, b) => a - b);

  //   console.log(array);

  let subtraction = 0;
  let sequence1 = [];
  let sequence2 = [];

  for (let i = array.indexOf(head); i < array.length - 1; i++) {
    sequence1.push(array[i]);
  }
  for (let j = array.indexOf(head) - 1; j > 0; j--) {
    sequence2.push(array[j]);
  }

  let sequence = sequence1.concat(sequence2);
  for (let i = 0; i < sequence.length - 1; i++) {
    subtraction += Math.abs(sequence[i] - sequence[i + 1]);
  }

  console.log("Look:", subtraction);
  console.log(`sequence: ${sequence}`);
  console.log("\n");
}

function C_LOOK(userArray, head, low, high) {
  let array = [];
  userArray.forEach((input) => Number(array.push(input)));
  array.push(head);
  array.push(low);
  array.push(high);
  array.sort((a, b) => a - b);

  let subtraction = 0;
  let sequence1 = [];
  let sequence2 = [];

  for (let i = array.indexOf(head); i < array.length - 1; i++) {
    sequence1.push(array[i]);
  }
  for (let j = 1; j <= array.indexOf(head) - 1; j++) {
    sequence2.push(array[j]);
  }

  let sequence = sequence1.concat(sequence2);
  for (let i = 0; i < sequence.length - 1; i++) {
    subtraction += Math.abs(sequence[i] - sequence[i + 1]);
  }

  console.log("C_look:", subtraction);
  console.log(`sequence : ${sequence}`);
  console.log("\n");
}

fifo(arrayOfInputs, head, low, high);
SSTF(arrayOfInputs, head, low, high);
scan(arrayOfInputs, head, low, high);
c_Scan(arrayOfInputs, head, low, high);
LOOK(arrayOfInputs, head, low, high);
C_LOOK(arrayOfInputs, head, low, high);
//5, 22, 72, 14, 87, 54, 65
