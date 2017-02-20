class Set {
  constructor() {
    this.data = {}
  }
  add(value) {
    const v2s = Set._v2s(value)
    if (!this.has(value)) {
      this.data[v2s] = value
      return true
    }
    return false
  }
  remove(value) {
    const v2s = Set._v2s(value)
    if (this.has(value)) {
      delete this.data[v2s]
      return true
    }
    return false
  }
  size() {
    return Object.keys(this.data).length
  }
  has(value) {
    return Set._v2s(value) in this.data
  }
  clear() {
    this.data = {}
  }
  static _v2s(value) {
    switch (value) {
      case undefined:
        return 'u'
      case null:
        return 'n'
      case true:
        return 't'
      case false:
        return 'f'
      default:
        switch (typeof value) {
          case 'number':
            return `@${value}`
          case 'string':
            return `#${value}`
          default:
            return `$${Set._objectId(value)}`
        }
    }
  }
  static _objectId(obj) {
    const prop = '|**objectId**|'
    if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
      obj[prop] = Set._v2s.next += 1
    }
    return obj[prop]
  }
}

Set._v2s.next = 0

export default Set