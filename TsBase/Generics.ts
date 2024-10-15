const printString = (str1: string, str2: string) => {
    console.log(str1, str2);
}

const printNumber = (num1: number, num2: number) => {
    console.log(num1, num2);
}

printString("Hello", "World");
printNumber(10, 20);

const printAll = <T>(props1: T, props2: T) => {
    console.log(props1, props2);
}

function printAny<T>(props1: T, props2: T) {
    console.log(props1, props2);
}

printAll(3, 5)
printAll("Hello", "World")
printAll(true, false);

printAll<number>(3, 5);
printAll<string>("Hello", "World");
// printAll<string>(true, false); 에러 발생!

function identity<Type>(argument: Type): Type {
    return argument;
}

// 제네릭 인터페이스
interface Mobile<T> {
    name: string;
    price: number;
    option: T; // 제네릭 타입 - option 속성에 다양한 자료가 들어온다
}

// 제네릭 자체에 리터럴 객체 타입도 할당 가능
const m1: Mobile<{ color: string; coupon: boolean }> = {
    name: 's21',
    price: 1000,
    option: { color: 'read', coupon: false }, // 제네릭 타입에 의해 속성이 유연하게 타입이 할당
}

const m2: Mobile<string> = {
    name: 's20',
    price: 900,
    option: 'good', // 제네릭 타입에 의해 option 속성이 유연하게 타입 할당
}

// type alias
type TG<T> = T[] | T;

const number_arr1: TG<number> = [1, 2, 3, 4, 5];
const number_arr2: TG<number> = 12345;

const string_arr1: TG<string> = ['1', '2', '3', '4', '5'];
const string_arr2: TG<string> = '12345';