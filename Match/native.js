
function matchPatten(s, p) {
    const length = s.length - p.length + 1
    const pLength = p.length
    for (let i = 0; i < length; i++) {
      let matched = true
      for (let j = 0; j < pLength; j++) {
        if (s[i + j] !== p[j]) {
          matched = false
          continue
        }
      }
      if (matched) {
        console.log('index' + i + 'matched')
      }
    }
}

const p = 'abc'
const s = 'abcdabc'

matchPatten(s, p)
