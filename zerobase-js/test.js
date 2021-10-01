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
console.log(solution([5, 9, 7, 10], 5));
