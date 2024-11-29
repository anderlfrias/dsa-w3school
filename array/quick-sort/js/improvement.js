function partition(array, low, high) {
  let mid = Math.floor((low + high) / 2);
  let cantidates = [array[low], array[mid], array[high]];
  cantidates.sort((a, b) => a - b); // sort in ascending order
  let median = cantidates[1];

  if (median === array[low]) {
    [array[low], array[high]] = [array[high], array[low]];
  } else if (median === array[mid]) {
    [array[mid], array[high]] = [array[high], array[mid]];
  }

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

function quickSort(array, low = 0, high = null) {
  if (high === null) {
    high = array.length - 1;
  }

  if (low < high) {
    let pivotIndex = partition(array, low, high);
    quickSort(array, low, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, high);
  }
}


function sort(array) {
  let low = 0, high = array.length - 1;
  quickSort(array, low, high);
  return array;
}

console.log(sort([64, 34, 25, 12, 22, 11, 90, 5])); // [5, 11, 12, 22, 25, 34, 64, 90]
