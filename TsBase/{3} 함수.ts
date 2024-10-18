// 기명 함수
function aa(x, y) {
    return x + y;
}

// 익명 함수
let bb = function(x, y) { return x + y };

// 함수 타이핑
function cc(x: number, y: number): number {
    return x + y;
}
let dd = function(x: number, y: number): number { return x + y };

// 매개변수 타입과 반환 타입 사이에 화살표 표기를 써 반환 타입을 분명히 할 수 있음
let ee: (x: number, y: number) => number =
function(x: number, y: number): number { return x + y };

// 선택적 매개 변수
function buildName(firstName: string, laseName?: string) {
    if (laseName)
        return firstName + " " + laseName;
    else
        return firstName;
}

