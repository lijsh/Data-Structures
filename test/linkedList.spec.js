import { assert } from 'chai'
import { before, describe, it } from 'mocha'
import LinkedList from '../linkedList/linkedList'
import Node from '../linkedList/node'

describe('Node', () => {
  let node
  before(() => {
    node = new Node('test')
  })
  describe('constructor', () => {
    it('constructor exist', () => {
      assert.typeOf(Node, 'function')
    })
    it('node has a element', () => {
      assert.equal('test', node.element)
    })
  })
})

describe('LinkedList', () => {
  let linkedList
  before(() => {
    linkedList = new LinkedList()
  })
  describe('constructor', () => {
    it('constructor exist', () => {
      assert.typeOf(LinkedList, 'function')
    })
  })
})