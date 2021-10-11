## 프로토타입
- 어떠한 객체가 만들어지기 위해 객체의 모태가 되는 원형
- 자바스크립트는 일반적이 객체 지향 언어와는 다르게, 프로토타입을 이용한 cloning을 통해 새로운 객체 생성
- 일반적인 객체 생성 방식: 속성은 생성자, 메서도는 프로토타입에서 정의
```js
//생성자 
fuction Person(name, age) {
  this.name = name;
  this.age = age;
}
//속성값, .isAdult는 매핑된 함수
Person.prototype.isAdult = function () {
  return this.age > 18;
}
//p1,p2 프로토타입을 거쳐서 생성자에 접근
const p1 = new Person("bob", 25);
const p2 = new Person("alice", 16);
// 매핑된 함수를 통해 프로토타입으로
p1.isAdult() // true
p2.isAdult() // false
```

## 연결리스트
![link](https://user-images.githubusercontent.com/60960130/135757988-e07a3070-bf52-46f1-abc2-b89ffb00c835.png)
- 각 노드가 데이터와 포인터를 가지며, <b>한 줄</b>로 연결되어 있는 방식으로 데이터를 저장하는 자료구조
```js
// Node() 생성자: data와 poing를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

//LinkedList() head와 length, 노드들의  연결
function LinkedList() {
  this.head = null;
  this.length = 0;
}
// 링크트 리스트 사이즈 노드 개수 파악
LinkedList.prototype.size = function () {
  return this.length;
};
// 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let ll = new LinkedList();
console.log(ll);

ll.head = new Node(123);
ll.length++;
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log(ll);

/*
LinkedList { head: null, length: 0 }
LinkedList { head: Node { data: 123, next: null }, length: 1 }
LinkedList {
  head: Node { data: 123, next: Node { data: 456, next: null } },
  length: 2
}
*/
```
```js
// 노드 출력 코드
LinkedList.prototype.printNode = function () {
  //헤드를 첫번째로 세팅 다음 노드 다음 노드..
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data}=>`); // 한줄에 표현
  }
  console.log("null");
};
LinkedList.prototype.append = function (value) {
  let node = new Node(value),
    current = this.head;
  // 아무것도 없으면 처음에 헤드 가리킴
  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    // 끝 지점에 노드를 넣어줌
    current.next = node;
  }
  this.length++;
};

let ll = new LinkedList();
console.log(ll);

ll.append(1);
ll.append(10);
ll.append(100);
ll.printNode();
console.log(ll.size());
/*
LinkedList { head: null, length: 0 }
1=>10=>100=>null
3
*/
```
```js
LinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }
  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;
  if (position == 0) {
    node.next = current;
    this.head = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
  }
  this.length++;
  return true;
};

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.printNode(); // 앞쪽에 차례로 추가됨

ll.insert(2, 1); // 2를 index 1에
ll.insert(3, 3);
ll.printNode();
console.log(ll.size());
/*
100=>10=>1=>null
100=>2=>10=>3=>1=>null
5
*/
```
```js
LinkedList.prototype.remove = function (value) {
  let current = this.head, // current는 항상 최초의 노드
  prev = current;

  while (current.data != value && current.next != null) {
    // current내의 데이터가 value와 같은지, 같지 않으면 계속 봄, 연결리스트가 끝나기 전까지
    prev = current;
    current = current.next;
  }
  if (current.data != value) {
    return null; // 값을 못찾았으면 return null
  }
  if (current === this.head) {
    // 값을 찾았으면 현재 헤드와 동일 한가?
    this.head = current.next;
  } else {
    // 아니라면 이전 객체의 next를 current의 next로. current가 삭제 되더라도 연결성은 보장
    prev.next = current.next;
  }
  this.length--;
  return current.data;
};

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.printNode();

