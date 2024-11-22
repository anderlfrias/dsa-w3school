console.log(0);
console.log(1);

let count = 2;
let numberCount = 20;

function fibonacci(prev1, prev2) {
  if (count < numberCount) {
    const newFibo = prev1 + prev2;
    console.log(newFibo);
    prev2 = prev1;
    prev1 = newFibo;
    count++;
    fibonacci(prev1, prev2);
  } else {
    return;
  }
}

fibonacci(1, 0);