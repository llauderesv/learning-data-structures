class Vertex {
  value;
  adjacentVertices;

  constructor(value) {
    this.value = value;
    this.adjacentVertices = [];
  }

  addAdjacentVertex(vertex) {
    this.adjacentVertices.push(vertex);
  }

  dfs(vertex, visitedVertices = {}) {
    visitedVertices[vertex.value] = true;
    console.log(vertex.value);
    for (let adjacentVertex of vertex.adjacentVertices) {
      if (visitedVertices[adjacentVertex.value]) {
        continue;
      } else {
        this.dfs(adjacentVertex, visitedVertices);
      }
    }
  }

  bfsTraverse(startingVertex) {
    let queue = [];
    let visitedVertices = {};
    visitedVertices[startingVertex.value] = true;
    queue.push(startingVertex);

    while (queue.length > 0) {
      let currentVertex = queue.shift();

      console.log(currentVertex.value);
      for (let adjacentVertex of currentVertex.adjacentVertices) {
        if (!visitedVertices[adjacentVertex.value]) {
          visitedVertices[adjacentVertex.value] = true;
          queue.push(adjacentVertex);
        }
      }
    }
  }
}

let alice = new Vertex('alice');
let bob = new Vertex('bob');
let cynthia = new Vertex('cynthia');

alice.addAdjacentVertex(bob);
alice.addAdjacentVertex(cynthia);
bob.addAdjacentVertex(cynthia);
cynthia.addAdjacentVertex(bob);

// cynthia.dfs(alice);
alice.dfs(cynthia);
alice.bfsTraverse(cynthia);
