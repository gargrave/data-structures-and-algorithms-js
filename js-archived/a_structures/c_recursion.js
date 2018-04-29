// 1. Write a function that loops through the numbers n down to 0.
// If you haven't done so try using a while loop to do this.
function loopDownW(n) {
  while (n >= 0) {
    console.log('n: ' + n);
    n -= 1;
  }
}
loopDownW(10);

// 2. Next, try looping just like above except using recursion
function loopDown(n) {
  console.log('n: ' + n);
  if (n === 0) {
    return 0;
  }
  return loopDown(n - 1);
}
loopDown(10);

// 3.Write a function 'exponent' that takes two arguments base, and expo,
// uses a while loop to return the exponenet value of the base.
function expW(base, e) {
  let val = base;
  while (e > 1) {
    val *= base;
    e -= 1;
  }
  return val;
}
console.log('expW(3, 3) = ' + expW(3, 3));
console.log('expW(4, 3) = ' + expW(4, 3));

// 4. Write a function 'RecursiveExponent' that takes two arguments base,
// and expo, recursively returns exponent value of the base.
function expR(base, e) {
  if (e === 1) {
    return base;
  }
  return base * expR(base, e - 1);
}
console.log('expR(3, 3) = ' + expR(3, 3));
console.log('expR(4, 3) = ' + expR(4, 3));

// 5. Write a function 'recursiveMultiplier' that takes two arguments,
// 'arr and num', and multiplies each arr value by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
  let multArr = [];
  function mult(arr, num, i) {
    if (i === arr.length) {
      return multArr;
    }
    multArr.push(arr[i] * num);
    return mult(arr, num, i + 1);
  }
  return mult(arr, num, 0);
}
console.log('recursiveMultiplier([1, 2, 3], 2): ' + recursiveMultiplier([1, 2, 3], 2));

// 6. Write a function 'recursiveReverse' that takes an array and uses
// recursion to return its contents in reverse
function recursiveReverse(arr) {
  let revArr = [];
  function rev(arr, i) {
    if (i < 0) {
      return revArr;
    }
    revArr.push(arr[i]);
    return rev(arr, i - 1);
  }
  return rev(arr, arr.length - 1);
}
console.log('recursiveReverse([1, 2, 3]): ' + recursiveReverse([1, 2, 3]));
