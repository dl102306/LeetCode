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
  const keyMap = []
  let removeNum = 0
  for (i = 0; i< numCourses; i++) {
    keyMap[i] = []
  }

  prerequisites.forEach(item => {
    keyMap[item[1]].push(item[0])
  })

  function removeLine(value) {
    for (i = 0; i< numCourses; i++) {
      if (keyMap[i] && keyMap[i].length) {
        const idx = keyMap[i].indexOf(value);
        if (idx !== -1) {
          keyMap[i].splice(idx, 1)
        }
      }
    }
  }

  let flag = false

  while (removeNum < numCourses && !flag) {
    flag = true
    for (i = 0; i< numCourses; i++) {
      if (keyMap[i] && keyMap[i].length === 0) {
        flag = false
        //handle remvoe
        keyMap[i] = false
        removeNum++
        removeLine(i)
      }
    }
  }

  return !flag
};

