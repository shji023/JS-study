## Javascript 
- 객체 기반의 스크립트 프로그래밍 언어
- ECMAScript 사양을 준수하는 범용 스크립팅 언어
- 웹의 동적 동작을 구현하기 위해 제작
- Mocha -> LiveScript -> JavaScript로 명칭 변경
-  JS 엔진 위에서 수행됨

### ECMAScript
- Ecma International (정보 통신에 대한 표준을 제정하는 비영리 표준화 기구) 이 ECMA-262 (범용 목적의 스크립트 언어 명세 기술) 기술 규격에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어
- 자바스크립트를 표준화하기 위해 만들어졌으며, 액션 스크립트와 J스크립트 등 다른 구현체도 포함

## 기본 입출력 I/O
- 사용자가 프로그램과 상호작용하기 위한 방법
- OS에서의 대표적인 입출력 "표준 입력/표준 출력/ 표준 오류 출력"
  - 표준 입력(stdin) - 키보드의 응답
  - 표준 출력(stdout) - 모니터에 출력

## 식별자
- 스크립트에서 변수나 함수에 이름을 붙일 때 사용
- 대소문자를 구별하며 유니코드 문자셋을 이용
- 자바스크립트 내 식별자 규칙 
  - 키워드 사용 불가
  - 숫자로 시작 불가 
  - 특수문자는 _와 $만 허용
  - 공백 문자는 포함 불가 

## 주석
// 또는 /* */

## 변수와 상수
### 변수
- 변경 가능한 값을 저장하기 위한 기억 공간
- 사용하기 전 반드시 선언 필요
- 중복 선언 불가능
- 키워드 : let

### 상수
- 변경 불가능한 값을 저장하기 위한 기억 공간
- 사용하기 전 반드시 선언 필요
- 중복 선언 불가능
- 키워드 const
- 초기에 설정한 값이 그대로 유지

### 호이스팅
- 코드에 선언된 변수 및 함수를 유효한 범위의 코드 상단으로 끌어올리는 작업
- var의 변수/함수의 선언만 위로 올려지고, 할당은 올려지지 않음
- let/const 변수 선언과 함수 표현식에서는 호이스팅이 발생하지 않음
```
//var
console.log(name); //undefined
const name = "candy";
console.log(name); //candy

//실제 동작 - hoisting 발생
var name;
console.log(name);
name = "candy";
console.log(name);

//let
console.log(name); // error
let name = "candy";
```

## 자료형
- 목적에 따라 특별한 성질이나 정해진 범주를 갖고 있는
- JS는 6가지의 원시 타입 자료형과 1가지의 객체 타입 자료형으로 구성
<table>
  <thead>
      <tr>
          <th>구분</th>
          <th>데이터 타입</th>
          <th>설명</th>
      </tr>
  </thead>
  <tbody>
      <tr>
        <td rowspan="6">원시 타입(primitive type)</td>
        <td>Boolean</td>
        <td>true, false</td>
      </tr>
      <tr>
        <td>null</td>
        <td>존재하지 않거나 유효하지 않은 주소 표시</td>
      </tr>
      <tr>
        <td>undefined</td>
        <td>선언 후 값을 할당하지 않은 변수</td>
      </tr>
      <tr>
        <td>number</td>
        <td>정수, 실수 등의 숫자</td>
      </tr>
      <tr>
        <td>string</td>
        <td>빈 문자열이나 글자들을 표현하는 문자열</td>
      </tr>
      <tr>
        <td>symbol</td>
        <td>문자열과 함께 객체 property로 사용, ES6에 추가</td>
      </tr>
      <tr>
        <td>객체 타입(ojbect type)</td>
        <td>object</td>
        <td>두개 이상의 복잡한 개체 저장 가능</td>
      </tr>
  </tbody>
</table>

## 원시타입
### typeof
- 인수의 자료형을 반환하는 연산자
- 연산자인 typeof x와 함수인 typeof(x)로 문법 지원

### boolean
- boolean은 논리적인 값을 표현하는 자료형
- true, false
- 조건문 등에서 동작 판단의 기준으로 사용

### null
- 값이 비어있다는 의미
- nothing, empty, unknown 

### undefined
- 값이 할당되어 있지 않은 상태
- 변수 선언 후 초기화 하지 않았을 경우

