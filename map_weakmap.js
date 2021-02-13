//Array 개선 set, weakset
//Object 개선 map, weakmap

//map 은 key value구조

let wm = new WeakMap();
let myfun = function(){}; //이 함수가 얼마나 실행 됐는지를 알려고 할 때

wm.set(myfun, 0); 
console.log(wm); //WeakMap {function => 0}

let count =0;
for(let i=0; i<10; i++){
    count = wm.get(myfun); //get value
    count ++;
    wm.set(myfun, count);
}
console.log(wm); //WeakMap {function => 10}
console.log(wm.get(myfun)); //10

//weakset이 set과 다른 특징 - 객체가 초기화 됐을 때 가비지 컬렉션 대상이 되서 조회를 했을 때 없다고 나옴
myfun = null;
console.log(wm.get(myfun)); //undefined
console.log(wm.has(myfun)); //false


//WeakMap 클래스 인스턴스 변수 보호하기
function Area(height, width){
    this.height = height;
    this.width = width;
}
Area.prototype.getArea = function(){
    return this.height * this.width;
}
let myarea = new Area(10, 20);
console.log(myarea.getArea());//200
console.log(myarea.height);//10

//WeakMap 사용
const wm = new WeakMap(); //class 밖 전역공간에 보관
function Area(height, width){
    wm.set(this, {height, width});
}
Area.prototype.getArea = function(){
    const {height, width} = wm.get(this);
    return height * width;
}
let myarea = new Area(10, 20);
console.log(myarea.getArea());//200
console.log(myarea.height);//undefined 외부에서 접근 불가능

console.log(wm.has(myarea));//true
myarea = null;
console.log(wm);//10, 20
console.log(wm.has(myarea));//false

//WeakMap을 안쓰는 경우
const wm = new WeakMap();
function Area(height, width){
    obj["height"] = height;
    obj["width"] = width;
}
Area.prototype.getArea = function(){
    const {height, width} = obj(this);
    return height * width;
}
let myarea = new Area(10, 20);
console.log(myarea.getArea());//200

console.log(obj);//Object{height:10, width:20}
myarea = null;
console.log(obj);//Object{height:10, width:20}
//가비지 컬렉션대상 x 값 그대로 유지