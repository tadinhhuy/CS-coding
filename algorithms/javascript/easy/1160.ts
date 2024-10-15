function countCharacters(words: string[], chars: string): number {
  // chars is a string of characters that we can use to form words
  // words is an array of words that we want to form using the characters in chars
  // the function returns the number of characters that can be formed by combining the words
  // in the words array using the characters in the chars string

  // create a map to store the count of each character in the chars string
  const charCounts = new Map<string, number>();

  // loop over the chars string and count how many times each character appears
  for (const char of chars) {
    // if the character is already in the map, increment its count
    // if the character is not in the map, add it with a count of 1
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  // we'll use reduce to keep track of the total length of words
  // that can be formed using the characters in the chars string
  return words.reduce((sum, word) => {
    // create a map to store the count of each character in the current word
    const wordCounts = new Map<string, number>();

    // loop over the current word and count how many times each character appears
    for (const char of word) {
      // if the character is already in the map, increment its count
      // if the character is not in the map, add it with a count of 1
      wordCounts.set(char, (wordCounts.get(char) || 0) + 1);

      // if the count of the current character in the word is greater than
      // the count of the same character in the chars string, then we can't
      // form the current word using the characters in the chars string
      // so we just return the current sum and bail out of the inner loop
      if ((wordCounts.get(char) || 0) > (charCounts.get(char) || 0)) {
        return sum;
      }
    }

    // if we get here, that means we can form the current word using the characters
    // in the chars string, so we add its length to the current sum
    return sum + word.length;
  }, 0);
}

const w = ["cat", "bt", "hat", "tree"];
const c = "atach";

console.log(countCharacters(w, c));
