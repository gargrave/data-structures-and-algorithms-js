/*
BINARY SEARCH TREES

Abstract data type
A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node

*** Operations:

bsTree.insert(value)
=> bsTree (return for chaining purposes)
Insert value into correct position within tree

bsTree.contains(value)
=> true/false
Return true if value is in tree, false if not

bsTree.traverseDepthFirst_inOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
Note: In-Order traversal is most common type for binary trees.
  For binary search tree, this visits the nodes in ascending order (hence the name).

bsTree.traverseDepthFirst_preOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)

bsTree.traverseDepthFirst_postOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)

bsTree.isValid()
=> returns true if BST is a valid BST otherwise returns false. This method is useful for checking your other methods.

bsTree.removeNode(value)
=> node
Remove node from tree.

bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes have only one child)

bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum
height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.

*** Additional Exercises:
A binary search tree was created by iterating over an array and
inserting each element into the tree. Given a binary search tree
with no duplicates, how many different arrays would result in the creation of this tree.

*/
'use strict';
const assert = require('assert');

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
  return this;
};
// Time complexity:

BinarySearchTree.prototype.contains = function(value) {
  // implement me...
  if (this.value === value) {
    return true;
  } else if (this.left) {
    return this.left.contains(value);
  } else if (this.right) {
    return this.right.contains(value);
  }
  return false;
};
// Time complexity:

BinarySearchTree.prototype.findDepth = function(depth) {
  let maxDepth = depth || 1;
  goDeeper(this, maxDepth);

  function goDeeper(node, d) {
    maxDepth = d > maxDepth ? d : maxDepth;
    if (node.left) {
      goDeeper(node.left, d + 1);
    }
    if (node.right) {
      goDeeper(node.right, d + 1);
    }
  }

  return maxDepth;
};

BinarySearchTree.prototype.getMinNode = function(subTree = null) {
  const root = subTree || this;
  const min = (node) => {
    if (!node.left) {
      return node;
    }
    return min(node.left);
  };
  return min(root);
};

BinarySearchTree.prototype.remove = function(value) {
  const traverse = (current, parent = null) => {
    if (current.value === value) {
      if (parent) {
        if (parent.right && parent.right.value === value) {
          // 'current' is the parent's 'right'
          if (current.left && current.right) {
            // do cool stuff
            const min = current.getMinNode();
            current.remove(min.value);
            current.value = min.value;
          } else if (current.left) {
            // only has a 'left' child -> set parent's child to current's 'left'
            parent.right = current.left;
          } else if (current.right) {
            // only has a 'right' child -> set parent's child to current's 'right'
            parent.right = current.right;
          } else {
            parent.right = null;
          }
        } else if (parent.left && parent.left.value === value) {
          // 'current' is the parent's 'left'
          if (current.left && current.right) {
            // do cool stuff
            const min = current.getMinNode();
            current.remove(min.value);
            current.value = min.value;
          } else if (current.left) {
            // only has a 'left' child -> set parent's child to current's 'left'
            parent.left = current.left;
          } else if (current.right) {
            // only has a 'right' child -> set parent's child to current's 'right'
            parent.left = current.right;
          } else {
            parent.left = null;
          }
        }
      } else {
        // this is a root
      }
    } else if (current.value < value) {
      if (current.right) {
        traverse(current.right, current);
      }
    } else {
      if (current.left) {
        traverse(current.left, current);
      }
    }
  };
  traverse(this);
  return this;
};

BinarySearchTree.prototype.deleteMin = function() {
  if (this.left) {
    // if we still have a left node, traverse further
    this.left = this.left.deleteMin();
    return this;
  } else if (this.right) {
    // if we have only a right node, this node is the min
    // so we need to set the parent's 'left' to this one's 'right'
    return this.right;
  } else {
    // if no left or right, this is a leaf, so simply return null
    return null;
  }
};

BinarySearchTree.prototype.deleteMax = function() {
  if (this.right) {
    // if we still have a right node, traverse further
    this.right = this.right.deleteMax();
    return this;
  } else if (this.left) {
    // if we have only a left node, this node is the max
    // so we need to set the parent's 'right' to this one's 'left'
    return this.left;
  } else {
    // if no left or right, this is a leaf, so simply return null
    return null;
  }
};

