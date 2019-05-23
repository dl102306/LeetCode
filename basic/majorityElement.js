/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const dataMap = {}
  const nLen = nums.length;
  for (let i=0; i< nLen; i++) {
      dataMap[nums[i]] ? dataMap[nums[i]] ++ : dataMap[nums[i]] = 1;
  }

  const keys = Object.keys(dataMap);
  for (let i=0; i<keys.length; i++){
      if (dataMap[keys[i]] > (nLen / 2)) {
          return keys[i]
      }
  }
};