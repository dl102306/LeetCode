/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  function cal(a, b, type) {
    if (type === '+' ) {
      return Number(a) + Number(b)
    }
    if (type === '-' ) {
      return Number(a) - Number(b)
    }
    if (type === '*' ) {
      return Number(a) * Number(b)
    }
  }
  const findR = function(i , j, s) {
    if (i === j) {
      return [Number(s[i])]
    }
    if ((i + 2) === j) {
      return [cal(s[i], s[j], s[i+1])]
    }
    const result_v1 = findR(i, j - 2, s).map(item => {
      return cal(item, s[j], s[j - 1])
    })

    const result_v2 = findR(i + 2, j, s).map(item => {
      return cal(s[i], item, s[i + 1])
    })

    let result_v3 = []
    let result_v4 = []
    if (i + 6 === j) {
      const r1 = cal(s[i], s[i + 2], s[i + 1])
      const r2 = cal(s[j - 2], s[j], s[j - 1])
      result_v3.push(cal(r1, r2, s[i + 3]))
    }
    if (i + 6 < j) {
      result_v3 = findR(i + 4, j, s).map(item => {
        const r = cal(s[i], s[i + 2], s[i + 1])
        return (cal(r, item, s[i + 3]))
      })
      result_v4 = findR(i, j - 4, s).map(item => {
        const r = cal(s[j - 2], s[j], s[j - 1])
        return (cal(item, r, s[j - 3]))
      })
    }

    return [...result_v2, ...result_v1, ...result_v3, ...result_v4]
  }
  const r = []
  let value = ''
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '+' || input[i] === '-' || input[i] === '*'){
      r.push(value)
      r.push(input[i])
      value = ''
    } else {
      value = value + input[i]
    }
  }
  r.push(value)
  return findR(0, r.length - 1, r)
};

console.log(diffWaysToCompute("2-1-1-1-1"))