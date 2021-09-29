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

//반복문
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

let date_params_1 = new Date(2021, 0, 1);
let date_params_2 = new Date(Date.UTC(2021, 0, 1, 6, 12, 18, 24));
let date_params_3 = new Date(Date.UTC(2021, 0, 1));
console.log(date_params_1);
console.log(date_params_2);
console.log(date_params_3);
