/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */
/**
 * @param {string} s
 * @return {number}
 */

/*
s[i] === ')'
s[i-1] === '(' --> dp[i] = dp[i-2] + 2
s[i-1] === ')' --> dp[i] = dp[i - 1] + dp[i - dp[i-1] - 2] + 2
*/
var longestValidParentheses = function (s) {
  const dp = {}
  const nLength = s.length
  let max = 0

  dp[-1] = 0

  for (let i = 0; i < nLength; i++) {
      dp[i] = 0
      if (s[i] === ")") {
          if (s[i - 1] === "(") {
              const value = (dp[i - 2] || 0) + 2
              if (value > dp[i]) {
                  dp[i] = value
              }
          }

          if (s[i - 1] === ")") {
              if (s[i - dp[i - 1] - 1] === '(') {
                  const value = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2
                  if (value > dp[i]) {
                      dp[i] = value
                  }
              }
          }
      }
      if (dp[i] > max) {
          max = dp[i]
      }
  }

  return max
};