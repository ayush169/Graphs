// class Graph {
//   constructor() {
//     this.adjacencyList = new Map();
//   }

//   addVertex(vertex) {
//     if (!this.adjacencyList.has(vertex)) {
//       this.adjacencyList.set(vertex, []);
//     }
//   }

//   addEdge(v1, v2) {
//     this.addVertex(v1);
//     this.addVertex(v2);
//     this.adjacencyList.get(v1).push(v2);
//     this.adjacencyList.get(v2).push(v2);
//   }

//   removeVertex(v) {
//     if (!this.adjacencyList.has(v)) {
//       return;
//     }
//     for (let adjacentVertex of this.adjacencyList.get(v).keys()) {
//       this.removeEdge(v, adjacentVertex);
//     }
//     this.adjacencyList.delete(v);
//   }

//   removeEdge(v1, v2) {
//     if (this.adjacencyList.has(v1) && this.adjacencyList.has(v2)) {
//       this.adjacencyList.get(v1).splice(v2, 1);
//       this.adjacencyList.get(v2).splice(v1, 1);
//     }
//   }

//   hasEdge(v1, v2) {
//     return (
//       this.adjacencyList.has(v1) &&
//       this.adjacencyList.has(v2) &&
//       this.adjacencyList.get(v1).includes(v2)
//     );
//   }

//   getVertices() {
//     return [...this.adjacencyList.keys()];
//   }

//   getVerticesCount() {
//     return this.adjacencyList.size;
//   }

//   getNeighbors(v) {
//     if (!this.adjacencyList.has(v)) {
//       return [];
//     }
//     return [...this.adjacencyList.get(v).keys()];
//   }

//   display() {
//     for (let [vertex, neighbors] of this.adjacencyList) {
//       console.log(vertex, "=>", [...neighbors.keys()]);
//     }
//   }
// }

// // Example usage:
// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");

// graph.addEdge("A", "B");
// graph.addEdge("B", "A");
// graph.display();
