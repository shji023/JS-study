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

## 