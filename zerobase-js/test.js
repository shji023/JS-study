// 솔루션 참조
function answer(a, b, c) {
  let number = 0;

  num = [a, b, c];
  num.sort((x, y) => x - y);

  let d = 0;
  for (let i = 1; i < num.length; i++) {
    d += num[i] - num[i - 1];
  }
  d /= num.length;

  let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;

  number = num[0] + d * index;
  return number;
}

let input = [
  [1, 7, 10],
  [3, 8, 18],
  [2, 5, 11],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}
