function reverseString(word) {
  const regex = /[a-zA-Z]/
  const arr = word.split('')

  for (let left = 0, right = word.length - 1; left < right; ) {
    if (!regex.test(arr[left])) {
      left++
    } else if (!regex.test(arr[right])) {
      right--
    } else {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }

  return arr.join('')
}

module.exports.reverseString = reverseString
