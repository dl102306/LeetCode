/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  let newPoints = points.map(item => ({
      value: item[0] * item[0] + item[1] * item[1],
      key: item
  }))
  newPoints = newPoints.sort((x,y) => x.value - y.value);
  const result = []
  for (let i = 0; i < K; i++) {
      result.push(newPoints[i].key)
  }
  return result
};

var kClosest_v2 = function(points, k) {
  const result = []
  const newPoints = points.map(item => ({
    value: item[0] * item[0] + item[1] * item[1],
    key: item
  }))
  const findMid = function(arr, k) {
    console.log(arr)
    console.log(k)
    if (k === 0) {
      return
    }
    const value = arr[0].value
    const list = [arr[0]]
    let num = 1
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].value < value) {
        num++
        list.unshift(arr[i])
      } else {
        list.push(arr[i])
      }
    }
    if (k >= num) {
      for (let i = 0; i < num; i++) {
        result.push(list[i].key)
      }
      findMid(list.slice(num, list.length), k - num)
    } else {
      findMid(list.slice(0, num), k)
    }
  }
  findMid(newPoints, k)
  return result
}

console.log(kClosest_v2([[3,3],[5,-1],[-2,4]], 2))