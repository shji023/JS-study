// 등차수열의 항 찾기
function answer(a, d, n) {
  let index = -1;
  let result = a;
  for (let i = 1; ; i++) {
    if (result == n) {
      index = i;
    }
    if (result > n) {
      break;
    }
    result += d;
  }
  return index;
}
/* solution 
function answer(a, d, n) {
  let index = -1;
  let num;
  for(let i = 1; ; i++){
    num = a+d*(i-1);
    if(num>n) {
      index = -1;
      break;
    }
    if(num == n) {
      index = i;
      break;
    }
  }
  return index;
}

or

function answer(a, d, n) {
  let index = -1;
  
  if((n - a) % d == 0){
    //등차수열 이구나
    index = (n-a) / d + 1;
  } else {
    index = -1;
  }
  return index;
}

*/

let input = [
  [1, 2, 7],
  [2, 3, 10],
  [3, 5, 23],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}

// 잃어버린 카드 찾기
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
