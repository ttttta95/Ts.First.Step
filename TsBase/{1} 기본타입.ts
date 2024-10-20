//불리언
let isDone: boolean = false;

// 숫자
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0x744;


// 문자열
let color: string = "blue";
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName}
I'll be ${ age + 1} years old next month.`;


//배열
let list: number[] = [1, 2, 3];
let array: Array<number> = [1, 2, 3];


// 튜플
let x: [string, number];
x = ["hello", 10];


// 열거
enum Color {Red = 1, Green, Blue}
let colorName: string = color[2];
console.log(colorName); // 값이 2인 'Green' 출력


// Any
let notsure: any = 4;
notsure = "maybe a string instead";
notsure = false;
let List: any[] = [1, true, "free"];
list[1] = 100;


// void
function warnUser(): void {
    console.log("This is my warning message");
}


// Null 과 Undefined
let u: undefined = undefined;
let n: null = null;


// Never
// Never를 반환하는 함수는 함수의 마지막에 도달할 수 없음
function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
    }
}

// 반환 타입이 Never로 추론
function fail() {
    return error("Something failed");
}