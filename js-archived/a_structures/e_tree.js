/*
TREES

Abstract data type

General Tree:
A tree has a root node.
The root node has 0 or more children.
Each child node has 0 or more children.
(each node in the tree can be seen as a subtree)

Constraints:
A child has only one parent and the root node has no parent.
Note: A tree is a special type of graph. A tree is a graph without cycles.

*** Operations:

tree.addChild(value)
=> child node (new tree)
add child to tree/subtree and return child node (which should be a tree instance)

tree.contains(value)
=> true/false
Return true if value is in tree, false if not

tree.traverseDepthFirst(callback)
=> undefined
Invoke the callback for every node in a depth-first order

tree.traverseBreadthFirst(callback)
=> undefined
Invoke the callback for every node in a breadth-first order

*** Additional Exercises:
Given treeA and treeB, check if treeB is a subtree of treeA
(meaning that there exists a node n in treeA such that the
subtree of n is identical to treeB).

Given a dictionary, create a prefix tree (commonly known as a trie)
https://en.wikipedia.org/wiki/Trie

*/
const assert = require('assert');

function Tree(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function(value) {
  let tree = new Tree(value);
  this.children.push(tree);
  return tree;
};
// Time complexity:

Tree.prototype.contains = function(value) {
  // implement me...
  if (this.value === value) {
    return true;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      return this.children[i].contains(value);
    }
  }
  return false;
};
// Time complexity:

Tree.prototype.traverseDepthFirst = function(fn) {
  // implement me...
};
// Time complexity:

Tree.prototype.traverseBreadthFirst = function(fn) {
  // implement me...
};
// Time complexity:

let root = new Tree('root');
assert.equal(root.contains('root'), true);
assert.equal(root.contains('roof'), false);
let child1 = root.addChild('child 1');
assert.equal(child1.contains('child 1'), true);
assert.equal(root.contains('child 1'), true);
let child2 = root.addChild('child 2');
let child3 = root.addChild('child 3');
let child1_1 = child1.addChild('child 1-1');
assert.equal(child1.contains('child 1-1'), true);
assert.equal(root.contains('child 1-1'), true);
