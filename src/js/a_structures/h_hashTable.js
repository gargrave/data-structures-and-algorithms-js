/*

HASH TABLE

Collection of key-value pairs.
Map keys to values for efficient lookup.
Use an array as the underlying data structure.
Hash table should have a size - this will be used by the hashing function to determine what index to map the key to.
A hashing function is used to map the key to an integer, which is the index that the value is to be stored at.
Since our hashing function might map multiple keys to the same integer,
we have to deal with collisions by creating buckets at each index of
the storage array. These buckets can be arrays or linked lists.

*** Note:

ES6 includes a Map data structure. It differs from the JavaScript
object because the keys can be any value (not just strings like for
objects), there is a size property, and there is a guaranteed order (the insertion order).

Hash tables are also referred to as hash mapse or dictionaries.

*** Operations:

myMap.set(key, value)
=> myMap object
Store the key-value pair in the storage array.
If the key already exists, replace stored value with new value.
Use the hashing function to map the key to an integer and store the value at the corresponding index.
Account for the possibility of collisions.

myMap.get(key)
=> value associated with key, or undefined if none

myMap.has(key)
=> true/false depending on if a value has been associated with the key

myMap.delete(key)
=> true if a value was associated with the key
=> false if a value was never associated with the key
Remove any value associated to the key

myMap.count()
=> integer number of key/value pairs in hash table

myMap.forEach(callbackFn)
=> no returned value
Invokes callback function once for each key-value pair in the hash table

*** Additional Exercises:

Resize the hash table:
- if the count becomes greater than 75% of the table size, double the table size and redistribute the key/value pairs
- if the count becomes less than 25% of the table size, cut the table size in half and redistribute the key/value pairs

*/
'use strict';

// Simple hashing function to use in your implementation
function simpleHash(key, tableSize) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i) * (i + 1);
  }
  return hash % tableSize;
}
// source: http://pmav.eu/stuff/javascript-hashing-functions/source.html

function HashTable(size) {
  this.size = size;
  this.storage = Array(size);
  this.count = 0;
}

// This is a helper method that you may want to implement to help keep your code DRY
// You can implement the hash table methods without it.
// I recommend skipping it and coming back if you find that it will be useful
HashTable.prototype.find = function(key) {

};

HashTable.prototype.set = function(key, value) {
  let hash = simpleHash(key, this.size);

  let bucket = this.storage[hash];
  if (!bucket) {
    this.storage[hash] = [];
    bucket = this.storage[hash];
  }

  let found = false;
  bucket.forEach((item) => {
    if (key in item) {
      item[key] = value;
      found = true;
    }
  });
  if (!found) {
    bucket.push({ [key]: value });
    if (++this.count >= this.size * 0.75) {
      this.grow();
    }
  }
};
// Time complexity:

HashTable.prototype.get = function(key) {
  let hash = simpleHash(key, this.size);
  let bucket = this.storage[hash];

  let found;
  if (bucket) {
    bucket.forEach((item) => {
      if (key in item) {
        found = item[key];
      }
    });
  }
  return found;
};
// Time complexity:

HashTable.prototype.has = function(key) {
};
// Time complexity:

HashTable.prototype.delete = function(key) {
  let hash = simpleHash(key, this.size);
  let bucket = this.storage[hash];

  if (bucket) {
    let foundIdx = -1;
    for (let i = 0; i < bucket.length; i++) {
      if (key in bucket[i]) {
        foundIdx = i;
        break;
      }
    }
    if (foundIdx >= 0) {
      bucket.splice(foundIdx, 1);
      if (--this.count <= this.size * 0.25) {
        this.shrink();
      }
    }
  }
};
// Time complexity:

HashTable.prototype.count = function() {
  // implement me...
};
// Time complexity:

HashTable.prototype.forEach = function(callback) {
  // implement me...
};
// Time complexity:

HashTable.prototype.resize = function(mult) {
  this.size = Math.floor(this.size * mult);
  this.count = 0;

  let previousStorage = this.storage;
  console.log(this.size);
  this.storage = Array(this.size);
  console.log(this.storage);

  for (let i = 0; i < previousStorage.length; i++) {
    let bucket = previousStorage[i];
    if (bucket) {
      for (let j = 0; j < bucket.length; j++) {
        let item = bucket[j];
        let key = Object.keys(item)[0];
        let value = item[key];
        this.set(key, value);
      }
    }
  }
};

HashTable.prototype.grow = function() {
  this.resize(2);
};

HashTable.prototype.shrink = function() {
  this.resize(0.5);
};

/*
*** Exercises:

1. Implement a hash table with a binary search tree.

2. Given two arrays with values, return the values that are present in both. Do this in linear time.

3. Implement a hash table using linked lists for collision-handling. Why might this be preferable to using arrays.

*/

let h1 = new HashTable(7);
h1.set('firstName', 'Davey');
h1.set('lastName', 'Rodrigeuz');
h1.set('age', '38');
h1.set('food', 'pizza');
h1.set('pet', 'dog');
h1.set('car', 'crv');
console.log(h1.count);
h1.delete('car');
h1.delete('pet');
h1.delete('food');
console.log(h1);
h1.delete('age');
h1.delete('lastName');
console.log(h1);
