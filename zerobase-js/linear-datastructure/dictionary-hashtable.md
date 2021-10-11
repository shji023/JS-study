## 딕셔너리
- key-value 형태로 다양한 자료형 개체를 저장하는 자료구조
```js
// 개체를 저장할 생성자
function Dictionary(items = {}) {
  this.items = items;
}
// 모든 개체 반환
Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};
// 초기화
Dictionary.prototype.clear = function () {
  this.items = {};
};
// 크기 반환
Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

let dict = new Dictionary({ age: 19, name: "Alice" });
console.log(dict);
console.log(dict.getBuffer());
console.log(dict.size());
dict.clear();
console.log(dict);
/*
Dictionary { items: { age: 19, name: 'Alice' } }
{ age: 19, name: 'Alice' }
2
Dictionary { items: {} }

*/
```

```js
// 개체 존재 여부 확인 key 정보를 배열로 반환
Dictionary.prototype.has = function (key) {
  //return value in this.items;
  return this.items.hasOwnProperty(key);
};

Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

Dictionary.prototype.get = function (key) {
  return this.has(key) ? this.items[key] : undefined;
};

Dictionary.prototype.remove = function (key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }
  return false;
};

let dict = new Dictionary();
dict.set("age", 19);
dict.set("name", "alice");
dict.set("height", 172);
console.log(dict);

dict.remove("age");
console.log(dict);

console.log(dict.has("age"));
console.log(dict.has("name"));
console.log(dict.get("age"));
console.log(dict.get("name"));
/*
Dictionary { items: { age: 19, name: 'alice', height: 172 } }
Dictionary { items: { name: 'alice', height: 172 } }
false
true
undefined
alice
*/
```

```js
// 모든 key값을 배열 형태로 반환
Dictionary.prototype.keys = function () {
  return Object.keys(this.items);
};
// value 값을 배열 형태로 반환
Dictionary.prototype.values = function () {
  // let values = [];
  // for (let k in this.items) {
  //   if (this.has(k)) {
  //     values.push(this.items[k]);
  //   }
  //   return values;
  // }
  return Object.values(this.items);
};
// each(): 모든 개체 요소에 대해 callback함수 수행 (foreach)
Dictionary.prototype.each = function (fn) {
  for (let k in this.items) {
    if (this.has(k)) {
      fn(k, this.items[k]);
    }
  }
};
function printDictionary(key, value) {
  console.log(`key:${key}`);
  console.log(`value:${value}`);
}
let dict = new Dictionary();
dict.set("age", 19);
dict.set("name", "alice");
dict.set("height", 172);
console.log(dict);

console.log(dict.keys());
console.log(dict.values());
dict.each(printDictionary);
/*
Dictionary { items: { age: 19, name: 'alice', height: 172 } }
[ 'age', 'name', 'height' ]
[ 19, 'alice', 172 ]
key:age
value:19
key:name
value:alice
key:height
value:172
*/
```

## 해시테이블 (Hash Table)
### 해시함수
- 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수
- 해시 함수 특성
  - 압축성: 다양한 가변 길이의 입력에 대해 고정된 크기의 결과값을 반환하는 성질
  - 효율성: 어떤 입력 값에 대해서도 많은 자원과 시간이 소요되지 않고 처리되는 성질
  - 저항성: 결과값을 바탕으로 입력 값을 찾는 것이 불가능한 성질

### 해시 테이블
- Hash함수를 사용하여 평균 O(1) 시간 복잡도로 특정 값을 신속하게 찾는 자료구조
- 충돌 해결 방법
  - 해시 함수 변경: 더 큰 숫자의 공간과 Modular 산술 값을 이용해 충돌 최소화
  - 자료구조 확장: Open Addressing Method(선형 조사법, 이중해시), Close Addressing Method(체이닝)

```js
const HASH_SIZE = 37;

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}
// 해시 함수 중요
HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

let ht = new HashTable();
console.log(ht);
console.log(ht.hashCode("Ana"));
console.log(ht.hashCode("Sue"));
console.log(ht.hashCode("Paul"));
/*
HashTable { table: [ <37 empty items> ], length: 0 }
13
5
32
*/
```

```js
HashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key} -> index: ${index}`);
  if (this.table[index] !== undefined) {
    return false;
  }
  this.table[index] = new Element(key, value);
  this.length++;

  return true;
};

HashTable.prototype.get = function (key) {
  return this.table[this.hashCode(key)];
};

HashTable.prototype.remove = function (key) {
  let element = this.table[this.hashCode(key)];

  if (element !== undefined) {
    delete this.table[this.hashCode(key)];
    this.length--;
  }
  return element;
};
let ht = new HashTable();

