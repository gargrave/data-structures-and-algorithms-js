/*
====================================
= LINKED LIST
====================================

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.

====================================
= Operations
====================================

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

====================================
= Optimization
====================================

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

How can we modify our data structures (Node and Linked List classes)
  so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
  => new node inserted
  insert new node with associated value before refNode

myList.removeBefore(refNode)
  => removed node
  remove node before the refNode passed in

====================================
= Additional Exercises
====================================

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.
*/

class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

export default class LinkedList {
  constructor(headValue) {
    if (headValue) {
      this._head = new Node(headValue)
      this._tail = this._head
      this._count = 1
    } else {
      this._head = null
      this._tail = null
      this._count = 0
    }
  }

  get headNode() {
    return this._head
  }

  get head() {
    return this._head && this._head.value
  }

  get tail() {
    return this._tail && this._tail.value
  }

  get count() {
    return this._count
  }

  findNode(value) {
    let node = this._head
    while (node) {
      if (node.value === value) {
        return node
      }
      node = node.next
    }
    return null
  }

  append(value) {
    const newTail = new Node(value)
    if (this._tail) {
      this._tail.next = newTail
    }
    this._tail = newTail
    if (!this._head) {
      this._head = newTail
    }
    this._count += 1
    return newTail
  }

  insertHead(value) {
    const prevHead = this._head
    this._head = new Node(value, prevHead)
    this._count += 1
    return this._head
  }

  insertAfter(refNode, value) {
    if (!refNode || !this.findNode(refNode.value)) {
      return null
    }

    const newNode = new Node(value, refNode.next)
    refNode.next = newNode
    this._count += 1
    return newNode
  }

  removeHead() {
    const node = this._head
    this._head = node.next
    this._count -= 1
    return node
  }

  removeAfter(refNode) {
    if (!refNode || !refNode.next) {
      return null
    }

    const node = refNode.next
    refNode.next = node.next
    this._count -= 1
    return node
  }

  forEach(cb) {
    let node = this._head
    while (node) {
      cb(node.value)
      node = node.next
    }
  }

  print() {
    let node = this._head
    let str = `${node.value}`
    while (node.next) {
      str = `${str}, ${node.next.value}`
      node = node.next
    }
    return str
  }
}
