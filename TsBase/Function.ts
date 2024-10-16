// 함수 기본 타입 작성
function Sum(a: number, b: number): number {
    return a + b;
}

// 리턴 값이 없는 경우 void 타입 정의
function sayHi(): void {
    console.log('Hi')
}

// 매개변수 기본값 지정
function sam(a=1, b: number): number {
    return a + b;
}
sam(undefined, 3) // 4

// REST 문법
function ADD(...rest) {
    let sum = 0;
    for(let p of rest) {
        sum += p;
    }
    return sum;
}
console.log(ADD(1, 2, 3));

// 기본인자 추가
// 단 rest 파라미터는 항상 제일 마지막 파라미터 존재 
function addMul(method, ...rest) {
    if (method === 'add') {
        let sum = 0;

        for (let p of rest) {
            sum += p;
        }
        return sum;
    }

    if (method == 'myltiply') {
        let mul = 1;

        for (let p of rest) {
            mul *= p;
        }
        return mul;
    }
}