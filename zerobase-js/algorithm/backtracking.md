## 백트래킹(Backtracking)
- 경우의 수로 해를 찾는 도중 해가 나올 수 없는 조건일 때 이를 중단하고 다른 경우의 수로 해를 찾는 알고리즘 기법
- 특징
  - 해가 될 가능성이 있으면 지속적 탐색, 가능성이 없다면 가지치기(prunning)하여 빠르게 전체 해를 탐색
  - 해가 되지 않는 경우의 수는 배재하며 해를 찾는 시간 복잡도를 단축

- 타겟넘버 솔루션
  - dfs
```js
function dfs(numbers, target, index, total) {
  if (index === numbers.length) {
    return target === total ? 1 : 0;
  }

  let count = 0;
  count += dfs(numbers, target, index + 1, total + numbers[index]);
  count += dfs(numbers, target, index + 1, total - numbers[index]);

  return count;
}

function solution(numbers, target) {
  return dfs(numbers, target, 0, 0);
}
```
  - dfs+backtracking  
```js
function dfs(numbers, target, sums, index, total) {
  if (index === numbers.length) {
    return target === total ? 1 : 0;
  }
  if (
    (target > total && target > total + sums[index]) ||
    (target < total && target < total - sums[index])
  )
    return 0;
  let count = 0;
  count += dfs(numbers, target, sums, index + 1, total + numbers[index]);
  count += dfs(numbers, target, sums, index + 1, total - numbers[index]);

  return count;
}

function solution(numbers, target) {
  let sums = new Array(numbers.length);
  let sum = 0;

  for (let i = numbers.length - 1; i >= 0; i--) {
    sum += numbers[i];
    sums[i] = sum;
  }

  return dfs(numbers, target, sums, 0, 0);
}
```