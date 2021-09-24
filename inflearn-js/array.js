// for of - 순회하기
var data = [1, 2, undefined, NaN, null, ""];
Array.prototype.getIndex = function(){};

data.forEach(function(value){
    console.log("value is", value);
})
for(let idx in data){
    console.log(data[idx]);
    // for in 을 사용할 경우 funcion(){} 까지 같이 출력 - 문제
}
for(let value of data){
    console.log(value);
    // funcion(){} 출력되지 않음 
}
// 배열 뿐 만 아니라 문자열도 순회 가능
var str = "hello world!!!";
for(let value of str){
    console.log(value);// "h" "e" ...
}

//spread operator - 배열의 복사
let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(pre, newData); // ["apple", "orange", 100] ["apple", "orange", 100]
// 같은 데이터는 아님. 메모리의 새로운 공간에 새로운 배열로. 같은 참조 유지x 

//spread operator - 활용
let pre = [100, 200, "hello", null];
let newData = [0,1,2,3, ...pre, 4];
console.log(newData);//[0,1,2,3, 100, 200, "hello", null, 4]
function sum(a, b, c){
    return a+b+c;
}
let pre = [100, 200, 300];
//배열 그대로를 전달하고 싶을 경우
// 펼쳐지면서 a, b, c로 들어감
sum.apply(null, pre);
sum(...pre)

//from method
function addMark(){
    let newData = [];
    for(let i=0; i<arguments.length; i++){
        newData.push(arguments[i]+"!");//argument 활용 - 가변적인 파라미터 들어올 경우
    }
    console.log(newData);
}
function addMark(){
    let newArray = Array.from(arguments);//arguments로 부터 배열을 만듬
    let newData = arguments.map(function(value){
        return value + "!"; // map 을 사용하여 순회 but, arguments는 배열이 아님 ->진짜배열로 바꿔주기 위해 from 사용
    });
    console.log(newData);
}
addMark(1, 2, 3, 4, 5)