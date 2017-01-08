const LENGTH_OF_ARRAY = 137

class HashTable {
  constructor() {
    this.table = new Array(LENGTH_OF_ARRAY)
      .join()
      .split(',')
      .map(() => [])
  }

  put(key, data) {
    const pos = HashTable.hashify(key, this.table.length)
    const target = this.table[pos]
    let index = 0
    if (target[index] === undefined) {
      target[index] = key
      target[index + 1] = data
    } else {
      while (target[index] !== undefined) {
        index += 1
      }
      target[index] = key
      target[index + 1] = data
    }
  }

  get(key) {
    if (typeof key !== 'string') {
      key = key.toString()
    }
    const pos = HashTable.hashify(key, this.table.length)
    const index = this.table[pos].indexOf(key)
    return index > -1 ? this.table[pos][index + 1] : undefined
  }

  show() {
    this.table.forEach((v) => {
      if (v.length > 0) {
        console.log(v)
      }
    })
  }

  static hashify(key, num) {
    const H = 37
    if (typeof key !== 'string') {
      key = key.toString()
    }
    const total = key.split('').reduce((a, b, i) => (a * H) + a + key.charCodeAt(i), 0)
    return total % num
  }
}

export default HashTable

