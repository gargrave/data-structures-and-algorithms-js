import XXH from 'xxhashjs';

const SIZE = 100;

// here are your hashing functions. it's not essential you know how they work
// a library called xxhashjs is being loaded (as XXH) and we're using three different
// instances of that as your hashing functions
const h1 = string => Math.abs(XXH.h32(0xABCD).update(string).digest().toNumber() % SIZE);
const h2 = string => Math.abs(XXH.h32(0x1234).update(string).digest().toNumber() % SIZE);
const h3 = string => Math.abs(XXH.h32(0x6789).update(string).digest().toNumber() % SIZE);

export default class BloomFilter {
  _data = Array(100).fill(0);

  // `add` adds a string to the bloom filter and returns void (nothing, undefined)
  add(val) {
    [h1(val), h2(val), h3(val)].forEach(i => this._data[i] = 1);
  }

  // `contains` takes a string and tells you if a string is maybe in the bloom filter
  contains(val) {
    const [a, b, c] = [h1(val), h2(val), h3(val)];
    return !!this._data[a] && !!this._data[b] && !!this._data[c];
  }
}
