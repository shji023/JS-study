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
파라미터로 함수를 전달받아, 함수의 내부에서 실행되는 삼후

*/