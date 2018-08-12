import LinkedList from './linkedList';

const values = 'abcdefghijklmnopqrstuvwxyz'.split('');

const buildList = (len = 0) => {
  const ll = new LinkedList();
  for (let i = 0; i < len; i++) {
    ll.append(values[i]);
  }
  return ll;
};

describe('LinkedList', () => {
  describe('constructor', () => {
    it('creates a new list with provided value as head', () => {
      const ll = new LinkedList('a');
      expect(ll.head).toBe('a');
      expect(ll.tail).toBe('a');
    });

    it('creates a new list with empty head/tail', () => {
      const ll = buildList();
      expect(ll.head).toBe(null);
      expect(ll.tail).toBe(null);
    });
  });

  describe('count', () => {
    it('returns the correct count of nodes', () => {
      const ll = buildList();
      expect(ll.count).toBe(0);
      ll.append('a');
      expect(ll.count).toBe(1);
      ll.append('b');
      expect(ll.count).toBe(2);
    });
  });

  describe('findNode', () => {
    it('should return the node with the given value', () => {
      const ll = buildList(3);
      const node = ll.findNode('b');
      expect(node.value).toBe('b');
      expect(node.next.value).toBe('c');
    });

    it('should return null if the node is not found', () => {
      const ll = buildList(3);
      const node = ll.findNode('d');
      expect(node).toBe(null);
    });
  });

  describe('append', () => {
    it('correctly adds a new value as the tail', () => {
      const ll = buildList(1);
      expect(ll.head).toBe('a');
      expect(ll.tail).toBe('a');
      expect(ll.count).toBe(1);
      ll.append('b');
      expect(ll.head).toBe('a');
      expect(ll.tail).toBe('b');
      expect(ll.count).toBe(2);
    });

    it('returns the new tail Node', () => {
      const ll = buildList(1);
      const tail = ll.append('b');
      expect(ll.tail).toBe(tail.value);
    });

    it('sets new tail as head if list is currently empty', () => {
      const ll = buildList();
      expect(ll.head).toBe(null);
      expect(ll.tail).toBe(null);
      ll.append('a');
      expect(ll.head).toBe('a');
      expect(ll.tail).toBe('a');
    });
  });

  describe('insertHead', () => {
    it('should correctly add and return the new head node', () => {
      const ll = buildList(3);
      expect(ll.count).toBe(3);
      const newHead = ll.insertHead('aa');
      expect(ll.count).toBe(4);
      expect(newHead.value).toBe('aa');
      expect(newHead.next.value).toBe('a');
      expect(ll.head).toBe('aa');
      expect(ll.headNode.next.value).toBe('a');
      expect(ll.headNode).toEqual(newHead);
    });
  });

  describe('insertAfter', () => {
    it('should correctly insert a node after the target node, and return the new node', () => {
      const ll = buildList(1);
      ll.append('c');
      expect(ll.count).toBe(2);
      const refNode = ll.findNode('a');
      const newNode = ll.insertAfter(refNode, 'b');
      expect(ll.count).toBe(3);
      expect(refNode.next.value).toBe('b');
      expect(newNode.next.value).toBe('c');
    });

    it('should correctly insert the node as the new tail', () => {
      const ll = buildList(2);
      const refNode = ll.findNode('b');
      const newNode = ll.insertAfter(refNode, 'c');
      expect(refNode.next.value).toBe('c');
      expect(newNode.next).toBe(null);
    });

    it('should return null if refNode is not valid', () => {
      const ll = buildList(3);
      expect(ll.count).toBe(3);
      expect(ll.insertAfter({}, 'd')).toBe(null);
      expect(ll.insertAfter(undefined, 'd')).toBe(null);
      expect(ll.count).toBe(3);
    });
  });

  describe('removeHead', () => {
    it('should correctly remove and return the current head node', () => {
      const ll = buildList(3);
      expect(ll.count).toBe(3);
      const head = ll.removeHead();
      expect(ll.count).toBe(2);
      expect(head.value).toBe('a');
      expect(ll.head).toBe('b');
      expect(ll.headNode.next.value).toBe('c');
    });
  });

  describe('removeAfter', () => {
    it('should correctly remove and return the node if it is found', () => {
      const ll = buildList(4);
      const refNode = ll.findNode('b');
      expect(ll.count).toBe(4);
      const removedNode = ll.removeAfter(refNode);
      expect(ll.count).toBe(3);
      expect(refNode.next.value).toBe('d');
      expect(removedNode.value).toBe('c');
    });

    it('should return null if "refNode" is invalid', () => {
      const ll = buildList(3);
      expect(ll.removeAfter({})).toBe(null);
    });
  });

  describe('forEach', () => {
    it('calls a function on all current nodes', () => {
      const cb = jest.fn();
      const ll = buildList(3);
      ll.forEach(cb);
      expect(cb.mock.calls.length).toBe(3);
      expect(cb.mock.calls[0][0]).toBe('a');
      expect(cb.mock.calls[1][0]).toBe('b');
      expect(cb.mock.calls[2][0]).toBe('c');
    });
  });

  describe('print', () => {
    it('should return a string with all values', () => {
      const ll = buildList(3);
      const str = ll.print();
      ['a', 'b', 'c'].forEach((char) =>
        expect(str.includes(char)).toBe(true)
      );
      expect(str.includes('d')).toBe(false);
    });
  });
});