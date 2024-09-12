const twoSumWithSorted = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const sum = numbers[left] + numbers[right];

    console.log({ left, right, sum });

    if (sum === target) {
      return [left, right];
    }

    if (sum < target) {
      left++;
    }

    if (sum > target) {
      right--;
    }
  }

  return null;
};


const arr = [2, 7, 11, 15];

console.log(twoSumWithSorted(arr, 9));