export default class Graph {
  constructor() {
    this.vertices = []
    this.adjList = {}
  }
  addVertex(v) {
    this.vertices.push(v)
    this.adjList[v] = []
  }
  addEdge(v, w) {
    this.adjList[v].push(w)
    this.adjList[w].push(v)
  }
  BFS(v, cb = () => {}) {
    const queue = [v]
    const color = {}
    this.vertices.forEach((v) => {
      color[v] = 'white'
    })
    while (queue.length) {
      const n = queue.shift()
      color[n] = 'grey'
      const neighbors = this.adjList[n]
      neighbors.forEach((w) => {
        if (color[w] === 'white') {
          color[w] = 'grey'
          queue.push(w)
        }
      })
      color[n] = 'black'
      cb(n)
    }
  }
  DFS() {}
  toString() {
    let s = ''
    this.vertices.forEach((v) => {
      const adj = this.adjList[v].reduce((v, w) => `${v}${w} `, '')
      s += `${v} -> ${adj}\n`
    })
    return s
  }
}