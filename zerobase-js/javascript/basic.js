// 조건문
const day = 3;
let weekend = "";

switch (day) {
  case 1:
    weekend = "월요일";
    break;
  case 2:
    weekend = "화요일";
    break;
  case 3:
    weekend = "수요일";
    break;
  case 4:
    weekend = "목요일";
    break;
  case 5:
    weekend = "금요일";
    break;
  case 6:
    weekend = "토요일";
    break;
  case 7:
    weekend = "일요일";
    break;
}
console.log(weekend);

// 반복문
const UNTIL_NUM = 10;
let sum = 0;
for (let i = 0; i < 11; i++) {
  if (i % 2 == 0) {
    sum += i;
  } else continue;
}
console.log(sum);

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i + " x " + j + " = " + i * j);
    //console.log(`${i}x${j}=${i * j}`);
  }
}

// 최댓값 출력함수 작성
function Max(x, y) {
  const result = x - y > 0 ? x : y;
  return result;
  //return x > y ? x : y;
}

// 별별별
function answer(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += "*";
  }
  return result;
}
let input = [5, 7, 12];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1}${answer(input[i])}`);
}

// 두 수 사이의 숫자
function answer(x, y) {
  let result = [];
  let temp = 0;
  if (x - y > 0) {
    temp = x;
    x = y;
    y = temp;
    // [x, y] = [y, x];
  }
  for (let i = x; i < y + 1; i++) {
    result.push(i);
  }
  return result;
}
let input = [
  [3, 7],
  [8, 3],
  [12, 10],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// 반 평균
function answer(score) {
  let result = 0;
  for (let i = 0; i < score.length; i++) {
    result += score[i];
  }
  result = (result / score.length).toFixed(2);
  return result;
}
let input = [
  [80, 95, 65, 70, 100],
  [82, 77, 51, 64, 73, 90, 80],
  [100, 71, 59, 88, 72, 75, 91, 93],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 핸드폰 판매
function answer(employee) {
  let result;
  let max = 0;
  for (let i = 0; i < employee.length; i++) {
    if (employee[i] > max) {
      max = employee[i];
      result = i + 1;
    }
  }
  return result;
}
let input = [
  [3, 7, 9, 6, 1],
  [2, 7, 1, 4, 3, 0, 5],
  [7, 5, 0, 1, 2, 12, 6],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 무한 뺄셈
function answer(s, e) {
  let result = [];
  result.push(s);
  result.push(e);
  for (let i = 0; i < result.length; i++) {
    if (result[i] - result[i + 1] >= 0) result.push(result[i] - result[i + 1]);
  }
  /*
  while(1) {
    sum = s-e;
    s = e;
    e = sum;
    if(e<0) break;
    result.push(e);
  }
  */
  return result;
}
let input = [
  [9, 3],
  [6, 3],
  [13, 7],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// 대소비교
function answer(s, e) {
  let result = "";
  if (s > e) result = ">";
  else if (s < e) result = "<";
  else if (s == e) result = "=";
  return result;
}
let input = [
  [3, 5],
  [7, 4],
  [2, 2],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// 나누기와 대소비교
function answer(a, b, c, d) {
  let result = 0;
  if (a / b > c / d) result = 1;
  else if (a / b == c / d) result = 0;
  else if (a / b < c / d) result = -1;
  return result;
}
let input = [
  [14, 2, 6, 6],
  [6, 7, 8, 9],
  [18, 2, 36, 4],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2], input[i][3]));
}

//윤년 판별기
function answer(year) {
  let result = false;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) result = true;
  return result;
}
let input = [4, 100, 124, 247, 400];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// ATM 기기
function answer(withdraw, total) {
  let result = total;
  if (withdraw % 5 == 0) {
    result = total - withdraw - 0.5 >= 0 ? total - withdraw - 0.5 : result;
  }
  return result;
}
let input = [
  [40, 130.0],
  [33, 130.0],
  [300, 300.0],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// 네번째 좌표
function answer(x_arr, y_arr) {
  let result = [];
  if (x_arr[0] != x_arr[1]) {
    if (x_arr[0] === x_arr[2]) result.push(x_arr[1]);
    else result.push(x_arr[0]);
  } else {
    result.push(x_arr[2]);
  }
  if (y_arr[0] != y_arr[1]) {
    if (y_arr[0] === y_arr[2]) result.push(y_arr[1]);
    else result.push(y_arr[0]);
  } else {
    result.push(y_arr[2]);
  }
  return result;
}
let input = [
  [
    [5, 5, 8],
    [5, 8, 5],
  ],
  [
    [3, 1, 1],
    [2, 1, 2],
  ],
  [
    [7, 7, 3],
    [4, 1, 1],
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// 최솟값 구하기
function answer(x, y) {
  let min;
  min = Math.min(x, y);
  // 삼항연산자로도
  return min;
}
let input = [
  [16, 3],
  [-3, 1],
  [1000, 525],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// 제곱 구현
function answer(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}
let input = [
  [2, 3],
  [4, 6],
  [1, 100],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// 놀이기구 입장 제한
function answer(user) {
  let result = false;
  if (user.height >= 150) result = true;
  return result;
}
let input = [
  { name: "john", age: 27, height: 181 },
  { name: "alice", age: 12, height: 148 },
  { name: "bob", age: 14, height: 156 },
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// 요일 구하기
//솔루션 참조
function answer(str) {
  let week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
}
let day;
let date = new Date(str);
day = week[date.getDay()];
let input = ["2021-01-27", "2021-02-27", "2021-03-14"];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// 중복 단어 제거
function answer(arr) {
  let new_arr = [];
  const set = new Set(arr);
  for (let value of set) {
    new_arr.push(value);
  }
  /* 바로 배열로 바꿔주는 코드
  new_arr = Array.from(new Set(arr));
  new Set(arr).forEach(function(item){
    new_arr.push(item)
  })
  */
  return new_arr;
}
let input = [
  ["john", "alice", "alice"],
  ["Hello", "hello", "HELLO", "hello"],
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// 배열 내 최댓값 구하기
function answer(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
let input = [
  [1, 6, 5, 2, 3],
  [19, 41, 23, -4, 17],
  [-64, -27, -41, -33, -59],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// 스팸 메일
function answer(str) {
  let spam_flag = false;
  str = str.toLowerCase();
  if (str.includes("advert")) spam_flag = true;
  return spam_flag;
}
let input = [
  "RE: Request documents",
  "[Advertisement] free mobile!",
  "50% off this week (advertising)",
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// 배열 회전
function answer(user) {
  let reverse = [];
  for (let i = user.length - 1; i >= 0; i--) {
    reverse.push(user[i]);
  }
  /*
  let temp;
  for(let i=0; i<user.length/2; i++) {
    temp = user[i];
    user[i] = user[user.length-1-i];
    user[user.length-1-i] = temp;
  }
  reverse = user;
  */
  return reverse;
}
let input = [
  [1, 2, 3, 4],
  [-1, 6, "hello", -15],
  ["apple", "banana", "mango"],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// 문자 교정
// 솔루션 참조
function answer(str) {
  let fix_str = "";

  for (let item of str.split(" ")) {
    fix_str += item[0].toUpperCase() + item.slice(1) + " ";
  }
  return fix_str;
}
let input = [
  "Hello, My name is john",
  "This week is closed due to COVID-19",
  "fifty percent off this week",
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}

// 이차원 배열의 곱셈 함
function answer(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
let input = [
  [[1], [2], [3]],
  [
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ],
  [
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9],
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
