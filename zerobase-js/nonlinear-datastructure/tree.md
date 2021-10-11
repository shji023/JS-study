## 트리
- 그래프의 일종으로 두 노드 사이의 하나의 간선만 연결되어 있는, 최소 연결과 계층 형태의 비선형 자료구조
`노드`: 하나 이상의 값을 갖는 객체 단위
`간선`: 두 노드를 연결하는 선
`루트 노드`: 부모가 없는 최상위 노드
`단말 노드` : 자식이 없는 노드
`부모 노드`: 특정 Sub-Tree 내에서의 상위 노드
`자식 노드`: 특정 Sub-Tree 내에서의 하위 노드
`형제`: 부모가 없는 최상위 노드
`노드 크기`: 자신을 포함한 모든 자손 노드의 개수
`노드 깊이`: 루트에서 특정 노드에 도달하기 위한 간선의 개수
`노드 레벨`: 트리의 특정 깊이를 가지는 노드의 집합
`노드 차수`: 노드가 지닌 가지의 수
`트리 차수`: 트리의 최대 차수
`트리 높이`: 루트 노드에서 가장 깊숙이 있는 노드의 깊이

### 트리 순회 
- 트리 구조에서 각각의 노드를 정확히 한 번씩 체계적인 방법으로 방문하는 과정
![tree](https://user-images.githubusercontent.com/60960130/136813067-bb807e90-d613-447d-99cc-7cb0cd50c0f4.png)
```
N(Node): 해당 노드를 방문
L(Left): 왼쪽 서브 트리로 이동
R(Right): 오른쪽 서브 트리로 이동
```
- 순회 방식
```
전위 순회(Pre-order): N-L-R
중위 순회(In-order): L-N-R
후위 순회(Post-order): L-R-N
층별 순회(Level-order): 낮은 Level부터 순차적으로 순회
```

<br>전위 순회(Pre-order)</br>

- 전위 순회 방법 : N - L - R
  1. 노드를 방문한다.
  2. 왼쪽 서브 트리를 전위 순회한다.
  3. 오른쪽 서브 트리를 전위 순회한다.
- 방문 순서
  F → B → A → D → C → E → G → I → H
- 의사 코드(pseudo-code)
  stack == 재귀
  ```js
  preorder(node) 
	print node.value
	if node.left ≠ null then preorder(node.left) 
	if node.right ≠ null then preorder(node.right)
  ```

<br>중위 순회(In-order)</br>

- 중위 순회 방법 : L - N - R
  1. 왼쪽 서브 트리를 중위 순회한다.
  2. 현재 노드를 방문한다.
  3. 오른쪽 서브 트리를 중위 순회한다.
- 방문 순서
  A → B → C → D → E → F → G → H → I
- 의사 코드(pseudo-code)
  ```js
  inorder(node)
	if node.left ≠ null then inorder(node.left) 
	print node.value
	if node.right ≠ null then inorder(node.right)
  ```

<br>층별 순회(Level-order)</br> bfs

- 층별 순회 방법 : 낮은 Level부터 순차적으로 순회
  1. root 노드 방문
  2. Level 증가
  3. 왼쪽에서 오른쪽 순으로 방문
- 방문 순서
  F → B → G → A → D → I → C → E → H
- 의사 코드(pseudo-code)
  ```js
  levelorder(root)
    q.enqueue(root)
    while not q.empty do
    node := q.dequeue() 
    print node.value
    if node.left ≠ null q.enqueue(node.left) 
    if node.right ≠ null q.enqueue(node.right)
  ```

<br>후위 순회(Post-order)</br>

- 후위 순회 방법 : L - R - N
  1. 왼쪽 서브 트리를 후위 순회한다.
  2. 오른쪽 서브 트리를 후위 순회한다.
  3. 현재 노드를 방문한다.
- 방문 순서
  A → C → E → D → B → H → I → G → F
- 의사 코드(pseudo-code)
  ```js
  postorder(node)
	if node.left  ≠ null then postorder(node.left) 
	if node.right ≠ null then postorder(node.right) 
	print node.value
  ```

## 이진 트리 (Binary Tree)
- 각각의 노드가 최대 두개의 자식 노드를 가지는 트리 자료구조
- 활용 방식
  - 검색과 정렬 : 이전 탐색 트리와 이진 힙 구현에 활용
  - 허프만 코딩 : 연관 분기 구조 위한 데이터 표현에 활용

### 포화 이진 트리(Perfect binary tree)
- 모든 레벨의 노드가 가득 채워져 있는 트리
- 특징
  - Leaf 노드를 제외한 모든 자식은 2개의 노드를 보유
  - 노드의 개수 : n =2^h - 1
- 트리 형태
  ![pbt](https://user-images.githubusercontent.com/60960130/136816709-7c2a4ebe-276c-4d9f-a056-ad24d7c2225b.PNG)

### 완전 이진 트리(Complete binary tree)
- 마지막 레벨 전까지 노드가 가득 채워져 있고, 마지막 레빌은 왼쪽부터 순차적으로 채워져 있는 트리
- 특징
  - 배열을 사용해 효율적인 표현이 가능
  - 노드의 개수 : n < 2^h - 1
- 트리 형태
  ![cbt](https://user-images.githubusercontent.com/60960130/136816818-12de0a99-d742-4604-810e-ad227035ca8b.PNG)

### 정 이진 트리(Full binary tree)
- 모든 노드가 0개 또는 2개의 자식 노드만 갖는 트리
- 특징
  - proper 또는 plane 이진 트리라고도 불림
  - 노드의 개수 : n ≤ 2^h - 1
- 트리 형태
  ![fbt](https://user-images.githubusercontent.com/60960130/136816987-259edbe4-306d-408c-9d36-92b9828507d7.PNG)

## 편향 이진 트리(Skewed binary tree)
- 왼쪽 혹은 오른쪽으로 편향되게 치우져 있는 트리
- 특징
  - 각각의 높이에 하나의 노드만 존재
  - 노드의 개수 : h
- 트리 형태
  ![sbt](https://user-images.githubusercontent.com/60960130/136817628-d9b180ca-922e-489c-bbfa-f11325ba2f55.PNG)

### 균형 이진 트리(Balanced binary tree)
- 삽입 / 삭제가 이루어 질 때, 왼쪽 서브 트리와 오른쪽 서브 트리의 높이 차를 1 이하로 맞추는 이진 탐색 트리
- 특징
  - 서브 트리 높이 차이가 항상 1 이하로 유지
  - 균형 트리 종류 : AVL트리, Red-Black 트리, B트리, B+트리, B*트리
- 트리 형태
  ![bbt](https://user-images.githubusercontent.com/60960130/136818075-3672e4ad-27db-4dfb-9cbf-b13454e256d7.PNG)

### 이진 트리 순회 (Binary Tree Traversal)
- 각각의 노드가 최대 두개의 자식 노드를 가지는 트리 자료 구조를 순회하는 방법

