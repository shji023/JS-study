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
//데이터 추가
PriorityQueue.prototype.enqueue = function (data, priority) {
  let element = new Element(data, priority);
  let added = false;

  for (let i = 0; i < this.array.length; i++) {
    if (element.priority < this.array[i].priority) {
      this.array.splice(i, 0, element);
      added = true;
      break;
    }
  }
  if (!added) {
    this.array.push(element);
  }
  return this.array.length;
};
PriorityQueue.prototype.dequeue = function () {
  return this.array.shift();
};
PriorityQueue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0].data;
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

/*
let input = [3, 5, 6];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2], input[i][3]));
}
*/
