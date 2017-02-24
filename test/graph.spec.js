import { assert } from 'chai'
import { beforeEach, describe, it } from 'mocha'
import Graph from '../Graph/'

describe('Graph', () => {
  let graph
  beforeEach(() => {
    graph = new Graph()
    'ABCDEFGHI'.split('').forEach(s => graph.addVertex(s))
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('A', 'D')
    graph.addEdge('C', 'D')
    graph.addEdge('C', 'G')
    graph.addEdge('D', 'G')
    graph.addEdge('D', 'H')
    graph.addEdge('B', 'E')
    graph.addEdge('B', 'F')
    graph.addEdge('E', 'I')
  })
  it('methods should exist', () => {
    assert.typeOf(graph.BFS, 'function')
    assert.typeOf(graph.DFS, 'function')
  })
  it('toString should return correct string', () => {
    assert.equal(graph.toString(), `A -> B C D 
B -> A E F 
C -> A D G 
D -> A C G H 
E -> B I 
F -> B 
G -> C D 
H -> D 
I -> E 
`)
  })
  it('#BFS', () => {
    let s = ''
    graph.BFS('A', (v) => {
      s += v
    })
    assert.equal(s, 'ABCDEFGHI')
  })
})