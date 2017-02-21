class Node {
  constructor(key) {
    if (typeof key !== 'number') { throw new Error('key should be number') }
    this.key = key
    this.left = null
    this.right = null
  }
}

const insertNode = (node, newNode) => {
  if (node.key > newNode.key) {
    if (node.left === null) {
      node.left = newNode
    } else {
      insertNode(node.left, newNode)
    }
  } else if (node.key < newNode.key) {
    if (node.right === null) {
      node.right = newNode
    } else {
      insertNode(node.right, newNode)
    }
  }
}

const inOrderTraverse = (node, cb) => {
  if (node !== null) {
    inOrderTraverse(node.left, cb)
    cb(node.key)
    inOrderTraverse(node.right, cb)
  }
}

const preOrderTraverse = (node, cb) => {
  if (node !== null) {
    cb(node.key)
    preOrderTraverse(node.left, cb)
    preOrderTraverse(node.right, cb)
  }
}

const postOrderTraverse = (node, cb) => {
  if (node !== null) {
    postOrderTraverse(node.left, cb)
    postOrderTraverse(node.right, cb)
    cb(node.key)
  }
}

const searchNode = (node, key) => {
  if (node === null) return false
  if (node.key < key) {
    return searchNode(node.right, key)
  } else if (node.key > key) {
    return searchNode(node.left, key)
  }
  return true
}

const findMinNode = (node) => {
  if (node) {
    while (node && node.left) {
      node = node.left
    }
    return node
  }
  return null
}

const findMaxNode = (node) => {
  if (node) {
    while (node && node.right) {
      node = node.right
    }
    return node
  }
  return null
}

const removeNode = (node, key) => {
  if (node === null) return null
  if (key < node.key) {
    node.left = removeNode(node.left, key)
    return node
  } else if (key > node.key) {
    node.right = removeNode(node.right, key)
    return node
  }

  if (node.left === null && node.right === null) {
    node = null
    return node
  }

  if (node.left === null) {
    node = node.right
    return node
  } else if (node.right === null) {
    node = node.left
    return node
  }

  const minNode = findMinNode(node.right)
  node.key = minNode.key
  node.right = removeNode(node.right, minNode.key)
  return node
}

export default class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(key) {
    const newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }
  inOrderTraverse(cb) {
    inOrderTraverse(this.root, cb)
  }
  preOrderTraverse(cb) {
    preOrderTraverse(this.root, cb)
  }
  postOrderTraverse(cb) {
    postOrderTraverse(this.root, cb)
  }
  search(key) {
    return searchNode(this.root, key)
  }
  min() {
    const minNode = findMinNode(this.root)
    return minNode ? minNode.key : null
  }
  max() {
    const maxNode = findMaxNode(this.root)
    return maxNode ? maxNode.key : null
  }
  remove(key) {
    this.root = removeNode(this.root, key)
  }
}