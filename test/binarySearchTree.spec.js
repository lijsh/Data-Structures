import { assert } from 'chai'
import { beforeEach, describe, it } from 'mocha'
import BinarySearchTree from '../BinarySearchTree/'

describe('Class BinarySearchTree', () => {
  let bst
  beforeEach(() => {
    bst = new BinarySearchTree()
  })
  it('instance methods should exist', () => {
    assert.typeOf(bst.insert, 'function')
    assert.typeOf(bst.inOrderTraverse, 'function')
    assert.typeOf(bst.preOrderTraverse, 'function')
    assert.typeOf(bst.postOrderTraverse, 'function')
    assert.typeOf(bst.search, 'function')
    assert.typeOf(bst.min, 'function')
    assert.typeOf(bst.max, 'function')
  })
  it('root should be null', () => {
    assert.isNull(bst.root)
  })
  describe('#insert', () => {
    it('first insert', () => {
      bst.insert(1)
      assert.isNotNull(bst.root)
      assert.equal(bst.root.key, 1)
    })
    it('insert works', () => {
      bst.insert(2)
      bst.insert(3)
      bst.insert(1)
      assert.equal(bst.root.key, 2)
      assert.equal(bst.root.left.key, 1)
      assert.equal(bst.root.right.key, 3)
      bst.insert(4)
      assert.equal(bst.root.right.right.key, 4)
    })
  })
  describe('traverse methods', () => {
    beforeEach(() => {
      bst.insert(11)
      bst.insert(7)
      bst.insert(15)
      bst.insert(5)
      bst.insert(3)
      bst.insert(9)
      bst.insert(8)
      bst.insert(10)
      bst.insert(13)
      bst.insert(12)
      bst.insert(14)
      bst.insert(20)
      bst.insert(18)
      bst.insert(25)
      bst.insert(6)
    })
    it('inOrderTraverse should traverse correctly', () => {
      let iotStr = ''
      bst.inOrderTraverse((key) => {
        iotStr += `${String(key)} `
      })
      assert.equal(iotStr, '3 5 6 7 8 9 10 11 12 13 14 15 18 20 25 ')
    })
    it('preOrderTraverse should traverse correctly', () => {
      let iotStr = ''
      bst.preOrderTraverse((key) => {
        iotStr += `${String(key)} `
      })
      assert.equal(iotStr, '11 7 5 3 6 9 8 10 15 13 12 14 20 18 25 ')
    })
    it('postOrderTraverse should traverse correctly', () => {
      let iotStr = ''
      bst.postOrderTraverse((key) => {
        iotStr += `${String(key)} `
      })
      assert.equal(iotStr, '3 6 5 8 10 9 7 12 14 13 18 25 20 15 11 ')
    })
  })
  describe('search methods', () => {
    beforeEach(() => {
      bst.insert(11)
      bst.insert(7)
      bst.insert(15)
      bst.insert(5)
      bst.insert(3)
      bst.insert(9)
      bst.insert(8)
      bst.insert(10)
      bst.insert(13)
      bst.insert(12)
      bst.insert(14)
      bst.insert(20)
      bst.insert(18)
      bst.insert(25)
      bst.insert(6)
    })
    it('when root is null min and max should return null', () => {
      const bst2 = new BinarySearchTree()
      assert.isNull(bst2.min())
      assert.isNull(bst2.max())
    })
    it('find min should works', () => {
      assert.equal(bst.min(), 3)
    })
    it('find max should works', () => {
      assert.equal(bst.max(), 25)
    })
    it('search should works', () => {
      assert.isFalse(bst.search(16))
      assert.isTrue(bst.search(25))
    })
  })
  describe('remove method', () => {
    beforeEach(() => {
      bst.insert(11)
      bst.insert(7)
      bst.insert(15)
      bst.insert(5)
      bst.insert(3)
      bst.insert(9)
      bst.insert(8)
      bst.insert(10)
      bst.insert(13)
      bst.insert(12)
      bst.insert(14)
      bst.insert(20)
      bst.insert(18)
      bst.insert(25)
      bst.insert(6)
    })
    it('remove leave node', () => {
      assert.isTrue(bst.search(6))
      bst.remove(6)
      assert.isFalse(bst.search(6))
      let iotStr = ''
      bst.postOrderTraverse((key) => {
        iotStr += `${String(key)} `
      })
      assert.equal(iotStr, '3 5 8 10 9 7 12 14 13 18 25 20 15 11 ')
    })
    it('remove node which has single child', () => {
      bst.remove(6)
      assert.isTrue(bst.search(5))
      bst.remove(5)
      assert.isFalse(bst.search(5))
      let iotStr = ''
      bst.postOrderTraverse((key) => {
        iotStr += `${String(key)} `
      })
      assert.equal(iotStr, '3 8 10 9 7 12 14 13 18 25 20 15 11 ')
    })
    it('remove node which has two child', () => {
      assert.isTrue(bst.search(15))
      bst.remove(15)
      assert.isFalse(bst.search(15))
      let iotStr = ''
      bst.postOrderTraverse((key) => {
        iotStr += `${String(key)} `
      })
      assert.equal(iotStr, '3 6 5 8 10 9 7 12 14 13 25 20 18 11 ')
    })
  })
})