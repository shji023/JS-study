// 1번
function solve(bj, one, two) {
  let map = {};
  let prize = 0;
  let winner = "";
  let result = "";
  for (let i of bj) {
    map[i] = 0;
  }
  for (let i of one) {
    prize += 150;
    map[i] = 1;
  }
  for (let i of two) {
    prize += 300;
    map[i] = 1;
  }
  for (let i in map) {
    if (map[i] == 0) {
      prize += 450;
      winner = i;
    }
  }
  result = `${prize}만원(${winner})`;
  return result;
}

// 2번
function solve(pattern, str) {
  const word = str.split(" ");
  const newMap = new Map();
  if (pattern.length !== word.length) return false;
  if (new Set(pattern).size !== new Set(word).size) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (newMap.has(pattern[i]) && newMap.get(pattern[i]) !== word[i])
      return false;
    newMap.set(pattern[i], word[i]);
  }
  return true;
}

// 3번
function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] !== s[i] || !stack) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
}

// 4번
// 5번
