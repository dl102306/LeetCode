var longestPalindrome = function (s) {
  if (!s) {
      return ''
  }

  const nLength = s.length
  let max = 1
  let result = s[0]

  function getResult(preIdx, nextIdx) {
      while ((preIdx > -1) && (nextIdx < nLength) && (s[preIdx] === s[nextIdx])) {
          preIdx--
          nextIdx++
      }

      if (max < (nextIdx - preIdx - 1)) {
          max = nextIdx - preIdx - 1
          result = s.substring(preIdx + 1 , nextIdx)
      }
  }

  for (let i = 1; i < (nLength - 1); i++) {
      let preIdx = i - 1
      let nextIdx = i + 1

      getResult(preIdx, nextIdx)
  }

  for (let i = 0; i < (nLength - 1); i++) {
      let preIdx = i
      let nextIdx = i + 1

      getResult(preIdx, nextIdx)
  }

  return result
}