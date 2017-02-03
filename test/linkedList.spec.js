import { assert } from 'chai'
import { before, beforeEach, describe, it } from 'mocha'
import LinkedList from '../linkedList/linkedList'
import Node from '../linkedList/node'

describe('Node', () => {
  let node
  before(() => {
    node = new Node('test')
  })
  describe('constructor', () => {
    it('should exist', () => {
      assert.typeOf(Node, 'function')
    })
    it('node has an element', () => {
      assert.equal('test', node.element)
    })
  })
})

describe('LinkedList', () => {
  let linkedList
  beforeEach(() => {
    linkedList = new LinkedList()
  })
  describe('constructor', () => {
    it('instance\'head is null', () => {
      assert.equal(linkedList.head, null)
    })
    it('instance\'length is zero', () => {
      assert.equal(linkedList.length, 0)
    })
  })
  describe('#insert', () => {
    it('should exist', () => {
      assert.typeOf(linkedList.insert, 'function')
    })
    it('should change head when position is 0', () => {
      linkedList.insert(0, 'test insert')
      assert.equal(linkedList.head.element, 'test insert')
    })
    it('should insert correctly', () => {
      linkedList.insert(0, 'test 1')
      linkedList.insert(1, 'test 2')
      linkedList.insert(2, 'test 3')
      linkedList.insert(0, 'test 11')
      assert.equal(linkedList.head.element, 'test 11')
      assert.equal(linkedList.head.next.element, 'test 1')
      assert.equal(linkedList.length, 4)
    })
  })
  describe('#append', () => {
    it('should exist', () => {
      assert.typeOf(linkedList.append, 'function')
    })
    describe('append node', () => {
      let initHead = null
      let initLen = null
      beforeEach(() => {
        initHead = linkedList.head
        initLen = linkedList.length
        linkedList.append('test')
      })
      it('should change head', () => {
        assert.notEqual(linkedList.head, initHead)
        assert.equal(linkedList.head.element, 'test')
      })
      it('should add length', () => {
        assert.equal(linkedList.length, initLen + 1)
      })
      it('shouldn\'t change head again', () => {
        initHead = linkedList.head
        linkedList.append('test 2')
        assert.equal(linkedList.head, initHead)
      })
      it('should change length again', () => {
        linkedList.append('test 2')
        assert.equal(linkedList.length, initLen + 2)
      })
    })
  })
  describe('#find', () => {
    it('should exist', () => {
      assert.typeOf(linkedList.find, 'function')
    })
    it('should return -1 when find null', () => {
      assert.equal(linkedList.find(null), -1)
    })
    it('should return correct index', () => {
      linkedList.append('test 1')
      linkedList.append('test 2')
      linkedList.append('test 3')
      assert.equal(linkedList.find('test 1'), 0)
      assert.equal(linkedList.find('test 2'), 1)
      assert.equal(linkedList.find('test 3'), 2)
      assert.equal(linkedList.find('test 4'), -1)
    })
  })
  describe('#removeAt', () => {
    it('should exist', () => {
      assert.typeOf(linkedList.removeAt, 'function')
    })
    beforeEach(() => {
      linkedList.append('test 1')
      linkedList.append('test 2')
      linkedList.append('test 3')
    })
    it('should remove correctly', () => {
      const item1 = linkedList.removeAt(0)
      assert.equal(linkedList.head.element, 'test 2')
      assert.equal(linkedList.length, 2)
      assert.equal(item1, 'test 1')
      linkedList.removeAt(1)
      assert.equal(linkedList.head.element, 'test 2')
      assert.equal(linkedList.length, 1)
    })
    it('should not remove anything', () => {
      const item = linkedList.removeAt(5)
      assert.equal(linkedList.length, 3)
      assert.equal(item, null)
    })
  })
  describe('#toString', () => {
    it('should exist', () => {
      assert.typeOf(linkedList.toString, 'function')
    })
    it('should display correct result', () => {
      linkedList.append('Angular')
      linkedList.append('React')
      linkedList.append('Vue')
      assert.equal(linkedList.toString(), 'Angular React Vue')
    })
  })
})