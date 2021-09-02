[바닐라 JS로 크롬 앱 만들기](https://nomadcoders.co/javascript-for-beginners) 강의 바탕으로 추가 공부한 내용을 정리하였습니다.

## let, const, var
**const**
절대로 변경되지 않을 변수

**let**
변경될 수 있음. 블록 유효 범위.
같은 변수를 같은 함수나 블록 범위 내에서 재선언 하면 SyntaxError

```
//같은 변수 사용 에러 발생
let a = "hi";
let a = "hello";

//블록범위
let toPrint = "Hello World.";
{
  let toPrint = "Goodbye World.";
}
console.log(toPrintt); // Prints 'Hello World'
```

**var**
오래되어 사용하지 않음. 블록 범위 무시하고 전역변수나 함수 지역변수로 선언
```
//같은 변수 사용 에러 발생x
var a = "hi";
var a = "hello";
console.log(a); // hello

//블록 범위 무시
var toPrint = "Hello World.";
{
  var toPrint = "Goodbye World.";
}
console.log(toPrint); // Prints 'Goodbye World.'
```
이처럼 var은 똑같은 이름의 변수를 사용해도 에러를 발생하지 않기에 변수가 많아질 경우 혼동을 줄 수 있다. 

const 와 let을 구분하여 사용하는 것은 선언한 변수가 앞으로 변경될 가능성이 있는지를 나타내기에 중요하다. 다른 개발자가 코드를 쉽게 이해할 수  있도록 구분하여 사용하자. 주로 const를 사용하며 필요에 따라 let을 쓰고 var은 사용하지 않는다.

## const 객체
```
const player = {
  name: "zigong",
  age: 11,
  skill: "javascript",
};

player.age = 21; // 변경 가능 
player = false; // Error
```
const 는 수정할 수 없다. object안의 무언가를 수정하는것이기에 가능. 
에러는 const로 선언된 객체가 하나의 값으로서 업데이트 할 때 발생.

## object안에 함수
```
const player = {
  name: "zigong",
  sayHello: function (to) {
    console.log("hello!" + to);
  },
};

player.sayHello("nana");
```

## null, undefined
**null**
비어있음

**undefined**
변수에 값을 부여하지 않은 상태

## document
자바스크립트에서 HTML문서의 요소를 가지고 오는 방법에 대해 알아보았다.<br />
자바스크립트는 HTML과 연결되어 있기에 document.를 활용하여 요소를 가지고 올 수 있다.  
- document.getElementById
  ```
  .html
  <h1 id="title">hello</h1>
  
  .js
  const title = document.getElementById("title");
  ```
- document.getElementsByClassName
    ```
  .html
  <h1 class="title">hello</h1>
  <h1 class="title">hi</h1>
  <h1 class="title">nice</h1>

  .js
  const title = document.getElementsByClassName("title");
  console.log(title.length) //3
  ```
- document.getElementsByTagName
  ```
  .html
  <div class="title">
    <h1>hello</h1>
  </div>

  .js
  const title = document.getElementsByTagName("h1");
  ```
- document.querySelector <br />
  element를 css 방식으로 검색 가능
  ```
  .html
  <div class="title">
    <h1>hello</h1>
  </div>

  .js
  const title = document.querySelector(".hello h1");
  console.log(title) // <h1>hello</h1>
  ```
  *querySelector는 첫번째요소 하나만 가져옴
  ```
  .html
  <div class="title">
    <h1>hello 1</h1>
  </div>
  <div class="title">
    <h1>hello 2</h1>
  </div>
  <div class="title">
    <h1>hello 3</h1>
  </div>

  .js
  const title = document.querySelector(".hello h1");
  console.log(title) // <h1>hello 1</h1>
  ```
- document.querySelectorAll <br />
  위의 예시결과 > NodeList(3) [h1, h1, h1]

## Events
```
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  console.log("title was clicked")
}
title.addEventListener("click", handleTitleClick);
```
click 이벤트가 발생하면 두번째 인자인 함수가 실행이 됨

property 이름에 on이 들어있다면 event listener
- onclick, onchange, oncopy ... 
```
function handleMouseEnter(){
  console.log("mouse enter")
}
title.addEventListener("mouseenter", handleMouseEnter);
//same as
title.onmouseenter = handleMouseEnter;
```
