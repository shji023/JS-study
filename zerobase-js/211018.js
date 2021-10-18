// 1번
function solution(n) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i <= n; i++) {
    if (Math.cbrt(i) % 1 == 0) {
      if (i > max) {
        max = i;
      }
    }
  }
  return max;
}

// 2번
function solution(str) {
  let map = {};
  for (let i = 0; i <= 9; i++) {
    map[i] = 0;
  }

  for (let i = 0; i < str.length; i++) {
    map[str[i]]++;
  }
  let sortMap = [];
  for (let number in map) {
    sortMap.push([number, map[number]]);
  }

  sortMap.sort(function (a, b) {
    return b[1] - a[1];
  });
  let result = [];
  for (let i of sortMap) {
    result.push(Number.parseInt(i[0]));
  }
  return result.join(" ");
}

// 3번
function solution(h, w) {
  const dp = new Array(w + 1).fill().map((_) => new Array(h + 1).fill(1));
  dp[1][1] = 1;
  for (let i = 1; i < w; i++) {
    for (let j = 1; j < h; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[w][h];
}
// 4번
