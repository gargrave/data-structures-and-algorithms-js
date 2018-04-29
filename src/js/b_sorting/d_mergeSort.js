/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.
Recursive top-down approach:
Recursively break down array into two subarrays and sort them
  recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).
Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity
- Identify space complexity

- Modify function to take comparator function. specify default if
  not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable
  by taking input:
  [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort.
  This means that the initial subarrays are naturally occurring
  sorted sequences. How does this impact time complexity and adaptivity?

ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]
*/

/*
Properties:
O(n) extra space for iterative solution
O(n·log(n)) time (for worst and best)
stable - the only stable O(n·log(n)) sorting algorithm
not adaptive
Use cases:
If stabilty is a requirement and using extra space is no concern,
merge sort is great because it's simple to implement, it's the only stable O(nlog(n)) sorting algorithm.
*/
const assert = require('assert');

function merge(a, b) {
  const targetLen = a.length + b.length;
  let result = [];
  let ia = 0;
  let ib = 0;

  // check ia vs ib, and push lower number into result
  while (result.length < targetLen) {
    if (ia === a.length) {
      result.push(b[ib++]);
    } else if (ib === b.length) {
      result.push(a[ia++]);
    } else {
      const val = (a[ia] < b[ib]) ? a[ia++] : b[ib++];
      result.push(val);
    }
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = arr.length / 2;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let result1 = merge([1, 4, 5], [2, 3, 5, 6, 7, 8]);
assert.deepEqual(result1, [1, 2, 3, 4, 5, 5, 6, 7, 8]);

let result2 = mergeSort([14, 7, 3, 12, 9, 11, 6, 2]);
assert.deepEqual(result2, [2, 3, 6, 7, 9, 11, 12, 14]);
