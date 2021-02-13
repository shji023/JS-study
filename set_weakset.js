let mySet = new Set();
console.log(toString.call(mySet));// "[object Set]"
//set :  중복없이 유일한 값을 저장하려고 할 때 /  이미 존재하는지 체크할 때 유용

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");
mySet.forEach(function(v){
    console.log(v); // crong hary
})

console.log(mySet.has("crong")); //true true

mySet.delete("crong"); 
mySet.forEach(function(v){
    console.log(v); // hary
})


//weakset
//참조를 가지고 있는 객체만 저장이 가능
//객체형태를 중복없이 저장할 때 유용

let arr = [1,2,3,4];
let ws = new WeakSet();
ws.add(arr);
console.log(ws); //WeakSet {(4) [1,2,3,4]}

ws.add(111);
ws.add("111"); //invalid
ws.add(null); //invalid
ws.add(function(){});//WeakSet {(4) [1,2,3,4], function}

let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr, arr2};

ws.add(arr)
ws.add(arr2);
ws.add(obj);


console.log(ws); //WeakSet {(4)[5,6,7,8], (4) [1,2,3,4], Object{arr:Array(4), arr2:Array(4)}}
arr = null;
console.log(ws); //WeakSet {(4)[5,6,7,8], (4) [1,2,3,4], Object{arr:Array(4), arr2:Array(4)}}
console.log(ws.has(arr), ws.has(arr2)) //false true