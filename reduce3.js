//reduce를 map처럼 사용하기
const arr = [3, 5, 8, 10, 13, 16, 22, 29];

//map - 배열복사.
//1.원본 length, 크기가 같다.
//2.item 값을 수정할 수 있다.

//아이템 + 2 된 새로운 배열을 만들어 주세요.
function Farr(item) {
  return item + 2;
}
const $map = arr.map(Farr);
const $map2 = arr.map((e) => {
  return e + 2;
});
// const $map3 = arr.map(function)
console.log(`arr : ${arr}`);
console.log(`$map : ${$map}`);
console.log(`$map2 : ${$map2}`);

const arr3 = arr.map((e) => {
  if (e % 2 === 0) {
    return e * 2;
  }
  return e;
});
console.log(`arr3 :${arr3}`);

//reduce3

const $arr5 = arr.reduce(cb, []);
function cb(acc, cur) {
  acc.push(cur + 2);
  return acc;
}
console.log(`$arr5 : ${$arr5}`);

const $arr6 = arr.reduce((acc2, cur) => {
  if (cur % 2 === 0) {
    return acc2.push(cur * 2);
  }
  return acc2.push(cur);
}, []);
console.log(`$arr6:${$arr6}`);