BinarySearchTree.prototype.toArray_inOrder = function() {
  let arr = [];
  const traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }
    arr.push(node.value);
    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(this);
  return arr;
};

BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(fn) {
  // implement me...
  if (this.left) {
    this.left.traverseDepthFirst_inOrder(fn);
  }
  fn(this);
  if (this.right) {
    this.right.traverseDepthFirst_inOrder(fn);
  }
};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_preOrder = function(fn) {
  fn(this);
  if (this.left) {
    this.left.traverseDepthFirst_inOrder(fn);
  }
  if (this.right) {
    this.right.traverseDepthFirst_inOrder(fn);
  }
};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_postOrder = function(fn) {
  if (this.left) {
    this.left.traverseDepthFirst_inOrder(fn);
  }
  if (this.right) {
    this.right.traverseDepthFirst_inOrder(fn);
  }
  fn(this);
};
// Time complexity:

BinarySearchTree.prototype.checkIfFull = function() {
  // a tree is full if every node has exactly 0 or 2 child nodes; no node can have a single child
  if ((!this.left && this.right) || (this.left && !this.right)) {
    return false;
  }
  if (!this.left && !this.right) {
    return true;
  }
  return this.right.checkIfFull() && this.left.checkIfFull();
};
// Time complexity:

BinarySearchTree.prototype.checkIfBalanced = function() {
  // a tree is balanced if the difference in depths of L sub-tree and R sub-tree is no greater than 1
  let depthL = this.left ? this.left.findDepth() : 0;
  let depthR = this.right ? this.right.findDepth() : 0;

  return (Math.abs(depthL - depthR) <= 1);
};
// Time complexity:

let tree = new BinarySearchTree(6);
assert.equal(tree.value, 6);
assert.equal(tree.contains(6), true);
assert.equal(tree.contains(4), false);
tree.insert(4);
assert.equal(tree.contains(4), true);
assert.equal(tree.left.value, 4);
assert.equal(tree.right, null);
tree.insert(8);
assert.equal(tree.right.value, 8);
assert.equal(tree.contains(5), false);
tree.insert(5);
assert.equal(tree.contains(5), true);
tree.insert(5).insert(11).insert(7).insert(3);

let arr = tree.toArray_inOrder();
assert.deepEqual(arr, [3, 4, 5, 6, 7, 8, 11]);

let values = [];
tree.traverseDepthFirst_inOrder((node) => values.push(node.value));
assert.deepEqual(values, [3, 4, 5, 6, 7, 8, 11]);

tree = tree.deleteMin();
assert.deepEqual(tree.toArray_inOrder(), [4, 5, 6, 7, 8, 11]);
tree = tree.deleteMin();
assert.deepEqual(tree.toArray_inOrder(), [5, 6, 7, 8, 11]);
tree = tree.deleteMax();
assert.deepEqual(tree.toArray_inOrder(), [5, 6, 7, 8]);
tree = tree.deleteMin();
assert.deepEqual(tree.toArray_inOrder(), [6, 7, 8]);
tree = tree.deleteMin();
assert.deepEqual(tree.toArray_inOrder(), [7, 8]);

let t2 = new BinarySearchTree(2);
t2.insert(4).insert(6).insert(8).insert(7).insert(10).insert(12);
assert.deepEqual(t2.toArray_inOrder(), [2, 4, 6, 7, 8, 10, 12]);
t2.remove(5); // should do nothing
assert.deepEqual(t2.toArray_inOrder(), [2, 4, 6, 7, 8, 10, 12]);
t2.remove(10); // should rebuild the tree without 10
assert.deepEqual(t2.toArray_inOrder(), [2, 4, 6, 7, 8, 12]);
// t2.remove(12) // should rebuild the tree without 12
// assert.deepEqual(t2.toArray_inOrder(), [2, 4, 6, 7, 8, 10])
t2.remove(8); // should rebuild the tree without 8
console.log(t2.toArray_inOrder());
assert.deepEqual(t2.toArray_inOrder(), [2, 4, 6, 7, 12]);
