/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity + 2
  this.total = 2
  this.obj = {}
  this.obj['head'] = {
      key: 'head',
      value: null,
      pre: null
  }
  this.obj['end'] = {
      key: 'end',
      value: null,
      next: null
  }

  this.obj['head'].next = this.obj['end']
  this.obj['end'].pre = this.obj['head']
};
LRUCache.prototype.putHead = function(key, value){
  const startOne = this.obj['head']
  this.obj[key] = {
      key: key,
      value: value,
      next: startOne.next,
      pre: startOne
  }

  startOne.next.pre = this.obj[key]
  startOne.next = this.obj[key]
}

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  if (this.obj[key]) {
      //exist - change place
      const current = this.obj[key]
      current.pre.next = current.next
      current.next.pre = current.pre

      this.putHead(key, this.obj[key].value)

      return this.obj[key].value
  } else {
      return -1
  }
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  this.total++
  //case 1 add new one
  //case udpate exist one
  const overflowed = this.total > this.capacity
  if (overflowed != (this.total > this.capacity)) {
      console.log('err')
  }
  if (this.obj[key]) {
      const current = this.obj[key]
      current.pre.next = current.next
      current.next.pre = current.pre
      this.putHead(key, value)
      this.total--
  } else {
      this.putHead(key, value)
      if (overflowed) {
          const endOne = this.obj['end']
          const deletedKey = endOne.pre.key;
          const deletedOne = this.obj[deletedKey]

          deletedOne.pre.next = endOne
          endOne.pre = deletedOne.pre
          delete this.obj[deletedKey]
          this.total--
      }
  }
};



