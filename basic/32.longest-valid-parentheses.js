/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const rollIn = {
    '[': ']',
    '(': ')',
    '{': '}',
  }

  let max = 0
  const nLenght = s.length

  function caculated(s, result) {
    if (!s) {
      if (result.length) {
        return false
      } else {
        return true
      }
    }
    const current = s[0]
    if (rollIn[current]) {
      return caculated(s.slice(1), result + current)
    } else {
      // not match
      if (rollIn[result[result.length - 1]] === current) {
        return caculated(s.slice(1), result.slice(0, result.length - 1))
      } else {
        return false
      }
    }
  }

  for (let n = 1; n <= (nLenght / 2); n++) {
    const curLength = 2 * n
    for (let i = 0; (i + curLength) <= nLenght; i++) {
      if (caculated(s.slice(i, i+ curLength), '')){
        max = curLength
      }
    }
  }

  return max
}


