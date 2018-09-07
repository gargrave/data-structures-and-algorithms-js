/*
 * in order to pass the unit tests, you will need to create a function called
 * createTrie that accepts a list of strings as a parameter
 * and returns an object with a method on it called "`complete`.
 *
 * complete is a method that when called with a string will return
 * an array of up to length three that are autocompleted
 * suggestions of how to finish that string.
 *
 * for the sake of this exercise, it does not matter which order these strings are
 * returned in or if there are more than three
 * possible suggestions, which three you choose
 *
 * feel free to see the dataset here:  https://codepen.io/btholt/pen/jZMdmp
 *
 * I suggest working on one unit test at a time, use `xit` instead of `it` to not run unit tests
 * the edge cases are for fun and for this exercise you don't necessarily need to pass them
*/
class Node {
  /**
   * Builds a list of "suggestions" from the Trie based on the provided search term.
   */
  complete(str) {}
}

export default function createTrie(words) {
  const root = new Node('')
  return root
}
