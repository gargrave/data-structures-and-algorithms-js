import selectionSort from './B_selectionSort';

function reverser(a, b) {
  if (a > b) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
  return 0;
}

function objectComparator(a, b) {
  if (a.order > b.order) {
    return 1;
  }
  if (a.order < b.order) {
    return -1;
  }
  return 0;
}

describe('selectionSort', () => {
  it('correctly sorts a list', () => {
    const arr = [66, 3, 13, 1, 94, 23, 9, 13, 54, 13];
    const sorted = [1, 3, 9, 13, 13, 13, 23, 54, 66, 94];
    expect(selectionSort(arr)).toEqual(sorted);
  });
  
  it('correctly uses a custom comparator', () => {
    const arr = [66, 3, 13, 1, 94, 23, 9, 13, 54, 13];
    const sorted = [94, 66, 54, 23, 13, 13, 13, 9, 3, 1];
    expect(selectionSort(arr, reverser)).toEqual(sorted);
  });
  
  it('correctly uses a stable custom comparator with complex values', () => {
    const arr = [
      { value: 12, order: 3 },
      { value: 15, order: 1 },
      { value: 16, order: 5 },
      { value: 16, order: 4 },
      { value: 10, order: 2 },
    ];
    const sorted = [
      { value: 15, order: 1 },
      { value: 10, order: 2 },
      { value: 12, order: 3 },
      { value: 16, order: 4 },
      { value: 16, order: 5 },
    ];
    expect(selectionSort(arr, objectComparator)).toEqual(sorted);
  });
});