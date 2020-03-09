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

var findMax = function(low, high, mid, arr) {
    let max_v1 = arr[mid]
    let result = arr[mid]
    for (let i = (mid - 1); i >= low; i--) {
        result = result + arr[i]

        if (result > max_v1) {
            max_v1 = result
        }
    }

    let max_v2 = arr[mid + 1]
    result = arr[mid + 1]
    for (let i = (mid + 2); i <= high; i++) {
        result = result + arr[i]
        if (result > max_v2) {
            max_v2 = result
        }
    }

    return (max_v1 + max_v2)
}

var maxSubArray_v2 = function(low, high, arr) {
    if (low === high) {
        return arr[low]
    }

    const mid = Math.floor((low + high) / 2)
    const v1 = maxSubArray_v2(low, mid, arr)
    const v2 = maxSubArray_v2(mid + 1, high, arr)
    const v3 = findMax(low, high, mid, arr)

    return Math.max(v1, v2, v3)
}

function maxArr(arr) {
    return maxSubArray_v2(0, arr.length - 1, arr)
}

console.log(maxArr([-2,1]))