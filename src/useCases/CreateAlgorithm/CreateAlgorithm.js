const PriorityQueue = require('../CreateQueue/CreatePriorityQueue');

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

  findBestWay(startNode, endNode) {
    const costs = {};
    const backtrace = {};
    const pq = PriorityQueue;
    costs[startNode] = 0;

    this.nodes.forEach((node) => {
      if (node !== startNode) {
        costs[node] = Infinity;
      }
    });

    pq.enqueue([startNode, 0]);

    while (!pq.isEmpty()) {
      const shortestStep = pq.dequeue();
      const currentNode = shortestStep[0];
      this.adjacencyList[currentNode].forEach((neighbor) => {
        const cost = costs[currentNode] + neighbor.weight;
        if (cost < costs[neighbor.node]) {
          costs[neighbor.node] = cost;
          backtrace[neighbor.node] = currentNode;
          pq.enqueue([neighbor.node, cost]);
        }
      });
    }
    const path = [endNode];
    let lastStep = endNode;
    while (lastStep !== startNode) {
      path.unshift(backtrace[lastStep]);
      lastStep = backtrace[lastStep];
    }
    return `${path} and cost is ${costs[endNode]}`;
  }
}

module.exports = new Graph();
