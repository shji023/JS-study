function solution(n) {
  let f = [0];

  f[1] = 1;
  f[2] = 2;

  for (let i = 3; i < n + 1; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}
