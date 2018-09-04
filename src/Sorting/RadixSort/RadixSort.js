export const findMaxLen = nums => nums.reduce((acc, val) => {
  const len = val.toString().length;
  return len > acc ? len : acc;
}, 0);

export const getBuckets = () => Array(10).fill().map(() => []);

export function getDigit(num, place, maxLen) {
  const str = num.toString();
  const offset = maxLen - str.length + 1;
  return Number(str[place - offset] || 0);
}

export default function radixSort(arr) {
  const maxLen = findMaxLen(arr);
  let buckets = getBuckets();

  for (let i = maxLen; i >= 0; i -= 1) {
    arr.forEach(num => buckets[getDigit(num, i, maxLen)].push(num)); // eslint-disable-line
    arr = buckets.reduce((acc, bucket) => acc.concat(bucket), []);
    buckets = buckets.map(() => []);
  }
  return arr;
}