### number
- 정수, 부동소수점 숫자를 표현함
- 사칙연산
- infinity, -infinity, NaN 특수 숫자 값 포함
- bigint 아주 큰 자료형 필요 시

### string
- 문자, 문자열 표현
- 큰 따옴표, 작은 따옴표, 백틱

## 객체 타입
### object
- 다수의 원시 자료형을 포함하거나 복잡한 개체를 표현할 수 있음
- Object() 혹은 {}를 통해 생성
- key:value 형태, object.key로 접근
- 추가 - obj.key = value, 삭제 - delete
- 객체 복사 문제 
  ```
  let user = {
    name:"jy",
    age:25,
  }
  let admin = user; //객체 복사
  admin.name = "hyun";
  console.log(user.name);//hyun - 문제 발생
  ```
  - object의 값을 복사할 때는 대상 전체가 아닌 object내 주소 값만 복사되는 문제
    - 주소값이 같으니 같은 공간을 가르키게됨
  - 가리키는 대상 전체를 복사하기 위해서는  <b>얕은 복사, 깊은 복사 </b> 통해 가능

### 얕은 복사
```
let user = {
  name:"jy",
  age:25,
}

// for 반복문
let admin = {};

for (let key in user) {
  admin[key] = user[key];
}

// Object함수 이용
let admin = Object.assign({},user);

// Spread Operator
let admin = {...user}; // {user.name, user.age}
```
- 객체안의 객체는 복사 되지 않음

### 깊은 복사
```
let user = {
  name:"jy",
  age:25,
  sizes: {
    height: 180,
    weight: 70,
  },
};

// stringfy: js object -> string, parse: string -> js object
let admin_json = JSON.parse(JSON.stringfy(user));

```
- .JSON 객체를 이용한 깊은 복사, stringfy는 객체를 문자열로 변환하는데 이때 원본 객체와의 참조가 끊김

## 형 변환
- 자바스크립트는 느슨한 타입 언어, 동적 타입 언어 - 변수의 <b>자료형을 명시적으로 선언할 필요가 없음</b>
- 연산자로 인한 계산이나 변수에 전달되는 값은 자동으로 <b>암묵적</b> 형 변환 수행
- 강제적 형 변환을 위해서는 자료형 함수를 이용해 <b>명시적</b>형 변환 수행
  
### String
```
String(123) // 123
String(1/0) // Infinity
String(NaN) // NaN
String(undefined) //undefined
String(null) //null
```
### Number
- Number는 정수와 실수를 모두 포함하는 자료 형 변환이므로, 정수 혹은 실수의 명시적 변환은 parse함수 이용
- 정수변환 : parseInt(피연산자), 실수 변환: parseFloat(피연산자)
```
Number("") // 0
Number("123") // 123
Number("hello") // NaN
Number(true) // 1
Number(null) // 0
Number(undefined) // NaN

pareseInt("123.456") // 123
parseFloat("123.456") // 123.456
```

### Boolean
```
Boolean("") // false
Boolean("123") // true
Boolean("hello") // true
Boolean(123) // true
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
```

## 연산자
- 프로그램에서 데이터를 처리하여 결과를 산출할 목적으로 사용
- 연산되는 대상은 피연산자, 피연산자의 갯수에 따라 단항/이항/삼항 연산자 종류 존재
### 단항 연산자
- 부호 연산자 +, -
- 증감 연산자 ++, --
- 논리 연산자 !(NOT)
- 비트 연산자 ~
  
### 이항 연산자
- 산술 연산자 +, -, *, /, %, **
- 대입 연산자 =, +=, -=
- 비교 연산자 ==, !=, ===
  - == 은 단순 값의 같음을 비교하는 동등 비교, === 는 자료형까지 같음을 판단하는 일치 비교
  ```
  1 == '1' // true
  1 === '1' // false
  "z">"a" //true 알파벳 뒤에 있으면 큰거
  "hello" < "hello" // true 문자 똑같은데 같은데 길면 긴게 큰거
  ```
- 논리 연산자 && (AND), || (OR)

### 삼항 연산자
```
(조건식)? 참일 경우의 식: 거짓일 경우의 식
```

