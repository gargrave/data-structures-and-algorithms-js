/*
====================================
= BINARY SEARCH TREES
====================================

Abstract data type

A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node

====================================
= Operations
====================================

insert(value)
  => bsTree (return for chaining purposes)
  Insert value into correct position within tree

contains(value)
  => true/false
  Return true if value is in tree, false if not

traverseDepthFirstInOrder(cb)
  => undefined
  Invoke the callback for every node in a depth-first in-order (visit left branch,
    then current node, than right branch)
  Note: In-Order traversal is most common type for binary trees.
    For binary search tree, this visits the nodes in ascending order (hence the name).

traverseDepthFirstPreOrder(callback)
  => undefined
  Invoke the callback for every node in a depth-first pre-order
    (visits current node before its child nodes)

traverseDepthFirstPostOrder(callback)
  => undefined
  Invoke the callback for every node in a depth-first post-order
    (visit the current node after its child nodes)

isValid()
  => returns true if BST is a valid BST; otherwise returns false.
  - This method is useful for checking your other methods.

removeNode(value)
  => node
  Remove node from tree.

isFull()
  => true/false
  A binary tree is full if every node has either zero or two children
    (no nodes have only one child)

isBalanced()
  => true/false
  For this exercise, let's say that a tree is balanced if the minimum
  height and the maximum height differ by no more than 1. The height
    for a branch is the number of levels below the root.
*/

export default class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (!this.value) {
      this.value = value;
    } else if (value < this.value) {
      return this._insertLeft(value);
    } else if (value > this.value) {
      return this._insertRight(value);
    }
    return this;
  }

  _insertLeft(value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
      return this.left;
    } else {
      return this.left.insert(value);
    }
  }

  _insertRight(value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
      return this.right;
    } else {
      return this.right.insert(value);
    }
  }

  _childCount() {
    let count = 0;
    if (this.left) { count += 1; }
    if (this.right) { count += 1; }
    return count;
  }

  _leftChildIs(val) {
    return this.left && this.left.value === val;
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }

    const lContains = !!this.left && this.left.contains(value);
    const rContains = !!this.right && this.right.contains(value);
    return lContains || rContains;
  }

  findMin() {
    if (!this.left) {
      return this.value;
    }
    return this.left.findMin();
  }

  findMax() {
    if (!this.right) {
      return this.value;
    }
    return this.right.findMax();
  }

  findDepth(depth = 1) {
    const dl = this.left ? this.left.findDepth(depth + 1) : depth;
    const dr = this.right ? this.right.findDepth(depth + 1) : depth;
    return Math.max(dl, dr);
  }

  isFull() {
    if ((this.left && !this.right) || (!this.left && this.right)) {
      // only one child; definitely not full
      return false;
    } else if (this.left && this.right) {
      // two children; need to check both children recursively
      return this.left.isFull() && this.right.isFull();
    }
    // no children; this tree is full
    return true;
  }

  isBalanced() {
    const dl = this.left ? this.left.findDepth() : 0;
    const dr = this.right ? this.right.findDepth() : 0;
    return Math.abs(dl - dr) <= 1;
  }

  /* eslint-disable no-unused-expressions */
  traverseDepthFirstInOrder(callback) {
    this.left && this.left.traverseDepthFirstInOrder(callback);
    callback(this.value);
    this.right && this.right.traverseDepthFirstInOrder(callback);
  }

  traverseDepthFirstPreOrder(callback) {
    callback(this.value);
    this.left && this.left.traverseDepthFirstPreOrder(callback);
    this.right && this.right.traverseDepthFirstPreOrder(callback);
  }

  traverseDepthFirstPostOrder(callback) {
    this.left && this.left.traverseDepthFirstPostOrder(callback);
    this.right && this.right.traverseDepthFirstPostOrder(callback);
    callback(this.value);
  }
  /* eslint-enable no-unused-expressions */

  /*
  BST node removal:
    1. If a node has no children, we can simply remove this node from the tree.
    2. If a node has only a single child, we simply remove this node and replace it with said child.
    3. If a node has two children, this is where it gets fun:
      1. Find the in-order successor (i.e. the left-most child in the right sub-tree)
      2. Copy the *value* of this node into the node being deleted.
      3. The successor node can now be easily deleted, because it will only have 0 or 1 children.
   */
  remove(value, parent = null) {
    if (this.value === value) {
      if (parent) {
        // we have a parent node, so we need to adjust the tree!
        const count = this._childCount();
        if (count === 0) {
          // no children; simply unlink this node from its parent
          if (parent._leftChildIs(this.value)) {
            parent.left = undefined;
          } else {
            parent.right = undefined;
          }
        } else if (count === 1) {
          // one child; remove this node, and put the single child in its place
          const myChild = this.left || this.right;
          if (parent._leftChildIs(this.value)) {
            parent.left = myChild;
          } else {
            parent.right = myChild;
          }
          this.left = undefined;
          this.right = undefined;
        } else if (count === 2) {
          const successorVal = this.right.findMin();
          this.remove(successorVal);
          this.value = successorVal;
        }
      } else {
        // no parent; this is a root node; simply clear its value
        this.value = undefined;
      }
    } else {
      // this is not the value you are looking for.
      // continue traversing the tree in the appropriate direction
      if (this.value > value && this.left) {
        this.left.remove(value, this);
      } else if (this.value < value && this.right) {
        this.right.remove(value, this);
      }
    }
  }
}
