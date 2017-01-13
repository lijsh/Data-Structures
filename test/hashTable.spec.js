 /* eslint-disable */

import { assert } from 'chai'
import { before, describe, it } from 'mocha'
import HashTable from '../hashTable/hashTable'

describe('HashTable', () => {
  let hashTable
  before(() => {
      hashTable = new HashTable
  })

  describe('#constructor', () => {
    it('hashTable has inner data', () => {
      assert.equal(137, hashTable.table.length)
    })
  })

  describe('#put', () => {
    before(() => {
      hashTable.put('name', 'Jason')
    })
    it('put method works', () => {
      assert.equal('Jason', hashTable.get('name'))
    })
    it('search unused key should return undefined', () => {
      assert.equal(undefined, hashTable.get('age'))
    })
  })
})