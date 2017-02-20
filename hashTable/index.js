// 分离链接实现
const LENGTH_OF_ARRAY = 137
const hashInit = 5381
const hashFactor = 33

class HashTable {
  constructor() {
    this.table = new Array(LENGTH_OF_ARRAY)
  }

  put(key, data) {
    const pos = HashTable.hashify(key, this.table.length)
    if (this.table[pos] === undefined) {
      this.table[pos] = []
    }
    this.table[pos].push(key, data)
  }

  get(key) {
    if (typeof key !== 'string') {
      key = key.toString()
    }
    const pos = HashTable.hashify(key, this.table.length)
    if (this.table[pos] === undefined) return
    const index = this.table[pos].indexOf(key)
    return index > -1 ? this.table[pos][index + 1] : undefined
  }

  static hashify(key, num) {
    if (typeof key !== 'string') {
      key = key.toString()
    }
    const total = key.split('').reduce((a, b, i) => (a * hashFactor) + a + key.charCodeAt(i), hashInit)
    return total % num
  }
}

export default HashTable

