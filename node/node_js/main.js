// let m = require('./math-tools')


// console.log('------');

// console.log(m.PI);
// console.log(m.add(2,4));
// console.log(m.subtract(1,2));
// console.log(m.multiply(1,2));
// console.log(m.divide(1,2));

// const fs = require('fs')
// fs 파일시스템 줄인말

// let fileList = fs.readdirSync('.');
// console.log(fileList);

// fs.writeFileSync('mew', 'Hello Node.js!')
// 만들기

// ---------------------------------------------

const os = require('os');
console.log(os.cpus());

// -----------------------------------------------

const fs = require('fs');

// console.log('Start');

// let content = fs.readFileSync('./new', 'utf8');
// console.log(content);

// console.log('Finish');

console.log('Start');

fs.readFile('./new', 'utf8',(error,data)=>{
    console.log(data);
    console.log(error);
})

console.log('Finish');

//  readFileSync함수 → 동기 실행
//  readFile함수 → 비동기 실행 → 비동기 프로그래밍(node js를 잘할려면 비동기 실행을 잘해야함)

// ----------------------------------------------------------------
const cowsay = require('cowsay')
console.log(cowsay.say({
  text : "I love jvascript"
}));
console.log(cowsay.think({
  text : "안녕"
}));
