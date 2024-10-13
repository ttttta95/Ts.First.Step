// 이 변수에는 string이 담긴 array만 가능
let 이름 :string[] = ['kim', 'park'];

// 오브젝트 자료형
// 물음표는 name 속성이 들어오는 것이 불확실할 때 사용
let 성 :{ name? : string } = { name : 'yoon'};

// union type
let 음식 :String | number = 'apple';

// Type alias
type Man = string | boolean;
let 김한주 :Man = true;

type animal = {
    name : string
    /*[key : string] : string (글자로 된 모든 속성 타입이 string임을 명시) */
}
let cat : animal = { name : "haru" }

// 이 함수는 파라미터로 number, return 값으로 number
function 함수(x :number) :Number {
    return x * 2
}

// tuple 타입
type Member = [number, boolean];
let john:Member = [123, true];

class User {
    name :string;
    constructor(name :string){
        this.name = name;
    }
}