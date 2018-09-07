import XXH from 'xxhashjs'

const SIZE = 100

// here are your hashing functions. it's not essential you know how they work
// a library called xxhashjs is being loaded (as XXH) and we're using three different
// instances of that as your hashing functions
const h1 = string =>
  Math.abs(
    XXH.h32(0xabcd)
      .update(string)
      .digest()
      .toNumber() % SIZE,
  )
const h2 = string =>
  Math.abs(
    XXH.h32(0x1234)
      .update(string)
      .digest()
      .toNumber() % SIZE,
  )
const h3 = string =>
  Math.abs(
    XXH.h32(0x6789)
      .update(string)
      .digest()
      .toNumber() % SIZE,
  )

export default class BloomFilter {
  // `add` adds a string to the bloom filter and returns void (nothing, undefined)
  add(val) {}

  // `contains` takes a string and tells you if a string is maybe in the bloom filter
  contains(val) {}
}
