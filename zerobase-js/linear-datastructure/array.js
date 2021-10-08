// ** 솔루션 참조 다시 풀기 -
// 수열 최소값 위치
function answer(nums) {
  let result = [];
  const min = Math.min(...nums);
  for (let i = 0; i < nums.length; i++) {
    if (min === nums[i]) {
      result.push(i);
    }
  }
  return result;
}

let input = [
  [5, 2, 10, 2],
  [4, 5, 7, 4, 8],
  [11, 15, 12, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 체스 세트
function answer(chess) {
  let result = [];
  const piece = [1, 1, 2, 2, 2, 8];
  for (let i = 0; i < chess.length; i++) {
    result.push(piece[i] - chess[i]);
  }
  return result;
}

let input = [
  [0, 1, 2, 2, 2, 7],
  [2, 1, 2, 1, 2, 1],
  [0, 1, 1, 5, 3, 6],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 두 수 최대 합
function answer(nums) {
  let result = [];
  let newarr = nums.sort((x, y) => x - y);
  result.push(newarr[newarr.length - 1]);
  result.push(newarr[newarr.length - 2]);
  return result;
}
//solution
function answer(nums) {
  let result = [];
  result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > result[0]) {
      result[1] = result[0];
      result[0] = nums[i];
    } else if (nums[i] > result[1]) {
      result[1] = nums[i];
    }
  }
  return result;
}
let input = [
  [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],
  [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],
  [
    -15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
    14,
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 일곱 난장이
function answer(dwarf) {
  let result = [];
  let sum = 0;
  let fakenum = 0;
  for (let badge of dwarf) {
    sum += badge;
  }
  fakenum = sum - 100;
  let fake = [];
  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (fakenum == dwarf[i] + dwarf[j]) {
        fake.push(dwarf[i]);
        fake.push(dwarf[j]);
        break;
      }
    }
    if (fake.length != 0) break;
  }
  for (let i = 0; i < dwarf.length; i++) {
    if (fake[0] !== dwarf[i] && fake[1] !== dwarf[i]) {
      result.push(dwarf[i]);
    }
  }
  return result;
}

let input = [
  [1, 5, 6, 7, 10, 12, 19, 29, 33],
  [25, 23, 11, 2, 18, 3, 28, 6, 37],
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 나무 그리기
function answer(height) {
  let str = "\n";
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height - i - 1; j++) {
      str += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
    }
    //굳이 필요없네
    for (let j = 0; j < height - i - 1; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}

let input = [3, 5, 7];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// Two Sum
function answer(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target == nums[i] + nums[j]) {
        result[0] = i;
        result[1] = j;
      }
    }
  }
  return result;
}
//solution
function answer(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] != undefined) {
      return [map[target - nums[i]], i];
    }
    map[nums[i]] - i;
  }
  return [];
}
let input = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// OX 퀴즈
function answer(mark) {
  let result = 0;
  let count = 0;
  for (let i = 0; i < mark.length; i++) {
    if (mark[i] == 1) {
      count++;
      result += count;
    } else {
      count = 0;
    }
  }
  return result;
}

let input = [
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 벽돌 옮기기
function answer(blocks) {
  let cnt = 0;
  let sum = 0;
  for (let i of blocks) {
    sum += i;
  }
  avg = sum / blocks.length;
  for (let i of blocks) {
    if (i > avg) {
      cnt += i - avg;
    }
  }
  return cnt;
}

let input = [
  [5, 2, 4, 1, 7, 5],
  [12, 8, 10, 11, 9, 5, 8],
  [27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 숫자 빈도수 구하기
// 솔루션 참조
function answer(s, e) {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  let num;
  for (let i = s; i <= e; i++) {
    num = i;
    while (num != 0) {
      result[num % 10]++;
      num /= 10;
      num = parseInt(num);
    }
  }
  return result;
}

let input = [
  [129, 137],
  [1412, 1918],
  [4159, 9182],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}

// 달팽이 만들기
// 솔루션 참조
function answer(length) {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = [];
  }
  let direction = 1;
  let x, y, num;
  x = y = num = 0;
  x--;
  while (1) {
    for (let i = 0; i < length; i++) {
      x += direction;
      result[y][x] = ++num;
    }
    length--;
    if (length <= 0) break;

    for (let j = 0; j < length; j++) {
      y += direction;
      result[y][x] = ++num;
    }
    direction *= -1;
  }
  return result;
}

let input = [3, 5, 6];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