ht.put("Ana", 172);
ht.put("Sue", 163);
ht.put("Paul", 190);
console.log(ht);

console.log(ht.remove("Paul"));
console.log(ht.remove("Paul"));
console.log(ht);
/*
key: Ana -> index: 13
key: Sue -> index: 5
key: Paul -> index: 32
HashTable {
  table: [
    <5 empty items>,
    Element { key: 'Sue', value: 163 },
    <7 empty items>,
    Element { key: 'Ana', value: 172 },
    <18 empty items>,
    Element { key: 'Paul', value: 190 },
    <4 empty items>
  ],
  length: 3
}
Element { key: 'Paul', value: 190 }
undefined
HashTable {
  table: [
    <5 empty items>,
    Element { key: 'Sue', value: 163 },
    <7 empty items>,
    Element { key: 'Ana', value: 172 },
    <23 empty items>
  ],
  length: 2
}
*/
```

```js
HashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

HashTable.prototype.size = function () {
  return this.length;
};
// 데이터 셋 반환
HashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
};
// 데이터 셋 출력 (반대로 나오는거)
HashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + "->" + this.table[i].key + ": " + this.table[i].value);
    }
  }
};
let ht = new HashTable();

ht.put("Ana", 172);
ht.put("Sue", 163);
ht.put("Paul", 190);

ht.print();
console.log(ht.getBuffer());
console.log(ht.size());
ht.clear();
console.log(ht);
/*
key: Ana -> index: 13
key: Sue -> index: 5
key: Paul -> index: 32
5->Sue: 163
13->Ana: 172
32->Paul: 190
[
  Element { key: 'Sue', value: 163 },
  Element { key: 'Ana', value: 172 },
  Element { key: 'Paul', value: 190 }
]
3
HashTable { table: [ <37 empty items> ], length: 0 }

*/
```
- 해시 테이블 충돌 및 해결

```js
const HASH_SIZE = 37;

HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};
let ht = new HashTable();

ht.put("Ana", 172);
ht.put("Donnie", 183); // 충돌
ht.put("Sue", 163);
ht.put("Jamie", 168); // 충돌
ht.put("Paul", 190);

console.log(ht.size());
ht.print();
/*
key: Ana -> index: 13
key: Donnie -> index: 13
key: Sue -> index: 5
key: Jamie -> index: 5
key: Paul -> index: 32
3 // false로 나와서 저장이 안됨
5->Sue: 163
13->Ana: 172
32->Paul: 190 
*/

// 충돌 해결
HashTable.prototype.hashCode = function (key) {
  let hash = 5381; // 충돌 최소화 위해 소수형태로 주어짐
  for (let i = 0; i < key.length; i++) {
    hash += hash * 33 + key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};
/*
key: Ana -> index: 31
key: Donnie -> index: 13
key: Sue -> index: 28
key: Jamie -> index: 32
key: Paul -> index: 25
5
13->Donnie: 183
25->Paul: 190
28->Sue: 163
31->Ana: 172
32->Jamie: 168
*/
```

### 선형 조사법 해시 테이블
- Hash 충돌이 발생했을 때, <b>그 다음 주소를 확인하고 비어 있다면 그 자리 대신 저장</b>하는 해시테이블 기반 자료구조
```js
const HASH_SIZE = 5; //충돌을 위해 변경;

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function LinearHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

LinearHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

LinearHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

LinearHashTable.prototype.size = function () {
  return this.length;
};

LinearHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
};

LinearHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + "->" + this.table[i].key + ": " + this.table[i].value);
    }
  }
};

let lht = new LinearHashTable();

console.log(lht); //LinearHashTable { table: [ <5 empty items> ], length: 0 }
```

```js
// 데이터 추가
LinearHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  let startIndex = index; // 바뀐 부분
  console.log(`key: ${key} -> index: ${index}`);

  do {
    if (this.table[index] === undefined) { // 비어있으면 넣고 비어있지 않으면 next index
      this.table[index] = new Element(key, value);
      this.length++;
      return true;
    }
    index = (index + 1) % HASH_SIZE; // 뒤에 자리 없으면 다시 앞에 넣어야하니까 % 연산 필요
  } while (index !== startIndex); // break조건
  return false;
};

let lht = new LinearHashTable();

lht.put("Ana", 172);
lht.put("John", 179);
lht.put("Donnie", 183);
lht.put("Mindy", 190);
console.log(lht.put("Paul", 168));
console.log(lht.put("Sue", 163)); // Sue는 들어갈 자리 없음
console.log("");

lht.print();
console.log(lht.getBuffer());
console.log(lht);

