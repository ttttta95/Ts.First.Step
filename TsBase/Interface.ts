// 인터페이스명은 대문자로 짓는다
interface Human{
    name: string; // name 키는 문자열 타입
    age: number; // age 키는 넘버 타입
    boo(): void; // boo 함수는 void 타입
}

// 인터페이스 자체를 타입으로 줘서 객체 생성
const person: Human = {
    name: "hyojin",
    age: 5,
    boo: () => console.log("This is boo"),
};

// 매개변수에서 인터페이스를 타입으로 받는다
function booboo(a: Human): void {
    console.log(`${a.name} is ${a.age} years old`);
};

booboo(person); // hyojin is 5 years old
person.boo(); // this is boo

//리터럴 객체 타입
const a1: {
    name: string;
    age: number;
    talk: () => void;
} = {
    name: '홍길동',
    age: 12,
    talk() {},
};

// type alias 객체 타입
type Ty = {
    name: string;
    age: number;
    talk: () => void;
};
const a2: Ty = {
    name: '홍길동',
    age: 12,
    talk() {},
};

// 인터페이스 객체 타입
interface In {
    name: string;
    age: number;
    talk: () => void;
}
const a3: In = {
    name: '홍길동',
    age: 12,
    talk() {},
}

interface CraftBeer {
    name: string;
    hope?: number; // hope 속성은 명시해도 되고 안해도 상관없다 (옵션)
}

function brewBeer(beer: CraftBeer) {
    console.log(beer.name);
}

let myBeer = { name: "Saporo" }; // hope 속성을 명시 안함
brewBeer(myBeer); // Saporo : 문제 없이 동작

interface PUser {
    name: string;
    age: number;
    gender?: string;
}

let Yuser: PUser = {
    name: "jeff",
    age: 30,
};

Yuser.age = 10;
Yuser.gender = "male"; // 선택적 프로퍼티에 의해서 나중에 속성값 넣기 가능
// user.laaaa = '유휴'; 아예 존재하지 않는 속성을 마음대로 집어넣을 순 없음

interface IUser {
    name: string;
    age?: number;
}

type TUser = {
    name: string;
    age: number | undefined;
}

interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number; // 읽기 전용 속성
}

let Inuser: User = {
    name: "jeff",
    age: 30,
    birthYear: 2010, // 최초에 값을 초기화할 때만 할당 가능
};

// user.birthYear = 1999; 이후에는 값 수정 불가 (Error)

interface PIUser {
    name: string,
    age: number
}

let Ruser: Readonly<PIUser> = {
    name: "neo",
    age: 36
};

// 인터페이스 호환
interface IFullName {
    firstName: string,
    lastName: string
}

interface IFullName {
    middleName: string
}

const fullName: IFullName = {
    firstName: "yoon",
    middleName: "hyo",
    lastName: "jin"
};

// 인터페이스 확장 (extends)
interface HPerson {
    name: string;
}

interface Developer extends HPerson {
    skill: string;
}
let fe: Developer = { name: 'josh', skill: 'TypeScript' };

// 타입 별칭으로 구현한 인터페이스 확장
type Person = { name: string };
type developer = Person & { skill: string };
let fee: developer = { name: 'minju', skill: 'TypeScript' };

// 클래스는 하나만 extends할 수 있지만 인터페이스는 여러 개를 extends 가능
interface human {
    name: string;
    age: number;
}

interface Programmer {
    favoriteLanguage: string;
}

interface Korean extends human, Programmer { // 두 개의 인터페이스를 받아 확장
    isLiveInSeoul: boolean;
}

const Hhuman: Korean = {
    name: "윤효진",
    age: 33,
    favoriteLanguage: "kor",
    isLiveInSeoul: false,
}