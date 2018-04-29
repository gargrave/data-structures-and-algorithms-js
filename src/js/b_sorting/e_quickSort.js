/*
QUICK SORT

*** Description

  Like merge sort, quick sort employs a divide and conquer strategy.
  It has a partitioning step, in which you pick an element (called a pivot)
  and partition the array so that all smaller elements come before pivot and all
  larger elements come after. The pivot will be in its final position.
  Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

  - Write a partition helper function. For choice of pivot, for a basic implementation,
  we recommend choosing either the first or last element in the subarray. If you need hints,
  look up the Lumoto partiton scheme. Test this out before moving forward!
  - Implement quicksort iteratively
  - Implement quicksort recursively
  - Identify time complexity
  - Identify space complexity
  - Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
  - Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

Properties:
  O(n) extra space
  O(n^2) time (for few unique keys), but typically O(n·log(n)) if recursion is balanced
  not stable
  not adaptive

Use cases:
  Quicksort is in place and has low overhead. If a stable sort is not necessary.
  It has a higher worstcase time complexity than merge sort (if pivot is not in
  center of array)
*/
const assert = require('assert');

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function partition(arr, lo, hi) {
  let pivot = arr[hi];
  let pivotIdx = lo;

  for (let j = lo; j < hi; j++) {
    if (arr[j] < pivot) {
      /*
      Swap this value to the current pivot point and increment the pivot point.
      Note that we are NOT moving the actual pivot value yet.
      */
      swap(arr, pivotIdx, j);
      pivotIdx += 1;
    }
  }
  // finally, move the pivot value to its home
  swap(arr, pivotIdx, hi);
  return pivotIdx;
}

function quickSort(arr, lo, hi) {
  if (lo < hi) {
    let pivotIdx = partition(arr, lo, hi);
    quickSort(arr, lo, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, hi);
  }
}

let unsorted = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
let sorted = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];

quickSort(unsorted, 0, unsorted.length - 1);
assert.deepEqual(unsorted, sorted);
