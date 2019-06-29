/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const n = s.length
  let max = 0
  let i = 0

  while ((i < n) && ((n - i) > max)) {
    let count = 1
    let j = i + 1
    const exsit = {}
    exsit[s[i]] = true
    while (!exsit[s[j]] && j < n) {
      exsit[s[j]] = true
      count++
      j++
    }
    if (count > max) {
      max = count
    }
    i++
  }
  return max
}