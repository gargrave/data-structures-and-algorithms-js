/*
====================================
= MERGE SORT
====================================

Description

Merge sort employs a divide and conquer strategy:
  merge two sorted subarrays into one sorted array.

Recursive top-down approach:
- Recursively break down array into two subarrays and sort them recursively.
- Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
- Split array into sublists of size 1, merge adjacent
    sublists into sorted lists, repeat until no more sublists.

====================================
= Exercises
====================================

- Implement recursive merge sort (you might want to write
    a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity
- Identify space complexity

- Modify function to take comparator function. specify default if
    not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input:
    [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort.
  This means that the initial subarrays are naturally occurring
  sorted sequences. How does this impact time complexity and adaptivity?

ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

Properties:
- O(n) extra space for iterative solution
- O(n·log(n)) time (for worst and best)
- stable - the only stable O(n·log(n)) mergeSortIterativeng algorithm
- not adaptive

Use cases:
If stabilty is a requirement and using extra space is no concern,
merge sort is great because it's simple to implement,
  it's the only stable O(nlog(n)) mergeSortIterativeng algorithm.
*/

// Rough results based on Arrays of randomized ints:
//
// Recursive:
// @ 25 elements: 0.210ms
// @ 100 elements: 0.101ms
// @ 1000 elements: 3.326ms
// @ 10000 elements: 5.463ms
// @ 50000 elements: 17.600ms
//
// Iterative:
// @ 25 elements: 0.237ms
// @ 100 elements: 0.110ms
// @ 1000 elements: 3.189ms
// @ 10000 elements: 10.023ms
// @ 50000 elements: 31.725ms

function merge(a, b) {
}

// a.k.a. "top down" merge sort
export function mergeSortRecursive(arr) {
}

// a.k.a. "bottom up" merge sort
export function mergeSortIterative(arr) {
}
