import shuffle from 'lodash/shuffle'

import heapSort, { createMaxHeap } from './HeapSort'

describe('createMaxHeap', () => {
  it('correctly handles small array', () => {
    const arr = [1, 3]
    createMaxHeap(arr)
    expect(arr).toEqual([3, 1])
  })

  it('correctly creates a max heap from an array', () => {
    const arr = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1]
    createMaxHeap(arr)
    expect(arr).toEqual([10, 9, 6, 8, 5, 3, 4, 7, 2, 1])
  })
})

describe('heapSort', () => {
  it('should sort correctly', () => {
    const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1]
    heapSort(nums)
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  it('should sort correctly', () => {
    const fill = 50
    const nums = shuffle(new Array(fill).fill().map((_, index) => index + 1))
    heapSort(nums)
    expect(nums).toEqual(new Array(fill).fill().map((_, index) => index + 1))
  })
})
