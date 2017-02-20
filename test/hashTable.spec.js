import { assert } from 'chai'
import { before, describe, it } from 'mocha'
import HashTable from '../hashTable/'

describe('HashTable', () => {
  let hashTable
  before(() => {
    hashTable = new HashTable()
  })

  describe('#constructor', () => {
    it('hashTable has inner data', () => {
      assert.equal(137, hashTable.table.length)
    })
  })

  describe('#get', () => {
    before(() => {
      hashTable.put('name', 'Jason')
    })
    it('should return expected value', () => {
      assert.equal('Jason', hashTable.get('name'))
    })
    it('should return undefined when searching unused key ', () => {
      assert.equal(undefined, hashTable.get('age'))
    })
  })
})
