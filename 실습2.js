/* 
로또번호 만들기
1. 유일한 값 추출하는 Set 사용
2. getRandonNumber함수에 변수를 전달하는 과정에서 destructuring사용 
*/
const SETTING = {
    name:"LUCKY LOTTO!",
    count:6,
    maxNumber:45
}
const {count, maxNumber} = SETTING;
const lotto = new Set();

function getRandonNumber (maxNumber){
    while(lotto.size < count){
        const random = Math.floor(Math.random()*(maxNumber-1)) +1;
        if(!lotto.has(random)){
            lotto.add(random)
        }
    }
}

for(let i=0; i<count; i++){
    getRandonNumber(maxNumber);
}
console.log(lotto.values());