console.log(ll.remove(1000));
ll.printNode();
console.log(ll.remove(1));
ll.printNode();
console.log(ll.remove(2));
ll.printNode();
console.log(ll.remove(100));
ll.printNode();
console.log(ll.size());
/*
100=>10=>1=>null
null
100=>10=>1=>null
1
100=>10=>null
null
100=>10=>null
100
10=>null
1
*/
```
```js
LinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    //position이 연결리스트 길이의 범위를 넘어갔을 경우
    return null;
  }
  let current = this.head,
    index = 0,
    prev;

  if (position == 0) {
    this.head = current.next;
  } else {
    while (index++ < position) {
      // index 만큼 position위치를 증갓시킴
      prev = current;
      current = current.next;
    }
    prev.next = current.next; // 위의 조건 만족 시 해당index node삭제
  }
  this.length--;
  return current.data;
};
let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();

console.log(ll.removeAt(1000));
ll.printNode();
console.log(ll.removeAt(4));
ll.printNode();
console.log(ll.removeAt());
ll.printNode();
console.log(ll.removeAt(1));
ll.printNode();
console.log(ll.size());
```
```js

LinkedList.prototype.indexOf = function (value) {
  let current = this.head,
    index = 0;

  while (current != null) {
    // current를 만나지 못했을 경우
    if (current.data === value) {
      // value를 발견했을 경우
      return index;
    }
    index++;
    current = current.next;
  }
  return -1;
};
//indexOf + removeAt
LinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();

console.log(ll.indexOf(1000));
console.log(ll.indexOf(1));
console.log(ll.indexOf(100));
console.log(ll.indexOf(10));

console.log(ll.remove2(1000));
ll.printNode();
console.log(ll.remove2(1));
ll.printNode();
console.log(ll.remove2(2));
ll.printNode();
console.log(ll.remove2(100));
ll.printNode();
console.log(ll.size());
```

## 이중 연결 리스트
- 각 노드가 데이터와 포인터를 가지며, 두 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조 
![double](https://user-images.githubusercontent.com/60960130/136184674-e2cdb2d0-1e24-45e5-9572-ebcecbfa271d.png)

```js
// data, next, prev 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null; // prev 추가
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null; // tail 추가
  this.length = 0;
}
DoubleLinkedList.prototype.size = function () {
  return this.length;
};
DoubleLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};
let dll = new DoubleLinkedList();
let node;
console.log(dll);

node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll);

node = new Node(456);
dll.tail.next = node;
node.prev = dll.tail;
dll.tail = node;
dll.length = node;
dll.length++;
console.log(dll);
/*
DoubleLinkedList { head: null, tail: null, length: 0 }
DoubleLinkedList {
  head: Node { data: 123, next: null, prev: null },
  tail: Node { data: 123, next: null, prev: null },
  length: 1
}
DoubleLinkedList {
  head: <ref *1> Node {
    data: 123,
    next: Node { data: 456, next: null, prev: [Circular *1] },
    prev: null
  },
  tail: <ref *2> Node {
    data: 456,
    next: null,
    prev: <ref *1> Node { data: 123, next: [Circular *2], prev: null }
  },
  length: NaN
}
*/
```
```js
DoubleLinkedList.prototype.printNode = function () {
  process.stdout.write("head ->");
  for (let node = this.head; node != null; node = node.next) { // node가 없을 때 까지 순회
    process.stdout.write(`${node.data}->`);
  }
  console.log("null");
};
DoubleLinkedList.prototype.printNodeInverse = function () {
  let temp = [];
  process.stdout.write("null<-");
  for (let node = this.tail; node != null; node = node.prev) {
    temp.push(node.data);
  }
  for (let i = temp.length - 1; i >= 0; i--) {// 거꾸로
    process.stdout.write(`${temp[i]} <-`);
  }
  console.log("tail");
};
DoubleLinkedList.prototype.append = function (value) {
  let node = new Node(value);

  if (this.head === null) { // node가 아무것도 없을 때에는
    this.head = node; // head와 tail 모두 node로 초기화
    this.tail = node;
  } else {
    this.tail.next = node; // append(100) 이면 10의 값이 100을 가리키도록
    node.prev = this.tail; // 100의 이전값(10)을 100이 가르키도록
    this.tail = node; // tail을 을 100 으로
  }
  this.length++;
};

let dll = new DoubleLinkedList();

dll.append(1);
dll.append(10);
dll.append(100);

dll.printNode();
dll.printNodeInverse();

