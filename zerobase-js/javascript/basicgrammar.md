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
```js
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
  ```js
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
```js
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
```js
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
```js
String(123) // 123
String(1/0) // Infinity
String(NaN) // NaN
String(undefined) //undefined
String(null) //null
```
### Number
- Number는 정수와 실수를 모두 포함하는 자료 형 변환이므로, 정수 혹은 실수의 명시적 변환은 parse함수 이용
- 정수변환 : parseInt(피연산자), 실수 변환: parseFloat(피연산자)
```js
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
```js
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
  ```js
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
```js
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
  ```js
  let num = 0;
  for(; num < 2; ){
    console.log(num);
    num++;
  }
  ```
### for ..in
- 객체의 key, value형태를 반복하여 수행하는데 최적화
- 첫번째 부터 마지막까지, 객체의 키 개수 만큼 반복
```js
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
```js
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
    ```js
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
```js
function add (x, y) {
  return x + y;
}
```
### 함수 표현식
```js
const add = function (x, y) {
  return x + y;
}
```

### 화살표 함수 
```js
const add = (x, y) => x + y;
```

### 호출
- 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않음
- ES6에서 도입된 기본값을 통해 undefined 변수가 들어올 경우 값 초기화 지정 가능
```js
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
```js
function dummy() {}
console.log(dummy()); // undefined
```

### 재귀함수
- 함수 스스로 자신을 참조해 호출 하면서 동일한 코드가 계속적으로 수행되는 함수 호출 방법
- 특정 조건이 됐을 때 자신을 그만 호출되도록 제한하는 exit code 필요
```js
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
```js
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
```js
let a = 1;
let add = function (b) {
  b = b+1;
}
add(a);
console.log(a); //2
```js
<b>call by reference</b>
- 주소에 대한 복사로 함수 내에서 매개 변수 내 값을 변경시키면 원본 데이터에도 영향을 받음
- 객체 타입(object type)을 매개 변수로 넘겼을 때 발생
```js
var a = {v:1};
let add = function (b) {
  b.v = b.v+1;
}
add(a);
console.log(a.v); //2
```

### 함수 저장
- 배열의 요소 혹은 객체의 속성에 함수 정의 하여 저장 가능 
```js
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
```js
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
```js
let billion_1 = 1000000000;
let billion_2 = 1e9;
let us = le-6; // 0.000001, 왼쪽으로 6번 소수점 이동
```

<b>진법 표기</b>
- 진법 표기를 지원하게 위해 0x(16진수), 0o(8진수), 0b(2진수)로 N진수 표기 가능
```js
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

<b>자료형 확인</b>
- 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값(NaN)인지 확인: Number.isNaN()
- 정상적인 유한 수 인지 확인: Number.isFinite()

<b>정수와 실수형 변환</b>
- 정수로 변환하는 방법 (N진수로 명시적 변환도 가능): Number.parseInt()
- 실수로 변환하는 방법: Number.parseFloat()
```js
Number.parseInt("125px"); // 125 -> 단위도 변환가능!
== parseInt("125px");
Number.parseInt("1.25em"); // 1.25 -> 단위도 변환가능!
```

## String
- 자바스크립트에서는 글자 하나만 저장할 수 있는 char자료형이 없음
- 페이지 인코딩 방식과 상관없이 항상 UTF-16 형식을 따름
```js
console.log("줄\n바꿈"); //줄 <줄바꿈> 바꿈
console.log("줄\r바꿈"); //줄 <줄바꿈> 바꿈
console.log("\\슬래시"); // \슬래시
console.log("탭\t탭"); // 탭  탭
console.log("유니\u{1F60D}코드"); // 유니😍코드
```
### 길이 
- String.length (개행문자도 길이 취급)
### 접근
- String.charAt(index), String.charCodeAt(index) - 아스키코드 값 출력, String[index]
### 검색
- 문자열 검색(index): String.indexOf(substr, pos), String.lastIndexOf(substr, pos)
- 문자열 검색(bool): String.includes(substr, pos), String.startsWith(substr, pos), String.endsWith(substr, pos)
### 대소문자 변환
- str.toUpperCase()
- str.toLowerCase()
### 치환 
- 처음 만나는 요소 문자열 치환: String.replace(원래 문자열, 바꿀 문자열)
- 정규 표현식 활용 문자열 치환: 치환 문자열에 정규표현식 기입 -> /치환문자열/g(전체)i(대소문자 구분X)
  - 코딩테스트에서는 허용x
```js
let text = "helLo, world";
console.log(text.replace(/l/g, "i")); // heiLo, worid!!!
console.log(text.replace(/l/gi, "i")); // heiio, worid!!!
```
### 추출
- 위치 기반
  - String.slice(start, end)
  - String.substring(start, end) : end > start => start > end
  ```js
  let text = "hello, world";
  console.log(text.slice(2, 6)); // llo,
  console.log(text.slice(6, 2)); //
  console.log(text.substring(2, 6)); // llo,
  console.log(text.substring(6, 2)); // llo,
  ```
- 길이 기반: String.substr(start, length)

### 분할
- 배열로 문자열 분할: String.split(Separator, limit)
```js
let fruits = "apple strawberry peach"
result = fruits.split(" "); // ['apple','strawberry,'peach']
let text = "apple"
result = fruits.split(""); // ['a','p,'p','l','e']
```

## 배열
- 여러 개체(Entity)값을 순차적으로 나열한 자료구조
- property, method

### 선언/접근/속성
- 선언: new Array() or [], 사이즈 혹은 값을 입력하여 초기화도 가능
- 접근: Array[index]
- 속성: Array.length

### 배열의 실체
- 자바스크립트에서 배열은 Hash 기반의 객체
- 메모리가 연속적인 밀집 배열가 아닌 비 연속적인 희소 배열
```js
let numbers = [];
numbers.push("one");
numbers.push("two");
console.log(numbers.length); // 2
console.log(numbers) // ['one', 'two']

