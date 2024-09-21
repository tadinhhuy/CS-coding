// 643 - leetcode
/**
 * Find the maximum average of a subarray of size k.
 * @param {number[]} nums The array of numbers
 * @param {number} k The size of the subarray
 * @return {number} The maximum average of the subarray
 */

var findMaxAverage = function (nums, k) {
  let n = nums.length;
  let max = 0;
  let sum = 0;

  // Calculate the sum of the first k elements
  for (let i = 0; i < k; i++) {
    sum += nums[i];
    max = sum;
  }

  // Iterate over the array and calculate the sum of the current window
  for (let end = k; end < n; end++) {
    const start = end - k;

    // Subtract the element that is leaving the window and add the element that is entering
    sum -= nums[start] + nums[end];
    
    // Update the maximum average if the current sum is greater
    if (sum > max) {
      max = sum;
    }
  }

  // Return the maximum average
  return max / k;
};

const arr = [1, 12, -5, -6, 50, 3];
// const arr = [-1];

// const arr = [
//   4433, -7832, -5068, 4009, 2830, 6544, -6119, -7126, -780, -4254, -8249, -9168,
//   9492, 402, 5789, 6808, 8953, 5810, -7353, 7933, 4766, 5182, -3230, -1989,
//   5786, 6922, -4646, 4415, -9906, 807, -6373, 3370, 2604, 8751, -9173, -2668,
//   -6876, 9500, 3465, -1900, 4134, -1758, -1453, -5201, -9825, 4469, -1999,
//   -1108, 1836, 3923, 6796, -5252, 9863, -5997, -3251, 9596, -3404, -540, 2826,
//   -1737, 3341, -3623, -9885, 2603, -5782, 8174, 2710, 6504, -4128,
// ];
const k = 4;

console.log(findMaxAverage(arr, k));
