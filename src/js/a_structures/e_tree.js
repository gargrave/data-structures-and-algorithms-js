/*
====================================
= TREE
====================================

Abstract data type

General Tree:
  - A tree has a root node.
  - The root node has 0 or more children.
  - Each child node has 0 or more children.
    - (each node in the tree can be seen as a subtree)

Constraints:
  - A child has only one parent and the root node has no parent.
  - Note: A tree is a special type of graph. A tree is a graph without cycles.

====================================
= Operations
====================================

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

====================================
= Additional Exercises
====================================

Given treeA and treeB, check if treeB is a subtree of treeA
(meaning that there exists a node n in treeA such that the
subtree of n is identical to treeB).

Given a dictionary, create a prefix tree (commonly known as a trie)
https://en.wikipedia.org/wiki/Trie
*/

export default class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childValue) {
    const child = childValue instanceof Tree
      ? childValue 
      : new Tree(childValue);
    this.children.push(child);
    return child;
  }

  contains(value) {
    if (this.value === value) {
      return true;
    } else {
      for (let i = 0; i < this.children.length; i++) {
        return this.children[i].contains(value);
      }
    }
    return false;
  }

  traverseDepthFirst(cb) {
    cb(this.value);
    this.children.forEach((c) => {
      c.traverseDepthFirst(cb);
    });
  }

  traverseBreadthFirst(cb, queue = []) {
    cb(this.value);
    queue = queue.concat(this.children);
    if (!queue.length) {
      return;
    }
    
    const [next, ...rest] = queue;
    next.traverseBreadthFirst(cb, rest);
  }
}
