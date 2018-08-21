import {
  expI,
  expR,
  loopDownI,
  loopDownR,
  recursiveMultiplier,
  recursiveReverse,
} from './recursion';

describe('Recursion', () => {
  describe('loopDownI', () => {
    it('should return an array with the correct number of elements', () => {
      const start = 5;
      const arr = loopDownI(start);
      expect(arr.length).toEqual(start + 1);
    });

    it('should have "n" as the first value, and 0 as the last', () => {
      const start = 5;
      const arr = loopDownI(start);
      expect(arr[0]).toEqual(start);
      expect(arr[start]).toEqual(0);
    });
  });

  describe('loopDownR', () => {
    it('should return an array with the correct number of elements', () => {
      const start = 5;
      const arr = loopDownR(start);
      expect(arr.length).toEqual(start + 1);
    });

    it('should have "n" as the first value, and 0 as the last', () => {
      const start = 5;
      const arr = loopDownR(start);
      expect(arr[0]).toEqual(start);
      expect(arr[start]).toEqual(0);
    });
  });

  describe('expI', () => {
    it('should return the correct exponent', () => {
      expect(expI(0, 3)).toEqual(0);
      expect(expI(2, 3)).toEqual(8);
    });
  });

  describe('expR', () => {
    it('should return the correct exponent', () => {
      expect(expR(0, 3)).toEqual(0);
      expect(expR(2, 3)).toEqual(8);
    });
  });

  describe('recursiveMultiplier', () => {
    it('should correctly multiply the array by various values', () => {
      const arr = [1, 2, 3];
      expect(recursiveMultiplier(arr, 2)).toEqual([2, 4, 6]);
      expect(recursiveMultiplier(arr, 3)).toEqual([3, 6, 9]);
    });

    it('should return the same values if no "num" arg is provided', () => {
      const arr = [1, 2, 3];
      expect(recursiveMultiplier(arr)).toEqual(arr);
    });
  });

  describe('recursiveReverse', () => {
    it('should correctly reverse an array of any values', () => {
      expect(recursiveReverse([1, 'a', 2, 'b'])).toEqual(['b', 2, 'a', 1]);
    });

    it('should return an empty array if input is incorrect', () => {
      expect(recursiveReverse()).toEqual([]);
      expect(recursiveReverse(null)).toEqual([]);
      expect(recursiveReverse('asdf')).toEqual([]);
    });
  });
});
