// 함수 타입 선언
function add(x: number, y: number): number {
    return x + y;
}


// 선택적 매개변수
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob"); // 문제 없음
// let result2 = buildName("Bob", "Adams", "Sr.");   에러 발생
let result3 = buildName("Bob", "Adams"); // 문제 없음