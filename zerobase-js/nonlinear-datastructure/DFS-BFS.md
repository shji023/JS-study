## DFS(Depth First Search)
- 트리나 그래프 등에서 <b>하나의 노드를 최대한 깊게</b> 들어가면서 해를 찾는 탐색 기법
- 장점: 인접한 후보 노드만 기억하면 되므로 적은 기억 공간 소요, 노드가 깊은 단계에 있을 경우 빠르게 정답 산출
- 단점: 선택한 경로가 답이 아닐 경우 불필요한 탐색 가능, 최단 경로를 구할 시 찾은 해가 정답이 아닐 경우 발생
- 재귀와 스택 사용

- 재귀
```js
function Graph() {
  this.edge = {};
  // visited 추가
  this.visited = {};
}

Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
  // visited 초기화
  this.visited[v] = false;
};

Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
};

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

// DFS 탐색
Graph.prototype.dfs = function (startVertex) {
  this._dfsRecursiveVisit(startVertex);
};
// 재귀를 이용한 DFS 탐색
Graph.prototype._dfsRecursiveVisit = function (vertex) {
  // 1. 종료 조건
  if (this.visited[vertex]) {
    return;
  }

  this.visited[vertex] = true;
  console.log(`visit "${vertex}"`);

  let neighbors = this.edge[vertex];
  for (let i = 0; i < neighbors.length; i++) {
    this._dfsRecursiveVisit(neighbors[i]);
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

graph.dfs("A");
/*
A -> B C D 
B -> E F 
C -> G 
D -> G H 
E -> I 

visit "A"
visit "B"
visit "E"
visit "I"
visit "F"
visit "C"
visit "G"
visit "D"
visit "H"
*/
```
- 스택
```js
// dfs탐색
Graph.prototype.dfs = function (startVertex) {
  this._dfsLoopVisit(startVertex);
};

Graph.prototype._dfsLoopVisit = function (vertex) {
  let stack = new Stack();
  stack.push(vertex); // 최초의 vertex넣어줌

  while (!stack.isEmpty()) {
    let vertex = stack.pop();
    if (this.visited[vertex]) {
      // 이미 방문했는지 체크
      continue;
    }
    this.visited[vertex] = true; // 방문한적있다면 다음 방문 방지
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      stack.push(neighbors[i]);
    }
  }
};
// 재귀한 동일한 출력 사용
/*
A -> B C D 
B -> E F 
C -> G 
D -> G H 
E -> I 

visit "A"
visit "B"
visit "E"
visit "I"
visit "F"
visit "C"
visit "G"
visit "D"
visit "H"
*/
```
## BFS (Breadth First Search)
- 트리나 그래프 등에서 <b>인접한 노드를 우선 방문</b>하면서 <b>넓게</b> 움직이며 해를 찾는 탐색 기법
- 장점 : 최단 경로 탐색에서 구한 해가 정답임을 보장
- 단점 : 경로가 매우 길어질 경우, 탐색 범위가 증가하면서 DFS보다 많은 기억 공간이 필요
- Queue 사용

```js
import { Queue } from "./queue.mjs";

function Graph() {
  this.edge = {};
  this.visited = {};
}

Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
  this.visited[v] = false;
};

Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
};

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

// BFS 탐색
Graph.prototype.bfs = function (startVertex) {
  this._bfsLoopVisit(startVertex);
};
// 큐를 이용한 BFS 탐색
Graph.prototype._bfsLoopVisit = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();
    if (this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      queue.enqueue(neighbors[i]);
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

graph.bfs("A");
/*
A -> B C D 
B -> E F 
C -> G 
D -> G H 
E -> I 

visit "A"
visit "B"
visit "C"
visit "D"
visit "E"
visit "F"
visit "G"
visit "H"
visit "I"
*/
```

```js
// 다른 정점 간 최단 경로 비용 산출
// A -> X 최단 경로 비용
Graph.prototype._bfsShortestPath = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  let distance = {};
  let pre_visit = {};
  for (let vertex in this.edge) {
    distance[vertex] = 0;
    pre_visit[vertex] = null;
  }

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      if (!this.visited[neighbors[i]]) {
        distance[neighbors[i]] = distance[vertex] + 1; // 앞으로 방문할 neighbors의 정보를 현재 나의 최단 경로 비용 + 1
        pre_visit[neighbors[i]] = vertex; // 그 이전에 대한 노드는 현재 나의 노드로
        queue.enqueue(neighbors[i]);
      }
    }
  }
  return { distance, pre_visit };
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

console.log(graph._bfsShortestPath("A"));
/*
A -> B C D 
B -> E F 
C -> G 
D -> G H 
E -> I 

visit "A"
visit "B"
visit "C"
visit "D"
visit "E"
visit "F"
visit "G"
visit "G"
visit "H"
visit "I"
{
  distance: { A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3 },
  pre_visit: {
    A: null,
    B: 'A',
    C: 'A',
    D: 'A',
    E: 'B',
    F: 'B',
    G: 'D',
    H: 'D',
    I: 'E'
  }
}
*/
```

```js
// from 정점에서 to 정점으로 최단 경로 출력
Graph.prototype._from_to_path = function (pre_visit, from, to) {
  let stack = new Stack();
  // ex. I -> A
  for (let v = to; v !== from; v = pre_visit[v]) {
    // I 부터 시작, A를 만날 때 까지
    stack.push(v);
  }
  stack.push(from); // 역순으로 추가 I E B A

  while (!stack.isEmpty()) {
    // 다시 순차적으로 출력 A B E I
    let v = stack.pop();
    process.stdout.write(`${v} -> `);
  }
  console.log("end");
};

// 다른 정점 간 최단 경로 탐색
Graph.prototype.shortestPath = function (startVertex) {
  let result = this._bfsShortestPath(startVertex);

  console.log(result.distance);
  console.log(result.pre_visit);

  for (let vertex in this.edge) {
    if (vertex === startVertex) continue;

    this._from_to_path(result.pre_visit, startVertex, vertex);
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

graph.shortestPath("A");
/*
A -> B C D 
B -> E F 
C -> G 
D -> G H 
E -> I 

visit "A"
visit "B"
visit "C"
visit "D"
visit "E"
visit "F"
visit "G"
visit "G"
visit "H"
visit "I"
{ A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3 }
{
  A: null,
  B: 'A',
  C: 'A',
  D: 'A',
  E: 'B',
  F: 'B',
  G: 'D',
  H: 'D',
  I: 'E'
}
A -> B -> end
A -> C -> end
A -> D -> end
A -> B -> E -> end
A -> B -> F -> end
A -> D -> G -> end
A -> D -> H -> end
A -> B -> E -> I -> end
*/
```