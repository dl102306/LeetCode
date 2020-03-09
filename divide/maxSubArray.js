var maxSubArray = function(nums) {
  const length = nums.length;
  const newNums = [];

  let value = 0;
  for (let i = 0; i < length; i++) {
      value = value + nums[i]
      newNums.push(value);
  }

  let min = newNums[0]
  const caculteNum = [0];
  for (let i = 1; i < length; i++) {
      caculteNum.push(min)
      if (newNums[i] < min) {
          min = newNums[i]
      }
  }

  let result = newNums[0];
  for (let i = length - 1; i > 0; i--) {
      if (newNums[i] > result) {
          result = newNums[i]
      }
      if (newNums[i] - caculteNum[i] > result) {
          result = newNums[i] - caculteNum[i]
      }
  }

  return result;
};