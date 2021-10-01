## 알고리즘 복잡도
알고리즘 평가 지표
- 정확성
- 작업량
- 메모리 사용량
- 최적성
- 효율성
  - <b>시간 복잡도</b>
  - 공간 복잡도
### 시간 복잡도
- 입력 크기의 값에 대해 단위 연산을 몇 번 수행하는지 계산하여, 알고리즘의 수행시간을 평가하는 방법
- 3가지 점근적 표현법
  - 빅오: 최악의 상황을 고려 (보통 제일 많이 고려)
    - O(log n), O(1) > O(n) > O(n log n) > O(n^2), O(2^n),O(n!)
  - 세타: 평균적인 경우
  - 오메가: 최선의 상황일 때

<b>빅오 표기법 예제</b>

```
function big_o(n) {
  let sum = 0; // 1회
  sum = n*2; // 1회
  return sum; // 1회
}
3->O(1)

function big_o(arr, n) {
  let sum = 0; // 1회
  for (let i = 0; i < n;i++) {
    sum += arr[i]; // n회
  }
  return sum; // 1회
}
n+2 ->O(N)

function big_o(arr, n) {
  let sum = 0; // 1회
  for (let i = 0; i < n; i++) {
    for (let j = 0; j< n; j++) {
      sum += arr[i][j]; // n*n회
    }
  }
  return sum; // 1회
}
n^2+2 -> O(n^2)

function big_o(arr, n) {
  let sum = 0; // 1회
  for (let i = 0; i < n; i*2) {
    sum += 2; // n회
  }
  return sum; // 1회
}
n/2+2 ->O(logN)
```
## 경우의 수
- 어떤 사건 혹은 일이 일어날 수 있는 경우의 가짓수를 수로 표현
- 완전 탐색으로 경우의 수를 푸는 알고리즘
  - 순열: 서로 다른 n개의 원소 중에서 r을 중복 없이 골라 순서에 상관있게 나열하는 경우의수 (nPr)
  - 조합: 서로 다른 n개의 원소 중에서 r을 중복 없이 골라 순서에 상관없이 나열하는 경우의 수 (nCr)
  - 중복 순열: 서로 다른 n개의 원소 중에서 r개를 중복있게 골라 순서에 상관있게 나열하는 경우의 수 (nH)
## 순열
- 서로 다른 n개의 원소 중에서 r을 중복 없이 골라 순서에 상관있게 나열하는 경우의 수(nPr) => n!/(n-r)!
- 3개의 알파벳으로 단어를 만드는 경우의 수

```
// for loop
let input = ["a", "b", "c"];
let count = 0;
function permutation(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      for (let k = 0; k < arr.length; k++) {
        if (i == k) continue;
        if (j == k) continue;

        console.log(arr[i], arr[j], arr[k]);
        count++;
      }
    }
  }
}

permutation(input);
console.log(count);
/*
a b c
a c b
b a c
b c a
c a b
c b a
6
*/

// recursion
let input = ["a", "b", "c"];
let count = 0;
function permutation(arr, s, r) {
  if (s == r) {
    count++;
    console.log(arr.join(" "));
    return;
  }
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]];
    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]];
  }
}

permutation(input, 0, 2);
console.log(count);
/*
a b c
a c b
b a c
b c a
c b a
c a b
6
*/
```
## 조합
- 서로 다른 n개의 원소 중에서 r을 중복 없이 골라 순서에 상관 없이 나열하는 경우의 수 nCr => n! / (n-r)!r!
- 4개의 숫자 카드에서 2개를 뽑는 경우의 수 

```
let input = [1, 2, 3, 4];
let count = 0;
function combination(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      console.log(arr[i], arr[j]);
    }
  }
}

combination(input);
console.log(count);
/*
1 2
1 3
1 4
2 3
2 4
3 4
6
*/

// recursion
let input = [1, 2, 3, 4];
let output = [];
let count = 0;
function combination(arr, data, s, idx, r) {
  if (s == r) {
    count++;
    console.log(data);
    return;
  }
  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combination(arr, data, s + 1, i + 1, r);
  }
}

combination(input, output, 0, 0, 2);
console.log(count);
/*
[ 1, 2 ]
[ 1, 3 ]
[ 1, 4 ]
[ 2, 3 ]
[ 2, 4 ]
[ 3, 4 ]
6
*/
```
## 점화식
- 수열에서 이웃하는 두개의 항 사이에 성립하는 관계를 나타낸 관계식
- 대표적인 점화식
  - 등차 수열: F(n) = F(n-1) + a
  - 등비 수열: F(n) = F(n-1) * a
  - 팩토리얼: F(n) = F(n-1) * n
  - 피보나치 수열: F(n) = F(n-1) + F(n-2)

### 등차 수열
```
// for loop
let result;

function forloop(s, t, number) {
  let acc = 0;

  for (let i = 1; i <= number; i++) {
    if (i == 1) {
      acc += s;
    } else {
      acc += t;
    }
    console.log(i, acc);
  }
  return acc;
}
result = forloop(3, 2, 5);
console.log(result);
/*
1 3
2 5
3 7
4 9
5 11
11
*/

// recursive
let result;

function recursive(s, t, number) {
  if (number == 1) {
    return s;
  }
  return recursive(s, t, number - 1) + t;
}
result = recursive(3, 2, 5);
console.log(result);
/*
number: 5: recursive(s, t, 4) + 2
number: 4: recursive(s, t, 3) + 2
number: 3: recursive(s, t, 2) + 2
number: 2: recursive(s, t, 1) + 2
number: 1: 1 + 2
*/
```

### 등비 수열

```
// for loop
let result;

function forloop(s, t, number) {
  let acc = 0;

  for (let i = 1; i <= number; i++) {
    if (i == 1) {
      acc *= s;
    } else {
      acc *= t;
    }
    console.log(i, acc);
  }
  return acc;
}
result = forloop(3, 2, 5);
console.log(result);
/*
1 3
2 6
3 12
4 24
5 48
48
*/

//recursion
let result;

function recursive(s, t, number) {
  if (number == 1) {
    return s;
  }
  return recursive(s, t, number - 1) * t;
}
result = recursive(3, 2, 5);
console.log(result); // 48
```

### 팩토리얼
```
let result;

function recursive(number) {
  if (number == 1) {
    return number;
  }
  return recursive(number - 1) * number;
}
result = recursive(5);
console.log(result); // 120
```

### 피보나치 수열

```
let result;

function recursive(number) {
  if (number == 1 || number == 0) {
    return number;
  }
  return recursive(number - 1) + recursive(number - 2);
}
result = recursive(5);
console.log(result); // 5
```