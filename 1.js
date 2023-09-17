class Graph {
  constructor() {
    this.adjacencyList = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) {
      this.addVertex(v1);
    }
    if (!this.adjacencyList[v2]) {
      this.addVertex(v2);
    }
    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }

  removeVertex(v) {
    if (!this.adjacencyList[v]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[v]) {
      this.removeEdge(v, adjacentVertex);
    }
    delete this.adjacencyList[v];
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      return;
    }
    this.adjacencyList[v1].delete(v2);
    this.adjacencyList[v2].delete(v1);
  }

  hasEdge(v1, v2) {
    return this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, "=>", [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

// graph.display();
// console.log(graph.hasEdge("A", "C"));

graph.addEdge("A", "C");
graph.removeEdge("A", "C");
// graph.display();

graph.removeVertex("A");
graph.display();