lht.clear();
console.log(lht);
/*
key: Ana -> index: 2
key: John -> index: 4
key: Donnie -> index: 0
key: Mindy -> index: 3
key: Paul -> index: 2
true
key: Sue -> index: 1
false

0->Donnie: 183
1->Paul: 168
2->Ana: 172
3->Mindy: 190
4->John: 179
[
  Element { key: 'Donnie', value: 183 },
  Element { key: 'Paul', value: 168 },
  Element { key: 'Ana', value: 172 },
  Element { key: 'Mindy', value: 190 },
  Element { key: 'John', value: 179 }
]
LinearHashTable {
  table: [
    Element { key: 'Donnie', value: 183 },
    Element { key: 'Paul', value: 168 },
    Element { key: 'Ana', value: 172 },
    Element { key: 'Mindy', value: 190 },
    Element { key: 'John', value: 179 }
  ],
  length: 5
}
LinearHashTable { table: [ <5 empty items> ], length: 0 }
*/
```

```js
LinearHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;
  // 값이 있다면 key와 같은지 한번더 비교하고 없다면 다음 다음 끝까지 없으면 undefined
  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }
    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);
  return undefined;
};
let lht = new LinearHashTable();

lht.put("Ana", 172);
lht.put("John", 179);
lht.put("Donnie", 183);
lht.put("Mindy", 190);
lht.put("Paul", 168);
console.log("");

console.log(lht.get("Ana"));
console.log(lht.get("Paul"));
console.log(lht.get("Kim"));
/*
key: Ana -> index: 2
key: John -> index: 4
key: Donnie -> index: 0
key: Mindy -> index: 3
key: Paul -> index: 2

172
168
undefined
*/
```

```js
// remove도 get과 비슷
// 값이 있다면 key와 같은지 한번더 비교하고 없다면 다음 다음 끝까지 없으면 undefined
LinearHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key == key) {
      let element = this.table[index];
      delete this.table[index];
      this.length--;

      return element;
    }
    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return undefined;
};
let lht = new LinearHashTable();

lht.put("Ana", 172);
lht.put("John", 179);
lht.put("Donnie", 183);
lht.put("Mindy", 190);
lht.put("Paul", 168);
console.log("");

console.log(lht.remove("Ana"));
console.log(lht.get("Paul"));
console.log(lht.remove("Paul"));
console.log(lht.get("Paul"));
console.log(lht.remove("Paul"));
console.log(lht.size());

lht.print();
console.log(lht);
/*
key: Ana -> index: 2
key: John -> index: 4
key: Donnie -> index: 0
key: Mindy -> index: 3
key: Paul -> index: 2

Element { key: 'Ana', value: 172 }
168
Element { key: 'Paul', value: 168 }
undefined
undefined
3
0->Donnie: 183
3->Mindy: 190
4->John: 179
LinearHashTable {
  table: [
    Element { key: 'Donnie', value: 183 },
    <2 empty items>,
    Element { key: 'Mindy', value: 190 },
    Element { key: 'John', value: 179 }
  ],
  length: 3
}
*/
```

## 체이닝 해시테이블 (Chaining Hash Table)
- 별도의 자료구조인 연결 리스트를 병합 사용하여 Hash 충돌을 해결한 해시테이블 기반 자료구조
![cht](https://user-images.githubusercontent.com/60960130/136778892-caeed5db-36fb-4106-a929-680bf3e54cdc.png)

```js
import { LinkedList } from "./linked_list.mjs";
const HASH_SIZE = 37;
// Key, value 저장을 위한 생성자
function Element(key, value) {
  this.key = key;
  this.value = value;
}

// 생성자
function ChainingHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// 해시 함수
ChainingHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// 초기화
ChainingHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// 크기 반환
ChainingHashTable.prototype.size = function () {
  return this.length;
};

let cht = new ChainingHashTable();
console.log(cht);

let ll = new LinkedList();
ll.append(new Element("Ana", 172));
console.log(ll);

/*
ChainingHashTable { table: [ <37 empty items> ], length: 0 }
LinkedList {
  head: Node { data: Element { key: 'Ana', value: 172 }, next: null },
  length: 1
}
*/
```

```js
// 데이터 추가
// 1. 배열 내 값 존재 여부 확인. 없다면 제작, 있다면 append
ChainingHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key} -> index: ${index}`);
  if (this.table[index] === undefined) {
    this.table[index] = new LinkedList(); // table에 Linkedlist객체 저장
  }
  this.table[index].append(new Element(key, value));
  this.length++;
  return true;
};

let cht = new ChainingHashTable();

cht.put("Ana", 172);
cht.put("Donnie", 183);
cht.put("Sue", 163);
cht.put("Jamie", 168);
cht.put("Paul", 190);
console.log(cht);
/*
key: Ana -> index: 13
key: Donnie -> index: 13
key: Sue -> index: 5
key: Jamie -> index: 5
key: Paul -> index: 32
ChainingHashTable {
  table: [
    <5 empty items>,
    LinkedList { head: [Node], length: 2 },
    <7 empty items>,
    LinkedList { head: [Node], length: 2 },
    <18 empty items>,
    LinkedList { head: [Node], length: 1 },
    <4 empty items>
  ],
  length: 5
}
*/
```

