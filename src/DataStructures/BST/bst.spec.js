import BinarySearchTree from './bst'

describe('BinarySearchTree', () => {
  describe('insert', () => {
    it('returns a new BST with the specified value', () => {
      const bst = new BinarySearchTree(10)
      const bst2 = bst.insert(15)
      expect(bst2 instanceof BinarySearchTree).toBe(true)
      expect(bst2.value).toBe(15)
      expect(bst2.left).toBe(null)
      expect(bst2.right).toBe(null)
    })

    it('inserts a lower value to the left', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      expect(bst.value).toBe(10)
      expect(bst.left.value).toBe(5)
    })

    it('inserts a higher value to the right', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(15)
      expect(bst.value).toBe(10)
      expect(bst.right.value).toBe(15)
    })
  })

  describe('contains', () => {
    it('correctly identifies a value in itself', () => {
      const bst = new BinarySearchTree(10)
      expect(bst.contains(10)).toBe(true)
    })

    it('correctly identifies in values in a child tree', () => {
      const bst = new BinarySearchTree(10)
      const bst2 = bst.insert(15)
      const bst3 = bst.insert(5)
      const bst4 = bst.insert(9)
      expect(bst2.contains(15)).toBe(true)
      expect(bst3.contains(5)).toBe(true)
      expect(bst4.contains(9)).toBe(true)
      expect(bst2.contains(5)).toBe(false)
      expect(bst3.contains(15)).toBe(false)
      expect(bst.contains(9)).toBe(true)
      expect(bst.contains(10)).toBe(true)
      expect(bst.contains(15)).toBe(true)
    })

    it('correctly identifies a value not contained within', () => {
      const bst = new BinarySearchTree(10)
      expect(bst.contains(9)).toBe(false)
    })
  })

  describe('findMin', () => {
    it('returns the correct value for a flat tree', () => {
      const bst = new BinarySearchTree(10)
      expect(bst.findMin()).toBe(10)
    })

    it('returns the correct value for a single-level tree', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(15)
      expect(bst.findMin()).toBe(10)
      bst.insert(5)
      expect(bst.findMin()).toBe(5)
    })

    it('returns the correct value a multi-level tree', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      bst.insert(15)
      bst.insert(13)
      bst.insert(12)
      bst.insert(20)
      bst.insert(4)
      bst.insert(22)
      bst.insert(1)
      bst.insert(3)
      expect(bst.findMin()).toBe(1)
    })
  })

  describe('findMax', () => {
    it('returns the correct value for a flat tree', () => {
      const bst = new BinarySearchTree(10)
      expect(bst.findMax()).toBe(10)
    })

    it('returns the correct value for a single-level tree', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(9)
      expect(bst.findMax()).toBe(10)
      bst.insert(15)
      bst.insert(5)
      expect(bst.findMax()).toBe(15)
    })

    it('returns the correct value a multi-level tree', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      bst.insert(15)
      bst.insert(22)
      bst.insert(13)
      bst.insert(12)
      bst.insert(20)
      bst.insert(4)
      bst.insert(1)
      bst.insert(3)
      expect(bst.findMax()).toBe(22)
    })
  })

  describe('remove', () => {
    it('correctly removes a single-value tree', () => {
      const bst = new BinarySearchTree(1)
      bst.remove(1)

      const arr = []
      bst.traverseDepthFirstInOrder(val => val !== undefined && arr.push(val))
      expect(arr).toEqual([])
    })

    it('does nothing if the value is not found', () => {
      const bst = new BinarySearchTree(5)
      bst.insert(3)
      bst.insert(2)
      bst.insert(4)
      bst.insert(7)

      bst.remove(6)

      let arr = []
      bst.traverseDepthFirstInOrder(val => arr.push(val))
      expect(arr).toEqual([2, 3, 4, 5, 7])

      arr = []
      bst.traverseDepthFirstPreOrder(val => arr.push(val))
      expect(arr).toEqual([5, 3, 2, 4, 7])

      arr = []
      bst.traverseDepthFirstPostOrder(val => arr.push(val))
      expect(arr).toEqual([2, 4, 3, 7, 5])
    })

    it('correctly removes the min node', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      bst.insert(15)
      bst.insert(8)
      bst.insert(12)
      bst.insert(20)
      bst.insert(2)

      bst.remove(2)

      let arr = []
      bst.traverseDepthFirstInOrder(val => arr.push(val))
      expect(arr).toEqual([5, 8, 10, 12, 15, 20])

      arr = []
      bst.traverseDepthFirstPreOrder(val => arr.push(val))
      expect(arr).toEqual([10, 5, 8, 15, 12, 20])

      arr = []
      bst.traverseDepthFirstPostOrder(val => arr.push(val))
      expect(arr).toEqual([8, 5, 12, 20, 15, 10])
    })

    it('correctly removes the max node', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      bst.insert(15)
      bst.insert(8)
      bst.insert(12)
      bst.insert(20)
      bst.insert(2)

      bst.remove(20)

      let arr = []
      bst.traverseDepthFirstInOrder(val => arr.push(val))
      expect(arr).toEqual([2, 5, 8, 10, 12, 15])

      arr = []
      bst.traverseDepthFirstPreOrder(val => arr.push(val))
      expect(arr).toEqual([10, 5, 2, 8, 15, 12])

      arr = []
      bst.traverseDepthFirstPostOrder(val => arr.push(val))
      expect(arr).toEqual([2, 8, 5, 12, 15, 10])
    })

    it('correctly removes a node with a single left child', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(9)
      bst.insert(8)

      bst.remove(9)

      let arr = []
      bst.traverseDepthFirstInOrder(val => arr.push(val))
      expect(arr).toEqual([8, 10])

      arr = []
      bst.traverseDepthFirstPreOrder(val => arr.push(val))
      expect(arr).toEqual([10, 8])

      arr = []
      bst.traverseDepthFirstPostOrder(val => arr.push(val))
      expect(arr).toEqual([8, 10])
    })

    it('correctly removes a node with a single right child', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(8)
      bst.insert(9)

      bst.remove(8)

      let arr = []
      bst.traverseDepthFirstInOrder(val => arr.push(val))
      expect(arr).toEqual([9, 10])

      arr = []
      bst.traverseDepthFirstPreOrder(val => arr.push(val))
      expect(arr).toEqual([10, 9])

      arr = []
      bst.traverseDepthFirstPostOrder(val => arr.push(val))
      expect(arr).toEqual([9, 10])
    })

    it('correctly removes a node with 2 children', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      bst.insert(15)
      bst.insert(3)
      bst.insert(8)
      bst.insert(12)
      bst.insert(17)
      bst.insert(2)
      bst.insert(4)
      bst.insert(6)
      bst.insert(9)
      bst.insert(16)
      bst.insert(18)
      bst.insert(7)

      bst.remove(5)

      let arr = []
      bst.traverseDepthFirstInOrder(val => val !== undefined && arr.push(val))
      expect(arr).toEqual([2, 3, 4, 6, 7, 8, 9, 10, 12, 15, 16, 17, 18])

      arr = []
      bst.traverseDepthFirstPreOrder(val => val !== undefined && arr.push(val))
      expect(arr).toEqual([10, 6, 3, 2, 4, 8, 7, 9, 15, 12, 17, 16, 18])

      arr = []
      bst.traverseDepthFirstPostOrder(val => val !== undefined && arr.push(val))
      expect(arr).toEqual([2, 4, 3, 7, 9, 8, 6, 12, 16, 18, 17, 15, 10])
    })
  })

  describe('isFull', () => {
    it('returns true if root node has zero children', () => {
      const bst = new BinarySearchTree(10)
      expect(bst.isFull()).toBe(true)
    })

    it('returns true if root node has two children', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      bst.insert(15)
      expect(bst.isFull()).toBe(true)
    })

    it('returns false if root node has only a left child', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      expect(bst.isFull()).toBe(false)
    })

    it('returns false if root node has only a right child', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(15)
      expect(bst.isFull()).toBe(false)
    })

    it('returns true if all sub-trees have zero children', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      bst.insert(15)
      expect(bst.isFull()).toBe(true)
    })

    it('returns true if all sub-trees have two children', () => {
      const bst = new BinarySearchTree(10)
      const bstL = bst.insert(5)
      bstL.insert(4)
      bstL.insert(6)
      const bstR = bst.insert(15)
      bstR.insert(14)
      bstR.insert(16)
      expect(bst.isFull()).toBe(true)
    })

    it('returns false if any sub-tree has only a single child', () => {
      const bst = new BinarySearchTree(10)
      const bstL = bst.insert(5)
      bstL.insert(4)
      bstL.insert(6)
      const bstR = bst.insert(15)
      bstR.insert(14)
      expect(bst.isFull()).toBe(false)
    })
  })

  describe('isBalanced', () => {
    it('returns true if root node has zero children', () => {
      const bst = new BinarySearchTree(10)
      expect(bst.isBalanced()).toBe(true)
    })

    it('returns true if root node has only two children', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      bst.insert(15)
      expect(bst.isBalanced()).toBe(true)
    })

    it('returns true if root node has only a left child', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      expect(bst.isBalanced()).toBe(true)
    })

    it('returns true if root node has only a right child', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(15)
      expect(bst.isBalanced()).toBe(true)
    })

    it('returns false if left tree is too deep', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      bst.insert(4)
      bst.insert(3)
      bst.insert(11)
      expect(bst.isBalanced()).toBe(false)
    })

    it('returns false if right tree is too deep', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      bst.insert(11)
      bst.insert(12)
      bst.insert(13)
      expect(bst.isBalanced()).toBe(false)
    })
  })

  describe('traverseDepthFirstInOrder', () => {
    it('correctly handles a single-element tree', () => {
      const bst = new BinarySearchTree(5)
      const arr = []
      bst.traverseDepthFirstInOrder(val => arr.push(val))
      expect(arr).toEqual([5])
    })

    it('traverses the values in the correct order', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      bst.insert(15)
      bst.insert(2)
      bst.insert(8)
      bst.insert(12)
      const arr = []
      bst.traverseDepthFirstInOrder(val => arr.push(val))
      expect(arr).toEqual([2, 5, 8, 10, 12, 15])
    })
  })

  describe('traverseDepthFirstPreOrder', () => {
    it('traverses the values in the correct order', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      bst.insert(15)
      bst.insert(2)
      bst.insert(8)
      bst.insert(12)
      const arr = []
      bst.traverseDepthFirstPreOrder(val => arr.push(val))
      expect(arr).toEqual([10, 5, 2, 8, 15, 12])
    })
  })

  describe('traverseDepthFirstPostOrder', () => {
    it('traverses the values in the correct order', () => {
      const bst = new BinarySearchTree(10)
      bst.insert(5)
      bst.insert(15)
      bst.insert(2)
      bst.insert(8)
      bst.insert(12)
      const arr = []
      bst.traverseDepthFirstPostOrder(val => arr.push(val))
      expect(arr).toEqual([2, 8, 5, 12, 15, 10])
    })
  })
})
