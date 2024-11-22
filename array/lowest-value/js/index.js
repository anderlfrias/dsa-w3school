const myArray = [7, 12, 9, 4, 11];
let minValue = myArray[0];

for (let i = 1; i < myArray.length; i++) {
  if (myArray[i] < minValue) {
    minValue = myArray[i];
  }
}

console.log('Lowest value:', minValue);