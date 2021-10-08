## 스택 (Stack)
- 나중에 넣은 데이터가 먼저 나오는 LIFO(Last in First Out)기반의 선형 자료 구조

```js
// 생성자 함수
function Stack(array) {
  this.array = array ? array : [];
}
// 객체 내 데이터 첫 반환
Stack.prototype.getBuffer = function () {
  return this.array.slice();
};
// 객체 내 데이터 있는지 없는지
Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
};

let stack = new Stack([1, 2, 3]);

let data = stack.getBuffer();
data === stack.array; // false
data; // [1, 2, 3]
stack.isEmpty(); // false
Object.getOwnPropertyDescriptor(Stack.prototype);
```

```js
// 데이터 추가
Stack.prototype.push = function (element) {
  return this.array.push(element);
};
// 데이터 삭제
Stack.prototype.pop = function () {
  return this.array.pop();
};
// 가장 끝 데이터 반환
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};
// 스택 내 데이터 개수 확인
Stack.prototype.size = function () {
  return this.array.length;
};

let stack = new Stack([1, 2]);

stack; // [1, 2]
stack.push(3);
stack; // [1, 2, 3]

stack.pop(); // 3
stack.pop(); // 2
stack.peek(); // 1
stack.size(); // 1
```

```js
// 데이터 위치 값 조회
Stack.prototype.indexOf = function (element, position = 0) {
  /*case 1*/
  //return this.array.indexOf(element, position);
  /*case 2*/
  for (let i = position; i < element; i++) {
    if (element == this.array[i]) return i;
  }
  return -1;
};
//데이터 존재 여부 확인
Stack.prototype.includes = function (element, position = 0) {
  /*case 1*/
  //return this.array.includes(element, position);
  /*case 2*/
  for (let i = position; i < element; i++) {
    if (element == this.array[i]) return true;
  }
  return false;
};
let stack = new Stack([1, 2, 3]);

stack.indexOf(1); // 0
stack.indexOf(1, 2); // -1
stack.includes(1); // true
stack.includes(1, 2); // false
```

## 큐 (Queue)
- 먼저 넣은 데이터가 먼저 나오는 FIFO 기반의 선형 자료 구조

```js
// 생성자 함수 초기 데이터 설정
function Queue(array) {
  this.array = array ? array : [];
}
// 객체 내 데이터 첫 반환
Queue.prototype.getBuffer = function () {
  return this.array.slice();
};
// 객체 내 데이터 있는지 없는지
Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

let queue = new Queue([1, 2, 3]);

let data = queue.getBuffer();
data === queue.array; // false
data; // [1, 2, 3]
staqueueck.isEmpty(); // false
Object.getOwnPropertyDescriptor(Queue.prototype);
```

```js
// 데이터 추가
Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};
// 데이터 삭제
Queue.prototype.dequeue = function () {
  return this.array.shift();
};

let queue = new Queue([1, 2]);

queue.enqueue(3); 
queue.enqueue(4);
queue; // Queue { array: [1, 2, 3, 4]}

queue.dequeue(); // 1
queue.dequeue(); // 2
queue; // Queue { array: [3, 4]}
```

```js
// 제일 앞 데이터
Queue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0];
};
// 객체 사이즈
Queue.prototype.size = function () {
  return this.array.length;
};
// 객체 다 비우기
Queue.prototype.clear = function () {
  this.array = [];
};
let queue = new Queue([1, 2, 3, 4]);

queue.dequeue();
queue.front(); // 2
queue; // Queue { array: [2, 3, 4]}

queue.size(); // 3
queue.clear();
queue; // Queue { array: []}
queue.size(); // 0
```

## 큐 최적화
- 방식 개선: enqueue/dequeue 방식을 push/shift에서 index로 변경 (shift는 O(n)이고 index는 O(1)이기 떄문)
```js
function Queue(array) {
  this.array = array ? array : [];
  this.tail = array ? array.length : 0;
  this.head = 0;
}
Queue.prototype.enqueue = function (element) {
  return (this.array[this.tail++] = element);
};
Queue.prototype.dequeue = function () {
  if (this.tail === this.head) return undefined;
  let element = this.array[this.head];
  delete this.array[this.head++];
  return element;
};
let queue = new Queue([1, 2]);
console.log(queue); // Queue { array: [ 1, 2 ], tail: 2, head: 0 }

queue.enqueue(3);
queue.enqueue(4);
console.log(queue); //Queue { array: [ 1, 2, 3, 4 ], tail: 4, head: 0 }

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue); // Queue { array: [ <2 empty items>, 3, 4 ], tail: 4, head: 2 }
```

### benchmark
- 성능 측정
  - enqueue/dequeue 성능 비교: push/shift (queue1), index(queue2)
```js
function Queue_1(array) {
  this.array = array ? array : [];
}
Queue_1.prototype.enqueue = function (element) {
  return this.array.push(element);
};
Queue_1.prototype.dequeue = function () {
  return this.array.shift();
};

function Queue_2(array) {
  this.array = array ? array : [];
  this.tail = array ? array.length : 0;
  this.head = 0;
}
Queue_2.prototype.enqueue = function (element) {
  return (this.array[this.tail++] = element);
};
Queue_2.prototype.dequeue = function () {
  if (this.tail === this.head) return undefined;
  let element = this.array[this.head];
  delete this.array[this.head++];
  return element;
};
let queue_1 = new Queue_1();
let queue_2 = new Queue_2();
const count = 100000;

function benchmark(queue, enqueue) {
  let start = Date.now();
  for (let i = 0; i < count; i++) {
    enqueue ? queue.enqueue() : queue.dequeue();
  }
  return Date.now() - start;
}
console.log("enqueue queue_1" + benchmark(queue_1, 1) + "ms");
console.log("enqueue queue_2" + benchmark(queue_2, 1) + "ms");

console.log("dequeue queue_1" + benchmark(queue_1, 0) + "ms");
console.log("dequeue queue_2" + benchmark(queue_2, 0) + "ms");
/*
enqueue queue_112ms
enqueue queue_213ms -> 왜 결과가 성능이 더 안좋지
dequeue queue_19502ms
dequeue queue_215ms
*/
```