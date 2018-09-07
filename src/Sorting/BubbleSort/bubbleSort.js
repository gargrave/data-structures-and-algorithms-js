/*
====================================
= Bubble Sort
====================================

Description

Iterate over array, comparing adjacent items and swap if in incorrect
order. Largest elements bubble to the end of the array

====================================
= Exercises
====================================

- Implement bubble sort
- Identify time complexity
- Identify space complexity

====================================
= Optimizations
====================================

- Make algorithm adaptive (if at any point array is already sorted,
exit function early). After doing this, what is time complexity for
nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary
checking of elements? Minimize checking and consider the effect on
time complexity.

Variants:

- Implement cocktail sort (for each pass find both min and max values
and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

Properties:
O(1) extra space

Time complexity:
- worst: O(n2) comparisons and swaps
- best: O(n) when nearly sorted

not stable
adaptive - O(n) time when nearly sorted

Use cases:
Similar to insertion sort (many properties are the same for insertion
and bubble sort) - when the data is nearly sorted (since it's adaptive)
or when the problem size is small (because it has low memory overhead)
*/
function swap(arr, idxA, idxB) {
  const temp = arr[idxA]
  arr[idxA] = arr[idxB]
  arr[idxB] = temp
}

function bubbleSort(arr) {}

export default bubbleSort
