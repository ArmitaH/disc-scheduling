function Scan(userArray, head, low, high) {
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
  for (let j = 0; j < array.indexOf(head) - 1; j++) {
    sequence2.push(array[j]);
  }

  let sequence = sequence1.concat(sequence2);
  for (let i = 0; i < sequence.length - 1; i++) {
    subtraction += Math.abs(sequence[i] - sequence[i + 1]);
  }

  console.log(`sequence : ${sequence}`);
  console.log(`count : ${subtraction}`);
}
//[5, 22, 72, 14, 87, 54, 65]
let arrayOfInputs = prompt("Enter numbers : ").split(",");
let head = prompt("Enter a number as head: ");
Scan(arrayOfInputs, 56, 0, 99);
//sort : 5, 14, 22, 54, 56, 65, 72, 87
//answr :56, 65, 72, 87, 99, 54, 22, 14, 5, 0
//      142
