// todo
// 1 remove un necessary space?
// 2 conside error case
// 3 conside array case
function saperate(str) {
  str = str + ','
  const result = []

  while (str) {
    const nLength = str.length
    let n = 0
    let findEnd = false
    // should consider error case
    const colonIdx = str.indexOf(':')
    let index = colonIdx + 1

    //find end with ','
    while (index < nLength && !findEnd) {
      if (str[index] === "{") {
        n++
      } else if (str[index] === '}') {
        n--
      } else if (n === 0 && str[index] === ',') {
        findEnd = true
      }
      index++
    }

    if (findEnd) {
      result.push({
        key: str.slice(0, colonIdx),
        value: str.slice(colonIdx + 1, index - 1)
      });
    }

    str = str.slice(index)
  }
  return result
}

function parse(str) {
  const startTag = str[0]

  // object
  if (startTag === '{') {
    const newStr = str.slice(1, str.length - 1)
    //sepearte
    const result = {};
    const keyMap = saperate(newStr)
    keyMap.forEach(item => {
      result[item.key] = parse(item.value)
    })
    return result
  } else {
    // normal - number/ string/ bollean/ null/
    if (startTag === '"' || startTag === "'") {
      return str.slice(1, str.length - 1)
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
    return (Number(str))
  }
}

// parse('{"b":1,"c":2}');
parse('{"b":{"b1":"1"},"c":2}');