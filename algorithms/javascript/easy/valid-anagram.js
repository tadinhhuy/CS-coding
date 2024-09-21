/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// const isAnagram = function (s, target) {
//   const sortedStr = s.split("").sort();
//   const sortedTarget = target.split("").sort();
//   let i = 0;

//   while (i < sortedStr.length) {
//     if (sortedStr[i] !== sortedTarget[i]) {
//       return false;
//     }
//     i++;
//   }
//   return true;
// };

const isAnagram = function (s, t) {
  const hashMapS = new Map();
  const hashMapT = new Map();
  const splittedS = s.split("");
  const splittedT = t.split("");

  if (s.length !== t.length) return false;

  for (let i = 0; i < splittedS.length; i++) {
    const currentS = splittedS[i];
    const currentT = splittedT[i];
    hashMapT.set(currentT, (hashMapT.get(currentT) || 0) + 1);
    hashMapS.set(currentS, (hashMapS.get(currentS) || 0) + 1);
  }

  for (const [key, value] of hashMapS) {
    if (hashMapT.get(key) !== value) {
      return false;
    }
  }

  return true;
};

const s = "anagram";
const t = "nagaram";

console.log(isAnagram(s, t));
