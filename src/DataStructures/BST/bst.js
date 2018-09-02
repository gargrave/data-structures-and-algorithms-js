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
  }

  insert(value) {
  }

  _insertLeft(value) {
  }

  _insertRight(value) {
  }

  _childCount() {
  }

  _leftChildIs(val) {
  }

  contains(value) {
  }

  findMin() {
  }

  findMax() {
  }

  findDepth(depth = 1) {
  }

  isFull() {
  }

  isBalanced() {
  }

  traverseDepthFirstInOrder(callback) {
  }

  traverseDepthFirstPreOrder(callback) {
  }

  traverseDepthFirstPostOrder(callback) {
  }

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
  }
}
