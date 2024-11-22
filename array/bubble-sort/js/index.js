let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

for (let i = 0; i < myArray.length - 1; i++) {
  for (let j = 0; j < myArray.length - i - 1; j++) {
    if (myArray[j] > myArray[j + 1]) {
      const temp = myArray[j];
      myArray[j] = myArray[j + 1];
      myArray[j + 1] = temp;
    }
  }
}

console.log('Sorted array:', myArray);