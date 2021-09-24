const data = [
    {
        name:'coffee-bean',
        order:true,
        items:['americano', 'milk', 'greentea']
    },
    {
        name:'starbucks',
        order:false,
    }
]
//json으로 응답받음
//js object로 변환 후, 어떠한 데이터처리를 한 뒤 dom에 추가
//데이터 + HTML의 문자열 결합이 필요하기 때문에 

const template = `<div>welcome ${data[0].name}`;
console.log(template);//<div>welcome coffee-bean

//Tagged template literals
const template = `<div>welcome ${data[1].name}</div>
<h2>주문가능항목</h2><div>&{data[1].items}</div>`;
console.log(template); // items가 undefined이 나옴

//tags에 따라 배열로 들어옴 tags로 원소 구분
function fn(tags, name, items){
    if(typeof items ==="undefined"){
        items = "주문가능한 상품이 없습니다";
    }
    return (tags[0]+name+tags[1]+items+tags[2]);
}
const template = fn`<div>welcome ${data[1].name}</div>
<h2>주문가능항목</h2><div>&{data[1].items}</div>`;
console.log(template); 
//"<div>welcome starbucks</div><h2>주문가능항목</h2><div>주문가능한 상품이 없습니다</div>"

data.forEach((v)=>{
    let template = fn`<div>welcome ${v}.name}</div>
    <h2>주문가능항목</h2><div>&{v.items}</div>`;
    console.log(template);
});