/*
head ->1->10->100->null
null<-1 <-10 <-100 <-tail
*/
```

```js
DoubleLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }
  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;
  if (position === 0) {
    if (this.head === null) { 
      this.head = node;
      this.tail = node;
    } else {
      node.next = current;
      current.prev = node;
      this.head = node; // head가 가리키는 곳을 신규 노드로
    }
  } else if (position === this.length) { // position이 끝일 때
    current = this.tail;
    current.next = node;
    node.prev = current;
    this.tial = node;
  } else {
    while (index++ < position) { // 뒤에 순차로 업데이트
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;

    current.prev = node;
    node.prev = prev;
  }
  this.length++;

  return true;
};
let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.printNode();
dll.printNodeInverse();

dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode();
dll.printNodeInverse();
/*
head ->100->10->1->null
null<-100 <-10 <-1 <-tail
head ->100->2->10->3->1->null
null<-100 <-2 <-10 <-3 <-1 <-tail
*/
```
```js
DoubleLinkedList.prototype.remove = function (value) {
  let current = this.head,
    prev = current;
  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }
  if (current.data != value) {
    return null;
  }
  if (current === this.head) {
    this.head = current.next;
    if (this.length === 1) this.tail = null; // 길이가 1이면 tail은 null
    else this.head.prev = null; 
  } else if (current === this.tail) { // 끝부분일 경우
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    prev.next = current.next;
    current.next.prev = prev;
  }
  this.length--;
  return current.data;
};
let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode();
dll.printNodeInverse();

console.log(dll.remove(1000));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(1));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(2));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(100));
dll.printNode();
dll.printNodeInverse();
/*
head ->100->2->10->3->1->null
null<-100 <-2 <-10 <-3 <-1 <-tail
null
head ->100->2->10->3->1->null
null<-100 <-2 <-10 <-3 <-1 <-tail
1
head ->100->2->10->3->null
null<-100 <-2 <-10 <-3 <-tail
2
head ->100->10->3->null
null<-100 <-10 <-3 <-tail
100
head ->10->3->null
null<-10 <-3 <-tail
*/
```
```js
DoubleLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    //position이 이중연결리스트 길이의 범위를 넘어갔을 경우
    return null;
  }
  let current = this.head,
    index = 0,
    prev;

  if (position === 0) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null; // node가 남았으니 
  } else if (position === this.length - 1) {
    current = this.tail;
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    while (index++ < position) {
      prev.current;
      current = current.next;
    }
    prev.next = current.next;
    current.next.prev = prev;
  }
  this.length--;
  return current.data;
};
let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode();
dll.printNodeInverse();

console.log(dll.removeAt(1000));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(4));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove());
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(1));
dll.printNode();
dll.printNodeInverse();
```
- indexOf와 remove2: 연결리스트와 동일

## 원형 연결 리스트
- 각 노드가 데이터 포인터를 가지며, 원형형태로 연결되어 있는 방식으로 데이터를 저장하는 자료구조
![circular](https://user-images.githubusercontent.com/60960130/136195383-e1b4de25-c3f4-477b-ad46-d0ae19b0f179.png)

```js
function Node(data) {
  this.data = data;
  this.next = null;
}

function CircularLinkedList() {
  this.head = null;
  this.length = 0;
}

CircularLinkedList.prototype.size = function () {
  return this.length;
};

CircularLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

let cll = new CircularLinkedList();
let node;
console.log(cll);

node = new Node(123);
cll.head = node;
node.next = cll.head; // 원래 node의 next는 null 값으로 두었는데 head로 설정, 원형형태로 만들어지도록
cll.length++;
console.log(cll);

node = new Node(456);
node.next = cll.head.next;
cll.head.next = node;
cll.length++;
console.log(cll);
/*
CircularLinkedList { head: null, length: 0 }
CircularLinkedList {
  head: <ref *1> Node { data: 123, next: [Circular *1] },
  length: 1
}
CircularLinkedList {
  head: <ref *1> Node {
    data: 123,
    next: Node { data: 456, next: [Circular *1] }
  },
  length: 2
}
*/
```

```js
CircularLinkedList.prototype.printNode = function () {
  process.stdout.write("head ->");
  if (this.length != 0) {
    process.stdout.write(`${this.head.data}->`);
    for (let node = this.head; node != this.head; node = node.next) {
      process.stdout.write(`${node.data}->`);
    }
  }
  console.log("null");
};

