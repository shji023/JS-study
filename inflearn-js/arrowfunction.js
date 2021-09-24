setTimeout(function(){
    console.log("settimeout");
},1000);

setTimeout(()=>{
    console.log("settimeout arrow");
},1000);

let newArr =[1,2,3,4,5].map(function(value, index, object){
    return value *2;
});
console.log(newArr);//[2,4,6,8,10]
//function -> ArrowFunction
let newArr =[1,2,3,4,5].map((v)=>{
    return v *2; //[2,4,6,8,10]
});
//return생략
let newArr =[1,2,3,4,5].map((v)=>(v*2));//[2,4,6,8,10]

//this context of Arrow function
const myObj = {
    runTimeout(){
        setTimeout(function(){
            this.printData();//this 가 myObj를 가리켜야하는데
        }.bind(this),200);//함수를 bind로 감싸주기
    },
    printData(){
        console.log("hi codesquad!");
    }
}

myObj.runTimeout(); //true

//bind를 생략한 상태에서도 arrowfunciton을 사용하면 this.printData 사용 잘됨
const myObj = {
    runTimeout(){
        setTimeout(()=>{
            console.log(this===window);
            this.printData();
        },200);
    },
    printData(){
        console.log("hi codesquad!");
    }
}

/*
<p>mydiv</p>
*/
const el = document.querySelector("p");

const myObj = {
    register(){
        el.addEventListener("click", (evt)=>{
            this.printData(evt.target);
        });
    },
    printData(el){
        console.log('clicked!!',el.innerText);//mydiv
    }
}
myObj.register();

//default parameters
function sum(value, size=1){
    return value*size;
}
console.log(sum(3,10));//30

function sum(value, size={value:1}){
    return value*size.value;
}
console.log(sum(3, {value:3}));//9

//rest parameters
function checkNum(){
    const argArray = Array.prototype.slice.call(arguments);
    console.log(toString.call(argArray));//"object Array"
    const result =  argArray.every((v)=>typeof v==="number")
    console.log(result); //false "55"가 숫자가 아니기때문에
}
const result = checkNum(10,2,3,4,5,"55");

function checkNum(...argArray){//진짜배열로 바꿔주기
    const result =  argArray.every((v)=>typeof v==="number")
    console.log(result); //false "55"가 숫자가 아니기때문에
}
const result = checkNum(10,2,3,4,5,"55");
//가변의 argument를 필요로 할 때 배열로 처리를 하기위해 rest parameters이용