function buildMaxHeapWH(queue) {
  let l = queue.length;
  [queue[1], queue[l - 1]] = [queue[l - 1], queue[1]];
  queue.pop();
  l = queue.length - 1;
  let n = 1;
  while ((2 * n) < l) {
    let left = n * 2;
    let right = (n * 2) + 1;
    let max = left;
    if (queue[left].value < queue[right].value) {
      max = right;
    }

    if (queue[n].value < queue[max].value) {
      [queue[n], queue[max]] = [queue[max], queue[n]];
      n = max;
    } else {
      n = l;
    }
  }
}

function PQueue() {
  this.queue = [{value: 'header'}];
}

PQueue.prototype.insert = function(key, value) {
  this.queue.push({
    value,
    key
  });
  let n = this.queue.length - 1;
  let p = Math.floor(n / 2);
  while (p > 0) {
    if (this.queue[p].value < this.queue[n].value) {
      [this.queue[p], this.queue[n]] = [this.queue[n], this.queue[p]];
      n = p;
      p = Math.floor(n / 2);
    } else {
      p = 0;
    }
  }
}

PQueue.prototype.maximum = function() {
  let result;
  if (this.queue.length > 1) {
    result = {...this.queue[1]};
    buildMaxHeapWH(this.queue);
    return result;
  } else {
    return 'empty queue';
  }
}

PQueue.prototype.increseKey = function(key, increseNum) {
  // find parents

}

const ins = new PQueue();
ins.insert('writing', 100);
console.log(ins.maximum());
ins.insert('running', 350);
console.log(ins.maximum());
ins.insert('eating', 200);
ins.insert('sleeping', 250);
ins.insert('sorting', 1250);
console.log(ins.maximum());

