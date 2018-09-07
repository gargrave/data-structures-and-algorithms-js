import { partition, quickSort, quickSortI } from './quickSort'

const randomizedArray = (len = 100) =>
  Array(len)
    .fill(1)
    .map(() => Math.floor(Math.random() * 10 + 1))

describe('partition', () => {
  it('changes nothing if the high value is already in place', () => {
    const arr = [1, 5, 8, 6, 3, 9]
    const p = partition(arr)
    expect(arr).toEqual([1, 5, 8, 6, 3, 9])
    expect(p).toEqual(arr.length - 1)
  })

  it('partitions the array and returns the pivot', () => {
    const arr = [1, 5, 8, 6, 3, 9, 4]
    const p = partition(arr)
    const expected = [1, 3, 4, 6, 5, 9, 8]
    expect(arr).toEqual(expected)
    expect(p).toEqual(2)
  })
})

describe('quickSort', () => {
  it('correctly sorts a short list', () => {
    const arr = [2, 1]
    const sorted = [1, 2]
    quickSort(arr)
    expect(arr).toEqual(sorted)
  })

  it('correctly sorts a longer list', () => {
    const arr = [66, 3, 13, 1, 94, 23, 9, 13, 54, 13]
    const sorted = [1, 3, 9, 13, 13, 13, 23, 54, 66, 94]
    quickSort(arr)
    expect(arr).toEqual(sorted)
  })

  it('correctly sorts a list with an odd number of elements', () => {
    const arr = [66, 3, 13, 1, 94, 23, 9, 13, 54]
    const sorted = [1, 3, 9, 13, 13, 23, 54, 66, 94]
    quickSort(arr)
    expect(arr).toEqual(sorted)
  })

  it('safely handles extremely long lists', () => {
    const arr = randomizedArray(50000)
    quickSort(arr)
    expect(true).toEqual(true)
  })
})

describe('quickSortI', () => {
  it('correctly sorts a short list', () => {
    const arr = [2, 1]
    const sorted = [1, 2]
    quickSortI(arr)
    expect(arr).toEqual(sorted)
  })

  it('correctly sorts a longer list', () => {
    const arr = [66, 3, 13, 1, 94, 23, 9, 13, 54, 13]
    const sorted = [1, 3, 9, 13, 13, 13, 23, 54, 66, 94]
    quickSortI(arr)
    expect(arr).toEqual(sorted)
  })

  it('correctly sorts a list with an odd number of elements', () => {
    const arr = [66, 3, 13, 1, 94, 23, 9, 13, 54]
    const sorted = [1, 3, 9, 13, 13, 23, 54, 66, 94]
    quickSortI(arr)
    expect(arr).toEqual(sorted)
  })
})
