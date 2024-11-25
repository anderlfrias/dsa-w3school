let myArray = [64, 34, 25, 12, 22, 11, 90, 5];
const n = myArray.length;

for (let i = 0; i < n; i++) {
  let insertIndex = i;
  let currentValue = myArray[i];
  let j = i - 1;
  while (j >= 0 && myArray[j] > currentValue) {
    myArray[j + 1] = myArray[j];
    insertIndex = j;
    j--;
  }

  myArray[insertIndex] = currentValue;
}

console.log('Sorted array:', myArray);
