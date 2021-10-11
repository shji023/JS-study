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
// for (let i = 0; i < input.length; i++) {
//   console.log(`#${i + 1} ${answer(input[i])}`);
// }

// for (let i = 0; i < input.length; i++) {
//   process.stdout.write(`#${i + 1} `);
//   console.log(answer(input[i][0], input[i][1]));
// }

// for (let i = 0; i < input.length; i++) {
//   process.stdout.write(`#${i + 1} `);
//   console.log(answer(input[i][0], input[i][1], input[i][2]));
// }

/*
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2], input[i][3]));
}
*/
