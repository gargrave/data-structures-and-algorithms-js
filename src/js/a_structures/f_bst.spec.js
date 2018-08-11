import BinarySearchTree from './f_bst';

describe('BinarySearchTree', () => {
  describe('insert', () => {
    it('returns a new BST with the specified value', () => {
      const bst = new BinarySearchTree(10);
      let bst2 = bst.insert(15);
      expect(bst2 instanceof BinarySearchTree).toBe(true);
      expect(bst2.value).toBe(15);
      expect(bst2.left).toBe(null);
      expect(bst2.right).toBe(null);
    });

    it('inserts a lower value to the left', () => {
      const bst = new BinarySearchTree(10);
      bst.insert(5);
      expect(bst.value).toBe(10);
      expect(bst.left.value).toBe(5);
    });

    it('inserts a higher value to the right', () => {
      const bst = new BinarySearchTree(10);
      bst.insert(15);
      expect(bst.value).toBe(10);
      expect(bst.right.value).toBe(15);
    });
  });

  describe('contains', () => {
    it('correctly identifies a value in itself', () => {
      const bst = new BinarySearchTree(10);
      expect(bst.contains(10)).toBe(true);
    });

    it('correctly identifies in values in a child tree', () => {
      const bst = new BinarySearchTree(10);
      const bst2 = bst.insert(15);
      const bst3 = bst.insert(5);
      const bst4 = bst.insert(9);
      expect(bst2.contains(15)).toBe(true);
      expect(bst3.contains(5)).toBe(true);
      expect(bst4.contains(9)).toBe(true);
      expect(bst2.contains(5)).toBe(false);
      expect(bst3.contains(15)).toBe(false);
      expect(bst.contains(9)).toBe(true);
      expect(bst.contains(10)).toBe(true);
      expect(bst.contains(15)).toBe(true);
    });

    it('correctly identifies a value not contained within', () => {
      const bst = new BinarySearchTree(10);
      expect(bst.contains(9)).toBe(false);
    });
  });

  describe('findMin', () => {
    it('returns the correct value for a flat tree', () => {
      const bst = new BinarySearchTree(10);
      expect(bst.findMin()).toBe(10);
    });

    it('returns the correct value for a single-level tree', () => {
      const bst = new BinarySearchTree(10);
      bst.insert(15);
      expect(bst.findMin()).toBe(10);
      bst.insert(5);
      expect(bst.findMin()).toBe(5);
    });

    it('returns the correct value a multi-level tree', () => {
      const bst = new BinarySearchTree(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(13);
      bst.insert(12);
      bst.insert(20);
      bst.insert(4);
      bst.insert(22);
      bst.insert(1);
      bst.insert(3);
      expect(bst.findMin()).toBe(1);
    });
  });

  describe('findMax', () => {
    it('returns the correct value for a flat tree', () => {
      const bst = new BinarySearchTree(10);
      expect(bst.findMax()).toBe(10);
    });

    it('returns the correct value for a single-level tree', () => {
      const bst = new BinarySearchTree(10);
      bst.insert(9);
      expect(bst.findMax()).toBe(10);
      bst.insert(15);
      bst.insert(5);
      expect(bst.findMax()).toBe(15);
    });

    it('returns the correct value a multi-level tree', () => {
      const bst = new BinarySearchTree(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(22);
      bst.insert(13);
      bst.insert(12);
      bst.insert(20);
      bst.insert(4);
      bst.insert(1);
      bst.insert(3);
      expect(bst.findMax()).toBe(22);
    });
  });

  describe('remove', () => {
  });

  describe('deleteMin', () => {
  });

  describe('deleteMax', () => {
  });

  describe('toArrayInOrder', () => {
  });

  describe('traverseDepthFirstInOrder', () => {
  });

  describe('traverseDepthFirstPreOrder', () => {
  });

  describe('traverseDepthFirstPostOrder', () => {
  });

  // describe('checkIfFull', () => {
  //   it('returns true if root node has zero children', () => {
  //     const bst = new BinarySearchTree(10);
  //     expect(bst.checkIfFull()).toBe(true);
  //   });

  //   it('returns true if root node has two children', () => {
  //     const bst = new BinarySearchTree(10);
  //     bst.insert(5);
  //     bst.insert(15);
  //     expect(bst.checkIfFull()).toBe(true);
  //   });

  //   it('returns true if root node has on a left child', () => {
  //     const bst = new BinarySearchTree(10);
  //     bst.insert(5);
  //     expect(bst.checkIfFull()).toBe(false);
  //   });

  //   it('returns true if root node has on a right child', () => {
  //     const bst = new BinarySearchTree(10);
  //     bst.insert(15);
  //     expect(bst.checkIfFull()).toBe(false);
  //   });

  //   it('returns true if all sub-trees have zero children', () => {
  //     const bst = new BinarySearchTree(10);
  //     const bstL = bst.insert(5);
  //     const bstR = bst.insert(15);
  //     expect(bst.checkIfFull()).toBe(true);
  //   });

  //   it('returns true if all sub-trees have two children', () => {
  //     const bst = new BinarySearchTree(10);
  //     const bstL = bst.insert(5);
  //     bstL.insert(4);
  //     bstL.insert(6);
  //     const bstR = bst.insert(15);
  //     bstR.insert(14);
  //     bstR.insert(16);
  //     expect(bst.checkIfFull()).toBe(true);
  //   });

  //   it('returns true if any sub-tree has only a single child', () => {
  //     const bst = new BinarySearchTree(10);
  //     const bstL = bst.insert(5);
  //     bstL.insert(4);
  //     bstL.insert(6);
  //     const bstR = bst.insert(15);
  //     bstR.insert(14);
  //     expect(bst.checkIfFull()).toBe(false);
  //   });
  // });

  describe('checkIfBalanced', () => {
  });
});
