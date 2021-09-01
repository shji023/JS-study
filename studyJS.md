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