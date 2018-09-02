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
  constructor(str) {
    this.children = [];
    this.value = str[0] || '';
    this.isEnd = false;
  }

  add(str) {
    const value = str[0];
    const rest = str.substr(1);
    let node = this.children.find(c => c.value === value);
    if (!node) {
      node = new Node(value);
      this.children.push(node);
    }

    if (rest) {
      node.add(rest);
    } else {
      node.isEnd = true;
    }
  }

  /**
   * Finds and returns the node with the given value, or null if not found.
   * Note that this is post-order searching in order to avoid returning the same
   *    node multiple times for multiple consecutive values.
   */
  _find(value) {
    for (let i = 0; i < this.children.length; i += 1) {
      if (this.children[i].value === value) {
        return this.children[i]._find(value);
      }
    }
    if (this.value === value) {
      return this;
    }
    return null;
  }

  _buildWord(search, onWordComplete, word = '') {
    const value = search[0];
    const next = search[1];

    this.children
      .filter(c => !value || c.value === next)
      .forEach(c => c._buildWord(search, onWordComplete, `${word}${this.value}`));

    if (this.isEnd) {
      onWordComplete(`${word}${this.value}`);
    }
  }

  /**
   * Locates the node that represents the point at which the search should begin.
   * This is the node containing the value of the last character in the current,
   *    and saves us the trouble of starting the search from the top every time.
   *
   * Returns an object containing the node itself, and a string containing the
   *    substring from the current search that represents what this node spells out so far.
   */
  _findSearchRoot(search) {
    return search.split('').reduce((acc, val) => {
      const newSearchRoot = acc.searchRoot._find(val);
      if (newSearchRoot) {
        return {
          searchRoot: newSearchRoot,
          searchBaseStr: `${acc.searchBaseStr}${val}`,
        };
      }
      return acc;
    }, {
      searchRoot: this,
      searchBaseStr: '',
    });
  }

  _complete(search) {
    const { searchRoot, searchBaseStr } = this._findSearchRoot(search);
    // if our search root is an end node, the user is searching for the full word;
    // simply return the full search term
    if (searchRoot.isEnd) {
      return [search];
    }

    // this will generally be undefined, but in some edge cases like when
    // a user has searched for a string that returns no results, it will populated
    const searchSubstr = search.substr(searchBaseStr.length);

    return searchRoot.children.reduce((acc, child) => {
      const onWordComplete = word => acc.push(`${searchBaseStr}${word}`);
      child._buildWord(searchSubstr, onWordComplete, '');
      return acc;
    }, []);
  }

  /**
   * Builds a list of "suggestions" from the Trie based on the provided search term.
   */
  complete(str) {
    return this._complete(str);
  }
}

export default function createTrie(words) {
  const root = new Node('');
  words.forEach(word => root.add(word.toLowerCase()));
  return root;
}
