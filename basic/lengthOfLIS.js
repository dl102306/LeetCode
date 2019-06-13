/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums.length) {
      return 0
  }
  const nLength = nums.length
  const maxMap = {
  }
  maxMap[0] = 1

  let finalMax = 1;

  for (let i = 1; i < nLength; i++) {
      let max = 1
      for (let j = 0; j < i; j++) {
          if (nums[i] > nums[j] && (maxMap[j] + 1 > max)) {
              max = maxMap[j] + 1
          }
      }
      maxMap[i] = max
      if (max > finalMax) {
          finalMax = max
      }
  }

  return finalMax
};
