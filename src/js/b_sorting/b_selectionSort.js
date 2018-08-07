/*
====================================
= Selection Sort
====================================

Description

Iterate over array and grow a sorted array behind current element.
For each position, find the smallest element in unsorted subarray
starting at that position, and swap elements so that smallest
element is at the beginning of unsorted subarray.

example:
[ 1 2 3|9 5 7 4 ]
 sorted|unsorted
smallest element in unsorted subarray is 4
swap with element at beggining of unsorted subarray
sorted portion has now grown:
[ 1 2 3 4|5 7 9 ]

====================================
= Exercises
====================================

- Implement selection sort
- Identify time complexity

Stable Variant:

- Implement as a stable sort - rather than swapping, the minimum
    value is inserted into the first position and all other items are
    shifted one to the right. How does this impact performance?

- Modify function to take comparator function. specify default if
    not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable
    by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

- Implement selection sort for a linked list (you can use your
    data structure implemention from earlier in the course). How does this impact performance and stability?
*/

// Rough results based on Arrays of randomized ints:
//
// @ 25 elements: 0.165ms
// @ 100 elements: 0.245ms
// @ 1000 elements: 4.289ms
// @ 10000 elements: 93.561ms
// @ 50000 elements: 2315.804ms

function swap(arr, idxA, idxB) {
  const temp = arr[idxA];
  arr[idxA] = arr[idxB];
  arr[idxB] = temp;
}

function defaultCompartor(a, b) {
  if (a > b) {
    return 1;
  } 
  if (a < b) {
    return -1;
  }
  return 0;
}

function selectionSort(arr, comparator) {
  const len = arr.length;
  const sorted = arr.concat();
  const comp = comparator || defaultCompartor;
  
  for (let i = 0; i < len; i++) {
    let minIdx = i;
    for (let j = i; j < len; j++) {
      if (comp(sorted[minIdx], sorted[j]) > 0) {
        minIdx = j;
      }
    }
    
    if (minIdx !== i) {
      swap(sorted, minIdx, i);
    }
  }
  
  return sorted;
}

export default selectionSort;