CircularLinkedList.prototype.append = function (value) {
  let node = new Node(value),
    current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != this.head) {
      current = current.next;
    }
    current.next = node;
  }
  node.next = this.head;
  this.length++;
};

let cll = new CircularLinkedList();
cll.append(1);
cll.append(10);
cll.append(100);

cll.printNode();
console.log(cll.size());
/*
head ->1->10->100->null
3
*/
```

```js
CircularLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }
  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;
  if (position === 0) {
    node.next = current; // update

    if (this.isEmpty()) {
      current = node;
    } else {
      while (current.next != this.head) {
        current = current.next;
      }
    }
    this.head = node;
    current.next = this.head; // 다시 헤드로
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
    if (node.next === null) {
      node.next.this.head;
    } // 다시 헤드로 연결 
  }
  this.length++;
  return true;
};

let cll = new CircularLinkedList();
cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.printNode();

cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();
/*
head ->100->10->1->null
head ->100->2->10->3->1->null
*/
```

```js
CircularLinkedList.prototype.remove = function (value) {
  let current = this.head,
    prev = current,
    data;
  while (current.data != value && current.next != this.head) {
    // null인데 this.head로
    prev = current;
    current = current.next;
  }
  if (current.data != value) {
    return null;
  }
  // current가 계속 끝부분을 찾는데 사용되기 때문에 임시 data에 저장
  data = current.data;
  if (current === this.head) {
    while (current.next != this.head) {
      current = current.next;
    }
    this.head = this.head.next;
  } else {
    prev.next = current.next;
  }
  this.length--;
  return data;
};

let cll = new CircularLinkedList();
cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();

console.log(cll.remove(1000));
cll.printNode();
console.log(cll.remove(1));
cll.printNode();
console.log(cll.remove(2));
cll.printNode();
console.log(cll.remove(100));
cll.printNode();
console.log(cll.size());
/*
head ->100->2->10->3->1->null
null
head ->100->2->10->3->1->null
1
head ->100->2->10->3->null
2
head ->100->10->3->null
100
head ->10->3->100->null
2
*/
```

```js
CircularLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }
  let current = this.head,
    index = 0,
    prev,
    data;

  if (position === 0) {
    data = current.data;

    while (current.next != this.head) {
      current = current.next;
    }
    this.head = this.head.next;
    current.next = this.head;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    data = current.data; // 현재 삭제될 current data에 대한 노드 임시저장
    prev.next = current.next;
  }
  this.length--;
  return data;
};

let cll = new CircularLinkedList();
cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();

console.log(cll.removeAt(1000));
cll.printNode();
console.log(cll.removeAt(4));
cll.printNode();
console.log(cll.removeAt());
cll.printNode();
console.log(cll.removeAt(1));
cll.printNode();
console.log(cll.size());
```
- 기존 indexOf와 다름
```js
CircularLinkedList.prototype.indexOf = function (value) {
  let current = this.head,
    index = 0;

  do { // 일단 무조건 한번 돌려야됨
    if (current.data === value) {
      return index;
    }
    index++;
    current = current.next;
  } while (current != this.head);
  return -1;
};

CircularLinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};
let cll = new CircularLinkedList();
cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();

console.log(cll.indexOf(1000));
console.log(cll.indexOf(1));
console.log(cll.indexOf(100));
console.log(cll.indexOf(10));

console.log(cll.remove2(1000));
cll.printNode();
console.log(cll.remove2(1));
cll.printNode();
console.log(cll.remove2(2));
cll.printNode();
console.log(cll.remove2(100));
cll.printNode();
console.log(cll.size());
/*
head ->100->2->10->3->1->null
-1
4
0
2
null
head ->100->2->10->3->1->null
1
head ->100->2->10->3->null
2
head ->100->10->3->null
100
head ->10->3->null
2
*/
```