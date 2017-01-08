 /* eslint-disable */

import assert from 'assert'
import HashTable from '../hashTable/hashTable'

describe('HashTable', function () {
  let hashTable
  before(function() {
      hashTable = new HashTable
  })

  describe('#constructor', () => {
    it('hashTable has inner data', () => {
      assert.equal(137, hashTable.table.length)
    })
  })

  describe('#put', function() {
    before(() => {
      hashTable.put('name', 'Jason')
    })
    it('put method works', () => {
      assert.equal('Jason', hashTable.get('name'))
    })
    it('return undefined', () => {
      assert.equal(undefined, hashTable.get('age'))
    })
  })
})