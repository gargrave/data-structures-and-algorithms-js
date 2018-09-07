import sortBy from 'lodash/sortBy'

import radixSort, { findMaxLen, getBuckets, getDigit } from './RadixSort'

describe('findMaxLen', () => {
  it('correctly returns the max length', () => {
    const nums = [435, 84736, 12, 1234, 1]
    expect(findMaxLen(nums)).toEqual(5)
  })
})

describe('getBuckets', () => {
  it('correctly builds a list of 10 buckets', () => {
    const buckets = getBuckets()
    expect(Array.isArray(buckets)).toBe(true)
    expect(buckets.length).toBe(10)
    buckets.forEach(b => expect(Array.isArray(b)).toBe(true))
  })
})

describe('getDigit', () => {
  it('correctly returns the expected digit', () => {
    const digit = getDigit(1234, 4, 6)
    expect(digit).toBe(2)
  })

  it('returns 0 if the number has to few digits', () => {
    const digit = getDigit(123, 1, 5)
    expect(digit).toBe(0)
  })

  it('returns the correct digit with offset', () => {
    const digit = getDigit(123, 3, 5)
    expect(digit).toBe(1)
  })
})

describe('radix sort', () => {
  it('should sort correctly', () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633,
    ]
    // const nums = [801, 1234, 415, 62, 484739];
    const ans = radixSort(nums)
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001,
    ])
  })

  it('should sort correctly', () => {
    const fill = 99
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000))
    const ans = radixSort(nums)
    expect(ans).toEqual(sortBy(nums))
  })
})
