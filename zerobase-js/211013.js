function solution(n) {
  let answer = 0;
  let dp = [0];
  let tmp = 1;
  for (let i = 1; i <= n; i++) {
    if (tmp * 2 === i) {
      tmp *= 2;
    }
    dp[i] = dp[i - tmp] + 1;
  }
  answer = dp.reduce(function (accumulator, item) {
    return accumulator + item;
  }, 0);
  return answer;
}
