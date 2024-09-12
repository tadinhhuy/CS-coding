const twoSum = (nums, target) => {
  const map = new Map();
  // explain the code
  // keep track of the indices of the numbers in the array, so we can return them later
  // use a map as it allows us to easily check if a number is in the map
  // the key is the number and the value is its index in the array
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    console.log({ diff, i });
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
};



const arr = [2, 7, 11, 15];

console.log(twoSum(arr, 9));