```js
// 데이터 셋 반환
ChainingHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;
      do { // 무조건 값이 있다고 판단
        array.push(current.data);
        current = current.next;
      } while (current);
    }
  }
  return array;
};

// 데이터 셋 출력
ChainingHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let current = this.table[i].head;
      process.stdout.write(`#${i}`);
      do {
        process.stdout.write(` -> ${current.data.key}: ${current.data.value}`);
        current = current.next;
      } while (current);
      console.log("");
    }
  }
};

let cht = new ChainingHashTable();

cht.put("Ana", 172);
cht.put("Donnie", 183); // 충돌
cht.put("Sue", 163);
cht.put("Jamie", 168); // 충돌
cht.put("Paul", 190);
console.log(cht);

cht.print();
console.log(cht.getBuffer());
/*
key: Ana -> index: 13
key: Donnie -> index: 13
key: Sue -> index: 5
key: Jamie -> index: 5
key: Paul -> index: 32
ChainingHashTable {
  table: [
    <5 empty items>,
    LinkedList { head: [Node], length: 2 },
    <7 empty items>,
    LinkedList { head: [Node], length: 2 },
    <18 empty items>,
    LinkedList { head: [Node], length: 1 },
    <4 empty items>
  ],
  length: 5
}
#5 -> Sue: 163 -> Jamie: 168
#13 -> Ana: 172 -> Donnie: 183
#32 -> Paul: 190
[
  Element { key: 'Sue', value: 163 },
  Element { key: 'Jamie', value: 168 },
  Element { key: 'Ana', value: 172 },
  Element { key: 'Donnie', value: 183 },
  Element { key: 'Paul', value: 190 }
]
*/
```

```js
// 데이터 조회
ChainingHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  if (this.table[index] !== undefined && !this.table[index].isEmpty()) {
    let current = this.table[index].head;
    do {
      if (current.data.key === key) {
        return current.data.value;
      }
      current = current.next;
    } while (current);
  }
  return undefined;
};

let cht = new ChainingHashTable();

cht.put("Ana", 172);
cht.put("Donnie", 183);
cht.put("Sue", 163);
cht.put("Jamie", 168);
cht.put("Paul", 190);

console.log(cht.get("Ana"));
console.log(cht.get("Donnie"));
console.log(cht.get("Kim"));
/*
key: Ana -> index: 13
key: Donnie -> index: 13
key: Sue -> index: 5
key: Jamie -> index: 5
key: Paul -> index: 32
172
183
undefined
*/
```

```js
//  데이터 삭제
// 인덱스에 요소가 있는지 체크, 동일한 key인지 체크 -> remove. isEmpty확인
ChainingHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key);
  let element = undefined;
  if (this.table[index] !== undefined) {
    let current = this.table[index].head;
    do {
      if (current.data.key === key) {
        element = current.data;
        this.table[index].remove(current.data);
        this.length--;
        if (this.table[index].isEmpty()) {
          delete this.table[index];
        }
      }
      current = current.next;
    } while (current);
  }

  return element;
};

let cht = new ChainingHashTable();

cht.put("Ana", 172);
cht.put("Donnie", 183);
cht.put("Sue", 163);
cht.put("Jamie", 168);
cht.put("Paul", 190);

console.log("");
cht.print();

console.log(cht.remove("Sue"));
console.log("");
cht.print();

console.log(cht.remove("Jamie"));
console.log("");
cht.print();

console.log(cht);
/*
key: Ana -> index: 13
key: Donnie -> index: 13
key: Sue -> index: 5
key: Jamie -> index: 5
key: Paul -> index: 32

#5 -> Sue: 163 -> Jamie: 168
#13 -> Ana: 172 -> Donnie: 183
#32 -> Paul: 190
Element { key: 'Sue', value: 163 }

#5 -> Jamie: 168
#13 -> Ana: 172 -> Donnie: 183
#32 -> Paul: 190
Element { key: 'Jamie', value: 168 }

#13 -> Ana: 172 -> Donnie: 183
#32 -> Paul: 190
ChainingHashTable {
  table: [
    <13 empty items>,
    LinkedList { head: [Node], length: 2 },
    <18 empty items>,
    LinkedList { head: [Node], length: 1 },
    <4 empty items>
  ],
  length: 3
}
*/
```
