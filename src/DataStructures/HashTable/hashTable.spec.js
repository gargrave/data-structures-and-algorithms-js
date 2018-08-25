import HashTable from './hashTable';

describe('HashTable', () => {
  let ht;

  beforeEach(() => {
    ht = new HashTable(10);
  });

  describe('set & get', () => {
    it('correctly sets and gets values', () => {
      expect(ht.get('firstName')).toBeUndefined();
      ht.set('firstName', 'Larry');
      expect(ht.get('firstName')).toEqual('Larry');
      ht.set('firstName', 'Susie Q');
      expect(ht.get('firstName')).toEqual('Susie Q');
    });

    it('returns "undefined" if the value does not exist', () => {
      expect(ht.get('whatever')).toBeUndefined();
    });
  });

  describe('delete', () => {
    it('safely ignores invalid values', () => {
      ht.delete('nope');
      expect(true).toEqual(true);
    });

    it('correctly deletes a value', () => {
      ht.set('firstName', 'Larry');
      ht.delete('firstName');
      expect(ht.get('firstName')).toBeUndefined();
    });
  });

  describe('has', () => {
    it('correctly returns whether a key has a value', () => {
      expect(ht.has('firstName')).toBeFalsy();
      ht.set('firstName', 'Larry');
      expect(ht.has('firstName')).toBeTruthy();
    });
  });

  describe('getCount', () => {
    it('increments the count when values are added', () => {
      expect(ht.getCount()).toBe(0);
      ht.set('a', 'a');
      expect(ht.getCount()).toBe(1);
      ht.set('b', 'b');
      expect(ht.getCount()).toBe(2);
    });

    it('decrements the count when values are removed', () => {
      ht.set('a', 'a');
      ht.set('b', 'b');
      ht.set('c', 'c');
      expect(ht.getCount()).toBe(3);
      ht.delete('b');
      expect(ht.getCount()).toBe(2);
      ht.delete('c');
      expect(ht.getCount()).toBe(1);
      ht.delete('a');
      expect(ht.getCount()).toBe(0);
    });
  });

  describe('forEach', () => {
    it('calls the callback for each value', () => {
      const mockCallback = jest.fn();
      const values = [
        ['two', 2],
        ['one', 1],
        ['three', 3],
      ];
      values.forEach(v => ht.set(...v));
      ht.forEach(mockCallback);

      // ensure all values are used as args
      const { calls } = mockCallback.mock;
      const len = calls.length;
      expect(len).toBe(values.length);
      for (let i = 0; i < len; i += 1) {
        const [key, val] = calls[i][0];
        expect(values.find(([k, v]) => k === key && v === val)).toBeDefined();
      }
    });
  });

  describe('resize', () => {
    it('correctly grows to double size', () => {
      ht = new HashTable(8);
      ht.set('a', 'a');
      ht.set('b', 'b');
      ht.set('c', 'c');
      ht.set('d', 'd');
      ht.set('e', 'e');
      expect(ht.getCount()).toBe(5);
      expect(ht.size).toBe(8);
      ht.set('f', 'f');
      expect(ht.getCount()).toBe(6);
      expect(ht.size).toBe(16);
    });

    it('correctly shrinks to half size', () => {
      ht = new HashTable(8);
      ht.set('a', 'a');
      ht.set('b', 'b');
      ht.set('c', 'c');
      expect(ht.getCount()).toBe(3);
      expect(ht.size).toBe(8);
      ht.delete('c');
      expect(ht.getCount()).toBe(2);
      expect(ht.size).toBe(4);
    });
  });
});