numbers["once"] = "once";
numbers["twice"] = "twice";
console.log(numbers.length); // 2
console.log(numbers) // ['one', 'two', once:'once', twice:'twice']
Object.getOwnPropertyDescriptors(numbers); //희소배열이구나
```
### 타입확인 및 요소 삭제 
- 타입확인: Array.isArray(value)
- 요소삭제: delete array[index]
  - 삭제해도 배열 사이즈가 그대로인 문제 발생

### 배열 조작
<b>추가/삭제 Back</b>
- Array.push(element)
- Array.pop()

<b>추가/삭제 Front</b>
- 추가: Array.unshift(element)
- 삭제: Array.shift() 

<b>삭제/변경(index)</b>
- Array.splice(index[,deleteCount, elem1, ..., elemN])

```js
let fruits = ["apple","strawberry","peach"];
fruit.splice(1) // ["strawberry","peach"];
fruits // ["apple"]

fruits = ["apple","strawberry","peach","mango"];
fruit.splice(1,1) // ["strawberry"];
fruits // ["apple","peach","mango"];

fruit.splice(1,1,"banana","kiwi") // ["peach"];
fruits // ["apple","banana","kiwi","mango"];
```

<b>삭제(index)</b>
- Array.slice([start],[end])
  
<b>병합</b>
- Array.concat(arg1, arg2...)

### 반복문
- 반복문 문법: for ...length(index 접근), for ...of(element 접근), for ...in(key 접근)
  ```js
  for (let x of arr) {
    console.log(x)
  }
  for (let key in arr) {
    console.log(arr[key])
  }
  ```

### 탐색
- index 탐색(앞에서부터): Array.indexOf(item, from)
- index 탐색(뒤에서부터): Array.lastIndexOf(item, from)
- 값 포함 여부 확인: Array.includes(item, from)

### 변형
<b>정렬</b>
- 내림차순 정렬: Array.reverse()
- 오름차순 정렬: Array.sort()

<b>변환</b>
- 문자열로 변환: Array.join(seperator)
```js
let fruits = ["apple","strawberry","peach"];
let str = fruits.join();
str // apple,strawberry,peach
```

## 고차함수
- 하나 이상의 함수를 매개변수로 취하거나 함수를 결과로 반환하는 함수
- 매개변수로 전달되는 함수는 callback 함수

### sort()
- 기존 sort()에 문제점이 있음: 일의 자리 4가 10의 자리보다 뒤쪽에 정렬
- 원인: sort 메서드로 정렬될 때 배열의 요소가 일시저긍로 문자열로 변경되기 때문
```js
let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];
console.log(nums.sort()); //
[
  -1,  0, 1, 10, 12,
   2, 20, 3,  4
]
console.log(nums.reverse()); //
[
  12, 20, 10, 3, 2,
   0,  4, -1, 1
]
```
- 한계: 대소문자 구분없이 정렬하고 싶지만, 대소문자 구분되어 정렬
```js
let nums = ["One", "one", "two", "three"];
console.log(nums.sort()); // [ 'One', 'one', 'three', 'two' ]
console.log(nums.reverse()); // [ 'three', 'two', 'one', 'One' ]
```
1. sort() 함수의 매개변수로 함수를 넣어 고차함수를 이용한 정렬 수행 가능
```js
let ascend = function(x, y) {return x-y};
let desscend = function(x, y) {return y-x};
console.log(nums.sort(ascend)); // [
  -1,  0,  1,  2, 3,
   4, 10, 12, 20
]
console.log(nums.sort(desscend)); // [
  20, 12, 10,  4, 3,
   2,  1,  0, -1
]
```
2. 대소문자 한계 해결
```js
let ascend = function(x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();
  if(x > y) return 1;
  else if (y > x) return -1;
  else return 0;
}

