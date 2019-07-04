/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const rollIn = {
      "[" : "]",
      "(" : ")",
      "{" : "}"
  }

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
          if (rollIn[result[result.length -1]] === current) {
              return caculated(s.slice(1), result.slice(0, result.length -1 ))
          } else {
              return false
          }
      }
  }

  return caculated(s, '')
};

