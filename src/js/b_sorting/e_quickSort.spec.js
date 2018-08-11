import { partition, quickSort, quickSortI } from './e_quickSort';

describe('partition', () => {
  it('changes nothing if the high value is already in place', () => {
    const arr = [1, 5, 8, 6, 3, 9];
    const p = partition(arr, 0, arr.length - 1);
    expect(arr).toEqual([1, 5, 8, 6, 3, 9]);
    expect(p).toEqual(arr.length - 1);
  });

  it('partitions the array and returns the pivot', () => {
    const arr = [1, 5, 8, 6, 3, 9, 4];
    const p = partition(arr, 0, arr.length - 1);
    const expected = [1, 3, 4, 6, 5, 9, 8];
    expect(arr).toEqual(expected);
    expect(p).toEqual(2);
  });
});

describe('quickSort', () => {
  it('correctly sorts a short list', () => {
    const arr = [2, 1];
    const sorted = [1, 2];
    quickSort(arr);
    expect(arr).toEqual(sorted);
  });

  it('correctly sorts a longer list', () => {
    const arr = [66, 3, 13, 1, 94, 23, 9, 13, 54, 13];
    const sorted = [1, 3, 9, 13, 13, 13, 23, 54, 66, 94];
    quickSort(arr);
    expect(arr).toEqual(sorted);
  });

  it('correctly sorts a list with an odd number of elements', () => {
    const arr = [66, 3, 13, 1, 94, 23, 9, 13, 54];
    const sorted = [1, 3, 9, 13, 13, 23, 54, 66, 94];
    quickSort(arr);
    expect(arr).toEqual(sorted);
  });
});

describe('quickSortI', () => {
  it.skip('correctly sorts a short list', () => {
    const arr = [2, 1];
    const sorted = [1, 2];
    quickSortI(arr);
    expect(arr).toEqual(sorted);
  });

  it('correctly sorts a longer list', () => {
    const arr = [66, 3, 13, 1, 94, 23, 9, 13, 54, 13];
    const sorted = [1, 3, 9, 13, 13, 13, 23, 54, 66, 94];
    quickSortI(arr);
    expect(arr).toEqual(sorted);
  });

  it('correctly sorts a list with an odd number of elements', () => {
    const arr = [66, 3, 13, 1, 94, 23, 9, 13, 54];
    const sorted = [1, 3, 9, 13, 13, 23, 54, 66, 94];
    quickSortI(arr);
    expect(arr).toEqual(sorted);
  });
});
