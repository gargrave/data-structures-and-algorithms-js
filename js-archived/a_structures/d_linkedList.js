/*

LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.

*** Operations:

** Part 1

myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode)
=> removed node
remove node after the refNode

myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in

* Optimization:
Say we have a linked list that has 100 items and we want to add
an item to the very end. How would you do that with your current
implementation? How can you modify the data structure to add an
item to the end in constant time?

myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> removed tail node
remove the tail node from the list

** Part 2

Now let's think about creating insertBefore and removeBefore
methods for the nodes in our list. Can you think of an efficient
way to do so?

Think about time complexity. What would it be for your current implementation of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in

*** Additional Exercises:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.

*/
const assert = require('assert');

function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

function LinkedList(headValue) {
  if (headValue) {
    this.head = new Node(headValue, null);
    this.tail = this.head;
  } else {
    this.head = null;
    this.tail = null;
  }
}

LinkedList.prototype.getHeadNode = function() {
  return this.head;
};

LinkedList.prototype.getTailNode = function() {
  return this.tail;
};

LinkedList.prototype.addToStart = function(value) {
  let node = new Node(value);
  node.next = this.head;
  this.head = node;
  return node;
};

LinkedList.prototype.addToEnd = function(value) {
  let node = new Node(value, null);
  this.tail.next = node;
  this.tail = node;
  return node;
};

LinkedList.prototype.addAfter = function(after, value) {
  let node = new Node(value, after.next);
  after.next = node;
  if (this.tail === after) {
    this.tail = node;
  }
  return node;
};

LinkedList.prototype.removeHead = function() {
  let node = this.head;
  this.head = node.next;
  return node;
};

LinkedList.prototype.removeAfter = function(after) {
  // set 'next' of node 'after' to 'next' of 'after.next'
  let next = after.next;
  if (next) {
    after.next = next.next;
  }
};

LinkedList.prototype.print = function(value) {
  let node = this.head;
  let str = '';

  while (node) {
    str = str.concat(node.value);
    node = node.next;
    if (node) {
      str = str.concat(', ');
    }
  }
  console.log(str);
  return str;
};

let ll = new LinkedList('a');
let a = ll.getHeadNode();
assert.equal(ll.print(), 'a');
let b = ll.addToEnd('b');
assert.equal(ll.print(), 'a, b');
let c = ll.addToEnd('c');
assert.equal(ll.print(), 'a, b, c');
let d = ll.addAfter(b, 'd');
assert.equal(ll.print(), 'a, b, d, c');
assert.deepEqual(b.next, d);
ll.removeAfter(b);
assert.equal(ll.print(), 'a, b, c');
assert.deepEqual(b.next, c);
let newHead = ll.addToStart('0');
assert.equal(ll.print(), '0, a, b, c');
assert.deepEqual(ll.getHeadNode(), newHead);
assert.deepEqual(newHead.next, a);
assert.deepEqual(ll.removeHead(), newHead);
assert.deepEqual(ll.getHeadNode(), a);
let e = ll.addAfter(c, 'e');
assert.deepEqual(ll.getTailNode(), e);
