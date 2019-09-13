// todo
// 1 remove un necessary space? // done
// 2 conside error case
// 3 conside array case // done
let firstflag = true
function saperate(str, type) {
  str = str + ','
  const result = []

  while (str) {
    const nLength = str.length
    let n = 0
    let m = 0
    let findEnd = false
    // should consider error case
    const colonIdx = str.indexOf(':')
    let index
    if (type === 'object') {
      index = colonIdx + 1
    } else {
      index = 0
    }

    //find end with ','
    while (index < nLength && !findEnd) {
      if (str[index] === "{") {
        n++
      } else if (str[index] === '}') {
        n--
      } else if (str[index] === '[') {
        m++
      } else if (str[index] === ']') {
        m--
      } else if (n === 0 && m === 0 && str[index] === ',') {
        findEnd = true
      }
      index++
    }

    if (findEnd) {
      if (type === 'object') {
        if (str[0] !== '"' || str[0] !== "'") {
          throw new Error()
        }
        result.push({
          key: str.slice(1, colonIdx - 1),
          value: str.slice(colonIdx + 1, index - 1)
        });
      } else {
        const newValue = str.slice(0, index - 1);
        if (newValue === '') {
          throw new Error()
        }
        result.push(newValue);
      }
    } else {
      throw new Error()
    }

    str = str.slice(index)
  }
  return result
}

function parse(str) {
  if (typeof str !== 'string' || (firstflag && str === '') || (firstflag && str === 'undefined')) {
    throw new Error()
  }
  firstflag = false
  //remove spance
  while(str && str[0] === ' ') {
    str = str.slice(1)
  }
  while(str && str[str.length - 1] === ' ') {
    str = str.slice(0, str.length - 2)
  }
  const startTag = str[0]

  // object
  if (startTag === '{') {
    if (str[str.length -1] !== "}") {
      throw new Error()
    }
    const newStr = str.slice(1, str.length - 1)
    //sepearte
    const result = {}
    if (newStr) {
      const keyMap = saperate(newStr, 'object') || []
      keyMap.forEach(item => {
        result[item.key] = parse(item.value)
      })
    }
    return result
  } else if (startTag === '[') {
    if (str[str.length -1] !== ']') {
      throw new Error()
    }
    const newStr = str.slice(1, str.length - 1)
    const result = []
    if (newStr) {
      const valuses = saperate(newStr, 'array') || []
      valuses.forEach(item => {
        result.push(parse(item))
      })
    }
    return result
  } else {
    // normal - number/ string/ bollean/ null/
    if (startTag === '"' || startTag === "'") {
      const newStr = str.slice(1, str.length - 1)
      // string with no closing quote
      if (str[0] !== str[str.length -1]) {
        throw new Error()
      }
      if (typeof newStr !== 'string') {
        throw new Error()
      }
      return newStr
    }
    if (str === 'null') {
      return null
    }
    if (str === 'true') {
      return true
    }
    if (str === 'false') {
      return false
    }
    //invalid number condition
    if (['0', '+', '.'].includes(str[0])) {
      throw new Error()
    }
    const newNum = Number(str)
    if (isNaN(newNum)) {
      throw new Error()
    }
    return (newNum)
  }
}
