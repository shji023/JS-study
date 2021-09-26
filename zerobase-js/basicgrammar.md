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