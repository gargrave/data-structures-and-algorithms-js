import selectionSort from './selectionSort'

function reverser(a, b) {
  if (a > b) {
    return -1
  }
  if (b > a) {
    return 1
  }
  return 0
}

describe('selectionSort', () => {
  it('correctly sorts a list', () => {
    const arr = [66, 3, 13, 1, 94, 23, 9, 13, 54, 13]
    const sorted = [1, 3, 9, 13, 13, 13, 23, 54, 66, 94]
    expect(selectionSort(arr)).toEqual(sorted)
  })

  it('correctly uses a custom comparator', () => {
    const arr = [66, 3, 13, 1, 94, 23, 9, 13, 54, 13]
    const sorted = [94, 66, 54, 23, 13, 13, 13, 9, 3, 1]
    expect(selectionSort(arr, reverser)).toEqual(sorted)
  })
})
