//2273-leetcode

/**
 * @param {string[]} words
 * @return {string[]}
 */
// var removeAnagrams = function (words) {
//   const map = new Map();

//   for (let i = 0; i < words.length; i++) {
//     if(i > 0) {
//       const current = words[i];

//       const sortedStr = current.split("").sort().join("");

//       if (!map.has(sortedStr)) {
//         map.set(sortedStr, current);
//       }
//     }
//   }

//   return [...map.values()]


// };

var removeAnagrams = function (words) {

  for (let i = 0; i < words.length; i++) {

    if (i >= 1) {
      const prev = words[i - 1];
      const current = words[i];
      const sortedCurrent = current.split("").sort().join("");
      const sortedPrev = prev.split("").sort().join("");

      if (sortedPrev === sortedCurrent) {
        words.splice(i, 1)
        i--;
      }
    }
  }
  return words;
};

const words = ["abbc", "bbca", "aa", "bb", "aa"];
console.log(removeAnagrams(words));
