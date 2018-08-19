import bubbleSort from './bubbleSort';

describe('bubbleSort', () => {
  it('correctly sorts a list', () => {
    const arr = [66, 3, 13, 1, 94, 23, 9, 13, 54, 13];
    const sorted = [1, 3, 9, 13, 13, 13, 23, 54, 66, 94];
    expect(bubbleSort(arr)).toEqual(sorted);
  });
});
