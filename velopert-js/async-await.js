//async await 사용하면 .then 안하고도 기다려 줄 수 있음
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process(){
    console.log('안녕하세요!');
    await sleep(1000);
    console.log('반갑습니다!');
}

process();


// 에러 예시
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError(){
    await sleep(1000);
    const error = new Error();
    throw error;
}

async function process(){
    try{
        await makeError();
    }catch(e){
        console.error(e);
    }
}

process();


//Promiss all
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async ()=>{
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async ()=>{
    await sleep(500);
    return '토끼';
}

const getTurtle = async ()=>{
    await sleep(3000);
    return '거북이';
}
/*
async function process(){
    const dog = await getDog();
    console.log(dog);
    const rabbit = await getRabbit();
    console.log(rabbit);
    const turtle = await getTurtle();
    console.log(turtle);
}
*/
async function process(){
    const results = await Promise.all([getDog(), getRabbit(),getTurtle()]);
    //const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(),getTurtle()]);
    //const dog = results[0];
    //const rabbit = results[1];
    //const turtle = results[2];
    //배열 원소 하나라도 에러이면 에러
    console.log(results);
}

//Promise race
async function process(){
    const first = await Promise.race([getDog(), getRabbit(),getTurtle()]);
    console.log(first);//토끼
    //가장빠른 원소가 에러가 아니면 에러아님
}
process();
