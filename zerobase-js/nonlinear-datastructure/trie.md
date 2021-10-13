## 트라이 (Trie)
- 탐색 트리의 일종으로, 문자열이나 연관 배열을 저장하는 데 사용되는 트리 자료구조
- 특징
  - 문자열 검색에 특화된 자료구조
  - 문자열 길이가 M일 경우 O(M)의 시간 복잡도로 검색 가능
![trie](https://user-images.githubusercontent.com/60960130/137150980-590d5db6-e2d1-4ecf-8068-06b7a2d6cfa3.png)
- 문자의 마지막단어 마킹 필요
- 문자열 재활용 순서보장

```js
// 문자값과 단어 여부값 저장을 위한 노드 생성자
function TrieNode() {
  this.children = {};
  this.endOfWord = false;
}
// 노드의 시작인 루트 노드 저장을 위한 생성자
function Trie() {
  this.root = new TrieNode();
}
// 문자열 추가
Trie.prototype.insert = function (word) {
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];

    if (node === undefined) {
      node = new TrieNode();
      current.children[ch] = node;
    }
    current = node;
  }
  current.endOfWord = true;
};

let trie = new Trie();
trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

console.log(trie.root);
console.log(trie.root.children["c"]);
/*
TrieNode {
  children: {
    b: TrieNode { children: [Object], endOfWord: false },
    c: TrieNode { children: [Object], endOfWord: false }
  },
  endOfWord: false
}
TrieNode {
  children: {
    a: TrieNode { children: [Object], endOfWord: false },
    d: TrieNode { children: {}, endOfWord: true }
  },
  endOfWord: false
}
*/
```

```js
// 문자열 검색
Trie.prototype.search = function (word) {
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];

    if (node === undefined) {
      return false;
    }

    current = node;
  }
  return current.endOfWord;
};

let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");
console.log(trie.search("bear")); //false
console.log(trie.search("b")); // false
console.log(trie.search("bee")); // true
```
```js
// 문자열 삭제
Trie.prototype.delete = function (word, current = this.root, index = 0) {
  if (index === word.length) {
    if (!current.endOfWord) return false;

    current.endOfWord = false;

    return Object.keys(current.children).length === 0;
  }
  let ch = word[index];
  let node = current.children[ch];

  if (node === undefined) return false;

  let isDeleteNode = this.delete(word, node, index + 1) && !node.endOfWord;
  if (isDeleteNode) {
    delete current.children[ch];
    return Object.keys(current.children).length === 0;
  }

  return false;
};
let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

console.log(trie.search("bee"));
trie.delete("bear");
console.log(trie.search("bee"));
trie.delete("b");
console.log(trie.search("bee"));
trie.delete("bee");
console.log(trie.search("bee"));

console.log(trie.root.children);
console.log(trie.root.children["b"]);
console.log(trie.root.children["b"].children["e"]);
/*
true
true
true
false
{
  b: TrieNode { children: { e: [TrieNode] }, endOfWord: false },
  c: TrieNode {
    children: { a: [TrieNode], d: [TrieNode] },
    endOfWord: false
  }
}
TrieNode {
  children: { e: TrieNode { children: {}, endOfWord: true } },
  endOfWord: false
}
TrieNode { children: {}, endOfWord: true }
*/
```