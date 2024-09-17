/**
 * Given an array of strings, group anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
 *
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagram = (strs) => {
  const map = new Map();

  const result = [];

  for (let i = 0; i < strs.length; i++) {
    const current = strs[i];
    const sortedStr = current.split("").sort().join("");

    if (map.has(sortedStr)) {
      const value = map.get(sortedStr);
      value.push(current);
      map.set(sortedStr, value);
    } else {
      map.set(sortedStr, [current]);
    }
  }

  map.forEach((item) => result.push(item));
  return result;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagram(strs));
