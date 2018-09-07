// write in a function thats an X by X array of arrays of numbers
// as well as two x/y combinations and have it return the shortest
// length (you don't need to track the actual path) from point A to point B.
//
// the numbers in the maze array represent as follows:
// 0 – open space
// 1 - closed space, cannot pass through. a wall
// 2 - one of the two origination points
//
// you will almost certainly need to transform the maze into your own
// data structure to keep track of all the meta data
class SimpleQueue {
  _data = []

  _pointer = 0

  enqueue(val) {
    this._data.push(val)
  }

  dequeue() {
    return this._data[this._pointer++] // eslint-disable-line
  }

  peek() {
    return this._data[this._pointer]
  }
}

const Visitor = {
  None: 0,
  Start: 1,
  End: 2,
}

const UNPASSABLE_TILES = [1]

const getNodeKey = (x, y) => `${x}_${y}`

/**
 * Converts the raw 2d Array into a graph-like data structure with node
 * objects that track their own positions and statuses
 */
function buildGraph(maze, [startX, startY], [endX, endY]) {
  const isStart = (x, y) => x === startX && y === startY
  const isEnd = (x, y) => x === endX && y === endY

  return maze.reduce((accum, row, y) => {
    const reducedRow = row.reduce((rowAccum, rowVal, x) => {
      let visitedBy = Visitor.None
      if (isStart(x, y)) {
        visitedBy = Visitor.Start
      }
      if (isEnd(x, y)) {
        visitedBy = Visitor.End
      }

      const node = {
        steps: 0,
        value: rowVal,
        visitedBy,
        x,
        y,
      }
      return { ...rowAccum, [getNodeKey(x, y)]: node }
    }, {})
    return { ...accum, ...reducedRow }
  }, {})
}

/**
 * Returns a list of all valid neighbors of the current node.
 *
 * This includes any passable node directly adjacent ot the current node
 * that has not yet been visited by said node.
 */
function getNeighbors(graph, node) {
  const isSameNode = (nodeA, nodeB) =>
    nodeA.x === nodeB.x && nodeA.y === nodeB.y

  const neighbors = []
  for (let x = -1; x <= 1; x += 1) {
    for (let y = -1; y <= 1; y += 1) {
      const key = getNodeKey(node.x + x, node.y + y)
      const neighbor = graph[key]
      const isValidNeighor =
        !!neighbor &&
        neighbor.visitedBy !== node.visitedBy &&
        !isSameNode(neighbor, node) &&
        !UNPASSABLE_TILES.includes(neighbor.value) &&
        (x === 0 || y === 0)

      if (isValidNeighor) {
        neighbors.push(neighbor)
      }
    }
  }
  return neighbors
}

/**
 * Returns whether the paths followed by the two nodes have converged.
 *
 * If both nodes have valid 'visitor' values that are not the same, we can
 * safely assume the paths have met.
 *
 * Note that this currently only logically supports two paths, but could
 * easily be expanded to support more if/when needed
 */
function pathsHaveMet(nodeA, nodeB) {
  if (!nodeA.visitedBy || !nodeB.visitedBy) {
    return false
  }
  return nodeA.visitedBy !== nodeB.visitedBy
}

export default function findShortestPathLength(
  maze,
  [startX, startY],
  [endX, endY],
) {
  const graph = buildGraph(maze, [startX, startY], [endX, endY])
  const queue = new SimpleQueue()
  queue.enqueue(graph[getNodeKey(startX, startY)])
  queue.enqueue(graph[getNodeKey(endX, endY)])

  while (queue.peek()) {
    const node = queue.dequeue()
    const neighbors = getNeighbors(graph, node)

    for (let i = 0; i < neighbors.length; i += 1) {
      const neighbor = neighbors[i]
      // we have found a path! return the sum of the steps + 1 extra for "this step"
      if (pathsHaveMet(node, neighbor)) {
        return node.steps + neighbor.steps + 1
      }

      const updated = {
        ...neighbors[i],
        steps: node.steps + 1,
        visitedBy: node.visitedBy,
      }

      graph[getNodeKey(updated.x, updated.y)] = updated
      queue.enqueue(updated)
    }
  }
  return -1
}
