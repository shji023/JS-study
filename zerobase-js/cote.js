// -> 다시복습
// 문자열을 정수로 바꾸기
function solution(s) {
  var answer = 0;
  answer = Number.parseInt(s);
  return answer;
}
//solution
// 자동 타입캐스팅 활용 방법
function solution(s) {
  return s / 1;
}

// 짝수와 홀수
function solution(num) {
  let answer = "";
  answer = num % 2 === 0 ? "Even" : "Odd";
  return answer;
}
//solution
//그냥 깔끔하게 한번에 return num % 2 ? :"Odd" : "Even";

// 2016년
function solution(a, b) {
  let tmp = 5;
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let year = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 0; i < a; i++) {
    tmp += year[i];
  }
  tmp += b - 1;
  return day[tmp % 7];
}
//solution
function solution(a, b) {
  let answer,
    day = new Date(2016, a - 1, b).getDay();

  switch (day) {
    case 0:
      answer = "SUN";
      break;
    case 1:
      answer = "MON";
      break;
    case 2:
      answer = "TUE";
      break;
    case 3:
      answer = "WED";
      break;
    case 4:
      answer = "THU";
      break;
    case 5:
      answer = "FRI";
      break;
    case 6:
      answer = "SAT";
      break;
  }
  return answer;
}
function solution(a, b) {
  return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
    new Date(2016, a - 1, b).getDay()
  ];
}
// solution 참조
// 폰켓몬 - 다시 풀어보기
function solution(nums) {
  let n = nums.length / 2;
  let m = new Set(nums).size;
  return m > n ? n : m;
}
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];
  return arr.length > max ? max : arr.length;
}
// 가운데 글자 가져오기
function solution(s) {
  var str = s;
  var len = s.length;
  if (str.length % 2 == 0) {
    var x = s.substr(len / 2 - 1, 2);
    return x;
  }
  if (str.length % 2 == 1) {
    var x = s.substr(len / 2, 1);
    return x;
  }
  return x;
}
// solution
function solution(s) {
  return s.substr(Math.round(s.length / 2) - 1, s.length % 2 == 0 ? 2 : 1);
}
function solution(s) {
  return s.slice(parseInt((s.length - 1) / 2), Math.round((s.length + 1) / 2));
}

// 문자열 내 마음대로 정렬하기

// 직사각형 별찍기
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    let row = "";
    for (let j = 0; j < a; j++) {
      row = row + "*";
    }
    console.log(row);
  }
});

// 두 정수 사이의 합
function solution(a, b) {
  var answer = 0;

  if (a <= b) {
    for (let i = a; i <= b; i++) answer = answer + i;
  }
  if (a > b) {
    for (let i = b; i <= a; i++) answer = answer + i;
  }
  return answer;
}

// 부족한 금액 계산하기
// k번째 수
// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
    }
  }
  if (!answer.length) {
    answer.push(-1);
    return answer;
  } else {
    answer.sort((x, y) => x - y);
    return answer;
  }
}
//solution
function solution(arr, divisor) {
  let answer = arr.filter((n) => n % divisor == 0);
  return answer.length ? answer.sort((x, y) => x - y) : [-1];
}
// 같은 숫자는 싫어
function solution(arr) {
  var answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
