let count = 0; //숫자
count += 1;
// count = '갑자기 분위기 문자열'   ~~~코드가 이래버리면 에러가 터집니다 ㅋㅋ

const message :string = 'Hello World'; // 문자열

const done :boolean = true; // 불리언 값 

const numbers :number[] = [1, 2, 3]; // 숫자 배열
const stringArray :string[] = ['Hello', 'World']; // 문자열 배열

// stringArray.push(1);   ~~~문자열 배열에 숫자를 넣으려 하다닛 ㅠㅠ 안댐

let mightBeUndifined :string | undefined = undefined; // string 일수도 있고 undifined 일수도 있고
let nullAbleNumber :number | null = null; // number 일수도 있고 null 일수도 있고

let color :'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
// color = 'green'   ~~~에러 터진다 임마 ...