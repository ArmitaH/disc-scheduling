
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
  for (let i = headIndex; i < array.length ; i++) {
    orderArray1.push(Number(array[i]));
  }
  for (let j = 0; j < headIndex ; j++) {
    orderArray2.push(Number(array[j]));
  }
  let newArray = orderArray1.concat(orderArray2);
  let subtraction = 0;
  for (let i = 0; i < newArray.length - 1; i++){
    subtraction += Math.abs(newArray[i + 1] - newArray[i])
  }
  console.log(`c-Scan
  sequence: ${newArray}
  subtraction: ${subtraction}`
  );
  
}

let arrayOfInputs = prompt('Enter numbers : ').split(',');
let head = Number(prompt('Enter head : '));
c_Scan(arrayOfInputs,head, 0, 99);

// let myArray = [5, 22, 72, 14, 87, 54, 65];
// cScan(myArray, 56, 0, 99);

// 5, 22, 72, 14, 87, 54, 65
//56, 65, 72, 87, 0, 5, 14, 22 
