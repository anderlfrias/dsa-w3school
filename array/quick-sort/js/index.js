function partition(array, low, high) {
  let pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  return i + 1;
}

function quickSort(array, low=0, high=null) {
  if (high === null) {
    high = array.length - 1;
  }

  if (low < high) {
    let pivotIndex = partition(array, low, high);
    quickSort(array, low, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, high);
  }
}

let myArray = [64, 34, 25, 12, 22, 11, 90, 5]
quickSort(myArray);
console.log(myArray);