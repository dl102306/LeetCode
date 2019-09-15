/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const keyMap = {}
  prerequisites.forEach(item => {
    if (keyMap[item[0]]) {
      keyMap[item[0]].push(item[1])
    } else {
      keyMap[item[0]] = [item[1]]
    }
  })

  function checkValid(trackValue, nextValue, num) {
    if (nextValue === trackValue || num > numCourses) {
      return true
    }

    const nextValues = keyMap[nextValue] || []
    for (let i = 0; i< nextValues.length; i++) {
      if (checkValid(trackValue, nextValues[i], num + 1)) {
        return true
      }
    }

    return false
  }

  for (let i =0; i< numCourses; i++) {
    const nextValues = keyMap[i] || []
    for (let j = 0; j < nextValues.length; j++) {
      if (checkValid(i, nextValues[j], 2)) {
        return false
      }
    }
  }

  return true
};

