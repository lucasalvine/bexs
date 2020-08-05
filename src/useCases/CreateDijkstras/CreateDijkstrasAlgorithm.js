const PriorityQueue = require('./CreatePriorityQueue');

class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacencyList[node] = [];
  }

  addEdge(node1, node2, weight) {
    this.adjacencyList[node1].push({ node: node2, weight });
    this.adjacencyList[node2].push({ node: node1, weight });
  }

  findPathWithDijkstra(startNode, endNode) {
    const times = {};
    const backtrace = {};
    const pq = PriorityQueue;
    times[startNode] = 0;

    this.nodes.forEach((node) => {
      if (node !== startNode) {
        times[node] = Infinity;
      }
    });

    pq.enqueue([startNode, 0]);

    while (!pq.isEmpty()) {
      const shortestStep = pq.dequeue();
      const currentNode = shortestStep[0];
      this.adjacencyList[currentNode].forEach((neighbor) => {
        const time = times[currentNode] + neighbor.weight;
        if (time < times[neighbor.node]) {
          times[neighbor.node] = time;
          backtrace[neighbor.node] = currentNode;
          pq.enqueue([neighbor.node, time]);
        }
      });
    }
    const path = [endNode];
    let lastStep = endNode;
    while (lastStep !== startNode) {
      path.unshift(backtrace[lastStep]);
      lastStep = backtrace[lastStep];
    }
    return console.log(`${path}`);
  }
}

module.exports = new Graph();
