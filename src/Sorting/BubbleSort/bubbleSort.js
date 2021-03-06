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

function bubbleSort(arr) {
  const sorted = arr.concat()
  const len = sorted.length

  // loop from the top down; this will be our 'wall',
  // where we know the values have already been sorted
  for (let i = len; i >= 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      // compare each element to the one right of it, and if the right
      // one is larger, swap them
      if (sorted[j] > sorted[j + 1]) {
        swap(sorted, j, j + 1)
      }
    }
  }
  return sorted
}

export default bubbleSort
