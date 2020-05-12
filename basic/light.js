let light = ''; // red, yellow, green

const nextStatus = {
  'red': 'yellow',
  'yellow': 'green',
  'green': 'red'
}
const exeTime = {
  'red': 3000,
  'yellow': 2000,
  'greed': 1000
}

function executeLight(light) {
  return new Promise(resolve => {
    console.log(light)
    setTimeout(() => {
      resolve()
    }, exeTime[light])
  })
}

async function execute() {
    while (true) {
      await executeLight(light)
      light = nextStatus[light]
    }
}

light = 'red'
execute()