## 힙(Heap)

- 최댓값 혹은 최솟값을 빠르게 찾기 위해 완전 이진트리 형태로 연산을 수행하는 자료구조
- 속성
  - 정렬: 각 노드의 값은 자식 노드가 가진 값보다 작거나 혹은 큰 순서대로 정렬
  - 형태: 트리의 형태는 완전이진트리(complete binary tree) 모양
- 종류
  - 최소 힙(Min Heap): 부모 노드의 값이 자식 노드의 값보다, 작거나 같은 완전 이진 트리
  - 최대 힙(Max Heap): 부모 노드의 값이 자식 노드의 값보다, 크거나 같은 완전 이진 트리

![heap](https://user-images.githubusercontent.com/60960130/137146083-4f85254e-d3c5-4381-91ca-24ef24b3f61a.png)
- 힙 구현
  - 완전이진트리 성질을 만족하기 때문에 1차원 배열로 표현 가능
  ```
  현재 노드 : N 
  부모 노드 : (N - 1) / 2
  왼쪽 자식 노드 : (N * 2) + 1
  오른쪽 자식 노드 : (N * 2) + 2
  ```
- 최소힙
```js
// 배열 내 요소를 저장하기 위한 생성자
function Heap() {
  this.items = [];
}

// 배열 내 두 요소 위치를 변경
Heap.prototype.swap = function (index1, index2) {
  let tmp = this.items[index1];
  this.items[index1] = this.items[index2];
  this.items[index2] = tmp;
};

// 부모 노드의 위치 반환
Heap.prototype.parentIndex = function (index) {
  return Math.floor((index - 1) / 2);
};

// 왼쪽 자식 노드의 위치 반환
Heap.prototype.leftChildIndex = function (index) {
  return index * 2 + 1;
};

// 오른쪽 자식 노드의 위치 반환
Heap.prototype.rightChildIndex = function (index) {
  return index * 2 + 2;
};

// 부모 노드의 요소 값 반환
Heap.prototype.parent = function (index) {
  return this.items[this.parentIndex(index)];
};

// 왼쪽 자식 노드의 요소 값 반환
Heap.prototype.leftChild = function (index) {
  return this.items[this.leftChildIndex(index)];
};

// 오른쪽 자식 노드의 요소 값 반환
Heap.prototype.rightChild = function (index) {
  return this.items[this.rightChildIndex(index)];
};

// 현재 졍렬된 최소/최대 요소값 반환
Heap.prototype.peek = function () {
  return this.items[0];
};

// 현재 배열 내 크기 반환
Heap.prototype.size = function () {
  return this.items.length;
};

// 신규 노드 추가
Heap.prototype.insert = function (item) {
  this.items[this.size()] = item;
  this.bubbleUp();
};
// 추가된 노드 위치 정렬
Heap.prototype.bubbleUp = function () {
  let index = this.size() - 1;
  while (this.parent(index) && this.parent(index) > this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
};

let minHeap = new Heap();

minHeap.insert(90);
minHeap.insert(15);
minHeap.insert(10);
minHeap.insert(7);
minHeap.insert(12);
minHeap.insert(2);
minHeap.insert(8);
console.log(minHeap);
minHeap.insert(3);

console.log(minHeap);
/*
Heap { items: [
     2, 10, 7, 90,
    12, 15, 8
  ] }
Heap { items: [
     2,  3, 7, 10,
    12, 15, 8, 90
  ] }
*/
```

```js
// root 노드 반환 및 삭제
Heap.prototype.extract = function () {
  let item = this.items[0];
  this.items[0] = this.items[this.size() - 1];
  this.items.pop();
  this.bubbleDown();
  return item;
};

//대체된 root노드 위치 정렬
Heap.prototype.bubbleDown = function () {
  let index = 0;
  while (
    this.leftChild(index) && // leftchild먼저 보는 이유는 완전 이진 트리이기에 leftchild있으면 rightchild도 있음
    (this.leftChild(index) < this.items[index] ||
      this.rightChild(index) < this.items[index])
  ) {
    let childIndex = this.leftChildIndex(index);
    if (
      this.rightChild(index) &&
      this.rightChild(index) < this.items[childIndex]
    ) {
      childIndex = this.rightChildIndex(index);
    }
    this.swap(childIndex, index);
    index = childIndex;
  }
};

let minHeap = new Heap();

minHeap.insert(90);
minHeap.insert(15);
minHeap.insert(10);
minHeap.insert(7);
minHeap.insert(12);
minHeap.insert(2);
minHeap.insert(8);
minHeap.insert(3);

console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());
console.log(minHeap.extract());
/*
2
3
7
8
10
12
15
90
*/
```
- 최대힙
  - bubbleUp메소드와 bubbleDown메소드의 부등호만 반대로 바꿔주기 
```js

let maxHeap = new Heap();

maxHeap.insert(90);
maxHeap.insert(15);
maxHeap.insert(10);
maxHeap.insert(7);
maxHeap.insert(12);
maxHeap.insert(2);
maxHeap.insert(8);
maxHeap.insert(3);

console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
console.log(maxHeap.extract());
/*
90
15
12
10
8
7
3
2
*/
```