## Scope
- 변수 혹은 상수에 접근할 수 있는 범위
- 모듈 / 함수 내 코드에서 동일한 변수 사용시 간섭을 줄이는 용도로 사용
- Global Scope, Local Scope의 타입으로 구분
  - Global Scope: 전역에 선언되어 어디에서도 접근 가능
  - Local Scope(block, function level scope): 특정 지역에 선언되어, 해당 지역 내에서만 접근 가능
```
//global 레벨
let index = 100;

//function 레벨
function example(){
  let index = 10;

  //블록레벨
  for (let index=0; index<10; index++){
    console.log(index); // 0 ~ 9
  }
  console.log(index); // 10
}
 
example();
console.log(index); //100

```

## 조건문
### if-else
- 알고리즘에서 논리적 비교할 때 사용되는 조건식
- if, if else, else키워드를 통해 구성되며, 조건식에 맞을 경우 중괄호 {} 내에 있는 명령문 수행
- 단일 문장을 실행할 경우 {} 생략 가능

### 3항 연산자
- if-else 대체 가능
- 변수 = (조건식) ? 참일 경우의 식 : 거짓일 경우의 식

### switch
- switch는 표현식을 평가하여 그 값이 일치하는 case문을 실행하는 조건문
- switch, case, break, default를 통해 구성, switch의 조건에 맞는 case구문 수행
- 하나의 case만 수행 되도록 case끝엔 break 사용하기

## 반복문
### for
- for(선언문; 조건문; 증감문){  } 형태
- 조건문이 fail이 되기 전까지 코드 블록을 계속적으로 반복 수행
- 선언문, 조건문, 증감문 자리에 공백 입력 가능
- 선언문 조건문 증감문 분리
  ```
  let num = 0;
  for(; num < 2; ){
    console.log(num);
    num++;
  }
  ```
### for ..in
- 객체의 key, value형태를 반복하여 수행하는데 최적화
- 첫번째 부터 마지막까지, 객체의 키 개수 만큼 반복
```
const person = {
  fname:"jy",
  lname:"h",
  age: 25,
};
let text = "";
for (let x in person) {
  text+=person[x];
}
console.log(text); // hjy25
```

### for..of
- Collection 객체 자체가 Symbol.iterator 속성(property)을 가지고 있어야 동작 가능
- ES6에 새로 추가된 Collection 기반 반복 구문
```
let language = "javascript";
let text = "";
for (let x of language) {
  text += x;
}
console.log(text); // j \n a \n ... t
```

### while
- 조건문이 참일 때 코드블록을 계속해서 반복 수행하는 반복문
- 선언문과 증감문 없이 loop수행, 무한 loop 수행 시 많이 사용
- 조건문을 코드 블록보다 아래로 옮긴 do ... while반복문도 존재(최초 한번 수행(do에서)이 필요할 때)

### 제어
<b>break</b>
- 반복문 수행 시 코드 블록을 탈출할 때 사용
- 다중 반복문일 경우 가장 안쪽의 반복문을 종료
- Label을 통하여 다중 반복문을 한번에 종료 가능
  - Label : 반복문 앞에 콜론과 함께 쓰이는 식별자
    - 프로그램 내 특정 영역을 지정하여 별도 이름을 붙이는 식별자
    - break와 continue를 사용하는 반복문 안에서만 사용 가능하면, break나 continue 지시자 위에 있어야함
    ```
    end: for(let i=0; i<3; i++) {
      for(let j=0; j<3; j++) {
        console.log(i);
      }
      break end;
    } 
    ```

<b>continue</b>
- 반복문 수행 시 코드 블록 실행을 해당 라인에서 중지하고 블록 코드를 종료 시킨 후 반복문 내 명시된 조건 판단

## 함수
- 다수의 명령문을 코드블록으로 감쌈. 하나의 실행 단위로 만든 코드의 집합
- 유사한 동작을 하는 코드를 하나로 묶어, 범용성을 확대시킨 블록 코드
- 정의 부분과 호출 부분으로 구성
- 가급적 한가지 일만 하며, 매개 변수는 최대 3개 이내 작성 권장

### 함수 선언식
```
function add (x, y) {
  return x + y;
}
```
### 함수 표현식
```
const add = function (x, y) {
  return x + y;
}
```

### 화살표 함수 
```
const add = (x, y) => x + y;
```

