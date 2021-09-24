/*
filter, includes, from 을 사용해서 문자열 'e'가 포함된 배열을 만들어서 반환하기
*/
function print(){
    let list = document.querySelectorAll("li");
    let newArray = Array.from(list);//li 노드로 구성된 배열
    //v 는 하나하나의 노드
    let filterArray = newArray.filter(function(v){
        return v.innerText.includes("e");
    });
    return filterArray
}
print();