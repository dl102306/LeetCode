/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  function seprate(str, keys) {
    const result = []
    let value = ''
    for (let i = 0; i < str.length; i++) {
      if (keys.includes(str[i])) {
        value && result.push(Number(value))
        result.push(str[i])
        value = ''
      } else {
        if (str[i] !== ' ') {
          value = value + str[i]
        }
      }
    }
    if (!keys.includes(str[str.length - 1]) && value) {
      result.push(Number(value))
    }
    return result
  }

  const arr = seprate(s, ['+', '-', '(', ')'])
  const exeList = []

  function handle(current) {
    const length = exeList.length
    if (['+', '-', '('].includes(current) || length === 0) {
      exeList.push(current)
    } else {
      if (current === ')') {
        exeList[exeList.length - 2] = exeList[exeList.length - 1]
        exeList.pop()
        if (exeList.length !== 1) {
          const value = exeList.pop()
          handle(value)
        }
      } else {
        const pre = exeList[length - 1]
        // num
        if (pre === '(') {
          exeList.push(current)
        } else {
          if (pre === '+') {
            exeList[length - 2] = exeList[length - 2] + current
          } else {
            exeList[length - 2] = exeList[length - 2] - current
          }
          exeList.pop()
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    handle(current)
  }

  return exeList[0]
};

console.log(calculate('   (  3 ) '))