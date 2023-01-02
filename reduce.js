//인자 1개 (콜백함수)만 사용
const arr = [2, 5, 8, 10, 13, 16, 22, 29];
function proc(acc, cur, i) {
  console.log(`acc: ${acc} cur: ${cur} i: ${i}`);
  return acc + cur;
}
const result = arr.reduce(proc);
console.log(`result : ${result}`);

/* acc = 
처음에는 배열의 0쨰 방
두번쨰부터는 return 값
*/
