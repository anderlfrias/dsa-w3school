function countingSort(array) {
  const max = Math.max(...array);
  let count = new Array(max + 1).fill(0);

  while (array.length > 0) {
    const num = array.shift();
    count[num]++;
  }

  for (let index = 0; index < count.length; index++) {
    while (count[index] > 0) {
      array.push(index);
      count[index]--;
    }
  }

  return array;
}

let unsortedArray = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3];
console.log(countingSort(unsortedArray)); // [1, 2, 2, 2, 3, 3, 3, 4, 5, 6, 6]