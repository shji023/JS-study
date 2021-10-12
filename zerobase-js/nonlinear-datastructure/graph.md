## 그래프
- 정점과 간선으로 구성되어 <b>네트워크 구조</b>를 추상화한 비선형 자료구조
- 그래프 특징
  - 정점(Vertex)과 간선(Edge)의 집합
  - 다양한 그래프 종류를 혼합하여 표현 가능
- 그래프 종류
  - 방향 그래프(Directed Graph) : 간선에 특정 방향이 존재하는 그래프(A → B로 표현, A에서 B로만 이동 가능)
  - 무방향 그래프(Undirected Graph) : 간선에 특정 방향이 존재하지 않는 그래프(A → B로 표현, 양방향 이동 가능)
  - 가중치 그래프(Weighted Graph) : 간선에 비용이나 가중치가 할당된 그래프
  - 연결 그래프(Connected Graph) : 무방향 그래프에 있는 모든 정점쌍에 대해 항상 경로가 존재하는 그래프
  - 비연결 그래프(Disconnected Graph) : 무방향 그래프에서 특정 정점쌍 사이에 경로가 존재하지 않는 그래프
  - 순환 그래프(Cycle) : 단순 경로의 시작 정점과 종료 지점이 동일하여 순환 지점이 존재하는 그래프
  - 비순환 그래프(Acyclic Graph) : 순환 지점이 존재하지 않는 그래프
  - 완전 그래프(Complete Graph) : 그래프에 속해 있는 모든 정점이 서로 연결되어 있는 그래프
![graph](https://user-images.githubusercontent.com/60960130/136963048-126f2a49-78c8-4e9d-8f96-0bd4eab0edbb.png)

- 그래프 표현 방법
  - 인접 리스트(Adjacency List) : 정점에 연결된 다른 정점을 리스트로 표현
  - 인접 행렬(Adjacency Matrix) : 정점에 연결된 다른 정점을 정점x정점 크기의 매트릭스로 표현

- 방향 그래프
![graph1](https://user-images.githubusercontent.com/60960130/136964959-f2fc30fe-1070-4b77-a27a-2f7fbb7065f9.png)

```js
// edge object 객체 저장을 위한 생성자
// key: vertex
// value: list 형태로 연결된 vertex를 표현하여 edge 연결 관계 표현
function Graph() {
  this.edge = {}; // key value형태
}
// vertex추가
Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
};
// edge추가
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E"]; // 가시성을 위해 F 제거

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
console.log(graph.edge);
/*
{
  A: [ 'B', 'C', 'D' ],
  B: [ 'E', 'F' ],
  C: [ 'G' ],
  D: [ 'G', 'H' ],
  E: [ 'I' ]
}
*/
```

```js

// 간선(edge) 삭제
Graph.prototype.removeEdge = function (v1, v2) {
  if (this.edge[v1]) {
    let idx = this.edge[v1].indexOf(v2);

    if (idx != -1) {
      this.edge[v1].splice(idx, 1);
    }

    if (this.edge[v1].length === 0) {
      delete this.edge[v1];
    }
  }
};
// 정점(vertex) 삭제
Graph.prototype.removeVertex = function (v) {
  if (this.edge[v] === undefined) return;

  let length = this.edge[v].length; // changed length
  let connectedVertex = [...this.edge[v]]; // object copy
  for (let i = 0; i < length; i++) {
    this.removeEdge(v, connectedVertex[i]);
  }
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E"];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
console.log(graph.edge);

graph.removeEdge("B", "F");
graph.removeEdge("B", "E");
console.log(graph.edge);

graph.removeVertex("B");
console.log(graph.edge);

graph.removeVertex("D");
console.log(graph.edge);
/*
{
  A: [ 'B', 'C', 'D' ],
  B: [ 'E', 'F' ],
  C: [ 'G' ],
  D: [ 'G', 'H' ],
  E: [ 'I' ]
}
{ A: [ 'B', 'C', 'D' ], C: [ 'G' ], D: [ 'G', 'H' ], E: [ 'I' ] }
{ A: [ 'B', 'C', 'D' ], C: [ 'G' ], D: [ 'G', 'H' ], E: [ 'I' ] }
{ A: [ 'B', 'C', 'D' ], C: [ 'G' ], E: [ 'I' ] }

*/
```

```js
// vertex 개수 반환
Graph.prototype.sizeVertex = function () {
  return Object.keys(this.edge).length;
};
// edge 개수 반환
Graph.prototype.sizeEdge = function (vertex) {
  return this.edge[vertex] ? Object.keys(this.edge[vertex]).length : 0;
};

// 현재 Graph연결 상태 출력
Graph.prototype.print = function () {
  for (let vertex in this.edge) {
    let neighbors = this.edge[vertex];
    if (neighbors.length == 0) continue;
    
    process.stdout.write(`${vertex} -> `);
    for (let j = 0; j < neighbors.length; j++) {
      process.stdout.write(`${neighbors[j]} `);
    }

    console.log("");
  }
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E"];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
graph.print();
console.log("");

graph.removeEdge("B", "F");
graph.removeEdge("B", "E");
graph.print();
console.log("");

graph.removeVertex("B");
graph.print();
console.log("");

graph.removeVertex("D");
graph.print();
console.log("");

console.log(graph.sizeVertex());
console.log(graph.sizeEdge("C"));
console.log(graph.sizeEdge("J"));
/*
A -> B C D 
B -> E F 
C -> G 
D -> G H 
E -> I 

A -> B C D 
C -> G 
D -> G H 
E -> I 

A -> B C D 
C -> G 
D -> G H 
E -> I 

A -> B C D 
C -> G 
E -> I 

3
1
0
*/
```
- 무방향 그래프
```js
// edge추가
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2); // v1 -> v2
  this.edge[v2].push(v1); // v2 -> v1
};

// 간선(edge) 삭제
Graph.prototype.removeEdge = function (v1, v2) {
  // v1 -> v2 삭제
  if (this.edge[v1]) {
    let idx = this.edge[v1].indexOf(v2);
    if (idx != -1) {
      this.edge[v1].splice(idx, 1);
    }
    if (this.edge[v1].length === 0) {
      delete this.edge[v1];
    }
  }
  // v2 -> v1 삭제
  if (this.edge[v2]) {
    let idx = this.edge[v2].indexOf(v1);
    if (idx != -1) {
      this.edge[v2].splice(idx, 1);
    }
    if (this.edge[v2].length === 0) {
      delete this.edge[v2];
    }
  }
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
graph.print();
console.log("");

graph.removeEdge("B", "F");
graph.removeEdge("B", "E");
graph.print();
console.log("");

graph.removeVertex("B");
graph.print();
console.log("");

graph.removeVertex("D");
graph.print();
console.log("");

console.log(graph.sizeVertex());
console.log(graph.sizeEdge("C"));
console.log(graph.sizeEdge("J"));
/*
A -> B C D 
B -> A E F 
C -> A G 
D -> A G H 
E -> B I 
F -> B 
G -> C D 
H -> D 
I -> E 

A -> B C D 
B -> A 
C -> A G 
D -> A G H 
E -> I 
G -> C D 
H -> D 
I -> E 

A -> C D 
C -> A G 
D -> A G H 
E -> I 
G -> C D 
H -> D 
I -> E 

A -> C 
C -> A G 
E -> I 
G -> C 
I -> E 

5
2
0
*/
```

