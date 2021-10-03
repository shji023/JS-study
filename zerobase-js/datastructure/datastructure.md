## 프로토타입
- 어떠한 객체가 만들어지기 위해 객체의 모태가 되는 원형
- 자바스크립트는 일반적이 객체 지향 언어와는 다르게, 프로토타입을 이용한 cloning을 통해 새로운 객체 생성
- 일반적인 객체 생성 방식: 속성은 생성자, 메서도는 프로토타입에서 정의
```
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
```
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
```
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
```
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
ll.printNode();

ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();
console.log(ll.size());
/*
100=>10=>1=>null
100=>2=>10=>3=>1=>null
5
*/
```