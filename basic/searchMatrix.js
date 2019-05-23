const searchMatrix = function (matrix, target) {
  if (!matrix[0]) {
      return false
  }
  const m = matrix.length - 1
  const n = matrix[0].length - 1

  let mIndex = m
  let nIndex = 0

  while ((mIndex >= 0) && (nIndex <= n)) {
      if (matrix[mIndex][nIndex] === target) {
          return true
      }
      if (matrix[mIndex][nIndex] > target) {
          mIndex--
      } else {
          nIndex++
      }
  }
  return false
};