//class 를 통한 객체 생성
function Health(name){
    this.name = name;
}
Health.prototype.showHealth = function(){
    console.log(this.name + "님 안녕하세요"); //crong님 안녕하세요
}

const h = new Health("crong");
h.showHealth();

//모습만 class고 사실은 function
class Health{
    constructor(name, lastTime){
        this.name = name;
        this.lastTime = lastTime;
    }
    showHealth(){
        console.log(this.name + "님 안녕하세요");
    }
}
const myHealth = new Health("crong");
myHealth.showHealth(); //crong님 안녕하세요

//Object assign으로 JS객체 만들기
const healthObj = {
    showHealth:function(){
        console.log("오늘 운동시간:"+this.healthtime);
    }
}
const myHealth = Object.create(healthObj);

myHealth.healthtime = "11:20";
myHealth.name = "crong";

console.log(myHealth);//Object{healthTime:"11:20", name:"crong"}
//myHealth가 일반 Object안에 포함된게 아니고 prototype 객체안에 들어감

//Object assign
const myHealth = Object.assign(Object.create(healthObj),{
    name : "crong",
    lastTime :"11:20"
});

//Immutable 객체만들기
const previousObj ={
    name : "crong",
    lastTime :"11:20"
}
//이전값 그대로 추출, 새로운 값이 있으면 대체
const myHealth = Object.assign({},previousObj,{
    "lastTime":"12:30"
});
console.log(myHealth);//Object{name:"crong", lastTime:"12:30"}
//객체를 카피해서 새로운 객체를 반환할 때 유용

//setPrototypeOf
//prototype 객체만 추가
const healthObj = {
    showHealth:function(){
        console.log("오늘 운동시간:"+this.healthtime);
    }, 
    setHealth:function(newTime){
        this.healthtime = newTime;
    }
}
const myHealth = {
    name : "crong",
    lastTime :"11:20"
}

Object.setPrototypeOf(myHealth, healthObj);
//myHealth라는 object에 healthObj프로토타입 추가하기

const newobj = Object.setPrototypeOf({
    name : "crong",
    lastTime :"11:20"
}, healthObj);//Object{name:"crong", lastTime:"11:20"}
//prototype으로 showHealth랑 setHealth

//prototype chain생성하기
//parent
const healthObj = {
    showHealth:function(){
        console.log("오늘 운동시간:"+this.healthtime);
    }, 
    setHealth:function(newTime){
        this.healthtime = newTime;
    }
}
//child obj
const healthChildObj ={
    getAge:function(){
        return this.age;
    }
}
Object.setPrototypeOf(healthChildObj, healthObj);//prototype chain 으로 연결됨
const childObj = Object.setPrototypeOf({
    age:22
}, healthChildObj);
childObj.setHealth("11:55");
childObj.showHealth()//"오늘 운동 시간: 11:55"