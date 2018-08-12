/*
====================================
= Insertion Sort
====================================

Description

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

====================================
= Exercises
====================================

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


Properties:
O(1) extra space
Time complexity:
  - worst: O(n^2) comparisons and swaps
  - best: O(n) when nearly sorted
stable
adaptive - O(n) time when nearly sorted

Use cases:
  - When the data is nearly sorted (since it's adaptive) or
  - when the problem size is small (because it has low memory overhead)
*/

// Rough results based on Arrays of randomized ints:
//
// @ 25 elements: 0.188ms
// @ 100 elements: 0.465ms
// @ 1000 elements: 4.346ms
// @ 10000 elements: 158.820ms
// @ 50000 elements: 3537.528ms

function swap(arr, idxA, idxB) {
  const temp = arr[idxA];
  arr[idxA] = arr[idxB];
  arr[idxB] = temp;
}

function defaultCompartor(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
  return 0;
}

function insertionSort(arr, comparator) {
  const len = arr.length;
  const sorted = arr.concat();
  const compare = comparator || defaultCompartor;
  
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (compare(sorted[j], sorted[j - 1]) > 0) {
        swap(sorted, j, j - 1);
      }
    }
  }
  
  return sorted;
}

export default insertionSort;
