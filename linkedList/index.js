import Node from './node'

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
  find(element) {
    let current = this.head
    let index = -1
    let found = false
    while (current && !found) {
      if (current.element === element) {
        found = true
      }
      index += 1
      current = current.next
    }
    return found ? index : -1
  }
  append(element) {
    return this.insert(this.length, element)
  }
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element)
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        node.next = current
        this.head = node
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index += 1
        }
        node.next = current
        previous.next = node
      }
      this.length += 1
      return true
    }
    return false
  }
  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        this.head = current.next
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index += 1
        }
        previous.next = current.next
      }
      this.length -= 1
      return current.element
    }
    return null
  }
  remove(element) {
    const index = this.find(element)
    return this.removeAt(index)
  }
  toString() {
    let current = this.head
    let string = ''
    while (current) {
      string += ` ${current.element}`
      current = current.next
    }
    return string.slice(1)
  }
}

export default LinkedList