### 호출
- 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않음
- ES6에서 도입된 기본값을 통해 undefined 변수가 들어올 경우 값 초기화 지정 가능
```
// default 값
function add(x, y=10) {
  console.log(x + y);
}
add(10, 20, 30); // 30
add(10, 20); // 30
add(10); // 20
add(); // NaN

// dynamic parameters
function min() {
  console.log(arguments[0]-arguments[1]);
}
min(10, 20, 30); // -10
min(10, 20); // -10
min(10); // NaN
min(); // NaN
```

### 반환
- return 후 코드는 수행되지 않음. default return value는 undefined
```
function dummy() {}
console.log(dummy()); // undefined
```

### 재귀함수
- 함수 스스로 자신을 참조해 호출 하면서 동일한 코드가 계속적으로 수행되는 함수 호출 방법
- 특정 조건이 됐을 때 자신을 그만 호출되도록 제한하는 exit code 필요
```
function recur(num) {
  if(num == 0) return;
  recur(num - 1);
}
return(3)

function factorial(num) {
  if(num == 0) return 1;
  return num * factorial(num - 1);
}
```

### 콜백함수
- 다른 함수의 매개변수로 전달되어 수행되어지는 함수
- 고차함수란 매개변수를 통해 함수를 받아 호출되는 함수
```
function callback_func() {
  console.log("this is callback function");
}
fuction higher(callback) {
  console.log("this is higher function");
  callback();
}
higher(callback_func);

//예제
function add(x,y) {
  return x+y;
}
function sub(x,y) {
  return x-y;
}
function mul(x,y) {
  return x*y;
}
function div(x,y) {
  return x/y;
}
function calculator(callback, x, y) {
  return callback(x, y);
}
calculator(add, 7, 3);
calculator(sub, 7, 3);
calculator(mul, 7, 3);
calculator(div, 8, 2);
```

### call by*
<b>call by value</b>
- 값에 의한 복사로 함수 내에서 매개 변수 값을 변경 시켜도 영향이 미치지 않음
- 원시 타입을 매개 변수로 넘겼을 때 발생
```
let a = 1;
let add = function (b) {
  b = b+1;
}
add(a);
console.log(a); //2
```
<b>call by reference</b>
- 주소에 대한 복사로 함수 내에서 매개 변수 내 값을 변경시키면 원본 데이터에도 영향을 받음
- 객체 타입(object type)을 매개 변수로 넘겼을 때 발생
```
var a = {v:1};
let add = function (b) {
  b.v = b.v+1;
}
add(a);
console.log(a.v); //2
```

### 함수 저장
- 배열의 요소 혹은 객체의 속성에 함수 정의 하여 저장 가능 
```
let list = ["jy", 25, function hello_func() {console.log("hello")}];
let obj = {
  name:"jy",
  age: 25,
  hello_func() {
    console.log("hello");
  }
}
function hello_func() {console.log("hello");}
```

### method
- 객체에 저장된 값이 함수인 경우. 위의 예시에서 obj의 hello_func
- 객체 내 초기 선언된 함수를 다른 함수로 변경 가능

### this
- 메서드에서 객체 내부의 속성값을 접근할 수 있는 지시자
```
let obj = {
  name:"jy",
  age: 25,
  hello_func() {
    console.log("hello" + this.name);
  }
}

let user = {name:"jy"};
let admin = {name:"admin"};
function hello_func() {
  console.log("hello" + this.name);
}
user.func = hello_func;
admin.func = hello_func;

user.func();
admin.func();

//객체접근 다른방법
user["func"]();
admin["func"]();
```

## Number
### 지수/진법
<b>지수 표기법</b>
- 아주 큰 숫자나 아주 작은 숫자를 표기하게 위해 지수 표기법(e)로 0의 개수를 대체 표기 가능
```
let billion_1 = 1000000000;
let billion_2 = 1e9;
let us = le-6; // 0.000001, 왼쪽으로 6번 소수점 이동
```

<b>진법 표기</b>
- 진법 표기를 지원하게 위해 0x(16진수), 0o(8진수), 0b(2진수)로 N진수 표기 가능
```
0x0f // 15
0o17 // 15
0b1111 //15
```

### 대표 메서드
<b>형 변환</b>
- Number to String: Number.toString(), String(Number), Number+""
  
<b>자리 수 표현</b>
- 소수의 자리 수 길이를 제한: Number.toFixed(pos)
- 정수와 소수의 자리 수를 합한 길이로 제한: Number.toPrecision(pos);