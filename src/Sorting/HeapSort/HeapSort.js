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
  const leftIdx = idx * 2 + 1;
  const rightIdx = idx * 2 + 2;
  let maxIdx = idx;

  // find the max child (or not)
  if (leftIdx < heapSize && arr[leftIdx] > arr[maxIdx]) {
    maxIdx = leftIdx;
  }
  if (rightIdx < heapSize && arr[rightIdx] > arr[maxIdx]) {
    maxIdx = rightIdx;
  }

  // if we have a new max, swap them
  if (maxIdx !== idx) {
    swap(arr, idx, maxIdx);
    heapify(arr, maxIdx, heapSize); // if we found a match, we need to "cascade" our heaping upwards
  }
}

function createMaxHeap(arr) {
  const len = arr.length;
  const start = Math.floor(len / 2);

  for (let i = start; i >= 0; i -= 1) {
    heapify(arr, i, len);
  }
}

export default function heapSort(arr) {
  const len = arr.length;

  createMaxHeap(arr);
  for (let i = len - 1; i > 0; i -= 1) {
    // first element is max at this point, so move it to our pointer position
    swap(arr, 0, i);
    // re-heapify to get the max value back in front
    // since we already have a max heap, we know that the next-highest value
    // will be in the first element's immediate children
    heapify(arr, 0, i);
  }

  return arr;
}
