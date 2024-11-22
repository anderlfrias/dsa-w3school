let myArray = [64, 34, 25, 12, 22, 11, 90, 5];
const n = myArray.length;

for (let i = 0; i < n; i++) {
  let minIndex = i;
  for (let j = i + 1; j < n; j++) {
    if (myArray[j] < myArray[minIndex]) {
      minIndex = j;
    }
  }

  const temp = myArray[i];
  myArray[i] = myArray[minIndex];
  myArray[minIndex] = temp;
}

console.log('Sorted array:', myArray); // [5, 11, 12, 22, 25, 34, 64, 90]