let descend = function(x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();
  if(x < y) return 1;
  else if (y < x) return -1;
  else return 0;
}

let fruits = ["apple","Orange","orange","melon"];
fruits.sort(ascend); // ["apple","melon","Orange","orange"]
fruits.sort(descend); // ["Orange","orange","melon","apple"]
```
3. 콜백함수 ascend, descend 공용화
```js
let ascend = function(x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();
  return x > y ? 1 : -1 ;
}

let descend = function(x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();
  return x < y ? 1 : -1 ;
}

let nums = [1, -2, 4, 0, 10, 20, 12];
nums.sort(ascend); //[
  -1,  0,  1, 4,
  10, 12, 20
]
nums.sort(descend); //[
  20, 12, 10, 4,
   1,  0, -1
]

let fruits = ["apple","Orange","orange","melon"];
fruits.sort(ascend); // ["apple","melon","orange","Orange"]
fruits.sort(descend); // ["Orange","orange","melon","apple"]
```

### forEach()
- 배열 요소 별 콜백 함수 각각에 실행: Array.forEach(function(배열 요소, 배열 위치, 배열){})
```js
let nums = [1, 2, 3];
nums.forEach(function(i){
  console.log(i);
}) 
```

### map()
- 배열 요소 별 함수 호출 및 결과를 배열로 반환: Array.map(function(배열 요소, 배열 위치, 배열){})
```js
let nums = [1, 2, 3, 4, 5];
let use_map = nums.map(function(item){
  return item * 2;
})
use_map // 2, 4, 6, 8, 10
```

### find()  
- 콜백 함수의 조건을 만족하는, 단 하나의 값만 반환: Array.find(function(배열 요소,배열 위치, 배열){})
```js
let users = [
  { name:'bob',age:15, job:false },
  { name:'jane',age:25, job:false },
  { name:'victoria',age:35, job:true },
]
let find_job = user.find(function (user){
  return user.job == false;
})
find_job // { name:'bob',age:15, job:false }
```

### filter()
- 콜백 함수의 조건을 만족하는 값을 배열로 반환: Array.filter(function(배열 요소,배열 위치, 배열){})
```js
let find_job = user.filter(function (user){
  return user.job == false;
})
find_job // [{ name:'bob',age:15, job:false },{ name:'jane',age:25, job:false }]
```

### reduce()
- 요소 별 함수 수행 누적 결과값 반환: Array.reduce(function(accumulator,배열 요소,배열 위치, 배열){})
```js
let nums = [1, 2, 3, 4, 5];
let call_count = 0;

console.log("result\tvalue\tindex");
let sum = nums.reduce(function(accumulator, item, index, array){
  console.log(accumulator, "\t\t", item, "\t\t", index);
  call_count++;
  return accumulator + item;
},0);
// output
result	value	index
0 		 1 		 0
1 		 2 		 1
3 		 3 		 2
6 		 4 		 3
10 		 5 		 4
call_count // 4
sum // 15
```
### some()
- 배열 내 단 하나라도 콜백 함수의 조건을 만족하는 요소가 있다면 true, 아니면 false 반환(빈 배열인 경우 false)
- Array.some(function(배열 요소, 배열 위치, 배열){})

```js
let users = [
  { name:'bob',age:15, job:false },
  { name:'jane',age:25, job:false },
  { name:'victoria',age:35, job:true },
]
let some_job = users.some(function(user)) {
  return user.job == false;
}
some_job // true

let some_age = users.some(function(user)) {
  return user.age < 14;
}
some_job // false

let empty = [].some((item) => item > 16);
empty // false
```

### every()
- 배열 내 모든 요소가 콜백 함수의 조건을 만족한다면 true, 아니면 false 반환(빈 배열인 경우 true)
- Array.every(function(배열 요소, 배열 위치, 배열){})
```js
let every_job = users.every(function(user)) {
  return user.job == false;
}
every_job // false

