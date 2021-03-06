// 1. Write a function that loops through the numbers n down to 0.
// If you haven't done so try using a while loop to do this.
export const loopDownI = n => {
  const arr = []
  while (n >= 0) {
    arr.push(n--) // eslint-disable-line
  }
  return arr
}

// 2. Next, try looping just like above except using recursion
export const loopDownR = (n, accum = []) => {
  accum.push(n)
  if (n === 0) {
    return accum
  }
  return loopDownR(n - 1, accum)
}

// 3.Write a function 'exponent' that takes two arguments base, and expo,
// uses a while loop to return the exponenet value of the base.
export const expI = (base, exp) => {
  let val = base
  while (exp > 1) {
    val *= base
    exp -= 1
  }
  return val
}

// 4. Write a function 'RecursiveExponent' that takes two arguments base,
// and expo, recursively returns exponent value of the base.
export const expR = (base, e) => {
  if (e === 1) {
    return base
  }
  return base * expR(base, e - 1)
}

// 5. Write a function 'recursiveMultiplier' that takes two arguments,
// 'arr and num', and multiplies each arr value by num and returns an array of the values.
export const recursiveMultiplier = (arr, num = 1) => {
  const multArr = []
  const mult = (_arr, _num, i) => {
    if (i === _arr.length) {
      return multArr
    }
    multArr.push(_arr[i] * _num)
    return mult(_arr, _num, i + 1)
  }
  return mult(arr, num, 0)
}

// 6. Write a function 'recursiveReverse' that takes an array and uses
// recursion to return its contents in reverse
export const recursiveReverse = (arr = []) => {
  if (!Array.isArray(arr)) {
    arr = []
  }

  const revArr = []

  function rev(_arr, i) {
    if (i < 0) {
      return revArr
    }
    revArr.push(_arr[i])
    return rev(_arr, i - 1)
  }

  return rev(arr, arr.length - 1)
}
