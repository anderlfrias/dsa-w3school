let myArray = [64, 34, 25, 5, 22, 11, 90, 12];
let n = myArray.length;

for (let i = 0; i < n - 1; i++) {
  let minIndex = i;

  for (let j = i + 1; j < n; j++) {
    if (myArray[j] < myArray[minIndex]) {
      minIndex = j;
    }
  }

  let minValue = myArray.splice(minIndex, 1);
  myArray.splice(i, 0, minValue[0]);
}

console.log(myArray); // [5, 11, 12, 22, 25, 34, 64, 90]