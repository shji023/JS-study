// 1번
function solution(arr) {
  let out = 0;
  for (let i = 1; i <= arr.length; i++) {
    if (arr.indexOf(i) === -1) {
      out = i;
    }
  }
  return out;
}

// 2번
function solution(arr) {
  let dp = Array.from({ length: arr.length }, () => 0);
  dp[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    dp[i] = Math.max(0, dp[i - 1]) + arr[i];
  }
  return Math.max(...dp);
}

// 3번
function solution(s) {
  let temp = "";
  let arr = [];
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      arr.push(temp);
      temp = "";
      temp += s[i];
    } else {
      temp += s[i];
      if (i == s.length - 1) {
        arr.push(temp);
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") continue;
    sum += parseInt(arr[i]);
  }
  return sum;
}

// 4번
function solution(n) {
  var answer = 1;
  let sum = 0;
  for (let i = 1; i < n / 2; i++) {
    sum = 0;
    for (let j = i; j < n + 1; j++) {
      sum += j;
      if (sum === n) {
        answer += 1;
      } else if (sum > n) {
        break;
      }
    }
  }
  return answer;
}

// 5번
function solution(s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  let max = Object.keys(map).reduce((a, b) => (map[a] > map[b] ? a : b));
  return max;
}