let every_age = users.every(function(user)) {
  return user.age > 14;
}
some_job // true

let empty = [].some((item) => item > 16);
empty // true

```

## 생성자
- 유사한 객체를 다중으로 만들 때 사용되는 함수(타 언어에서 class라고 보면됨)
- 생성자 함수의 첫 글자는 대문자로 시작
- 생성자 함수로 객체 생성 시 new 연산자를 통해 객체 생성
```js
//붕어빵 틀
function FishBread(flavor, price) {
  this.flavor = flavor;
  this.price = price;
  this.base = "flour";
}
//개별 붕어빵
let bread_1 = new FishBread("cream", 1200); // FishBread {flavor:'cream',price:1200, base:'flour'} 
let bread_2 = new FishBread("redbean", 1000); // FishBread {flavor:'redbean',price:1000, base:'flour'}
let bread_3 = new FishBread("milk", 1500); // FishBread {flavor:'milk',price:1500, base:'flour'}
```
### new.target 
- new가 없을 때 new를 자동으로 붙여주는 스마트한 생성자
- new.target속성을 사용하여 new와 함께 호출했는지 확인 가능
```js
function User(name) {
  console.log(new.target);
  this.name = name;
}
// new를 안썼으니 undefined 뜸
let result_1 = User("join");
console.log(result_1);
// new를 썼으니 정보가 뜸
let result_2 = new User("join");
console.log(result_2);
// new가 없으니 생성해라, new.target이 없을 때 new 키워드 추가하여 호출되도록 처리
function User(name) {
  if(!new.target) {
    return new User(name);
  }
  this.name = name;
}
```

## Collection
- 구조 혹은 비구조화 형태로 프로그래밍 언어가 제공하는 값을 담을 수 있는 공간
- 자바스크립트에서 제공하는 Collection - iterator속성 가지고 있음
  - Indexed Collection - Array, Typed Array
  - keted Collection - Object, Map, Set, WeakMap, WeakSet

### Map
- 다양한 자료형의 key를 허용하고, key-value형태의 자료형을 저장 가능하게 하는 Collection
- Map은 Object대비 비교하면 다양한 key사용을 허용, 값의 추가/삭제 시 메서드를 통해 수행이 필요함

<b>요소 추가/삭제</b>
- 추가: Map.set(key, value)
- 접근: Map.get(key)
- 전체 삭제: Map.clear()
- 다양한 자료형을 key로 사용 가능하며, map.set호출 시 map이 반환되므로 chaining 가능

```js
let map = new Map();
map.set("name","john");
map.set(123, 456);
map.set(true, "bool_type");

map // Map(3) {'name'=>'john', 123 =>456, true=>'bool_type'}
map.get(123) // 456
map.get("name") // john
map.size // 3

map.clear() // Map(0) {}
map.set("name","alice").set(123, 789).set(false, 'bool_type');
map // Map(3) {'name'=>'john', 123 =>789, true=>'bool_type'}
```
<b>반복문</b>
- Collection 객체인 Map이 가지고 있는 iterator 속성을 이용하여 for ...of 구문을 통해 반복문 수행 가능

```js
let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
])

for (let item of recipe_juice.keys()) console.log(item); // strawberry,banana,ice
for (let amount of recipe_juice.values()) console.log(amount); // 50 100 150
for (let entity of recipe_juice) console.log(entity); // ["strawberry", 50]
  ["banana", 100]
  ["ice", 150]
```
<b>Map<->Object변환</b>
- Object.entries(Object), Object.fromEntries(Map)를 통해 Map과 Object간 변환이 가능

```js
let recipe_juice_obj = Object.fromEntries(recipe_juice); // { strawberry: 50, banana: 100, ice: 150 }
let recipe_juice_kv = Object.entries(recipe_juice_obj); // [ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ]
let recipe_juice_map = new Map(recipe_juice_kv); // Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
```

### Set
- value만을 저장하며 중복을 허용하지 않는 Collection
<b>요소 추가/삭제</b>
- 추가: Set.add(value)
- 존재 여부: Set.has(value)
- 삭제: Set.delete(value)
  
```js
let set = new Set(); // Set(0) {}
let num = new Set([1, 2, 3, 4, 5]); // Set(5) { 1, 2, 3, 4, 5 }
let str = new Set('Hello!'); // Set(5) { 'H', 'e', 'l', 'o', '!' }

