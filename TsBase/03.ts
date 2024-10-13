// interface 선언
interface User {
    age: number;
    name: string;
}


// 변수 활용
const jinyoung: User = { name: "jinyoung", age: 24 }


// 함수 인자로의 활용
function getUser(user: User) {
    console.log(user);
}
getUser({ name: "jinyoung", age: 24 });


//함수 구조 활용
interface Add {
    (x: number, y: number): number;
}
let addFunc: Add = (a, b) => a + b; 
console.log(addFunc(14, 7));


// 배열 활용
interface StringArr {
    [index: number]: string;
}
let arr: StringArr = ["a", "b", "c"];


// interface 확장
interface Person {
    name: string;
    age: number;
}
interface Developer extends Person {
  position: string;
}
const Person: Developer = {
   name: "jinyoung",
   age: 24,
   position: "FE"
};