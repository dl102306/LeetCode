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