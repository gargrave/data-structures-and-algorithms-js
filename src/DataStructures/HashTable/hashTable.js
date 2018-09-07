/*
====================================
= HASH TABLE
====================================

- Collection of key-value pairs.
- Map keys to values for efficient lookup.
- Use an array as the underlying data structure.
- Hash table should have a size - this will be used by the hashing
    function to determine what index to map the key to.
- A hashing function is used to map the key to an integer,
    which is the index that the value is to be stored at.
- Since our hashing function might map multiple keys to the same integer,
    we have to deal with collisions by creating buckets at each index of
    the storage array. These buckets can be arrays or linked lists.

Hash tables are also referred to as hash maps or dictionaries.

====================================
= Operations
====================================

hashTable.set(key, value)
  => hashTable object
  Store the key-value pair in the storage array.
  If the key already exists, replace stored value with new value.
  Use the hashing function to map the key to an integer and store the value
    at the corresponding index.
  Account for the possibility of collisions.

hashTable.get(key)
  => value associated with key, or undefined if none

hashTable.has(key)
  => true/false depending on if a value has been associated with the key

hashTable.delete(key)
  => true if a value was associated with the key
  => false if a value was never associated with the key
  Remove any value associated to the key

hashTable.count()
  => integer number of key/value pairs in hash table

hashTable.forEach(callbackFn)
  => no returned value
  Invokes callback function once for each key-value pair in the hash table

====================================
= Additional Exercises
====================================

Resize the hash table:
- if the count becomes greater than 75% of the table size, double the table
    size and redistribute the key/value pairs
- if the count becomes less than 25% of the table size, cut the table size
    in half and redistribute the key/value pairs

1. Implement a hash table with a binary search tree.
2. Given two arrays with values, return the values that are present in both.
    Do this in linear time.
3. Implement a hash table using linked lists for collision-handling.
    Why might this be preferable to using arrays?
*/

// Simple hashing function to use in your implementation
// source: http://pmav.eu/stuff/javascript-hashing-functions/source.html
function simpleHash(key, tableSize) {
  const len = key.length
  let h = 0
  for (let i = 0; i < len; i += 1) {
    h += key.charCodeAt(i) * (i + 1)
  }
  return h % tableSize
}

export default class HashTable {
  constructor(size) {}

  find(key) {}

  set(key, value) {}

  get(key) {}

  has(key) {}

  getCount() {}

  forEach(callback) {}

  resize(mult) {}
}
