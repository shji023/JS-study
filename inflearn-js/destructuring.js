//객체나 배열을 변수로 '분해'할 수 있게 해주는 구조분해할당
//Destructuring Array
let data = ["one", "two","three", "four"];
let[yellow, , pink] = data;
console.log(yellow, pink)//"one" "three"

//Destructuring Object
let obj = {
    name : "crong",
    address : "Korea",
    age : 10
}
let {name, age} =  obj;
console.log(name, age);//"crong" 10

let {name:myName, age:myAge} =  obj;
console.log(myName, myAge);//"crong" 10

//JSON파싱
//JavaScript Object Notation
var news = [
    {
        "title" : "sbs",
        "imgUrl" : "http://sbs.co.kr",
        "newlist" : [
            "사회뉴스",
            "경제뉴스",
            "시사"
        ]
    },
    {
        "title" : "mbc",
        "imgUrl" : "http://mbc.co.kr",
        "newlist" : [
            "연예뉴스",
            "경제뉴스",
            "쇼핑"
        ]
    }
];

let [,mbc] = news;
let {title, imgUrl} = mbc;
console.log(title, imgUrl);//"mbc" "http://mbc.co.kr"

let [,{title, imgUrl}] = news;
console.log(imgUrl);//"http://mbc.co.kr"

//Event객체전달
function getNewsList([,{newslist}]){
    console.log(newslist);
}
getNewsList(news);//["연예뉴스","경제뉴스","쇼핑"]

<div>Lorem ~~</div>
document.querySelector("div").addEventListner("click",function(evt){
    console.log(evt.target);
});
document.querySelector("div").addEventListner("click",function([target]){
    console.log(target.innerText);
});//무거운 evt객체 다 받지 않고 target에 대한 정보만
