import Queue from './queue'

describe('Queue', () => {
  const DEFAULT_SIZE = 5
  let queue

  beforeEach(() => {
    queue = new Queue(DEFAULT_SIZE)
  })

  describe('constructor', () => {
    it('should correctly generate a new Queue object', () => {
      expect(queue.capacity).toEqual(DEFAULT_SIZE)
      expect(queue.data).toMatchObject({})
      expect(queue.firstIndex).toEqual(0)
      expect(queue.lastIndex).toEqual(-1)
    })

    it('should have a minimum capacity of 2', () => {
      queue = new Queue(-1)
      expect(queue.capacity).toEqual(2)
    })
  })

  describe('enqueue', () => {
    it('inserts the value and return the new index', () => {
      let result = queue.enqueue(100)
      expect(result).toEqual(0)
      expect(queue.count()).toEqual(1)
      result = queue.enqueue(200)
      expect(result).toEqual(1)
      expect(queue.count()).toEqual(2)
    })

    it('does not insert the value and returns a string if capacity has been reached', () => {
      queue = new Queue(2)
      queue.enqueue(1)
      queue.enqueue(2)
      const result = queue.enqueue(3)
      expect(queue.count()).toEqual(2)
      expect(typeof result).toEqual('string')
    })
  })

  describe('dequeue', () => {
    it('removes and return the first-added value', () => {
      queue.enqueue(1)
      queue.enqueue(2)
      expect(queue.count()).toEqual(2)
      let result = queue.dequeue()
      expect(result).toEqual(1)
      expect(queue.count()).toEqual(1)
      result = queue.dequeue()
      expect(result).toEqual(2)
      expect(queue.count()).toEqual(0)
    })

    it('returns null if the queue is empty', () => {
      const result = queue.dequeue()
      expect(result).toEqual(null)
    })
  })

  describe('peek', () => {
    it('returns the first-added value', () => {
      queue.enqueue(1)
      queue.enqueue(2)
      expect(queue.count()).toEqual(2)
      let result = queue.peek()
      expect(result).toEqual(1)
      expect(queue.count()).toEqual(2)
      result = queue.peek()
      expect(result).toEqual(1)
      expect(queue.count()).toEqual(2)
    })

    it('returns null if the queue is empty', () => {
      expect(queue.peek()).toEqual(null)
    })
  })

  describe('count', () => {
    it('returns the current number of items', () => {
      queue.enqueue(1)
      expect(queue.count()).toEqual(1)
      queue.enqueue(1)
      expect(queue.count()).toEqual(2)
      queue.dequeue()
      expect(queue.count()).toEqual(1)
      queue.dequeue()
      expect(queue.count()).toEqual(0)
    })
  })

  describe('contains', () => {
    it('returns true if the value is in the queue', () => {
      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)
      expect(queue.contains(2)).toEqual(true)
    })

    it('returns false if the value is not in the queue', () => {
      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)
      expect(queue.contains(4)).toEqual(false)
    })
  })

  describe('until', () => {
    it('returns the correct number of steps to reach the value', () => {
      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)
      queue.enqueue(4)
      expect(queue.until(3)).toEqual(2)
    })

    it('returns -1 if the value is not found', () => {
      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)
      queue.enqueue(4)
      expect(queue.until(5)).toEqual(-1)
    })
  })
})
