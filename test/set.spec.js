import { assert } from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import Set from '../Set/index'

describe('Set', () => {
  let set
  beforeEach(() => {
    set = new Set()
    Set._v2s.next = 0
  })
  afterEach(() => { set = null })
  it('instance method should exist', () => {
    assert.typeOf(set.add, 'function')
    assert.typeOf(set.remove, 'function')
    assert.typeOf(set.has, 'function')
    assert.typeOf(set.size, 'function')
  })
  it('static methods should exist', () => {
    assert.typeOf(Set._v2s, 'function')
    assert.typeOf(Set._objectId, 'function')
  })
  describe('#add', () => {
    it('set and has should works before and after add', () => {
      assert.equal(set.size(), 0)
      assert.isFalse(set.has('first member'))
      set.add('first meber')
      assert.equal(set.size(), 1)
      assert.isTrue(set.has('first meber'))
    })
    it('return value should be true true false', () => {
      const fn = () => { }
      const ret1 = set.add(fn)
      assert.isTrue(ret1)
      const ret2 = set.add(fn)
      assert.isFalse(ret2)
    })
  })
  describe('#remove', () => {
    it('should works properly', () => {
      const testArr = ['test']
      set.add('test member')
      set.add(testArr)
      assert.equal(set.size(), 2)
      assert.isTrue(set.has(testArr))
      set.remove(testArr)
      assert.equal(set.size(), 1)
      assert.isFalse(set.has(testArr))
    })
    it('return value should be false or true', () => {
      assert.isFalse(set.remove('test'))
      const testArr = ['abc', 'def']
      set.add(testArr)
      assert.isTrue(set.remove(testArr))
      assert.equal(set.size(), 0)
    })
  })
  describe('@_v2s', () => {
    it('should works with all type except object', () => {
      assert.equal(Set._v2s(undefined), 'u')
      assert.equal(Set._v2s(null), 'n')
      assert.equal(Set._v2s(true), 't')
      assert.equal(Set._v2s(false), 'f')
      assert.equal(Set._v2s(123), '@123')
      assert.equal(Set._v2s('abcd'), '#abcd')
    })
    it('should works with object type', () => {
      const obj1 = { a: 'a' }
      const o2s1 = Set._v2s(obj1)
      assert.equal(o2s1, '$1')
      assert.equal(Set._v2s.next, 1)
      const obj2 = { a: 'a' }
      const o2s2 = Set._v2s(obj2)
      assert.equal(o2s2, '$2')
      assert.equal(Set._v2s.next, 2)
      assert.equal(Set._v2s([]), '$3')
      assert.equal(Set._v2s.next, 3)
      assert.equal(Set._v2s(obj1), o2s1)
    })
  })
})