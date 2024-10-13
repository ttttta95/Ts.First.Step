// 유니언 타입
function strOrNum (value: string | number) {
    if(typeof value === 'string') {
      value.toString();
    } else if(typeof value === 'number') {
      value.toLocaleString();
    } else {
      throw new TypeError('문자열 또는 숫자를 넣어주세요!');
    }
  }
  
strOrNum('hello world');
strOrNum(777);


// 교차 타입
interface Hyojin {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
type Capt = Hyojin & Developer;
const mingyu: Capt = {
  name: "kim",
  age: 777,
  skill: "FE"
};