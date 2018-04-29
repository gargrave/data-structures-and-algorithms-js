/*
INSERTION SORT

*** Description
Iterate over array and grow a sorted array behind current element.
For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises
- Implement insertion sort for array of numbers
- Identify time complexity
- Identify space complexity
- Modify function to take comparator function. specify default if
  not provided (check out native Array.sort comparator function
  for reference)
- Use your comparator function to verify that your sort is stable
  by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)
*/

/*
Properties:
O(1) extra space
Time complexity:
- worst: O(n^2) comparisons and swaps
- best: O(n) when nearly sorted
stable
adaptive - O(n) time when nearly sorted

Use cases:
When the data is nearly sorted (since it's adaptive) or when the
problem size is small (because it has low memory overhead)
*/
const assert = require('assert');

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function compare(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

function compareWithOrder(a, b) {
  if (a.value > b.value) return 1;
  if (a.value < b.value) return -1;
  if (a.value === b.value) {
    if (a.order > b.order) return 1;
    if (a.order < b.order) return -1;
    return 0;
  }
  return 0;
}

function insertionSort(arr, compFnc) {
  let comp = compFnc || compare;
  // loop upward from the second element, since we will
  // be comparing backwards
  for (let i = 1; i < arr.length; i++) {
    // start inner loop at above value, and swap it backwards
    // until no longer necessary
    for (let j = i; j > 0; j--) {
      if (comp(arr[j], arr[j - 1]) < 0) {
        swap(arr, j - 1, j);
      }
    }
  }
  return arr;
}

let input1 = [1, 2, 3, 9, 5, 8, 7, 4];
let expected1 = [1, 2, 3, 4, 5, 7, 8, 9];
let result1 = insertionSort(input1);
assert.deepEqual(result1, expected1);

let input2 = [
  { value: 15 },
  { value: 10, order: 2 },
  { value: 10, order: 1 },
];
let expected2 = [
  { value: 10, order: 1 },
  { value: 10, order: 2 },
  { value: 15 },
];
let result2 = insertionSort(input2, compareWithOrder);
assert.deepEqual(result2, expected2);
