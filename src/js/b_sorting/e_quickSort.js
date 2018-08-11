/*
====================================
= QUICK SORT
====================================

Description

- Like merge sort, quick sort employs a divide and conquer strategy.
- It has a partitioning step, in which you pick an element (called a pivot)
    and partition the array so that all smaller elements come before pivot and all
    larger elements come after. The pivot will be in its final position.
- Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

====================================
= Exercises
====================================

- Write a partition helper function. For choice of pivot, for a basic implementation,
    we recommend choosing either the first or last element in the subarray. If you need hints,
    look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort iteratively
- Implement quicksort recursively
- Identify time complexity
- Identify space complexity
- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

====================================
= Extra Credit
====================================

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

Properties:
- O(n) extra space
- O(n^2) time (for few unique keys), but typically O(n·log(n)) if recursion is balanced
- not stable
- not adaptive

Use cases:
- Quicksort is in place and has low overhead (if a stable sort is not necessary).
- It has a higher worstcase time complexity than merge sort (if pivot is not in center of array)
*/
function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function partition(arr, lo, hi) {
  // start with pivot at lo
  let pivotIdx = lo;
  let pivotValue = arr[hi];

  // loop through full array
  for (let i = lo; i < hi; i += 1) {
    // any values less than pivot VALUE should be swapped to pivot IDX
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIdx);
      // then increment pivot IDX
      pivotIdx += 1;
    }
  }

  // at end, swap pivot VALUE to pivot IDX
  swap(arr, pivotIdx, hi);
  return pivotIdx;
}

function quickSort(arr, loIdx, hiIdx) {
  // call partition on the current 'arr' to get a new pivotIdx
  // continue doing this with split arrays until lo === hi
  if (loIdx >= hiIdx) {
    return;
  }

  const lo = loIdx || 0;
  const hi = hiIdx || arr.length - 1;
  const pivot = partition(arr, lo, hi);
  quickSort(arr, lo, pivot - 1);
  quickSort(arr, pivot + 1, hi);
}

export default quickSort;
