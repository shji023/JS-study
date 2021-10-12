## 트리
- 그래프의 일종으로 두 노드 사이의 하나의 간선만 연결되어 있는, 최소 연결과 계층 형태의 비선형 자료구조
`노드`: 하나 이상의 값을 갖는 객체 단위 <br />
`간선`: 두 노드를 연결하는 선<br />
`루트 노드`: 부모가 없는 최상위 노드<br />
`단말 노드` : 자식이 없는 노드<br />
`부모 노드`: 특정 Sub-Tree 내에서의 상위 노드<br />
`자식 노드`: 특정 Sub-Tree 내에서의 하위 노드<br />
`형제`: 부모가 없는 최상위 노드<br />
`노드 크기`: 자신을 포함한 모든 자손 노드의 개수<br />
`노드 깊이`: 루트에서 특정 노드에 도달하기 위한 간선의 개수<br />
`노드 레벨`: 트리의 특정 깊이를 가지는 노드의 집합<br />
`노드 차수`: 노드가 지닌 가지의 수<br />
`트리 차수`: 트리의 최대 차수<br />
`트리 높이`: 루트 노드에서 가장 깊숙이 있는 노드의 깊이<br />

### 트리 순회 
- 트리 구조에서 각각의 노드를 정확히 한 번씩 체계적인 방법으로 방문하는 과정
![tree](https://user-images.githubusercontent.com/60960130/136813067-bb807e90-d613-447d-99cc-7cb0cd50c0f4.png)
```
N(Node): 해당 노드를 방문
L(Left): 왼쪽 서브 트리로 이동
R(Right): 오른쪽 서브 트리로 이동
```
- 순회 방식
```
전위 순회(Pre-order): N-L-R
중위 순회(In-order): L-N-R
후위 순회(Post-order): L-R-N
층별 순회(Level-order): 낮은 Level부터 순차적으로 순회
```

<b>전위 순회(Pre-order)</b>

- 전위 순회 방법 : N - L - R
  1. 노드를 방문한다.
  2. 왼쪽 서브 트리를 전위 순회한다.
  3. 오른쪽 서브 트리를 전위 순회한다.
- 방문 순서
  F → B → A → D → C → E → G → I → H
- 의사 코드(pseudo-code)
  stack == 재귀
  ```js
  preorder(node) 
	print node.value
	if node.left ≠ null then preorder(node.left) 
	if node.right ≠ null then preorder(node.right)
  ```

<b>중위 순회(In-order)</b>

- 중위 순회 방법 : L - N - R
  1. 왼쪽 서브 트리를 중위 순회한다.
  2. 현재 노드를 방문한다.
  3. 오른쪽 서브 트리를 중위 순회한다.
- 방문 순서
  A → B → C → D → E → F → G → H → I
- 의사 코드(pseudo-code)
  ```js
  inorder(node)
	if node.left ≠ null then inorder(node.left) 
	print node.value
	if node.right ≠ null then inorder(node.right)
  ```

<b>층별 순회(Level-order)</b> bfs

- 층별 순회 방법 : 낮은 Level부터 순차적으로 순회
  1. root 노드 방문
  2. Level 증가
  3. 왼쪽에서 오른쪽 순으로 방문
- 방문 순서
  F → B → G → A → D → I → C → E → H
- 의사 코드(pseudo-code)
  ```js
  levelorder(root)
    q.enqueue(root)
    while not q.empty do
    node := q.dequeue() 
    print node.value
    if node.left ≠ null q.enqueue(node.left) 
    if node.right ≠ null q.enqueue(node.right)
  ```

<b>후위 순회(Post-order)</b>

- 후위 순회 방법 : L - R - N
  1. 왼쪽 서브 트리를 후위 순회한다.
  2. 오른쪽 서브 트리를 후위 순회한다.
  3. 현재 노드를 방문한다.
- 방문 순서
  A → C → E → D → B → H → I → G → F
- 의사 코드(pseudo-code)
  ```js
  postorder(node)
	if node.left  ≠ null then postorder(node.left) 
	if node.right ≠ null then postorder(node.right) 
	print node.value
  ```

## 이진 트리 (Binary Tree)
- 각각의 노드가 최대 두개의 자식 노드를 가지는 트리 자료구조
- 활용 방식
  - 검색과 정렬 : 이전 탐색 트리와 이진 힙 구현에 활용
  - 허프만 코딩 : 연관 분기 구조 위한 데이터 표현에 활용

### 포화 이진 트리(Perfect binary tree)
- 모든 레벨의 노드가 가득 채워져 있는 트리
- 특징
  - Leaf 노드를 제외한 모든 자식은 2개의 노드를 보유
  - 노드의 개수 : n =2^h - 1
- 트리 형태
  ![pbt](https://user-images.githubusercontent.com/60960130/136816709-7c2a4ebe-276c-4d9f-a056-ad24d7c2225b.PNG)

### 완전 이진 트리(Complete binary tree)
- 마지막 레벨 전까지 노드가 가득 채워져 있고, 마지막 레빌은 왼쪽부터 순차적으로 채워져 있는 트리
- 특징
  - 배열을 사용해 효율적인 표현이 가능
  - 노드의 개수 : n < 2^h - 1
- 트리 형태
  ![cbt](https://user-images.githubusercontent.com/60960130/136816818-12de0a99-d742-4604-810e-ad227035ca8b.PNG)

### 정 이진 트리(Full binary tree)
- 모든 노드가 0개 또는 2개의 자식 노드만 갖는 트리
- 특징
  - proper 또는 plane 이진 트리라고도 불림
  - 노드의 개수 : n ≤ 2^h - 1
- 트리 형태
  ![fbt](https://user-images.githubusercontent.com/60960130/136816987-259edbe4-306d-408c-9d36-92b9828507d7.PNG)

## 편향 이진 트리(Skewed binary tree)
- 왼쪽 혹은 오른쪽으로 편향되게 치우져 있는 트리
- 특징
  - 각각의 높이에 하나의 노드만 존재
  - 노드의 개수 : h
- 트리 형태
  ![sbt](https://user-images.githubusercontent.com/60960130/136817628-d9b180ca-922e-489c-bbfa-f11325ba2f55.PNG)

### 균형 이진 트리(Balanced binary tree)
- 삽입 / 삭제가 이루어 질 때, 왼쪽 서브 트리와 오른쪽 서브 트리의 높이 차를 1 이하로 맞추는 이진 탐색 트리
- 특징
  - 서브 트리 높이 차이가 항상 1 이하로 유지
  - 균형 트리 종류 : AVL트리, Red-Black 트리, B트리, B+트리, B*트리
- 트리 형태
  ![bbt](https://user-images.githubusercontent.com/60960130/136818075-3672e4ad-27db-4dfb-9cbf-b13454e256d7.PNG)

### 이진 트리 순회 (Binary Tree Traversal)
- 각각의 노드가 최대 두개의 자식 노드를 가지는 트리 자료 구조를 순회하는 방법

```js
// value, left, right node저장 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
//root 저장 위한 생성자
function BinaryTree() {
  this.root = null;
}
// 재귀로 트리를 순회하며 노드 추가 (내부 사용)
// _는 private의 의미
BinaryTree.prototype._insertNode = function (node, value) {
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value >= node.value) {
    node.right = this._insertNode(node.right, value);
  }

  return node;
};
// 노출시킴
BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};
// 알파벳 작은거는 왼쪽 큰거는 오른쪽
let tree = new BinaryTree();

tree.insert("F");
/*
this.root = null -> F
*/
tree.insert("B");
/*
this.root -> F
  F.left = B
*/
tree.insert("A");
/*
this.root -> F
  F.left = B
  B.left = A
*/
tree.insert("D");
/*
this.root -> F
  F.left = B
  B.left = A
  B.right = D
*/
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);
// BinaryTree {
//   root: Node {
//     value: 'F',
//     left: Node { value: 'B', left: [Node], right: [Node] },
//     right: Node { value: 'G', left: null, right: [Node] }
//   }
// }
```
- 전위 순회
```js
// 재귀로 트리를 순회하며 전위 순회(내부 사용)
BinaryTree.prototype._preOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  callback(node); //콜백이 앞에 있음 - 전위
  this._preOrderTraverseNode(node.left, callback);
  this._preOrderTraverseNode(node.right, callback);
};
// 전위 순회 하며 노드 출력
BinaryTree.prototype.preOrderTraverse = function (callback) {
  this._preOrderTraverseNode(this.root, callback);
};

let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("********* Pre-Order *********");
tree.preOrderTraverse(printNode);
console.log("end");
/*
BinaryTree {
  root: Node {
    value: 'F',
    left: Node { value: 'B', left: [Node], right: [Node] },
    right: Node { value: 'G', left: null, right: [Node] }
  }
}
********* Pre-Order ***********
F -> B -> A -> D -> C -> E -> G -> I -> H -> end
*/
```
- 중위 순회
```js
//재귀로 트리를 순회하며 중위 순회(내부 사용)
BinaryTree.prototype._inOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  this._inOrderTraverseNode(node.left, callback);
  callback(node); // 콜백이 가운데 있음 - 중위
  this._inOrderTraverseNode(node.right, callback);
};
// 중위 순회 하며 노드 출력
BinaryTree.prototype.inOrderTraverse = function (callback) {
  this._inOrderTraverseNode(this.root, callback);
};

let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("********* In-Order *********");
tree.inOrderTraverse(printNode);
console.log("end");
/*
BinaryTree {
  root: Node {
    value: 'F',
    left: Node { value: 'B', left: [Node], right: [Node] },
    right: Node { value: 'G', left: null, right: [Node] }
  }
}
********* In-Order *********
A -> B -> C -> D -> E -> F -> G -> H -> I -> end
*/
```
- 후위 순회
```js
//재귀로 트리를 순회하며 후위 순회(내부 사용)
BinaryTree.prototype._postOrderTraverse = function (node, callback) {
  if (node === null) {
    return;
  }
  this._postOrderTraverse(node.left, callback);
  this._postOrderTraverse(node.right, callback);
  callback(node); // 콜백이 끝에 있음 - 후위
};
// 후위 순회 하며 노드 출력
BinaryTree.prototype.postOrderTraverse = function (callback) {
  this._postOrderTraverse(this.root, callback);
};

let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("********* Post-Order *********");
tree.postOrderTraverse(printNode);
console.log("end");
/*
BinaryTree {
  root: Node {
    value: 'F',
    left: Node { value: 'B', left: [Node], right: [Node] },
    right: Node { value: 'G', left: null, right: [Node] }
  }
}
********* Post-Order *********
A -> C -> E -> D -> B -> H -> I -> G -> F -> end
*/
```
- 층별 순회
```js
function Queue(array) {
  this.array = array ? array : [];
}
Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};
Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};
Queue.prototype.dequeue = function () {
  return this.array.shift();
};
// 층별 순회 하며 노드 출력
BinaryTree.prototype.levelOrderTraverse = function (callback) {
  let q = new Queue();
  let node;
  q.enqueue(this.root); // 루트 넣어줌
  while (!q.isEmpty()) {
    node = q.dequeue();
    callback(node);
    if (node.left !== null) q.enqueue(node.left);
    if (node.right !== null) q.enqueue(node.right);
  }
};

let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log("********* Level-Order *********");
tree.levelOrderTraverse(printNode);
console.log("end");
/*
BinaryTree {
  root: Node {
    value: 'F',
    left: Node { value: 'B', left: [Node], right: [Node] },
    right: Node { value: 'G', left: null, right: [Node] }
  }
}
********* Level-Order ***********
F -> B -> G -> A -> D -> I -> C -> E -> H -> end

*/
```

## 이진 탐색 트리 (Binary Search Tree)
- 현재 노드를 기준으로 <b>왼쪽에는 작은 값, 오른쪽은 큰 값</b>으로 정렬해 놓는 이진 트리 기반 자료 구조
  
- 최대 최소 찾기
```js
// value, left, right node저장 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
//root 저장 위한 생성자
function BinarySearchTree() {
  this.root = null;
}
// 재귀로 트리를 순회하며 노드 추가 (내부 사용)
// _는 private의 의미
BinarySearchTree.prototype._insertNode = function (node, value) {
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value >= node.value) {
    node.right = this._insertNode(node.right, value);
  }

  return node;
};
// 노출시킴
BinarySearchTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

//재귀로 트리를 순회하며 중위 순회(내부 사용)
BinarySearchTree.prototype._inOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  this._inOrderTraverseNode(node.left, callback);
  callback(node); // 콜백이 가운데 있음 - 중위
  this._inOrderTraverseNode(node.right, callback);
};

BinarySearchTree.prototype.inOrderTraverse = function (callback) {
  this._inOrderTraverseNode(this.root, callback);
  console.log("end");
};

BinarySearchTree.prototype.levelOrderTraverse = function (callback) {
  let q = new Queue();
  let node;
  q.enqueue(this.root);
  while (!q.isEmpty()) {
    node = q.dequeue();
    callback(node);
    if (node.left !== null) q.enqueue(node.left);
    if (node.right !== null) q.enqueue(node.right);
  }
};
// 반복문으로 트리를 순회하며 최솟값 노드 탐색
BinarySearchTree.prototype._minNode = function (node) {
  if (node === null) {
    return null;
  }
  while (node && node.left !== null) {
    // 왼쪽
    node = node.left;
  }
  return node.value;
};
// 최솟값 노드 탐색
BinarySearchTree.prototype.min = function () {
  return this._minNode(this.root);
};
// 반복문으로 트리를 순회하며 최대값 노드 탐색
BinarySearchTree.prototype._maxNode = function (node) {
  if (node === null) {
    return null;
  }
  while (node && node.right !== null) {
    // 오른쪽
    node = node.right;
  }
  return node.value;
};
// 최대값 노드 탐색
BinarySearchTree.prototype.max = function () {
  return this._maxNode(this.root);
};
let tree = new BinarySearchTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

tree.inOrderTraverse(printNode);
console.log(tree.min());
console.log(tree.max());
/*
A -> B -> C -> D -> E -> F -> G -> H -> I -> end
A
I
*/
```
- 특정 값 있는지 찾기
```js
// 재귀로 트리를 순회하며 값을 만족하는 노드 탐색
BinarySearchTree.prototype._searchNode = function (node, value) {
  if (node === null) {
    return false;
  }
  if (node.value === value) {
    return true;
  } else if (node.value > value) {
    return this._searchNode(node.left, value);
  } else if (node.value < value) {
    return this._searchNode(node.right, value);
  }
};
// value 노드 탐색
BinarySearchTree.prototype.search = function (value) {
  return this._searchNode(this.root, value);
};
let tree = new BinarySearchTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree.root);

console.log(tree.search("J") ? "Found J" : "Not found J");
console.log(tree.search("I") ? "Found I" : "Not found I");
/*
Node {
  value: 'F',
  left: Node {
    value: 'B',
    left: Node { value: 'A', left: null, right: null },
    right: Node { value: 'D', left: [Node], right: [Node] }
  },
  right: Node {
    value: 'G',
    left: null,
    right: Node { value: 'I', left: [Node], right: null }
  }
}
Not found J
Found I
*/
```

```js
// 반복문으로 트리를 순회하며 최솟값을 보유한 노드 탐색
BinarySearchTree.prototype._findMinNode = function (node) {
  while (node && node.left !== null) node = node.left;

  return node;
};
// 재귀로 트리를 순회하며 값을 만족하는 노드를 찾고 삭제
BinarySearchTree.prototype._removeNode = function (node, value) {
  if (node === null) return null;
  if (node.value === value) {
    // case 1: leaf node
    if (node.left === null && node.right === null) {
      node = null;
    }
    // case 2: 1 child node
    else if (node.left === null) {
      node = node.right;
    } else if (node.right === null) {
      node = node.left;
    }
    // case 3: 2 child node
    else {
      let aux = this._findMinNode(node.right);
      node.value = aux.value;
      node.right = this._removeNode(node.right, aux.value);
    }
  } else if (node.value > value) {
    node.left = this._removeNode(node.left, value);
  } else if (node.value < value) {
    node.right = this._removeNode(node.right, value);
  }
  return node;
};

BinarySearchTree.prototype.remove = function (value) {
  this.root = this._removeNode(this.root, value);
};

let tree = new BinarySearchTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree.root);

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

tree.inOrderTraverse(printNode);
tree.remove("H");
tree.inOrderTraverse(printNode);
tree.remove("D");
tree.inOrderTraverse(printNode);
tree.remove("F");
tree.inOrderTraverse(printNode);

console.log(tree.root);
/*
Node {
  value: 'F',
  left: Node {
    value: 'B',
    left: Node { value: 'A', left: null, right: null },
    right: Node { value: 'D', left: [Node], right: [Node] }
  },
  right: Node {
    value: 'G',
    left: null,
    right: Node { value: 'I', left: [Node], right: null }
  }
}
A -> B -> C -> D -> E -> F -> G -> H -> I -> end
A -> B -> C -> D -> E -> F -> G -> I -> end
A -> B -> C -> E -> F -> G -> I -> end
A -> B -> C -> E -> G -> I -> end
Node {
  value: 'G',
  left: Node {
    value: 'B',
    left: Node { value: 'A', left: null, right: null },
    right: Node { value: 'E', left: [Node], right: null }
  },
  right: Node { value: 'I', left: null, right: null }
}
*/
```