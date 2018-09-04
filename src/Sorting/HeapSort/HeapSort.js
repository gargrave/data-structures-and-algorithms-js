/*
Create a function called heapSort that accepts an array and performs a heap sort on it in
  place (heap sorts are normally destructive)

You will probably need at least two more functions: heapify and createMaxHeap
*/
function swap(arr, idxA, idxB) {
  const temp = arr[idxA];
  arr[idxA] = arr[idxB];
  arr[idxB] = temp;
}

function heapify(arr, idx, heapSize) {
}

function createMaxHeap(arr) {
}

export default function heapSort(arr) {
}
