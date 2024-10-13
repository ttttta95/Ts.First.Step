// 인터페이스 정의
interface Todo {
    id: number;
    content: string;
    completed: boolean;
}
// 변수 todo의 타입으로 Todo 인터페이스 선언
let todo :Todo;
// 변수 todo는 Todo 인터페이스를 준수함
todo = { id: 1, content: 'typescript', completed: false };



// 인터페이스를 사용하여 함수의 파라미터 타입 선언 가능
// 이때 해당 함수에는 함수 파라미터의 타입으로 지정한 인터페이스를 준수하는 인수 전달
// 함수에 객체를 전달할 때 복잡한 매개변수 체크가 필요없기에 매우 유용



// 인터페이스 적용
interface Todo {
    id: number;
    content: string;
    completed: boolean;
}
let todos: Todo[] = [];
// 파라미터 todo의 타입으로 Todo 인터페이스를 선언
function addTodo(todo: Todo) {
    todos = [...todos, todo];
}
// 파라미터 todo는 Todo 인터페이스를 의무적 준수
const newTodo: Todo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
console.log(todos)



// 함수 인터페이스 선언
// 인터페이스는 함수의 타입으로 사용할 수 있음
// 함수의 인터페이스에는 타입이 선언된 파라미터 리스트와 리턴 타입 정의
interface SquareFunc {
    (num :number):number; // 숫자를 입력(num: number)으로 받아서 숫자를 반환(: number)
}
const squareFunc :SquareFunc = function (num :number) {
    return num * num;
}
console.log(squareFunc(10)) // 100



// 클래스 인터페이스 선언
// 할 일 객체가 가져야 할 속성 정의
interface ITodo {
    id: number;
    content: string;
    completed: boolean;
}
// ITodo 인터페이스 구현, 이 클래스는 id, content, completed라는 세 가지 속성을 반드시 가져야 한다는 의미
// constructor는 이 속성들을 초기화하는 생성자임
// 클래스 인스턴스를 만들 때 id, content, completed 값을 입력받아 각각의 속성을 설정
class Todo implements ITodo {
    constructor (
        public id: number,
        public content: string,
        public completed: boolean
    ) { }
}
// Todo 클래스의 인스턴스를 하나 생성, id가 1, content가 'Typescript', completed가 false인 새로운 "할 일" 객체를 만든다는 의미
const todoo = new Todo(1, 'Typescript', false);