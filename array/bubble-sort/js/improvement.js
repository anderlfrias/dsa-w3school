let myArray = [7, 3, 9, 12, 11];

for (let i = 0; i < myArray.length - 1; i++) {
  let swapped = false;
  for (let j = 0; j < myArray.length - i - 1; j++) {
    if (myArray[j] > myArray[j + 1]) {
      const temp = myArray[j];
      myArray[j] = myArray[j + 1];
      myArray[j + 1] = temp;
      swapped = true;
    }
  }
  if (!swapped) {
    break;
  }
}

console.log('Sorted array:', myArray);