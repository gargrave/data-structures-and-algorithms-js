 import Stack from './stack';

describe('Stack', () => {
  const DEFAULT_SIZE = 5;
  let stack;

  beforeEach(() => {
    stack = new Stack(DEFAULT_SIZE);
  });

  describe('constructor', () => {
    it('should correctly generate a new Stack object', () => {
      expect(stack.capacity).toEqual(DEFAULT_SIZE);
      expect(stack.data).toMatchObject({});
      expect(stack.lastIndex).toEqual(-1);
    });

    it('should have a minimum capacity of 2', () => {
      stack = new Stack(-1);
      expect(stack.capacity).toEqual(2);
    });
  });

  describe('push', () => {
    it('should insert the value and return the new index', () => {
      let result = stack.push(100);
      expect(result).toEqual(0);
      expect(stack.count()).toEqual(1);
      result = stack.push(200);
      expect(result).toEqual(1);
      expect(stack.count()).toEqual(2);
    });

    it('should not add the value and should return a string if capacity has been reached', () => {
      stack = new Stack(2);
      stack.push(1);
      stack.push(2);
      let result = stack.push(3);
      expect(stack.count()).toEqual(2);
      expect(typeof result).toEqual('string');
    });
  });

  describe('pop', () => {
    it('should remove and return the most recently-added value', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.count()).toEqual(2);
      let result = stack.pop();
      expect(result).toEqual(2);
      expect(stack.count()).toEqual(1);
      result = stack.pop();
      expect(result).toEqual(1);
      expect(stack.count()).toEqual(0);
    });

    it('should return null if the stack is empty', () => {
      const result = stack.pop();
      expect(result).toEqual(null);
    });
  });

  describe('peek', () => {
    it('should return the most recently-added value', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.count()).toEqual(2);
      let result = stack.peek();
      expect(result).toEqual(2);
      expect(stack.count()).toEqual(2);
      result = stack.peek();
      expect(result).toEqual(2);
      expect(stack.count()).toEqual(2);
    });

    it('should return null if the stack is empty', () => {
      expect(stack.peek()).toEqual(null);
    });
  });

  describe('count', () => {
    it('should return the current number of items', () => {
      stack.push(1);
      expect(stack.count()).toEqual(1);
      stack.push(1);
      expect(stack.count()).toEqual(2);
      stack.pop();
      expect(stack.count()).toEqual(1);
      stack.pop();
      expect(stack.count()).toEqual(0);
    });
  });

  describe('contains', () => {
    it('should return true if the value is in the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.contains(2)).toEqual(true);
    });

    it('should return false if the value is not in the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.contains(4)).toEqual(false);
    });
  });

  describe('until', () => {
    it('should return the correct number of steps to reach the value', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      expect(stack.until(2)).toEqual(2);
    });

    it('should return -1 if the value is not found', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      expect(stack.until(5)).toEqual(-1);
    });
  });

  describe('min', () => {
    it('should correctly return the minimum value', () => {
      stack.push(5);
      stack.push(836);
      stack.push(2);
      stack.push(42);
      stack.push(298);
      expect(stack.min()).toEqual(2);
    });

    it('should return 0 if the stack is empty', () => {
      expect(stack.min()).toEqual(0);
    });
  });
});
