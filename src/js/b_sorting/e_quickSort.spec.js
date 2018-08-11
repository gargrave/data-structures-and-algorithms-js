import quickSort from './e_quickSort';

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