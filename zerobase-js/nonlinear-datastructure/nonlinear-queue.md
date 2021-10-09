## 우선순위 큐(Priority Queue)
- 우선순위를 고려하여 먼저 넣은 데이터가 먼저 나오는 FIFO기반의 선형 자료구조
- 우선순위 정렬 방식: <b>배열 기반</b>, 연결리스트 기반, 힙기반 등의 정렬 방식 존재
- 이름 밑의 숫자: 우선순위
![pq](https://user-images.githubusercontent.com/60960130/136574259-6bfc3edd-5e63-4e25-822c-ae80ef30f49f.png)
```js
//생성자 함수
function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}
// Element관리를 위한 생성자 함수
function PriorityQueue() {
  this.array = [];
}
// data부분들만 filter
PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((element) => element.data);
};
// 비어있는지 확인
PriorityQueue.prototype.isEmpty = function () {
  return this.array.length == 0;
};
console.log(Object.getOwnPropertyDescriptors(Element.prototype));
console.log(Object.getOwnPropertyDescriptors(PriorityQueue.prototype));
/*
{
  constructor: {
    value: [Function: Element],
    writable: true,
    enumerable: false,
    configurable: true
  }
}
{
  constructor: {
    value: [Function: PriorityQueue],
    writable: true,
    enumerable: false,
    configurable: true
  },
  getBuffer: {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  },
  isEmpty: {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  } // getBuffer와 isEmpty할당된 것을 알 수 있음
}
*/
```

```js
//데이터 추가. push만 하는것과 같이 간단하지 않음
PriorityQueue.prototype.enqueue = function (data, priority) {
  let element = new Element(data, priority);
  let added = false; // 사이사이에 들어갈 건지 아니면 끝에 들어갈 것인지 구분해주는 역할
  // 우선 순위를 만족하면서 들어갈 곳이 있는지 체크
  for (let i = 0; i < this.array.length; i++) {
    if (element.priority < this.array[i].priority) { // 기존 우선순위랑 현재 들어온 우선순위랑 비교
      this.array.splice(i, 0, element); // i번째에 element삽입 (0을 집어넣으면 기존에 있엇던것을 삭제 하지 않음)
      added = true;
      break;
    }
  }
  if (!added) {
    this.array.push(element); // added된게 없으면 push
  }
  return this.array.length;
};
// 데이터 삭제 기존과 동일
PriorityQueue.prototype.dequeue = function () {
  return this.array.shift();
};
let pq = new PriorityQueue();
pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);
console.log(pq);

pq.enqueue("Tom", 1);
pq.enqueue("John", 3);
console.log(pq);

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);
/*
PriorityQueue {
  array: [
    Element { data: 'Alice', priority: 1 },
    Element { data: 'Bob', priority: 2 }
  ]
}
PriorityQueue {
  array: [
    Element { data: 'Alice', priority: 1 },
    Element { data: 'Tom', priority: 1 },
    Element { data: 'Bob', priority: 2 },
    Element { data: 'John', priority: 3 }
  ]
}
Element { data: 'Alice', priority: 1 }
Element { data: 'Tom', priority: 1 }
PriorityQueue {
  array: [
    Element { data: 'Bob', priority: 2 },
    Element { data: 'John', priority: 3 }
  ]
}
*/
```
- front, size, clear 기존 큐랑 동일
```js
PriorityQueue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0].data; // array의 데이터 반환
};
PriorityQueue.prototype.size = function () {
  return this.array.length;
};
PriorityQueue.prototype.clear = function () {
  this.array = [];
};
let pq = new PriorityQueue();
pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);
pq.enqueue("Tom", 1);
pq.enqueue("John", 3);
console.log(pq.getBuffer());

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);

console.log(pq.front());
console.log(pq.size());
/*
[ 'Alice', 'Tom', 'Bob', 'John' ]
Element { data: 'Alice', priority: 1 }
Element { data: 'Tom', priority: 1 }
PriorityQueue {
  array: [
    Element { data: 'Bob', priority: 2 },
    Element { data: 'John', priority: 3 }
  ]
}
Bob
2
*/
```

## 원형 큐(Circular Queue)
- 원형 형태를 가지며, 먼저 넣은 데이터가 먼저 나오는 FIFO기반의 선형 자료구조
![cq](https://user-images.githubusercontent.com/60960130/136589884-92903b34-8a2e-4fed-900c-423a6d9b85b3.png)
```js
function CircularQueue(array = [], size = 5) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};

CircularQueue.prototype.isEmpty = function () {
  return this.length == 0;
};
CircularQueue.prototype.isFull = function () {
  return this.length == this.size;
};

let cq = new CircularQueue([1, 2, 3]);
console.log(cq);
console.log(cq.isEmpty());
console.log(cq.isFull());
console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));
/*
CircularQueue {
  array: [ 1, 2, 3 ],
  size: 5,
  length: 3,
  head: 0,
  tail: 3
}
false
false
{
  constructor: {
    value: [Function: CircularQueue],
    writable: true,
    enumerable: false,
    configurable: true
  },
  getBuffer: {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  },
  isEmpty: {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  },
  isFull: {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/
```
```js
CircularQueue.prototype.enqueue = function (element) {
  if (this.isFull()) return false; // 꽉 차있는지 우선 체크

  this.array[this.tail % this.size] = element; // 처음 생성한 사이즈 5이상의 값은 설정 되지 않도록 모듈러 연산
  //this.array[this.tail] = element; => 개선, 값의 증가 부분에서 모듈러 처리를 바로 해줌으로써 특정 사이즈 값 이상으로 증가하지 않도록 설정
  this.tail++; // this.tail = (this.tail + 1) % this.size => 개선
  this.length++;

  return true;
};
CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined; // 비어있는지 우선 체크

  let element = this.array[this.head % this.size];
  delete this.array[this.head % this.size];
  //let element = this.array[this.head]; => 개선
  // delete this.array[this.head]; => 개선
  this.head++; // this.head = (this.head + 1) % this.size; => 개선
  this.length--;

  return element;
};

let cq = new CircularQueue([1, 2, 3, 4]);
console.log(cq);

cq.enqueue(5);
cq.enqueue(6); // 1이 남아있고 6이 무시됨
console.log(cq);
console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);

cq.enqueue(6);
console.log(cq);
/*
CircularQueue {
  array: [ 1, 2, 3, 4 ],
  size: 5,
  length: 4,
  head: 0,
  tail: 4
}
CircularQueue {
  array: [ 1, 2, 3, 4, 5 ],
  size: 5,
  length: 5,
  head: 0,
  tail: 5
}
1
2
CircularQueue {
  array: [ <2 empty items>, 3, 4, 5 ],
  size: 5,
  length: 3,
  head: 2,
  tail: 5
}
CircularQueue {
  array: [ 6, <1 empty item>, 3, 4, 5 ],
  size: 5,
  length: 4,
  head: 2,
  tail: 6
}
*/
/* 개선
CircularQueue {
  array: [ <2 empty items>, 3, 4, 5 ],
  size: 5,
  length: 3,
  head: 2,
  tail: 0 //개선
}
CircularQueue {
  array: [ 6, <1 empty item>, 3, 4, 5 ],
  size: 5,
  length: 4,
  head: 2,
  tail: 1 //개선
}

*/
```

```js

CircularQueue.prototype.front = function () {
  return this.length == 0 ? undefined : this.array[this.head];
};

CircularQueue.prototype.dataSize = function () {
  return this.length;
};

CircularQueue.prototype.clear = function (size = DEFAULT_SIZE) {
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
};

let cq = new CircularQueue([1, 2, 3, 4]);
console.log(cq);

cq.enqueue(5);
cq.enqueue(6);
console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);

cq.enqueue(6);
console.log(cq);
console.log(cq.front());
console.log(cq.dataSize());

cq.clear(10);
console.log(cq);
/*
CircularQueue {
  array: [ 1, 2, 3, 4 ],
  size: 5,
  length: 4,
  head: 0,
  tail: 4
}
1
2
CircularQueue {
  array: [ <2 empty items>, 3, 4, 5 ],
  size: 5,
  length: 3,
  head: 2,
  tail: 5
}
CircularQueue {
  array: [ 6, <1 empty item>, 3, 4, 5 ],
  size: 5,
  length: 4,
  head: 2,
  tail: 6
}
3
4
CircularQueue { array: [], size: 10, length: 0, head: 0, tail: 0 }
*/
```

## 덱(Deque)
- Double-EndedQueue약자로, 삽입과 삭제가 양끝에서 모두 발생할 수 있는 선형 자료구조
![dq](https://user-images.githubusercontent.com/60960130/136660773-57ebf823-4a7a-4f48-8fc3-eeec966fa9fc.png)
```js
function Deque(array = []) {
  this.array = array;
}
Deque.prototype.getBuffer = function () {
  return this.array.slice();
};
Deque.prototype.isEmpty = function () {
  return this.array.length == 0;
};

let dq = new Deque([1, 2, 3]);
console.log(dq);

let data = dq.getBuffer();
console.log(data === dq.array);
console.log(data);

console.log(dq.isEmpty());
console.log(Object.getOwnPropertyDescriptors(Deque.prototype));
/*
Deque { array: [ 1, 2, 3 ] }
false
[ 1, 2, 3 ]
false
{
  constructor: {
    value: [Function: Deque],
    writable: true,
    enumerable: false,
    configurable: true
  },
  getBuffer: {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  },
  isEmpty: {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/
```
```js
Deque.prototype.pushFront = function (element) {
  return this.array.unshift(element);
};

Deque.prototype.popFront = function () {
  return this.array.shift();
};
Deque.prototype.pushBack = function (element) {
  return this.array.push(element);
};
Deque.prototype.popBack = function () {
  return this.array.pop();
};

let dq = new Deque([1, 2, 3]);
console.log(dq);

dq.pushFront(0);
dq.pushBack(4);
console.log(dq);

console.log(dq.popFront());
console.log(dq.popBack());
console.log(dq);
/*
Deque { array: [ 1, 2, 3 ] }
Deque { array: [ 0, 1, 2, 3, 4 ] }
0
4
Deque { array: [ 1, 2, 3 ] }
*/
```

```js
Deque.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0];
};
Deque.prototype.back = function () {
  return this.array.length == 0 ? undefined : this.array[this.array.length - 1];
};
Deque.prototype.size = function () {
  return this.array.length;
};

Deque.prototype.clear = function () {
  this.array = [];
};

let dq = new Deque([1, 2, 3]);
console.log(dq);

console.log(dq.front());
console.log(dq.back());
console.log(dq.size());

dq.clear();
console.log(dq);
/*
Deque { array: [ 1, 2, 3 ] }
1
3
3
Deque { array: [] }
*/
```