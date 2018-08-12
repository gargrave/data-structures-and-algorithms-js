import Tree from './tree';

function deepTree() {
  const root = new Tree('a1');
  const treeB = new Tree('b1');
  treeB.addChild('b2');
  const treeB3 = treeB.addChild('b3');
  treeB.addChild('b4');
  root.addChild(treeB);
  root.addChild('a2');
  treeB3.addChild('b3_1');
  treeB3.addChild('b3_2');
  return root;
}

describe('Tree', () => {
  describe('addChild', () => {
    it('creates a new Tree from non-tree value', () => {
      const treeA = new Tree(1);
      const result = treeA.addChild(2);

      expect(result instanceof Tree).toBe(true);
      expect(result.value).toBe(2);
    });

    it('uses the value as-is if it is already a Tree', () => {
      const treeA = new Tree(1);
      const treeB = new Tree(2);
      const result = treeA.addChild(treeB);

      expect(result instanceof Tree).toBe(true);
      expect(result.value instanceof Tree).toBe(false);
      expect(result.value).toBe(treeB.value);
    });
  });

  describe('contains', () => {
    it('correctly identifies whether the tree contains a given value', () => {
      const treeA = new Tree('a');

      expect(treeA.contains('a')).toBe(true);
      expect(treeA.contains('b')).toBe(false);
    });

    it('correctly identifies whether a child tree contains a given value', () => {
      const treeA = new Tree('a');
      const treeB = new Tree('b');
      treeB.addChild('c');
      treeA.addChild(treeB);

      expect(treeB.contains('b')).toBe(true);
      expect(treeB.contains('c')).toBe(true);
      expect(treeA.contains('b')).toBe(true);
      expect(treeA.contains('c')).toBe(true);
    });
  });

  describe('traverseDepthFirst', () => {
    it('correctly traverses the Tree depth-first', () => {
      const result = [];
      const expected = ['a1', 'b1', 'b2', 'b3', 'b3_1', 'b3_2', 'b4', 'a2'];
      deepTree().traverseDepthFirst((val) => result.push(val));
      expect(result).toEqual(expected);
    });
  });

  describe('traverseBreadthFirst', () => {
    it('correctly traverses the Tree depth-first', () => {
      const result = [];
      const expected = ['a1', 'b1', 'a2', 'b2', 'b3', 'b4', 'b3_1', 'b3_2'];
      deepTree().traverseBreadthFirst((val) => result.push(val));
      expect(result).toEqual(expected);
    });
  });
});
