// 큐 만들기
function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

Queue.prototype.dequeue = function () {
  let dq = this.array.shift();
  return dq === undefined ? -1 : dq;
};

Queue.prototype.size = function () {
  return this.array.length;
};

Queue.prototype.empty = function () {
  return this.array.length === 0 ? 1 : 0;
};

Queue.prototype.front = function () {
  return this.array.length === 0 ? -1 : this.array[0];
};

Queue.prototype.back = function () {
  return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
};

function answer(cmds) {
  let result = [];
  let queue = new Queue();
  for (let i = 0; i < cmds.length; i++) {
    let cmd = cmds[i].split(" ")[0];

    switch (cmd) {
      case "enqueue":
        queue.enqueue(Number(cmds[i].split(" ")[1]));
        break;
      case "dequeue":
        result.push(queue.dequeue());
        break;
      case "front":
        result.push(queue.front());
        break;
      case "back":
        result.push(queue.back());
        break;
      case "size":
        result.push(queue.size());
        break;
      case "empty":
        result.push(queue.empty());
        break;
    }
  }
  return result;
}
let input = [
  ["enqueue 1", "enqueue 2", "dequeue", "dequeue", "dequeue"],
  [
    "enqueue 3",
    "enqueue 4",
    "enqueue 5",
    "enqueue 6",
    "front",
    "back",
    "dequeue",
    "size",
    "empty",
  ],
  [
    "enqueue 7",
    "enqueue 8",
    "front",
    "back",
    "size",
    "empty",
    "dequeue",
    "dequeue",
    "dequeue",
    "size",
    "empty",
    "dequeue",
    "enqueue 9",
    "empty",
    "front",
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 카드 뽑기
function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

function answer(n) {
  let result = [];
  let queue = new Queue();
  for (let i = 1; i < n + 1; i++) {
    queue.enqueue(i);
  }
  while (queue.array.length != 0) {
    result.push(queue.dequeue());
    if (queue.array.length != 0) {
      // 무한반복 막는 조건
      queue.enqueue(queue.dequeue());
    }
  }
  return result;
}
let input = [4, 7, 10];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 프린터 출력
function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (element) {
  this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.front = function () {
  return this.array[0];
};

Queue.prototype.max = function () {
  return Math.max(...this.array);
};

function answer(priorities, select) {
  let result = -1;
  let valueQueue = new Queue(); // index
  let priorityQueue = new Queue();

  for (let i = 0; i < priorities.length; i++) {
    valueQueue.enqueue(i);
    priorityQueue.enqueue(priorities[i]);
  }
  let count = 0;
  while (true) {
    // 출력
    if (priorityQueue.front() === priorityQueue.max()) {
      count++;
      // 찾고자 하는 문서 일 경우
      if (valueQueue.front() === select) {
        result = count;
        break;
      } else {
        // select랑 같지 않지만 제일 큰거 제거
        valueQueue.dequeue();
        priorityQueue.dequeue();
      }
    }
    // 순서 변경
    else {
      valueQueue.enqueue(valueQueue.dequeue());
      priorityQueue.enqueue(priorityQueue.dequeue());
    }
  }
  return result;
}
let input = [
  [[3], 0],
  [[3, 4, 5, 6], 2],
  [[1, 1, 5, 1, 1, 1], 0],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// 대표선출 - 다시
function CircularQueue(size) {
  this.array = new Array(size);
  this.size = this.array.length;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
}
CircularQueue.prototype.enqueue = function (element) {
  this.length++;
  this.array[this.tail++ % this.size] = element;
};

CircularQueue.prototype.dequeue = function () {
  this.length--;
  return this.array[this.head++ % this.size];
};

function answer(n, m, k) {
  let result = [];
  // 원탁에 후보 번호 세팅 enqueue
  let cq = new CircularQueue(n);
  for (let i = 1; i <= n; i++) {
    cq.enqueue(i);
  }

  // 첫번째 후보 제거 노드 위치로 설정
  cq.tail = cq.head = (n + m - 1) % n;

  // k만큼 움직이면서 대표 후보를 제거 dequeue
  // 제거된 번호는 result에 추가
  let count;
  result.push(cq.dequeue());
  while (cq.length != 0) {
    count = k - 1;
    while (count--) {
      cq.enqueue(cq.dequeue());
    }
    result.push(cq.dequeue());
  }

  return result;
}
let input = [
  [8, 2, 3],
  [10, 2, 3],
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}

// 데크 만들기
function Deque(array = []) {
  this.array = array;
}

Deque.prototype.push_front = function (element) {
  return this.array.unshift(element);
};

Deque.prototype.push_back = function (element) {
  return this.array.push(element);
};

Deque.prototype.pop_front = function () {
  let ret = this.array.shift();
  return ret === undefined ? -1 : ret;
};

Deque.prototype.pop_back = function () {
  let dq = this.array.pop();
  return dq === undefined ? -1 : dq;
};

Deque.prototype.front = function () {
  return this.array.length === 0 ? -1 : this.array[0];
};

Deque.prototype.back = function () {
  return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
};

Deque.prototype.size = function () {
  return this.array.length;
};

Deque.prototype.empty = function () {
  return this.array.length === 0 ? 1 : 0;
};

function answer(cmds) {
  let result = [];

  let dq = new Deque();
  for (let i = 0; i < cmds.length; i++) {
    let cmd = cmds[i].split(" ")[0];

    switch (cmd) {
      case "push_front":
        dq.push_front(Number(cmds[i].split(" ")[1]));
        break;
      case "push_back":
        dq.push_back(Number(cmds[i].split(" ")[1]));
        break;
      case "pop_front":
        result.push(dq.pop_front());
        break;
      case "pop_back":
        result.push(dq.pop_back());
        break;
      case "size":
        result.push(dq.size());
        break;
      case "empty":
        result.push(dq.empty());
        break;
      case "pop_front":
        result.push(dq.front());
        break;
      case "pop_back":
        result.push(dq.back());
        break;
    }
  }
  return result;
}
let input = [
  ["push_back 1", "push_front 2", "pop_front", "pop_back", "pop_front"],
  [
    "push_back 3",
    "push_front 4",
    "push_back 5",
    "push_front 6",
    "front",
    "back",
    "pop_front",
    "size",
    "empty",
  ],
  [
    "push_back 7",
    "push_front 8",
    "front",
    "back",
    "size",
    "empty",
    "pop_front",
    "pop_back",
    "pop_front",
    "size",
    "empty",
    "pop_back",
    "pop_front 9",
    "empty",
    "front",
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
