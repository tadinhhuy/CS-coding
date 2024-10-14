function numIdenticalPairs(nums: number[]): any {
  const n = nums.length;
  const map = new Map();

  let count = 0;

  for (let i = 0; i < n; i++) {
    const current = nums[i];
    map.set(current, map.get(current) + 1 || 1);
  }

  map.forEach((value) => {
    const n = value;
    count += (n * (n - 1)) / 2;
  });

  return count;
}

// function numIdenticalPairs(nums: number[]): any {
//   const n = nums.length;
//   let count = 0;

//   for (let i = 0; i < n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (nums[i] === nums[j] && i < j) {
//         count = count + 1;
//       }
//     }
//   }

//   return count;
// }

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
