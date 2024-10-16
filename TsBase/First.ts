// 타입 별칭 type Alias
type operation = {
    data: number[],
    output:(num: number) => number[]
};

// 사용자 정의 타입 operation 적용 예시
let sum: operation = {
    data: [30, 60, 90],
    output(num) {
        return this.data.map(n => n + num);
    }
};

let multiply:operation = {
    data: [110, 230, 870, 231],
    output(num){
      return this.data.map(n=>n*num);
    }
};

// 유니온 타입
function getAge(age: number | string): string {
    if(typeof age === "number") {
        return age.toString();
    }
    else {
        return age;
    }
}

// 구조 분해 할당
const [a, b, ...rest] = [1, 2, 3, 4, 5]
a; // 1
b; // 2
rest; // rest 라는 변수에 [3, 4, 5] 라는 배열이 할당