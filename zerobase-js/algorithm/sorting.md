## 정렬(Sorting)
- 배열 내 원소들을 번호순이나 사전 순서와 같이 일정한 순서대로 열거하는 알고리즘
- 대표 정렬 알고리즘 별 구현 함수
  - 거품 정렬
  - 선택 정렬
  - 삽입 정렬
  - 병합 정렬
  - 퀵 정렬
  - 공통 함수 

### 거품 정렬(Bubble Sort)
- 서로 인접한 두 원소를 비교하면서 정렬하는 알고리즘
- 평균 시간 복잡도: O(n^2)
- 동작 방식
  - 인접한 값 비교 => 큰 값이면 교환을 한다
  - index N 반복
  - N-i까지 N차례 반복

```js
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let bubbleSort_1 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) { // 총 수행 횟수
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

// 이미 정렬된 부분들은 더이상 순회하지 않음
let bubbleSort_2 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

// 이미 swap 된것은 체크
let bubbleSort_3 = function (arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
};

let init_array = [6, 5, 1, 3, 2, 4];

let array = [...init_array];
bubbleSort_1(array);
console.log(array);
array = [...init_array];
bubbleSort_2(array);
console.log(array);
array = [...init_array];
bubbleSort_3(array);
console.log(array);
/*
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
*/
```

```js
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};
// 콜백 함수
let ascending = function (x, y) {
  return x > y;
};
// 콜백 함수
let descending = function (x, y) {
  return x < y;
};

let bubbleSort = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let init_array = [6, 5, 1, 3, 2, 4];
let array;

let sorting = [bubbleSort]; // 함수 포인터를 매개변수로 베열 형태 값 저장
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);

    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
/*
bubbleSort ascending
[ 1, 2, 3, 4, 5, 6 ]
bubbleSort descending
[ 6, 5, 4, 3, 2, 1 ]
*/
```

### 선택 정렬(Selection Sort)
- <b>최솟값을 찾아 데이터 영역의 가장 앞으로 이동</b>하는 방식을 반복하여 전체 데이터 영역을 정렬하는 알고리즘
- 평균 시간 복잡도: O(n^2)
```js
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let selectionSort = function (arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    let k = i; // k: 최솟값에 대한 index의 위치
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[k], arr[j])) k = j; // j가 더 작은 값
    }
    swap(arr, i, k);
  }
};

let init_array = [6, 5, 1, 3, 2, 4];
let array;

let sorting = [selectionSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);

    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
/*
selectionSort ascending
[ 1, 2, 3, 4, 5, 6 ]
selectionSort descending
[ 6, 5, 4, 3, 2, 1 ]
*/
```

### 삽입 정렬(Insertion Sort)
- <b>이미 정렬</b>된 데이터 영역과 비교하면서,<b>자신의 위치를 찾아 요소를 삽입</b>하며 정렬하는 알고리즘
- 평균 시간 복잡도: O(n^2)
```js
let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

let ascending = function (x, y) {
  return x > y;
};

let descending = function (x, y) {
  return x < y;
};

let insertionSort = function (arr, compare) {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) { // 현재 값을 빼준 위치에 업데이트
      arr[j + 1] = arr[j];
      if (compare(tmp, arr[j])) {
        break;
      }
    }
    arr[j + 1] = tmp;
  }
};

let init_array = [6, 5, 1, 3, 2, 4];
let array;

let sorting = [insertionSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);

    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
/*
insertionSort ascending
[ 1, 2, 3, 4, 5, 6 ]
insertionSort descending
[ 6, 5, 4, 3, 2, 1 ]

*/
```
### 병합 정렬(Merge Sort)
- 하나의 배열을 두 개의 균등한 <b>크기로 분할하고, 부분 정렬하며, 이를 다시 합하면서 전체를 정렬</b>해가는 알고리즘
- 평균 시간 복잡도 : O(n log n)
```js

let mergeSort = function (arr, compare) {
  if (arr.length === 1) return arr; // 재귀 종료 조건 설정해야함

  let m = (arr.length / 2).toFixed(0); // middle index
  let left = mergeSort(arr.slice(0, m), compare);
  let right = mergeSort(arr.slice(m), compare);

  let i = 0,
    j = 0,
    k = 0;

  while (i < left.length && j < right.length) {// 양쪽 다 끝나기 전 까지
    arr[k++] = compare(left[i], right[j]) ? 
    right[j++] : left[i++];
  }
  // 남아있으면은
  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];
  
  return arr;
};

let init_array = [6, 5, 1, 3, 2, 4];
let array;

let sorting = [mergeSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);

    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
/*
mergeSort ascending
[ 1, 2, 3, 4, 5, 6 ]
mergeSort descending
[ 6, 5, 4, 3, 2, 1 ]
*/
```

### 퀵 정렬(Quick Sort)
- 특정한 값(Pivot)을 기준으로 큰 숫자와 작은 숫자를 분할하여 정렬하는 알고리즘
- 평균 시간 복잡도 : O(n log n)

```js
let quickSort = function (arr, compare, s = 0, e = arr.length - 1) {
  let start = s;
  let pivot = arr[e];
  for (let i = s; i <= e; i++) {
    if (compare(pivot, arr[i])) {
      swap(arr, start, i);
      start++;
    }
  }
  swap(arr, start, e);
  if (start - 1 > s) quickSort(arr, compare, s, start - 1);
  if (start + 1 < e) quickSort(arr, compare, start + 1, e);
};

let init_array = [6, 5, 1, 3, 2, 4];
let array;
let sorting = [quickSort];
let order = [ascending, descending];
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);
    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
}
/*
quickSort ascending
[ 1, 2, 3, 4, 5, 6 ]
quickSort descending
[ 6, 5, 4, 3, 2, 1 ]

*/
```