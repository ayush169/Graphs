const vertices = ["A", "B", "C", "D", "E"];

const verticesIdx = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

const adjMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

function findAdjacencies(vertex) {
  const idx = verticesIdx[vertex];
  const adjacencies = [];
  for (let i = 0; i < adjMatrix[idx].length; i++) {
    if (adjMatrix[idx][i] === 1) {
      adjacencies.push(vertices[i]);
    }
  }
  return adjacencies;
}

console.log(findAdjacencies("E"));