set.add(1).add(2).add(3); // Set(3) {1, 2, 3}
set.has(10) // false
set.has(2) // true
set.delete(1);
set.delete(-1); // Set(2) {2, 3}
```
<b>반복문</b>
- Collection 객체인 Set이 가지고 있는 iterator 속성을 이용하여 for ...of 구문을 통해 반복문 수행 가능

```js
let str = new Set("Hello!"); // Set(5) {'H','e','l','o','!'}
for (let item of str) console.log(item); // H e l o !
for (let item of str.keys()) console.log(item); // H e l o !
for (let item of str.values()) console.log(item); // H e l o !
for (let item of str.entires()) console.log(item); // [ 'H', 'H' ]
[ 'e', 'e' ]
[ 'l', 'l' ]
[ 'o', 'o' ]
[ '!', '!' ] // [value, value] <-- Map과의 호환성을 위해 존재
```

## Math
- 표준 Built-in 객체, 수학적이 연산을 위한 속성값과 메서드를 제공하는 객체
- Math는 생성자 함수가 아니며, 모든 속성과 메서드는 정적이기에 Math.function()으로 언제든 호출 가능

### 최대/최소/절댓값
- Math.max(...x), Math.min(...x), Math.abs(x)

```js
let nums = [1, -1, 5, 23, 17, -4];
//use apply
Math.max.apply(null, nums)
//use spread
Math.max(...nums)
```

### 속성 및 랜덤
- 0과 1 사이의 난수 랜덤 값: Math.random()

### 제곱/제곱근/소수점처리
- 제곱: Math.pow(x, y)
- 제곱근: Math.sqrt(x)
- 소수점 이하 반올림 정수: Math.round(x)
- 소수점 이하 올림: Math.ceil(x)
- 소수점 이해 내림: Math.floor(x)

## Date
- 표준 Built-in 객체, 날짜와 시간을 위한 속성값과 메서드를 제공하는 객체
- Date객체는 1970년 1월 1일 UTC(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값으로 표현

### 생성자
```js
let date_now = new Date(); // 2021-09-29T13:48:36.929Z
// new 안쓰면 문자열 형태
let date_now_str = Date(); // Wed Sep 29 2021 22:48:36 GMT+0900 (대한민국 표준시)

// default값
let date_ms_1 = new Date(0); // 1970-01-01T00:00:00.000Z
// 하루 뒤
let date_ms_2 = new Date(24*3600*1000); // 1970-01-02T00:00:00.000Z

// string data로 변환
let date_str = new Date("2021-01-01"); // 2021-01-01T00:00:00.000Z

// month는 1월(0) 12월(11)
let date_params_1 = new Date(2021,0,1); // 2020-12-31T15:00:00.000Z (UCT때문에 잘못 나옴)
// UTC 보정
let date_params_2 = new Date(Date.UTC(2021, 0, 1, 6, 12, 18, 24)); // 2021-01-01T06:12:18.024Z
let date_params_3 = new Date(Date.UTC(2021,0,1)); // 2021-01-01T00:00:00.000Z
```

### 날짜
- 년/월/일/요일: Date.getFullYear(), Date.getMonth(), Date.getDate(), Date.getDay()
  - 일요일(0) - 토요일(6)
- 시/분/초/ms: Date.getHours(),getUTCHours(), Date.getMinutes(), Date.getSeconds()
- 현재 시간을 ms로 변환: Date.getTime()
- UTC 0 기준으로 얼마만큼 차이가 있는지 분단위: Date.getTimezoneOffset()

<b>날짜 정보 설정</b>
- 년/월/일: Date.setFullYear(), Date.setMonth(), Date.setDate()
- 시/분/초/ms: Date.setHours(), Date.setMinutes(), Date.setSeconds()
```js
setDate(0) // 이전 달의 마지막날
```

### parse
- 날짜 정보 설정(문자열 기반): Date.parse(YYYY-MM-DDTHH:mm:ss.sssZ)
- 날짜, 구분기호T, 시분초밀리초
- 'Z'(option)-> 미 설정할 경우 현재 로컬 기준 UTC로, 설정할 경우 UTC+0기준으로 설정

### benchmark
- 성능 측정
  - 벤치마크 측정대상 함수 전후로 시간을 비교하여 알고리즘 성능 측정


## N차원 Array
- 배열 안에 N개 만큼의 배열이 존재하는 객체
- 2차원 배열 반복문
```js
let array=[[101, 102, 103], [201, 202, 203],[301, 302, 303]];
for(let i=0;i<array.length;i++) {
  for(let j=0;j<array[i].length;j++) {
    console.log(array[i][j]); // 101 ... 303
  }
}
```