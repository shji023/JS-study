//let
//전역변수
var name = "global var";

function home() {
    //지역변수
    var homevar = "homevar";
    for(var i=0; i<100;i++){
    }
    console.log(i)//100
    for(let t=0; t<100;t++){
        // let은 for문 안에서만 유효
    }
    console.log(t)// t is not defined
}

home();

//let과 closure
var list = document.querySelectorAll("li");
for (var i=0; i<list.length; i++){
    list[i].addEventListener("click", function(){
        console.log(i+"번째 리스트 입니다"); // i 값은 콜백 밖에 있는 변수 값을 참조, i는 closure 변수

    });         
}
//closure 때문에 '4번째 리스트 입니다' 만 출력되는 문제
/*
콜백함수(Callback Function)
파라미터로 함수를 전달받아, 함수의 내부에서 실행되는 함수
*/
//var -> let
for (let i=0; i<list.length; i++){
    list[i].addEventListener("click", function(){
        console.log(i+"번째 리스트 입니다"); //0~4 번째 리스트 입니다
    });         
}

//const - 선언된 변수 지키기
function home(){
    var homename = 'my house';
    console.log(homename) //my house
    homename  = "your house";
    console.log(homename) //your house
}

function home(){
    const homename = 'my house';
    console.log(homename) //my house
    homename  = "your house";
    console.log(homename) //TypeError:assignment to constant variable
    //const를 기본으로 사용
    //변경이 될 수 있는 변수는 let을 사용
    //var는 사용하지 않는다.
}
home();

//const특성과 immutable array
function home(){
    const list = ["apple", "orange", "watermelon"];
    list.push("banana");
    console.log(list) //["apple", "orange", "watermelon","banana"]
    //const 를 사용하더라도 배열과 오브젝트의 값을 변경(추가, 삭제 등등)하는 것은 가능하다.
    //값을 재할당하는 경우 불가능
}
//immutable array를 어떻게 만들지?
//뒤로 가기, 앞으로 가기
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list, list2) //["apple", "orange", "watermelon"] ["apple", "orange", "watermelon","banana"]

home();